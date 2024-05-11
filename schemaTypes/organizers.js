import {defineField, defineType} from 'sanity'
import { member } from './member'

export const organizers = defineType({
    name: "organizers",
    title: "Organizers",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "description",
            type: "text"
        }),
        defineField({
            name: "members",
            type: "array",
            of: [member]
        })
    ]
})