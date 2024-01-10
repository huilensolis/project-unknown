import { UNSPLASH_API_ENDPOINTS } from './models/api'
import { Image } from './models/entities'

export class UnsPlashService {
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

  async searchImage(query: string) {
    const jsonResponse = await this.fetchApi<Image>({
      endpoint: UNSPLASH_API_ENDPOINTS.dynamic.searchImages(query),
    })
    return jsonResponse
  }
}
