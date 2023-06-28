function getWelcome(params = {}) {
  const t = document.querySelector("#welcome-template");
  const co = document.querySelector(".welcome-container-index");
  t.content.querySelector(".welcome-container__title").textContent = params.title;
  t.content.querySelector(".welcome-container__img").src = params.imag;

  const clon = document.importNode(t.content, true);
  co.appendChild(clon);
}

function addWelcome() {
  return fetch("https://cdn.contentful.com/spaces/i3hvtwwg14ap/environments/master/entries?access_token=JGIjycWVwFJ2dv7ZuMOz78z_WCcnUqGCj2ejw6UbYrw&content_type=portfolioWeb")
      .then(res => {
          return res.json()
      })
      .then((data) => {
          const imagen = data.includes.Asset[0].fields.file.url;
          const fieldsCollections = {
              title: data.items[0].fields.title,
              imag: imagen,
          };
          return fieldsCollections
      });
}

function main() {
  const welcomeCard = document.querySelector(".welcome-container-index")
  welcomeCardEl(welcomeCard);
  const card = document.querySelector(".container-services");
  cardEl(card);
  const headerEl = document.querySelector(".header-container");
  headerComponent(headerEl);
  const footerEl = document.querySelector(".footer-container");
  footerComponent(footerEl);

  addWelcome().then((work) => {
      getWelcome(work)
  });
};

main();