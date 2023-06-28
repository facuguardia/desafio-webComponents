function cardEl(el) {
  const cardCreateEl = document.createElement("div");
  cardCreateEl.innerHTML = `
    <div class="container-madre">
      <template id="template-card">
        <div class="container-cards">
          <img
            class="container-service__img"
            src=""
            alt=""
          />
          <h4 class="container-services__title"></h4>
          <p class="container-services__paragraph"></p>
        </div>
      </template>
    </div>`;

  el.appendChild(cardCreateEl);
}
