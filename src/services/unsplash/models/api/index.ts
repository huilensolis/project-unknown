const API_BASE_PATH = 'https://api.unsplash.com'

export const UNSPLASH_API_ENDPOINTS = {
  static: {
    //
  },
  dynamic: {
    searchImages(query: string): string {
      return `${API_BASE_PATH}/search/photos?query=${query}`
    },
  },
}
