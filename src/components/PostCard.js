export const PostCard = (props) => {
  return `
    <article class="post-card">
      <img src="${props.jetpack_featured_media_url}" alt="${props.title}">
      <h2>${props.title.rendered}</h2>
      <p>
        <time>${props.date}</time>
        <a href="${props.link}">Ver más</a>
      </p>
    </article>`
}