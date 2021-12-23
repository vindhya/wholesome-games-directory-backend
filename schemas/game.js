// import {MdLocalMovies as icon} from 'react-icons/md'
import { FaGamepad as icon } from 'react-icons/fa'

export default {
  name: 'game',
  title: 'Game',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime'
    },
    {
      name: 'isReleased',
      title: 'Released?',
      type: 'boolean'
    },
    {
      name: 'Image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'metacritic',
      title: 'Metacritic',
      type: 'number'
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url'
    },
    {
      name: 'steam',
      title: 'Steam link',
      type: 'url'
    },
    {
      name: 'platforms',
      title: 'Platforms',
      type: 'array',
      of: [{ type: 'platform' }]
    },
    {
      name: 'genres',
      title: 'Genre(s)',
      type: 'array',
      of: [{ type: 'genre' }]
    },
    {
      name: 'featured',
      title: 'Featured in',
      type: 'array',
      of: [{ type: 'feature' }]
    }
  ]
}
