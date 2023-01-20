import Date from "../components/Date"


export default {
    title: 'UI/Date',
    component: Date,
    // argTypes: {
    //     dateString: {
    //         name: 'dateString',
    //         type: { name: 'string', required: true },
    //         defaultValue: null,
    //         description: 'date composant',
    //         table: {
    //             type: { summary: 'string', detail: 'date created by me' },
    //             defaultValue: { summary: 'training' }
    //         },
    //         control: {
    //             type: 'date'
    //         }
    //     }
    // }
}

const Template = (args) => (
    <div>
        <Date dateString="2020-01-01" />
    </div>
)

export const Default = Template.bind({})

export const DateString = Template.bind({})
DateString.args = {
    dateString: null
}