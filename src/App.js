//Llama los componentes para pintar la interfaz de usuario
import { Loader } from './components/Loader.js'
import { Header } from './components/Header.js'
import { Posts } from './components/Posts.js'
import { Router } from './components/Router.js'

const $ = (selector) => document.querySelector(selector)

export const App = () => {
  $('#app').appendChild(Header())
  $('#app').appendChild(Posts())
  $('#app').appendChild(Loader())

  Router()
  
}