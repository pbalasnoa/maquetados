export function loader() {
  const loaderContent = document.querySelector(".infoMessages");

  let loader = `
    <p class="animated--sub-text">cargando...</p>
      <h2 data-text="[ ] == ![ ] //true" class="animated--text">
        [ ] == ![ ] //true
      </h2>
  `;

  loaderContent.innerHTML = loader;
}

export function error() {
  const loaderContent = document.querySelector(".infoMessages");

  let error = `
      <h2>¡Ocurrio un error!, intente más tarde :c</h2>
  `;

  loaderContent.innerHTML = error;
}

export function NotFoundData() {
  const loaderContent = document.querySelector(".infoMessages");

  let NotFoundData = `
      <h2>No existen proyectos :c </h2>
  `;

  loaderContent.innerHTML = NotFoundData;
}
