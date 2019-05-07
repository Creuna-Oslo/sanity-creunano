export default {
  name: 'backgroundVideo',
  title: 'Background video',
  type: 'document',
  fields: [
    {
      name: 'video',
      type: 'file',
      title: 'Video file'
    },
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
