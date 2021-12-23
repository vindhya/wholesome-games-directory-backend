import { FaShapes as icon } from 'react-icons/fa'

export default {
  name: 'platform',
  title: 'Platform',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Platform label',
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
