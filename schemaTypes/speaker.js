import {defineField, defineType} from 'sanity'

export const speaker = defineType({
    name: "speaker",
    title: "Speaker",
    type: "document",
    fields:[
        defineField({
            name: "image",
            type: "image",
            options: {
                hotspot: true
            },
            fields: [
                defineField({
                    name: "alt",
                    type: "string"
                })
            ]
        }),
        defineField({
            name: "name",
            type: "string"
        }),
        defineField({
            name: "school",
            type: "string"
        }),
        defineField({
            name: "subtitle",
            type: "string"
        }),
        defineField({
            name: "bio",
            type: "text"
        })
    ]
})