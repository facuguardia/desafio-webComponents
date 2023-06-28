function contactComponent(el) {
  const contactCompEl = document.createElement('div');
  contactCompEl.innerHTML = `
    <section class="container-contact">
      <div class="form-title">
        <h3>Contact me</h3>
      </div>
      <div>
      <form class='contacto__form'>
        <div class="container-namemail">
          <label class="form__label">
          <div class="name">Name</div>
          <input
            class="form__label-name"
            type="text"
            name="name"
            placeholder="Facundo Guardia"
          />
          </label>
          <label class="form__label">
          <div class="email">Email</div>
          <input
            class="form__label-email"
            type="email"
            name="email"
            placeholder="email@email.com"
          />
          </label>
        </div>
        <label class="form__label">
          <div class="text">Message</div>
          <textarea
            class="form__label-textarea"
            type=text
            name="message"
            id=""
            cols="30"
            rows="10">
          </textarea>
        </label>
        <button class="button__contact">
          <span class="button-span">
            Send
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </span>
        </button>
      </form>
      </div>
    </section>
    `;
  el.appendChild(contactCompEl);
};

async function sendForm() {
  const formulario = contactComponent.querySelector('.contacto-form');

  formulario.addEventListener('submit', async function (f) {
    f.preventDefault()
    const datoNombre = formulario.querySelector('.form__label-name').value;
    const datoEmail = formulario.querySelector('.form__label-email').value;
    const datoTexto = formulario.querySelector('.form__label-textarea').value;

    const objData = {
      to: "facuguar12@gmail.com",
      message: `Nombre:${datoNombre}, Email:${datoEmail}, Mensaje:${datoTexto}`
    };
    const url = "https://apx-api.vercel.app/api/utils/dwf";

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(objData)
    })
  });
};

function main() {
  const contactEl = document.querySelector(".form-container");
  contactComponent(contactEl);
  const headerEl = document.querySelector(".header-container");
  headerComponent(headerEl);
  const footerEl = document.querySelector(".footer-container");
  footerComponent(footerEl);
};

main();