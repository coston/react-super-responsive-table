import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'react-pkg-demo docs',
    short_name: 'react-pkg-demo',
    description: 'react-pkg-demo docs',
    start_url: '/',
    display: 'standalone',
    background_color: '#CBC3E3',
    theme_color: '#CBC3E3',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}