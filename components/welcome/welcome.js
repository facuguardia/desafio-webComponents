function welcomeCardEl(i) {
  const componentWelEl = document.createElement("div");
  componentWelEl.innerHTML = `
  <div class="container-template-welcome">
    <template id="welcome-template">
      <div class="welcome-container">
        <h1 class="welcome-container__title">
          <span class="welcome-container__title--span"></span>
        </h1>
        <div class="container-imagenes">
          <img class="welcome-container__img" src="" alt="" />
          <div class="shadow"></div>
        </div>
      </div>
    </template>
    </div>
    `;
  i.appendChild(componentWelEl);
}
