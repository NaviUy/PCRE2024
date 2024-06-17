import {defineField, defineType} from 'sanity'
import { resident } from './resident'

export const residents = defineType({
    name: "residents",
    title: "Residents",
    type: "document",
    fields: [
        defineField({
            name:"enable",
            type: "boolean",
            title: "Enable"
        }),
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "residents",
            type: "array",
            of: [resident]
        })
    ]
})