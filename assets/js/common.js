document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a.abstract, a.award, a.bibtex").forEach(function (toggle) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      const publication = toggle.closest("li, .publication");
      if (!publication) return;

      ["abstract", "award", "bibtex"].forEach(function (kind) {
        publication.querySelectorAll("." + kind + ".hidden").forEach(function (section) {
          section.classList.toggle("open", toggle.classList.contains(kind));
        });
      });
    });
  });

  document.querySelectorAll("a").forEach(function (link) {
    link.classList.remove("waves-effect", "waves-light");
  });

  const navbarToggle = document.querySelector(".navbar-toggler");
  const navbarNav = document.querySelector("#navbarNav");
  if (navbarToggle && navbarNav) {
    navbarToggle.addEventListener("click", function () {
      const expanded = navbarToggle.getAttribute("aria-expanded") === "true";
      navbarToggle.setAttribute("aria-expanded", String(!expanded));
      navbarToggle.classList.toggle("collapsed", expanded);
      navbarNav.classList.toggle("show", !expanded);
    });
  }

  document.querySelectorAll("[data-contact-user][data-contact-domain][data-contact-tld]").forEach(function (control) {
    control.addEventListener("click", function () {
      const user = control.getAttribute("data-contact-user");
      const domain = control.getAttribute("data-contact-domain");
      const tld = control.getAttribute("data-contact-tld");
      const address = user + "@" + domain + "." + tld;

      window.location.href = "mailto:" + address;
    });
  });
});
