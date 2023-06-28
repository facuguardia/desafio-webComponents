function headerComponent(el) {
  const headerCompEl = document.createElement('div');
  headerCompEl.innerHTML = `
    <nav class="header__nav">
      <a href="/">
        <img class="header__logo" src="../../images/logo-web.png" style="width: 60px; height: 50px;" />
      </a>
      <ul class="header__list">
        <li class="header__item">
          <a href="portfolio.html" class="header__link">Portfolio</a>
        </li>

        <li class="header__item">
          <a href="services.html" class="header__link">Services</a>
        </li>

        <li class="header__item">
          <a href="contact.html" class="header__link">Contact</a>
        </li>
      </ul>
      <div class="hamburger">
        <span class="hamburger__item"></span>
        <span class="hamburger__item"></span>
        <span class="hamburger__item"></span>
      </div>
    </nav>
    `;
  const hamburgerEl = headerCompEl.querySelector(".hamburger");
  const navListEl = headerCompEl.querySelector(".header__list");
  hamburgerEl.addEventListener("click", () => {
    hamburgerEl.classList.toggle("active");
    navListEl.classList.toggle("active");
  });
  el.appendChild(headerCompEl);
};