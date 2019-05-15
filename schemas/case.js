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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
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
      description: 'Who worked on the project?',
      type: 'array',
      of: [{type: 'reference', to: {type: 'person'}}]
     },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],
      preview: {
      select: {
      title: 'title',
      customer: 'customer.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {customer} = selection
      return Object.assign({}, selection, {
        subtitle: customer && `With ${customer}`
      })
    }
  }

}
