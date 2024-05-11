import {defineField, defineType} from 'sanity'

export const resident = defineType({
    name: "resident",
    title: "Resident",
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
            name: "bio",
            type: "text"
        })
    ]
})