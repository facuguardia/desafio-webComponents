function presCardEl(pp = {}) {
  const pcardEl = document.createElement("div");
  pcardEl.innerHTML = `
    <template id="template-aboutme">
      <div class="aboutme-container">
        <div class="aboutme-container__text">
          <h2 class="aboutme-container__text--title"></h2>
          <p class="aboutme-container__text--paragraph"></p>
        </div>
        <img class="aboutme-container__img" src="" alt="" />
      </div>
    </template>
    `;
  const t = pcardEl.querySelector("#template-aboutme");
  const c = document.querySelector(".aboutme-container");
  t.content.querySelector(".aboutme-container__img").src = pp.imagen;
  t.content.querySelector(".aboutme-container__text--title").textContent =
    pp.titulo;
  t.content.querySelector(
    ".aboutme-container__text--paragraph"
  ).textContent = pp.texto;

  const clone = document.importNode(t.content, true);
  c.appendChild(clone);
}

function addPresentation() {
  return fetch(
    "https://cdn.contentful.com/spaces/i3hvtwwg14ap/environments/master/entries?access_token=JGIjycWVwFJ2dv7ZuMOz78z_WCcnUqGCj2ejw6UbYrw&content_type=portfolioAboutme"
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      const imagen = data.includes.Asset[0].fields.file.url;
      const fieldsCollections = {
        imagen: imagen,
        titulo: data.items[0].fields.title,
        texto: data.items[0].fields.description,
      };
      return fieldsCollections;
    });
}

function main() {
  addPresentation().then((pres) => {
    presCardEl(pres);
  });
}

main();
