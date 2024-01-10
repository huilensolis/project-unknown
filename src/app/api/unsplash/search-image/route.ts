import { UnsPlashService } from '@/services/unsplash'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get('query')
    if (!query) return Response.error()

    const images = await UnsPlashService.searchImage(query)
    return Response.json({ images })
  } catch (e) {
    return Response.error()
  }
}
