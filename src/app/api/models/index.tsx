export const ApiRoutes = {
  dynamic: {
    searchImage: (query: string) => `/api/images/search?query=${query}`,
  },
}
