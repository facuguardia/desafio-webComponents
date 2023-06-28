function footerComponent(el) {
  const footerCompEl = document.createElement("div");
  footerCompEl.innerHTML = `
    <div class="footer">
      <a href="/">
        <img
          class="footer__logo"
          src="../../images/logo-web.png"
          alt="logo"
          style="width: 100px; height: 80px;"
        />
      </a>
      <div class="container">
        <div class="container-services">
          <a href="/">
            <span class="span">
              <img
                class="container-services__img"
                src="images/home.svg" alt=""
              />
              HOME
            </span>
          </a>
          <a href="services.html">
            <span class="span">
              <img
                class="container-services__img"
                src="images/phone.svg"
                alt=""
              />
              SERVICES
            </span>
          </a>
          <a href="contact.html">
            <span class="span">
              <img
                class="container-services__img"
                src="images/user.svg"
                alt=""
              />
              CONTACT
            </span>
          </a>
      </div>
      <div class="container-redes">
        <a href="https://www.linkedin.com/in/facu-guardia/" target="_blank">
          <img class="container-redes__img" src="images/linkedin.svg" alt="" />
        </a>
        <a href="https://github.com/facuguardia" target="_blank"">
          <img class="container-redes__img" src="images/github.svg" alt="" />
        </a>
        <a href="https://twitter.com/FacuGuardia86" target="_blank">
          <img class="container-redes__img" src="images/twitter.svg" alt="" />
        </a>
      </div>
    </div>
    <copy>
      <a href="https://apx.school" target="_blank">
        <span class="copy-footer">
          ©2023 - https://apx.school
        </span>
      </a>
    </copy>
    `;

  el.appendChild(footerCompEl);
}
