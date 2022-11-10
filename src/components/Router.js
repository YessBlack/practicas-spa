import api from '../helpers/wp_api.js'
import { ajax } from '../helpers/ajax.js'
import { PostCard } from './PostCard'

export const Router = () => {
  const $ = (selector) => document.querySelector(selector)
  let { hash } = location
  
  $("#posts").innerHTML = null
  $(".loader").style.display = "block"
  if(!hash || hash === '#/') {
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

  }else if(hash.includes('#/search')) {
    $('#posts').innerHTML = `<h2>Estamos en el Search</h2>`
  }else if(hash === '#/contacto') {
    $('#posts').innerHTML = `<h2>Estamos en el Contacto</h2>`
  } else {
    $('#posts').innerHTML = `<h2>Estamos e n el Post</h2>`
  }
}