import qs from 'qs'

import { env } from '$env/dynamic/private'

export const load = async ({ url }: any) => {

  const page = Number(url.searchParams.get('page')) || 1
  const searchField = url.searchParams.get('search') || 'title'
  const search = url.searchParams.get('q')

  const fetchItems = async () => {

    const query = {
      pagination: {
        page: page,
        pageSize: 10,
      },
      filters: {
        quantities: {
          id: {
            $notNull: true
          }
        }
      },
      fields: ['title', 'yearPublished'],
      populate: {
        authors: {
          fields: ['name'],
        },
        publisher: {
          fields: ['name'],
        },
        quantities: {
          fields: ['copies_total', 'copies_available'],
          populate: {
            library: {
              fields: ['name'],
            },
          },
        },
      },
    }

    if (searchField === 'title') {
      query.filters.title = {
        $containsi: search
      }
    } else if (searchField === 'author') {
      query.filters.authors = {
        name: {
          $containsi: search
        }
      }
    } else if (searchField === 'publisher') {
      query.filters.publisher = {
        name: {
          $containsi: search
        }
      }
    } else if (searchField === 'library') {
      query.filters.quantities = {
        library: {
          name: {
            $containsi: search
          }
        }
      }
    }

    const queryParams = qs.stringify(query)

    const result = await fetch(`${env.STRAPI_URL}/api/books?${queryParams}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.STRAPI_TOKEN}`
        },
      }
    );

    const data: Api.ApiBook = await result.json();

    return data;
  }

  return {
    api: fetchItems(),
    search: search
  }
}
