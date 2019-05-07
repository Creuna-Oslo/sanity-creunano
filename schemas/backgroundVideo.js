export default {
  name: 'backgroundVideo',
  title: 'Background video',
  type: 'file',
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: {type: 'person'}
    }
  ]
}
