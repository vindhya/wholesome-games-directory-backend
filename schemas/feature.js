import { FaEye as icon } from 'react-icons/fa'

export default {
  name: 'feature',
  title: 'Featured',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'airDate',
      title: 'Date aired',
      type: 'datetime'
    }
  ]
}
