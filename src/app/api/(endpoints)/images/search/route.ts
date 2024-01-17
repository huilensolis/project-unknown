import { ImagesService } from '@/app/api/services/images'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get('query')
    if (!query) return Response.error()

    const images = await ImagesService.search(query)
    return Response.json({ images })
  } catch (e) {
    console.log(e)
    return Response.error()
  }
}
