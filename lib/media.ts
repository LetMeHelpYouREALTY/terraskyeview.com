/**
 * Site photography lives in git under /public/images (backup + Vercel origin).
 * Set NEXT_PUBLIC_MEDIA_BASE to a Cloudflare R2/Images CDN (e.g.
 * https://images.terraskyeview.com) to serve those same filenames as primary.
 */
const CDN = process.env.NEXT_PUBLIC_MEDIA_BASE?.replace(/\/$/, '') ?? ''

export function mediaUrl(file: string): string {
  const name = file.replace(/^\/?(images\/)?/, '')
  if (CDN) {
    return `${CDN}/${name}`
  }
  if (name === 'og-image.jpg') {
    return '/og-image.jpg'
  }
  return `/images/${name}`
}
