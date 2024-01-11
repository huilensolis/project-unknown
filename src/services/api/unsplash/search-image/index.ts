import { ApiRoutes } from '@/app/api/models'
import { Image } from '@/services/unsplash/models/entities'

export async function searchImage({
  query,
}: {
  query: string
}): Promise<{ images: Image[] | null; error: string | null }> {
  const res = await fetch(ApiRoutes.dynamic.searchImage(query))

  if (!res.ok) return { images: null, error: 'no images found' }

  const responseBody: { images: Image[] } = await res.json()

  if (!responseBody || !responseBody.images || responseBody.images.length === 0)
    return { images: null, error: 'no images found' }

  return { images: responseBody.images, error: null }
}
