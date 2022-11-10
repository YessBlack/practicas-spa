export const Loader = () => {
  const $loader = document.createElement("img")
  $loader.src = "../assets/loader.svg"
  $loader.alt = "Loader Icon"
  $loader.classList.add("loader")

  return $loader
}