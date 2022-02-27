export function carrouselControl() {
  const section = document.querySelector("#exercises-list");

  section.addEventListener("click", (event) => {
    if (event.target.nodeName === "SPAN") {
      const arrow_onClick = event.target;
      const arrow_previou_sibling = event.target.previousElementSibling;
      const arrow_next_sibling = event.target.nextElementSibling;
      const point_left = event.path[1].lastElementChild.firstElementChild;
      const point_right = event.path[1].lastElementChild.lastElementChild;
      const className = event.target.classList[2];
      const container = event.target.parentNode.children[0];

      arrow_onClick.classList.toggle("hide");

      let position = className === "slider--arrow-left" ? 0 : 1;

      ChangeColorPoint(position, point_left, point_right);
      hideArrow(position, arrow_previou_sibling, arrow_next_sibling);

      let calc = position * -50;
      container.style.transform = `translateX(${calc}%)`;
    }
  });
}

function ChangeColorPoint(position, point_left, point_right) {
  let point =
    position === 1
      ? [point_right, point_left.style.backgroundColor]
      : [point_left, point_right.style.backgroundColor];

  let point_inactive =
    position === 0
      ? [point_right, point_left.style.backgroundColor]
      : [point_left, point_right.style.backgroundColor];

  point[0].style.backgroundColor = point[1];
  point_inactive[0].style.backgroundColor = point_inactive[1];
}

function hideArrow(position, arrow_previou_sibling, arrow_next_sibling) {
  let isShowArrow = position === 1 ? arrow_previou_sibling : arrow_next_sibling;

  isShowArrow.classList.toggle("hide");
}
