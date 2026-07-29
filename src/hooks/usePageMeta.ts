import { useEffect } from 'react'

type PageMeta = {
  title: string
  description: string
  path?: string
}

export function usePageMeta({ title, description, path = '/' }: PageMeta) {
  useEffect(() => {
    document.title = title

    const setMeta = (selector: string, attribute: string, value: string) => {
      const element = document.head.querySelector<HTMLMetaElement>(selector)
      element?.setAttribute(attribute, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)

    const canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )
    canonical?.setAttribute('href', `https://clog-goblin.vercel.app${path}`)
  }, [description, path, title])
}

