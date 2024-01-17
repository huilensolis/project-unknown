export interface ImageLinks {
  self: string
  html: string
  download: string
  download_location: string
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

export interface UserLinks {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
}

export interface User {
  id: string
  updated_at: Date
  username: string
  name: string
  portfolio_url: string
  bio: string
  location: string
  total_likes: number
  total_photos: number
  total_collections: number
  links: UserLinks
}

export interface Image {
  id: string
  created_at: Date
  updated_at: Date
  width: number
  height: number
  color: string
  blur_hash: string
  downloads: number
  likes: number
  public_domain: boolean
  description: string
  urls: Urls
  links: ImageLinks
  user: User
}
