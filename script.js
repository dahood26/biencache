// Bien Caché — site interactions
// No framework, no build step: this file is loaded directly by index.html.

(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* Mobile navigation                                                   */
  /* ------------------------------------------------------------------ */

  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });

    // Close the mobile menu whenever a link inside it is used.
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Ouvrir le menu");
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Footer year                                                         */
  /* ------------------------------------------------------------------ */

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------------------------------------------------------------ */
  /* Contact form                                                        */
  /* ------------------------------------------------------------------ */
  //
  // This form posts to Formspree (https://formspree.io) so the site works
  // with zero backend of its own. Before going live:
  //   1. Create a free Formspree account and a form.
  //   2. Replace FORM_ENDPOINT below with the endpoint Formspree gives you.
  // Until that's done, submissions will fail gracefully and the visitor
  // is invited to email you directly instead — see the fallback message.

  var FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");

  if (form && status) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (FORM_ENDPOINT.indexOf("YOUR_FORM_ID") !== -1) {
        status.dataset.state = "error";
        status.textContent =
          "Le formulaire n'est pas encore connecté — écrivez-nous directement à contact@biencache.fr en attendant.";
        return;
      }

      var submitButton = form.querySelector(".form-submit");
      submitButton.disabled = true;
      status.dataset.state = "";
      status.textContent = "Envoi en cours…";

      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
        .then(function (response) {
          if (response.ok) {
            status.dataset.state = "success";
            status.textContent = "Merci — votre demande a bien été envoyée, nous revenons vers vous sous 48h.";
            form.reset();
          } else {
            throw new Error("La requête a échoué");
          }
        })
        .catch(function () {
          status.dataset.state = "error";
          status.textContent =
            "L'envoi a échoué. Écrivez-nous directement à contact@biencache.fr en attendant.";
        })
        .finally(function () {
          submitButton.disabled = false;
        });
    });
  }
})();
