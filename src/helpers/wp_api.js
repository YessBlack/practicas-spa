//Funciones puras aqui no es componente

const NAME = 'malvestida'
const DOMAIN = `https://www.${NAME}.com`
const SITE = `${DOMAIN}/wp-json`
const API_WP = `${SITE}/wp/v2`
const POSTS = `${API_WP}/posts?_embed`
const POST = `${API_WP}/posts`
const SEARCH = `${API_WP}/search?_embed`

export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  POSTS,
  POST,
  SEARCH,
}
