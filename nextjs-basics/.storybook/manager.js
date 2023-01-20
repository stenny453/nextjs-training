import { create } from '@storybook/theming/create'

import { addons } from '@storybook/addons'
const theme = create({
    base: 'dark',
    brandTitle: 'Training',
    brandImage: 'https://thispersondoesnotexist.com/image?rand_number=0.4264557653317962'
}) 

addons.setConfig({
    theme
})