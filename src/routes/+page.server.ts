import qs from 'qs'

import { env } from '$env/dynamic/private'

export const load = async ({ url }: any) => {

  const page = Number(url.searchParams.get('page')) || 1
  const pageSize = Number(url.searchParams.get('pageSize')) || 10
  const search = url.searchParams.get('q')

  const fetchItems = async () => {

    const query = {
      pagination: {
        page: page,
        pageSize: pageSize,
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

    if (search) {
      query.filters = {
        title: {
          $containsi: search,
        },
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
