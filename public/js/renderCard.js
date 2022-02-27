import { carrouselControl } from "./carrousel.js";

export const renderCard = (docs) => {
  const exercisesList = document.getElementById("exercises-list");

  let html = "";
  docs.forEach((doc) => {
    const guide = doc.data();
    const date = guide.finished.toDate();
    const guideColor = `background-image: linear-gradient(to bottom,${guide.color[0]},${guide.color[1]},${guide.color[2]}); color:${guide.colorText}`;

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
                    <img src=${guide.imgs[1]} class="slider--img slider--aspect" alt="vista previa del ejercicio de maquetación ${guide.title}" />
                  </picture>`
                }
          </div>
        
            <span class="material-icons 
              slider--arrow 
              slider--arrow-left
              hide
              "
              style="color:${guide.colorText}"
              >
            chevron_left
            </span>
            <span class="material-icons 
              slider--arrow 
              slider--arrow-right"
              style="color:${guide.colorText}"
              >
            chevron_right
            </span>     

            <div class="slider--point">
              <div class="slider--point-left"
                style="background-color:${guide.colorText}"
                ></div>
              <div class="slider--point-right"
                style="background-color:${guide.color[2]}"
                ></div>
            </div>

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
                style="background-color:${guide.colorAccent}; 
                color:${guide.colorText}"
                class="card--cta card--cta__contained">Ver maqueta
            </a>
            <a
                href="${guide.code}"
                target="_blank"
                style="border-color:${guide.colorAccent}; 
                color:${guide.colorText}"
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
