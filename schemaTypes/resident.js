import {defineField, defineType} from 'sanity'

export const resident = defineType({
    name: "resident",
    title: "Resident",
    type: "document",
    fields:[
        defineField({
            name: "enable",
            type: "boolean",
            title: "Enable"
        }),
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
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        })
    ]
})