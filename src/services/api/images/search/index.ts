import { ApiRoutes } from '@/app/api/models'
import { Image } from '@/app/api/services/images/models/entities'

export async function searchImage({
  query,
}: {
  query: string
}): Promise<{ images: Image[] | null; error: string | null }> {
  const res = await fetch(ApiRoutes.dynamic.searchImage(query))

  if (!res.ok) return { images: null, error: 'no images found' }

  try {
    const responseBody: { images: Image[] } = await res.json()

    if (
      !responseBody ||
      !responseBody.images ||
      responseBody.images.length === 0
    )
      return { images: null, error: 'no images found' }

    return { images: responseBody.images, error: null }
  } catch (error) {
    return {
      images: null,
      error: 'there is been an error fetching the images to the backend api',
    }
  }
}
