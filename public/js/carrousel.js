export function carrouselControl() {
  const section = document.querySelector("#exercises-list");

  section.addEventListener("click", (event) => {
    if (event.target.nodeName === "SPAN") {
      const className = event.target.classList[2];
      const container = event.target.parentNode.children[0];

      let position = className === "slider--point-left" ? 0 : 1;
      console.log(position);
      let calc = position * -50;
      container.style.transform = `translateX(${calc}%)`;
    }
  });
}
