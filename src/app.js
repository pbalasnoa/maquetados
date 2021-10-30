function carrouselControl() {
  const section = document.querySelector("#exercises-list");

  section.addEventListener("click", (event) => {
    if (event.target.nodeName === "SPAN") {
      const className = event.target.classList[2];
      const container = event.target.parentNode.children[0];

      let position = className === "slider--point-left" ? 0 : 1;
      let calc = position * -50;
      container.style.transform = `translateX(${calc}%)`;
    }
  });
}

const renderExercises = (docs) => {
  const exercisesList = document.getElementById("exercises-list");
  const imgs = document.getElementById("imgs");
  let html = "";
  docs.forEach((doc) => {
    const guide = doc.data();
    const date = guide.finished.toDate();
    const guideColor = `background-image: linear-gradient(to bottom,${guide.color[0]},${guide.color[1]},${guide.color[2]}); color:${guide.colorText}`;

    // console.log(guide);
    const article = `
    <article class="card" style="background-color:${guide.color[0]}">       
      <div class="slider">
        
          <div id="imgs" class="slider--box">
                ${
                  guide.imgs &&
                  `<picture class="slider--box-img">
                    <source media="(min-width: 58em)" srcset=${guide.imgs[2]}>
                    <img src=${guide.imgs[0]} class="slider--img" alt="vista previa del ejercicio de maquetación ${guide.title}" />
                  </picture>
                  <picture class="slider--box-img">
                    <source media="(min-width: 58em)" srcset=${guide.imgs[3]}>
                    <img src=${guide.imgs[1]} class="slider--img" alt="vista previa del ejercicio de maquetación ${guide.title}" />
                  </picture>`
                }
          </div>
        
            <span class="material-icons slider--point slider--point-left">
            chevron_left
            </span>
            <span class="material-icons slider--point slider--point-right">
            chevron_right
            </span>          
      </div>

      <div class="card--container" style="${guideColor}">
        <div class="card--header">
          <h2 class="card--title">${guide.title}</h2>
            <small class="card--date-finished">${date.toLocaleDateString()}</small>
        </div>
        
        <div class="card--info">
          <p>${guide.description}
            <a
                href="${guide.originalWorkUrl}"
                target="_blank"
                style="color:${guide.colorText}"
                class="card--cta__text-only card--cta__underline">Ir a la publicación
            </a>
          </p>
          <div class="card--box-cta">
            <a
                href="${guide.myWork}"
                target="_blank"
                style="background-color:${guide.colorAccent}; color:${
      guide.colorText
    }"
                class="card--cta card--cta__contained">Ver maqueta
            </a>
            <a
                href="${guide.myWork}"
                target="_blank"
                style="border-color:${guide.colorAccent}; color:${
      guide.colorText
    }"
                class="card--cta card--cta__outline">Ver código
            </a>
          </div
        </div>
      </div>
    </article>
    `;
    html += article;
  });
  exercisesList.innerHTML = html;
  carrouselControl();
};

db.collection("practices")
  .get()
  .then((snapshot) => {
    renderExercises(snapshot.docs);
  });
