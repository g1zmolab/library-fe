// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {}

declare namespace Api {

  interface ApiBook {
    data: Book[]
    meta: {
      pagination: Pagination
    }
  }

  interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }

  interface Book {
    id: number
    attributes: {
      title: string
      description: string,
      yearPublished: number
      authors: {
        data: Author[]
      }
      quantities: {
        data: Quantity[]
      }
      publisher: {
        data: Publisher
      }
    }
  }

  interface Author {
    id: number
    attributes: {
      name: string
    }
  }

  interface Publisher {
    id: number
    attributes: {
      name: string
    }
  }

  interface Quantity {
    id: number
    attributes: {
      copies_total: number
      copies_available: number
      library: {
        data: Library
      }
    }
  }

  interface Library {
    id: number
    attributes: {
      name: string
    }
  }
}
