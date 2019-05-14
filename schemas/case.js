export default {
  name: 'case',
  title: 'Case',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
     },
     {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
     },
     {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'people',
      title: 'People',
      type: 'reference',
      to: [{type: 'person'}],
      description: 'Who worked on the project?'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ]
}
