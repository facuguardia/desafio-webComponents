function getSerC(params = {}) {
  const cont = document.querySelector(".container-madre");
  const temp = document.querySelector("#template-card");

  temp.content.querySelector(".container-service__img").src = params.image;
  temp.content.querySelector(".container-services__paragraph").textContent =
    params.paragraph;
  temp.content.querySelector(".container-services__title").textContent =
    params.title;

  const clone = document.importNode(temp.content, true);
  cont.appendChild(clone);
}

function addService() {
  return fetch(
    "https://cdn.contentful.com/spaces/i3hvtwwg14ap/environments/master/entries?access_token=JGIjycWVwFJ2dv7ZuMOz78z_WCcnUqGCj2ejw6UbYrw&content_type=portfolioServices"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsColletions = data.items.map((item) => {
        const img = searchImg(item.fields.imageServices.sys.id, data);
        return {
          title: item.fields.title,
          paragraph: item.fields.description,
          image: img.fields.file.url,
        };
      });
      return fieldsColletions;
    });

  function searchImg(id, data) {
    const searching = data.includes.Asset.find((asset) => {
      return asset.sys.id == id;
    });
    return searching;
  }
}

function getWelcom(params = {}) {
  const t = document.querySelector("#welcome-template");
  const c = document.querySelector(".container-template-w");
  t.content.querySelector(".welcome-container__title").textContent = params.title;
  t.content.querySelector(".welcome-container__img").src = params.img;

  const clonex = document.importNode(t.content, true);
  c.appendChild(clonex);
}

function addW() {
  return fetch(
    "https://cdn.contentful.com/spaces/i3hvtwwg14ap/environments/master/entries?access_token=JGIjycWVwFJ2dv7ZuMOz78z_WCcnUqGCj2ejw6UbYrw&content_type=portfolioPages"
  )
    .then((resp) => {
      return resp.json();
    })
    .then((dato) => {
      const i = dato.includes.Asset[0].fields.file.url;
      return {
        title: dato.items[0].fields.title,
        img: i,
      };
    });
}
function main() {
  addService().then((serv) => {
    for (const s of serv) {
      getSerC(s);
    }
  });

  addW().then((ser) => {
    getWelcom(ser);
  });

  const welEl = document.querySelector(".container-template-w");
  welcomeCardEl(welEl);
  const cardEle = document.querySelector(".container-services");
  cardEl(cardEle);
  const headerEl = document.querySelector(".header-container");
  headerComponent(headerEl);
  const footerEl = document.querySelector(".footer-container");
  footerComponent(footerEl);
}
main();
