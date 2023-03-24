import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      description: 'Choose a color for for the category banner color.',
      type: 'colorlist',

      options: {
        list: [
          {title: 'Red', value: '#C10682'},
          {title: 'Orange', value: '#F37B10'},
          {title: 'Green', value: '#5F9261'},
          {title: 'Blue', value: '#0A99B9'},
        ],
      },
    }),
  ],
})
