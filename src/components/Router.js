import api from '../helpers/wp_api.js';
import { ajax } from '../helpers/ajax.js'
import { PostCard } from './PostCard'

export const Router = () => {
  const $ = (selector) => document.querySelector(selector)
  
  ajax({
    url: api.POSTS,
    cbSuccess: (posts) => {
      let html = ''
      console.log(posts)
      posts.forEach((post) => html += PostCard(post))
      $('.loader').style.display = 'none'
      $('#posts').innerHTML += html
    }
  })

}