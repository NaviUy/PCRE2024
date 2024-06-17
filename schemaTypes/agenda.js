import { orderRankField } from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'
import {orderRankOrdering} from '@sanity/orderable-document-list'

export const agenda = defineType({
    name: "agenda",
    title: "Agenda",
    type: "document",
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: "agenda" }),
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "enable",
            type: "boolean",
            title: "Enable"
        }),
        defineField({
            name: "agenda",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "enable",
                            type:"boolean"
                        },
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