export const ApiRoutes = {
  dynamic: {
    searchImage: (query: string) => `/api/unsplash/search-image?query=${query}`,
  },
}
