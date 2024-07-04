import {defineField, defineType} from 'sanity'

export const venue = defineType({
    name: "venue",
    title: "Venue",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "enable",
            type: "boolean",
        }),
        defineField({
            name: "image",
            type: "image",
            fields: [
                {
                    name: "alt",
                    type: "string"
                }
            ]
        })
    ]
})