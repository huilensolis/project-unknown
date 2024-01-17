import { IMAGE_SERVICE_API_ENDPOINTS } from './models/api'
import { Image } from './models/entities'

export class ImagesService {
  private fetchApi<T>({ endpoint }: { endpoint: string }): Promise<T> {
    return new Promise((resolve, reject) => {
      fetch(endpoint, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      })
        .then((res) => res.json())
        .then((jsonResponse) => resolve(jsonResponse))
        .catch((e) => reject(e))
    })
  }

  static async search(query: string) {
    const jsonResponse = await new ImagesService().fetchApi<{
      results: Image[]
    }>({
      endpoint: IMAGE_SERVICE_API_ENDPOINTS.dynamic.searchImages(query),
    })
    return jsonResponse.results
  }
}
