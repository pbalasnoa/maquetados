function carrouselControl() {
  const boxImg = document.querySelector(".slider--box-img");
  const points = document.querySelectorAll(".slider--point");

  points.forEach((punto, i) => {
    punto.addEventListener("click", (event) => {
      let position = i;
      let calc = position * -50;

      boxImg.style.transform = `translateX(${calc}%)`;

      points.forEach((punto) => {
        punto.classList.remove("active");
      });
      punto.classList.add("active");
    });
  });
}

const renderExercises = (docs) => {
  const exercisesList = document.getElementById("exercises-list");
  const imgs = document.getElementById("imgs");
  let html = "";
  docs.forEach((doc) => {
    const guide = doc.data();
    const date = guide.finished.toDate();
    console.log(guide);
    const article = `
    <article class="card">
      <div class="card--header">
        <h2 class="card--title">${guide.title}</h2>
        <small class="card--date-finished">${date.toLocaleDateString()}</small>
      </div>
       
          <div class="slider">
            <a href="${guide.myWork}">
              <div id="imgs" class="slider--box-img">
                ${
                  guide.imgs &&
                  `<img src=${guide.imgs[0]} class="slider--img" alt="vista previa del ejercicio de maquetación ${guide.title}" />
                  <img src=${guide.imgs[1]} class="slider--img" alt="vista previa del ejercicio de maquetación ${guide.title}" />`
                }
              </div>
            </a>
              <ul class="slider--points">
                <li class="slider--point active"></li>
                <li class="slider--point"></li>
              </ul>
          </div>
        
        <div class="card--info">
          <p>${guide.description} 
            <a 
              href="${guide.originalWorkUrl}" 
              class="card--cta__text-only card--cta__underline">Ver diseño original
            </a>
          </p>
          <div class="card--box-cta">
            <a 
              href="${guide.myWork}" 
              class="card--cta card--cta__contained">Ver maqueta
            </a>
            <a 
              href="${guide.myWork}" 
              class="card--cta card--cta__outline">Ver código
            </a>
        </div
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
