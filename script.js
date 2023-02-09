function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, add imagem ligth
    img.setAttribute("src", "./Assets/avatar-light.png ")
  } else {
    // se tiver sem light mode, manter
    img.setAttribute("src", "./Assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    // se tiver light mode, add imagem ligth
    img.setAttribute("alt", "Wagner sorrindo de terno e gravata vermelha ")
  } else {
    // se tiver sem light mode, manter
    img.setAttribute(
      "alt",
      "Wagner com boné para trás cor azul, segurando a aba com a mão direita")
  }
}
