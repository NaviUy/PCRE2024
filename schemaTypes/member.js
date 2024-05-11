import {defineField, defineType} from 'sanity'
import { socials } from './socials'

export const member = defineType({
    name: "member",
    title: "Member",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string"
        }),
        defineField({
            name: "role",
            type: "string"
        }),
        defineField({
            name: "image",
            type: "image",
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: "alt",
                    type: "string"
                }
            ]
        }),
        defineField({
            name: "bio",
            type: "text",
        }),
        defineField({
            name: "linkedin",
            type: "string",
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