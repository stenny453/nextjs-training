const express = require('express')
const expressGraphql = require('express-graphql').graphqlHTTP
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql')

const app = express()

const authorsList = [
    { id: 1, name: 'J. K. R.' },
    { id: 2, name: 'J. L. L.' },
    { id: 3, name: 'B. B. C.' },
]

const booksList = [
    { id: 1, name: "X", authorId: 1 },
    { id: 2, name: "D", authorId: 1 },
    { id: 3, name: "G", authorId: 1 },
    { id: 4, name: "B", authorId: 2 },
    { id: 5, name: "N", authorId: 2 },
    { id: 6, name: "C", authorId: 1 },
    { id: 7, name: "W", authorId: 3 },
    { id: 8, name: "A", authorId: 3 },
    { id: 9, name: "P", authorId: 2 },
]

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'This represents an Author',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLInt) 
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        books: {
            type: new GraphQLList(BookType),
            resolve: (author) => {
                return booksList.filter(book => book.authorId === author.id)
            }
        }
    })
})

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book written by someone',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLInt) 
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        authorId: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        author: {
            type: AuthorType,
            resolve: (book) => {
                return authorsList.find(author => author.id === book.authorId)
            }
        }
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        book: {
            type: BookType,
            description: 'Single book',
            args: {
                id: { 
                    type: GraphQLInt
                }
            },
            resolve: (parent, args) => booksList.find(book => book.id === args.id) 
        },
        books: {
            type: new GraphQLList(BookType),
            description: 'List of All Books',
            resolve: () => booksList
        },
        authors: {
            type: new GraphQLList(AuthorType),
            description: 'List of All Authors',
            resolve: () => authorsList
        },
        author: {
            type: AuthorType,
            description: 'Single author',
            args: {
                id: { 
                    type: GraphQLInt
                }
            },
            resolve: (parent, args) => authorsList.find(author => author.id === args.id) 
        }
    })
})

// const schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: 'HelloWorld',
//         fields: () => ({
//             message: {
//                 type: GraphQLString,
//                 resolve: () => 'Hello World'
//             }
//         })
//     })
// })

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root mutation',
    fields: () => ({
        addBook: {
            type: BookType,
            description: 'Add a book',
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve: (parent, args) => {
                const book = { id: booksList.length + 1, name: args.name, authorId: args.authorId }
                booksList.push(book)
                return book
            }
        },
        addAuthor: {
            type: AuthorType,
            description: 'Add an author',
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (parent, args) => {
                const author = { id: authorsList.length + 1, name: args.name }
                authorsList.push(author)
                return author
            }
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

app.use('/graphql', expressGraphql({
    schema: schema,
    graphiql: true
}))

app.listen(5000, () => console.log("server starting"))
