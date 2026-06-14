/* =========================
   SAMURDHI PORTAL - APP.JS
   SINGLE FILE VERSION
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSlider();
  initNews();
  initStaff();
  initDownloads();
  initGallery();
  initAdmin();
});

/* =========================
   CONFIG
========================= */
const CONFIG = {
  ADMIN_USER: "admin",
  ADMIN_PASS: "admin123"
};

/* =========================
   SIMPLE STORAGE HELPERS
========================= */
const Storage = {
  get(key) {
    return JSON.parse(localStorage.getItem(key) || "[]");
  },
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

/* =========================
   UTIL
========================= */
const $ = (q) => document.querySelector(q);
const $$ = (q) => document.querySelectorAll(q);

/* =========================
   THEME TOGGLE
========================= */
function initTheme() {
  const btn = $("#theme-toggle");
  const saved = localStorage.getItem("theme") || "light";

  document.documentElement.dataset.theme = saved;

  btn?.addEventListener("click", () => {
    const next =
      document.documentElement.dataset.theme === "light"
        ? "dark"
        : "light";

    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  });
}

/* =========================
   HERO SLIDER
========================= */
function initSlider() {
  const slides = $$(".hero-slide");
  const dots = $$(".slider-dot");

  let index = 0;

  function show(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
    index = i;
  }

  $(".next-arrow")?.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    show(index);
  });

  $(".prev-arrow")?.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    show(index);
  });

  dots.forEach(d =>
    d.addEventListener("click", () => show(+d.dataset.slide))
  );

  setInterval(() => {
    index = (index + 1) % slides.length;
    show(index);
  }, 6000);
}

/* =========================
   NEWS
========================= */
function initNews() {
  const el = $("#news-container");

  function render() {
    const data = Storage.get("news");

    el.innerHTML = data.length
      ? data
          .map(
            n => `
        <div class="card">
          <h3>${n.title}</h3>
          <p>${n.desc || ""}</p>
          <small>${n.date || ""}</small>
        </div>
      `
          )
          .join("")
      : "<p>පුවත් නොමැත</p>";
  }

  render();
  window.refreshNews = render;
}

/* =========================
   STAFF
========================= */
function initStaff() {
  const el = $("#staff-container");

  function render() {
    const data = Storage.get("staff");

    el.innerHTML = data.length
      ? data
          .map(
            s => `
        <div class="card">
          <h3>${s.name}</h3>
          <p>${s.position}</p>
          <small>${s.phone || ""}</small>
        </div>
      `
          )
          .join("")
      : "<p>කාර්ය මණ්ඩල නැත</p>";
  }

  render();
  window.refreshStaff = render;
}

/* =========================
   DOWNLOADS
========================= */
function initDownloads() {
  const el = $("#downloads-list");

  function render() {
    const data = Storage.get("downloads");

    el.innerHTML = data.length
      ? data
          .map(
            d => `
        <tr>
          <td>${d.name}</td>
          <td>${d.type}</td>
          <td>${d.size || "-"}</td>
          <td>${d.date || ""}</td>
          <td class="text-center">
            <a href="${d.url}" download>Download</a>
          </td>
        </tr>
      `
          )
          .join("")
      : `<tr><td colspan="5">No files</td></tr>`;
  }

  render();
  window.refreshDownloads = render;
}

/* =========================
   GALLERY
========================= */
function initGallery() {
  const el = $("#gallery-container");

  window.openLightbox = (src, caption) => {
    $("#lightbox-image").src = src;
    $("#lightbox-caption").textContent = caption;
    $("#lightbox-modal").classList.add("open");
  };

  function render() {
    const data = Storage.get("gallery");

    el.innerHTML = data.length
      ? data
          .map(
            g => `
        <div class="gallery-item">
          <img src="${g.url}" onclick="openLightbox('${g.url}','${g.caption}')">
          <p>${g.caption}</p>
        </div>
      `
          )
          .join("")
      : "<p>No images</p>";
  }

  render();
  window.refreshGallery = render;
}

/* =========================
   ADMIN LOGIN + DASHBOARD
========================= */
function initAdmin() {
  const loginForm = $("#admin-login-form");
  const loginView = $("#admin-login-view");
  const dashView = $("#admin-dashboard-view");

  loginForm?.addEventListener("submit", e => {
    e.preventDefault();

    const u = $("#admin-username").value;
    const p = $("#admin-password").value;

    if (u === CONFIG.ADMIN_USER && p === CONFIG.ADMIN_PASS) {
      loginView.classList.add("hide");
      dashView.classList.remove("hide");
    } else {
      alert("වැරදි login");
    }
  });

  $("#admin-logout-btn")?.addEventListener("click", () => {
    loginView.classList.remove("hide");
    dashView.classList.add("hide");
  });

  /* Dashboard tabs */
  $$(".admin-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".admin-tab-btn").forEach(b => b.classList.remove("active"));
      $$(".admin-tab-content").forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      $("#" + btn.dataset.target).classList.add("active");
    });
  });
}
