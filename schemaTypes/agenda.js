import {defineField, defineType} from 'sanity'

export const agenda = defineType({
    name: "agenda",
    title: "Agenda",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "agenda",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "time",
                            type: "string"
                        },
                        {
                            name: "blocker",
                            type: "boolean"
                        },
                        {
                            name: "title",
                            type: "string"
                        },
                        {
                            name: "description",
                            type: "text"
                        }
                    ]
                }
            ]
        })
    ]
})