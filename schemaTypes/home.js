import {defineField, defineType} from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'subheading',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'string'
    }),
    defineField({
      name: 'cta_text',
      type: 'string'
    }),
    defineField({
      name: 'cta_action',
      type: 'string'
    }),
    defineField({
      name: "start_date",
      type: "date",
      options: {
        dateFormat: 'MM-DD-YYYY'
      }
    }),
    defineField({
      name: "end_date",
      type: "date",
      options: {
        dateFormat: 'MM-DD-YYYY'
      }
    }),
    defineField({
      name: "location",
      type: "string"
    }),
    defineField({
      name: "background_image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string"
        }
      ]
    })
  ],
})
