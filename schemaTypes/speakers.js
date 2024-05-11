import { speaker } from './speaker'
import {defineField, defineType} from 'sanity'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export const speakers = defineType({
    name: "speakers",
    title: "Speakers",
    type: "document",
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: "speakers" }),
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "speakers",
            type: "array",
            of: [speaker]
        })
    ]
})