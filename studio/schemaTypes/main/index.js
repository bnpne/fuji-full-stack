import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'main',
  title: 'Main',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
