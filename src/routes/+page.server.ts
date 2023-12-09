import { env } from '$env/dynamic/private'

export const load = async ({ url } : any ) => {
  const page = Number(url.searchParams.get('page')) || 1
  const pageSize = Number(url.searchParams.get('pageSize')) || 5
  const search = url.searchParams.get('q')

  const fetchItems = async () => {

    /* qs query:
    {
      populate: {
        authors: {
          fields: ['name']
        },
        publisher: {
          fields: ['name']
        },
        quantities: {
          fields: ['copies_total', 'copies_available'],
          populate: {
            library: {
              fields: ['name']
            },
          },
        }
      },
      fields: ['title', 'yearPublished'],
    }
    */

    const query =
      `pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      + `${search ? `&filters[title][$containsi]=${search}` : '' }`
      // + '&filters[quantities][id][$notNull]=true'
      + '&fields[0]=title&fields[1]=yearPublished'
      + '&populate[authors][fields][0]=name'
      + '&populate[publisher][fields][0]=name'
      + '&populate[quantities][fields][0]=copies_total&populate[quantities][fields][1]=copies_available&populate[quantities][populate][library][fields][0]=name'

    const result = await fetch(`${env.STRAPI_URL}/api/books?${query}`,
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
