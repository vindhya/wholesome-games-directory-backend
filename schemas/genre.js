import { FaFolder as icon } from 'react-icons/fa'

export default {
  name: 'genre',
  title: 'Genre',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Genre',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Genre label',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    }
  ]
}
