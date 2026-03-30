function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assents/avatar-light.png")

    img.setAttribute("alt", "Maiky Brito com oculos escuro com fundo azul  ")
  } else {
    img.setAttribute("src", "./assents/avatar-fabinho.png")

    img.setAttribute(
      "alt",
      "Foto de Fabinho Criança, com a camiseta branca, no seu Jeep laranja,comendo ",
    )
    // se tiver sem light mode, manter a imagem normal
  }
}
