import {defineField, defineType} from 'sanity'

export const socials = defineType({
    name: "socials",
    title: "Socials",
    type: "document",
    fields: [
        defineField({
            name: "linkedin",
            type: "string"
        }),
        defineField({
            name: "twitter",
            type: "string"
        }),
        defineField({
            name: "personal",
            type: "string"
        })
    ]
})