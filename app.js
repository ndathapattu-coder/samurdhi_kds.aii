/**
 * Samurdhi Branch Kamburupitiya Portal - Application Logic
 * Implements client-side dynamic state (localStorage), animated statistics, 
 * modal sheets, and a fully interactive content management dashboard.
 */

// --- Default Data Initialization ---
const DEFAULT_NEWS = [
    {
        id: "news-1",
        title: "සමෘද්ධී නිවාම වැඩසටහන යටතේ වසරකට රු.1000000 වටිනා නිවාස 03 ක් ඉදිකිරිම",
        category: "project",
        date: "2026-06-10",
        excerpt: "කඹුරුපිටිය ප්‍රාදේශීය ලේකම් කාර්යාල ශ්‍රවණාගාරයේදී සමෘද්ධි නිවාස සංවර්ධන ලොතරැයි වැඩසටහනේ ජයග්‍රාහකයින් සදහා මුල්‍ය ප්‍රදානයන් සිදු කෙරිණි.",
        content: "කඹුරුපිටිය ප්‍රාදේශීය ලේකම් කාර්යාල ශ්‍රවණාගාරයේදී සමෘද්ධි නිවාස සංවර්ධන ලොතරැයි වැඩසටහනේ ප්‍රාදේශීය මට්ටමේ ජයග්‍රාහකයින් සදහා මුල්‍ය ප්‍රදානයන් සහ සහතික පත්‍ර බෙදාදීමේ විශේෂ උත්සවය ප්‍රාදේශීය ලේකම්තුමාගේ ප්‍රධානත්වයෙන් පැවැත්වුණි. මෙහිදී තේරී පත් වූ පවුල් 12ක් සඳහා නිවාස ඉදිකිරීම් කටයුතු සම්පූර්ණ කිරීම සඳහා රුපියල් ලක්ෂ 2 බැගින් වන ත්‍යාග මුදල් ප්‍රදානය කරන ලදී. මෙම ව්‍යාපෘතියේ ප්‍රධාන අරමුණ වනුයේ නිසි නිවාස පහසුකම් නොමැති සමෘද්ධිලාභී පවුල්වල ජීවන තත්ත්වය නංවාලීමයි."
    },
    {
        id: "news-2",
        title: "සමෘද්ධී ව්‍යාපෘති  වැඩසටහන යටතේ වසරකට 2025 වර්ධයේ  ව්‍යාපෘති 16 ක් කිරීම",
        category: "announcement",
        date: "2026-06-08",
        excerpt: "ස්වයං රැකියා සහ කෘෂිකාර්මික ජීවනෝපාය සංවර්ධන ව්‍යාපෘති සඳහා සහනාධාර  ලබාගැනීමට කැමති ප්‍රතිලාභීන්",
        content: "ග්‍රාමීය මට්ටමින් ආර්ථිකය ශක්තිමත් කිරීමේ අරමුණින් කඹුරුපිටිය බලප්‍රදේශයේ සියලුම ග්‍රාම නිලධාරී වසම් ආවරණය වන පරිදි නව ජීවනෝපාය ව්‍යාපෘති යෝජනා කැඳවීම ආරම්භ කර ඇත. කුකුළු පාලනය, ගෘහස්ථ කෘෂිකර්මාන්තය, ඇඟලුම් නිපදවීම සහ ආහාර සැකසුම් වැනි ස්වයං රැකියා සදහා මෙහිදී උපකරණමය සහ මුල්‍ය ආධාර සැපයේ. කැමති අයදුම්කරුවන් තමන්ගේ වසමේ සමෘද්ධි සංවර්ධන නිලධාරී හමුවී 2026 ජූලි 10 දිනට ප්‍රථම අයදුම්පත් යොමු කළ යුතුය."
    },
    {
        id: "news-3",
        title: "රාජ්‍ය සුභසාධක චක්‍රලේඛ අංක 04/2026 නිකුත් කිරීම",
        category: "circular",
        date: "2026-06-05",
        excerpt: "නව ප්‍රතිලාභී ගෙවීම් සංශෝධන සහ බැංකු රෙගුලාසි පිළිබඳ නවතම උපදෙස් ඇතුළත් චක්‍රලේඛය බාගත කිරීම් අංශයෙන් ලබාගත හැක.",
        content: "සමෘද්ධි සංවර්ධන දෙපාර්තමේන්තුව මගින් නිකුත් කරන ලද නවතම චක්‍රලේඛය (අංක 04/2026) මගින් ප්‍රතිලාභී ගෙවීම් සිදු කිරීමේ නවතම බැංකු ක්‍රමවේද සහ විනිවිදභාවය තහවුරු කිරීමේ නියෝග ප්‍රකාශයට පත් කර ඇත. මෙම චක්‍රලේඛයට අනුව ඉදිරියේදී සියලුම ගෙවීම් සෘජුවම සමෘද්ධි ප්‍රජාමූල බැංකු ගිණුම් වෙත බැර කෙරේ. මෙයට අදාළ නීතිමය ලියකියවිලි දැන් අපගේ බාගත කිරීම් පිටුවෙන් ලබා ගත හැකිය."
    },
    {
        id: "news-4",
        title: "2026.07.13 ලේ දන්දීමෙි වැඩසටහන",
        category: "2026.07.13 ලේ දන්දීමෙි වැඩසටහන",
        date: "2026-07-13",
        excerpt: "2026.07.13 ලේ දන්දීමෙි වැඩසටහන",
        content: "2026.07.13 ලේ දන්දීමෙි වැඩසටහන"
    }
];

const DEFAULT_STAFF = [
    {
        id: "staff-1",
        name: "ඩී.ආර් ජයවර්ධන",
        designation: "මූලස්ථාන සමෘද්ධි කළමනාකරු",
        phone: "0412292570",
        email: "samurdhikambu@gmail.com",
        photo: "assets/staff/staff_1.jpg"
    },
    {
        id: "staff-2",
        name: "කටී.ජී.කේ සමන්තිකා",
        designation: "සමෘද්ධි මහාසංගම කළමනාකරු",
        phone: "0412292570",
        email: "samurdhikambu@gmail.com",
        photo: "assets/staff/staff_2.png"
    },
    {
        id: "staff-3",
        name: "පී.කේ වන්නිගේ",
        designation: "ව්‍යාපෘති කළමනාකරු",
        phone: "0412292570",
        email: "samurdhikambu@gmail.com",
        photo: "assets/staff/staff_3.jpg"
    },
    {
        id: "staff-4",
        name: "කඩී.සී.එස් බස්නායක",
        designation: "සමෘද්ධි  සංවර්ධන නිලධාරී",
        phone: "+94 71 456 7890",
        email: "social.dev@kds.gov.lk",
        photo: "assets/staff/staff_4.jpg"
    }
];

const DEFAULT_DOWNLOADS = [
    {
        id: "dl-1",
        name: "සමෘද්ධි ජීවනෝපාය ආධාර අයදුම්පත (Livelihood Assistance Application)",
        type: "PDF",
        size: "342 KB",
        date: "2026-05-20"
    },
    {
        id: "dl-2",
        name: "සමාජ ආරක්ෂණ සහන අරමුදල් අයදුම්පත (Social Security Fund Application)",
        type: "PDF",
        size: "280 KB",
        date: "2026-05-18"
    },
    {
        id: "dl-3",
        name: "රාජ්‍ය සුභසාධක ප්‍රතිලාභ ප්‍රතිපත්ති සංග්‍රහය (Welfare Benefit Policy)",
        type: "PDF",
        size: "1.2 MB",
        date: "2026-04-12"
    },
    {
        id: "dl-4",
        name: "සමෘද්ධි බැංකු ගිණුම් විවෘත කිරීමේ උපදෙස් පත්‍රිකාව (Bank Account Opening Guide)",
        type: "PDF",
        size: "450 KB",
        date: "2026-03-30"
    }
];

const DEFAULT_GALLERY = [
    {
        id: "gal-1",
        caption: "ප්‍රතිලාභී සහනාධාර සහ ත්‍යාග බෙදාදීමේ මහෝත්සවය",
        image: "assets/gallery/gallery_1.jpg"
    },
    {
        id: "gal-2",
        caption: "ප්‍රජාව දැනුවත් කිරීමේ සහ සවිබල ගැන්වීමේ සම්මන්ත්‍රණය",
        image: "assets/gallery/gallery_2.jpg"
    },
    {
        id: "gal-3",
        caption: "සමෘද්ධි ව්‍යවසායකයින්ගේ නිෂ්පාදන අලෙවි සල්පිල",
        image: "assets/gallery/gallery_3.jpg"
    },
    {
        id: "gal-4",
        caption: "ප්‍රාදේශීය ව්‍යවසායක අලෙවි ප්‍රදර්ශනය",
        image: "assets/gallery/gallery_4.jpg"
    },
    {
        id: "gal-5",
        caption: "ව්‍යවසායකත්ව සහ ජීවනෝපාය සංවර්ධන පුහුණු වැඩසටහන",
        image: "assets/gallery/gallery_5.jpg"
    }
];

// Initial storage populator
function initLocalStorage() {
    // If the storage contains the old phone number, is missing staff photos, or uses placeholder SVGs in gallery, clear it
    const existingStaff = localStorage.getItem('samurdhi_staff');
    const existingGallery = localStorage.getItem('samurdhi_gallery');
    if (existingStaff && (existingStaff.includes('2236') || !existingStaff.includes('staff_1.jpg') || (existingGallery && existingGallery.includes('data:image/svg')))) {
        localStorage.removeItem('samurdhi_news');
        localStorage.removeItem('samurdhi_staff');
        localStorage.removeItem('samurdhi_downloads');
        localStorage.removeItem('samurdhi_gallery');
    }

    if (!localStorage.getItem('samurdhi_news')) {
        localStorage.setItem('samurdhi_news', JSON.stringify(DEFAULT_NEWS));
    }
    if (!localStorage.getItem('samurdhi_staff')) {
        localStorage.setItem('samurdhi_staff', JSON.stringify(DEFAULT_STAFF));
    }
    if (!localStorage.getItem('samurdhi_downloads')) {
        localStorage.setItem('samurdhi_downloads', JSON.stringify(DEFAULT_DOWNLOADS));
    }
    if (!localStorage.getItem('samurdhi_gallery')) {
        localStorage.setItem('samurdhi_gallery', JSON.stringify(DEFAULT_GALLERY));
    }
}

initLocalStorage();

// State managers
let newsData = JSON.parse(localStorage.getItem('samurdhi_news'));
let staffData = JSON.parse(localStorage.getItem('samurdhi_staff'));
let downloadsData = JSON.parse(localStorage.getItem('samurdhi_downloads'));
let galleryData = JSON.parse(localStorage.getItem('samurdhi_gallery'));

// Save states back to local storage
function saveState(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// --- App Event Handlers & DOM bindings ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile navigation menu
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const primaryNav = document.querySelector("#primary-navigation");
    
    if (navToggle && primaryNav) {
        navToggle.addEventListener("click", () => {
            const isOpened = navToggle.getAttribute("aria-expanded") === "true";
            navToggle.setAttribute("aria-expanded", !isOpened);
            primaryNav.classList.toggle("active");
        });
        
        // Close menu on nav link clicks
        primaryNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navToggle.setAttribute("aria-expanded", "false");
                primaryNav.classList.remove("active");
            });
        });
    }

    // 2. Light / Dark theme toggling
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeText = document.getElementById("theme-text");
    
    // Check local storage theme
    const activeTheme = localStorage.getItem("theme");
    if (activeTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeText) themeText.textContent = "අඳුරු මාදිලිය";
    } else {
        if (themeText) themeText.textContent = "ආලෝක මාදිලිය";
    }
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            
            if (themeText) {
                themeText.textContent = isDark ? "අඳුරු මාදිලිය" : "ආලෝක මාදිලිය";
            }
        });
    }

    // 3. Render site content components
    renderNewsCards();
    renderDownloadsTable();
    renderStaffCards();
    renderGalleryGrid();

    // 4. Scroll Reveal and Count-up Statistics Observer
    setupScrollObservers();

    // 4b. Hero Image Slider/Carousel
    setupHeroSlider();

    // 5. Branches Modals Setup
    setupBranchModals();

    // 6. Units Modals Setup
    setupUnitModals();

    // 7. Lightbox Modal Setup
    setupLightbox();

    // 8. Contact Form Handling
    setupContactForm();

    // 9. Admin Control Panel setup
    setupAdminPanel();
});

// --- Content Rendering Methods ---

// Render News
function renderNewsCards(filterType = "all") {
    const container = document.getElementById("news-container");
    if (!container) return;
    
    container.innerHTML = "";
    const filteredNews = filterType === "all" 
        ? newsData 
        : newsData.filter(news => news.category === filterType);
        
    if (filteredNews.length === 0) {
        container.innerHTML = `<div class="loading-placeholder">මෙම අංශයට අදාළව දැනට පුවත් කිසිවක් නොමැත.</div>`;
        return;
    }
    
    filteredNews.forEach(news => {
        const card = document.createElement("div");
        card.className = "card news-card animate-on-scroll active";
        
        // Match badges in Sinhala
        let badgeLabel = "නිවේදන";
        if (news.category === "circular") badgeLabel = "චක්‍රලේඛ";
        if (news.category === "project") badgeLabel = "ව්‍යාපෘති පුවත්";
        if (news.category === "notice") badgeLabel = "ප්‍රතිලාභී දැනුම්දීම්";
        
        card.innerHTML = `
            <div class="news-img-holder">
                <svg class="news-placeholder-icon icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                <span class="news-badge badge-${news.category}">${badgeLabel}</span>
            </div>
            <div class="news-content">
                <div class="news-date">
                    <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <span>${news.date}</span>
                </div>
                <h4 class="news-title">${news.title}</h4>
                <p class="news-excerpt">${news.excerpt}</p>
                <span class="news-readmore" onclick="showNewsDetail('${news.id}')">
                    වැඩිදුර කියවන්න
                    <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
            </div>
        `;
        container.appendChild(card);
    });

    // Handle filter buttons highlight
    document.querySelectorAll(".tab-btn").forEach(btn => {
        if (btn.getAttribute("data-filter") === filterType) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

// Bind news filter buttons
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const filter = e.target.getAttribute("data-filter");
        renderNewsCards(filter);
    });
});

// News Details modal pop-up trigger
window.showNewsDetail = function(newsId) {
    const newsItem = newsData.find(item => item.id === newsId);
    if (!newsItem) return;
    
    let badgeLabel = "නිවේදන";
    if (newsItem.category === "circular") badgeLabel = "චක්‍රලේඛ";
    if (newsItem.category === "project") badgeLabel = "ව්‍යාපෘති පුවත්";
    if (newsItem.category === "notice") badgeLabel = "ප්‍රතිලාභී දැනුම්දීම්";

    const modalContent = document.getElementById("branch-modal-content");
    modalContent.innerHTML = `
        <div class="modal-header-section">
            <div class="subtitle-badge badge-${newsItem.category}" style="color:#fff;">${badgeLabel}</div>
            <h3 class="modal-header-title">${newsItem.title}</h3>
        </div>
        <div class="modal-body-content">
            <p class="text-muted font-sm" style="margin-bottom: 1rem;">ප්‍රකාශිත දිනය: ${newsItem.date}</p>
            <p style="font-size: 1rem; line-height:1.8; text-align:justify;">${newsItem.content}</p>
        </div>
    `;
    
    const modal = document.getElementById("branch-modal");
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
};

// Render Downloads list
function renderDownloadsTable() {
    const tableBody = document.getElementById("downloads-list");
    if (!tableBody) return;
    
    tableBody.innerHTML = "";
    
    if (downloadsData.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" class="text-center">බාගත හැකි ලේඛන කිසිවක් දැනට නොමැත.</td></tr>`;
        return;
    }
    
    downloadsData.forEach(file => {
        const tr = document.createElement("tr");
        const docBadge = file.type === "PDF" ? "type-pdf" : "type-doc";
        
        tr.innerHTML = `
            <td>
                <div class="doc-name">
                    <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    <span>${file.name}</span>
                </div>
            </td>
            <td><span class="doc-type-badge ${docBadge}">${file.type}</span></td>
            <td><span class="doc-size">${file.size}</span></td>
            <td><span class="doc-date">${file.date}</span></td>
            <td class="text-center">
                <!-- Trigger mock download success message -->
                <a href="#" class="btn-download" onclick="mockDownload('${file.name}')" title="බාගත කරන්න" aria-label="බාගත කරන්න">
                    <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </a>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

// Mock file downloader
window.mockDownload = function(fileName) {
    alert(`"${fileName}" සාර්ථකව බාගත වෙමින් පවතී...`);
};

// Render Staff Cards
function renderStaffCards() {
    const container = document.getElementById("staff-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    if (staffData.length === 0) {
        container.innerHTML = `<div class="loading-placeholder">කාර්ය මණ්ඩල විස්තර දැනට නොමැත.</div>`;
        return;
    }
    
    staffData.forEach(member => {
        const card = document.createElement("div");
        card.className = "card staff-card animate-on-scroll active";
        
        let imgContent = `
            <div class="staff-avatar-placeholder">
                <svg class="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
        `;
        
        if (member.photo) {
            imgContent = `<img src="${member.photo}" alt="${member.name}" class="staff-img">`;
        }
        
        card.innerHTML = `
            <div class="staff-img-wrapper">
                ${imgContent}
            </div>
            <h4 class="staff-name">${member.name}</h4>
            <span class="staff-designation">${member.designation}</span>
            <div class="staff-contact">
                <div class="staff-contact-item">
                    <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 9.75v7.17z"/></svg>
                    <span>${member.phone}</span>
                </div>
                <div class="staff-contact-item">
                    <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <span>${member.email}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Render Gallery
function renderGalleryGrid() {
    const container = document.getElementById("gallery-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    if (galleryData.length === 0) {
        container.innerHTML = `<div class="loading-placeholder">ගැලරියේ පින්තූර කිසිවක් දැනට නොමැත.</div>`;
        return;
    }
    
    galleryData.forEach(item => {
        const gItem = document.createElement("div");
        gItem.className = "gallery-item animate-on-scroll active";
        gItem.innerHTML = `
            <img src="${item.image}" alt="${item.caption}" loading="lazy">
            <div class="gallery-overlay">
                <p class="gallery-caption">${item.caption}</p>
            </div>
        `;
        
        gItem.addEventListener("click", () => {
            openLightbox(item.image, item.caption);
        });
        
        container.appendChild(gItem);
    });
}


// --- Scroll Observers & Counters ---
function setupScrollObservers() {
    // 1. Fade-in animations on scroll
    const fadeElements = document.querySelectorAll(".animate-on-scroll");
    
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });
    
    fadeElements.forEach(el => fadeObserver.observe(el));

    // 2. Count-up dashboard counters
    const counterNumbers = document.querySelectorAll(".stat-number");
    
    const countUp = (counterEl) => {
        const target = parseInt(counterEl.getAttribute("data-target"), 10);
        let count = 0;
        const speed = target > 1000 ? 50 : target > 100 ? 15 : 2;
        const increment = Math.ceil(target / speed);
        
        const updateCount = () => {
            count += increment;
            if (count >= target) {
                counterEl.innerText = target.toLocaleString();
            } else {
                counterEl.innerText = count.toLocaleString();
                setTimeout(updateCount, 30);
            }
        };
        updateCount();
    };

    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                counterNumbers.forEach(num => countUp(num));
                observer.unobserve(entries[0].target);
            }
        }, { threshold: 0.3 });
        statsObserver.observe(statsSection);
    }
}


// --- Modals logic (Branches, Units, Lightbox) ---

function setupBranchModals() {
    const modal = document.getElementById("branch-modal");
    const closeBtns = modal.querySelectorAll(".modal-close, .modal-overlay");
    const detailButtons = document.querySelectorAll(".btn-branch-detail");
    const modalContent = document.getElementById("branch-modal-content");
    
    const branchInfo = {
        hq: {
            title: "මුලස්ථාන ශාඛාව (Headquarters Branch)",
            badge: "මුලස්ථානය",
            content: `
                <h4>ප්‍රධාන කාර්යභාරය:</h4>
                <p>කඹුරුපිටිය ප්‍රාදේශීය ලේකම් කාර්යාල සමෘද්ධි මුලස්ථානය මඟින් කඹුරුපිටිය බලප්‍රදේශයේ සමෘද්ධි සංවර්ධන කටයුතු සියල්ලේ ප්‍රධාන පරිපාලන සහ සම්බන්ධීකරණ මධ්‍යස්ථානය ලෙස ක්‍රියා කරයි.</p>
                
                <h4>සේවාවන් සහ වගකීම්:</h4>
                <ul class="modal-list">
                    <li>සමෘද්ධි සහනාධාර ලේඛන යාවත්කාලීන කිරීම සහ කළමනාකරණය.</li>
                    <li>සමාජ ආරක්ෂණ අරමුදල් ප්‍රතිලාභ (මරණ, විවාහ, පියදරු, ශිෂ්‍යත්ව ආධාර) ගෙවීම් අනුමත කිරීම.</li>
                    <li>ග්‍රාමීය මට්ටමේ යටිතල පහසුකම් සංවර්ධන ව්‍යාපෘති සහ නිවාස ආධාර ව්‍යාපෘති අධීක්ෂණය.</li>
                    <li>ග්‍රාම නිලධාරී වසම් මට්ටමින් රාජකාරී කරන සමෘද්ධි සංවර්ධන නිලධාරීන්ගේ පරිපාලන කටයුතු මෙහෙයවීම.</li>
                </ul>
                <p class="text-muted font-xs">පිහිටීම: පළමු මහල, ප්‍රාදේශීය ලේකම් කාර්යාල සංකීර්ණය, කඹුරුපිටිය.</p>
            `
        },
        federation: {
            title: "මහාසංගම ශාඛාව (Federation Branch)",
            badge: "මහාසංගමය",
            content: `
                <h4>ප්‍රධාන කාර්යභාරය:</h4>
                <p>සමෘද්ධි ප්‍රතිලාභී පවුල්වල සාමාජිකයින්ගෙන් සමන්විත සමෘද්ධි සමිති සහ ප්‍රජාමූල බැංකු ජාලය ප්‍රාදේශීය ලේකම් කොට්ඨාස මට්ටමින් ඒකාබද්ධ කර මෙහෙයවන ප්‍රධාන ව්‍යුහයයි.</p>
                
                <h4>සේවාවන් සහ වගකීම්:</h4>
                <ul class="modal-list">
                    <li>ප්‍රජාමූල බැංකු මගින් ලබාදෙන ස්වයං රැකියා, කෘෂිකාර්මික සහ හදිසි ණය පහසුකම් නියාමනය.</li>
                    <li>ක්ෂුද්‍ර ව්‍යවසායකත්ව සංවර්ධන වැඩසටහන් සහ අලෙවි ප්‍රවර්ධන ක්‍රියාකාරකම් පැවැත්වීම.</li>
                    <li>ප්‍රජා සවිබල ගැන්වීම සඳහා ග්‍රාමීය සමෘද්ධි සමිති සක්‍රීයව පවත්වාගෙන යාම.</li>
                    <li>සමෘද්ධි සාමාජිකයින්ගේ ඉතුරුම් ගිණුම් කළමනාකරණය සහ ලාභාංශ ප්‍රදානයන් අධීක්ෂණය.</li>
                </ul>
                <p class="text-muted font-xs">පිහිටීම: සමෘද්ධි බැංකු ගොඩනැගිල්ල (කාර්යාල සංකීර්ණය ඉදිරිපිට), කඹුරුපිටිය.</p>
            `
        }
    };
    
    detailButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const branchKey = btn.getAttribute("data-branch");
            const data = branchInfo[branchKey];
            
            if (data) {
                modalContent.innerHTML = `
                    <div class="modal-header-section">
                        <div class="subtitle-badge">${data.badge}</div>
                        <h3 class="modal-header-title">${data.title}</h3>
                    </div>
                    <div class="modal-body-content">
                        ${data.content}
                    </div>
                `;
                modal.classList.add("active");
                modal.setAttribute("aria-hidden", "false");
            }
        });
    });
    
    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.classList.remove("active");
            modal.setAttribute("aria-hidden", "true");
        });
    });
}

function setupUnitModals() {
    const modal = document.getElementById("unit-modal");
    const closeBtns = modal.querySelectorAll(".modal-close, .modal-overlay");
    const detailLinks = document.querySelectorAll(".unit-link-more, .unit-card");
    const modalContent = document.getElementById("unit-modal-content");
    
    const unitInfo = {
        project: {
            title: "ව්යාපෘති ඒකකය (Project Unit)",
            content: `
                <p>ග්‍රාමීය ප්‍රතිලාභීන්ගේ ජීවන තත්ත්වය නංවාලීම සඳහා විවිධ ද්‍රව්‍යමය සහ යටිතල පහසුකම් සංවර්ධන ව්‍යාපෘති ක්‍රියාත්මක කරන්නේ මෙම ඒකකය මඟිනි.</p>
                <h4>ප්‍රධාන ව්‍යාපෘති:</h4>
                <ul class="modal-list">
                    <li><strong>සමෘද්ධි නිවාස ව්‍යාපෘතිය:</strong> නිවසක් නොමැති හෝ අසම්පූර්ණ නිවාස සහිත පවුල් සඳහා මුල්‍ය සහ ද්‍රව්‍යමය ආධාර සැපයීම.</li>
                    <li><strong>ජීවනෝපාය සංවර්ධන ව්‍යාපෘති:</strong> කෘෂිකාර්මික, සත්ව පාලන සහ කාර්මික අංශවලින් ස්වයං රැකියා ආරම්භ කිරීමට අවශ්‍ය මූලික උපකරණ සැපයීම.</li>
                    <li><strong>ග්‍රාමීය යටිතල පහසුකම්:</strong> ග්‍රාමීය මාර්ග, කුඩා පාලම් සහ පානීය ජල ව්‍යාපෘති ක්‍රියාත්මක කිරීම.</li>
                </ul>
            `
        },
        marketing: {
            title: "අලෙවි ඒකකය (Marketing Unit)",
            content: `
                <p>කුඩා හා මධ්‍ය පරිමාණ සමෘද්ධි ව්‍යවසායකයින්ගේ නිෂ්පාදන සඳහා වෙළඳපල සබඳතා ඇති කිරීම සහ අලෙවිකරණ කුසලතා වැඩිදියුණු කිරීම මෙම ඒකකය සතු වගකීමකි.</p>
                <h4>ක්‍රියාකාරකම්:</h4>
                <ul class="modal-list">
                    <li><strong>සමෘද්ධි පොළ සහ වෙළඳ ප්‍රදර්ශන:</strong> ප්‍රාදේශීය නිෂ්පාදකයින්ට තමන්ගේ නිෂ්පාදන සෘජුවම පාරිභෝගිකයා වෙත අලෙවි කිරීමට සතිපතා පොළවල් සංවිධානය කිරීම.</li>
                    <li><strong>ඇසුරුම්කරණ සහ තාක්ෂණික පුහුණුව:</strong> භාණ්ඩවල ගුණාත්මකභාවය සහ ආකර්ශනීය බව වැඩි කිරීමට වෘත්තීය මට්ටමේ පුහුණු පැවැත්වීම.</li>
                    <li><strong>සන්නාමකරණය (Branding):</strong> දේශීය නිෂ්පාදන සඳහා ගැලපෙන සන්නාම සකස් කරදීම.</li>
                </ul>
            `
        },
        social: {
            title: "සමාජ සංවර්ධන ඒකකය (Social Development Unit)",
            content: `
                <p>ප්‍රතිලාභී පවුල්වල ආධ්‍යාත්මික, සමාජීය සහ සෞඛ්‍යමය මට්ටම ඉහළ නැංවීමට විවිධ සුභසාධන සහ දැනුවත් කිරීමේ වැඩසටහන් මෙහෙයවනු ලබයි.</p>
                <h4>ක්‍රියාකාරකම්:</h4>
                <ul class="modal-list">
                    <li><strong>සමෘද්ධි සමාජ ආරක්ෂණ අරමුදල:</strong> සාමාජික පවුල්වල සිදුවන මරණ, විවාහ මෙන්ම දරු උපත් සහ හදිසි රෝගාබාධ වලදී රුපියල් 15,000 සිට 50,000 දක්වා සහන ආධාර ගෙවීම.</li>
                    <li><strong>ළමා හා තරුණ සවිබල ගැන්වීම:</strong> සමෘද්ධි දූ දරුවන්ගේ අධ්‍යාපනය දිරිගැන්වීමට "සිප්දොර" උසස් අධ්‍යාපන ශිෂ්‍යත්ව ක්‍රියාත්මක කිරීම.</li>
                    <li><strong>මත්ද්‍රව්‍ය නිවාරණ සහ පවුල් උපදේශනය:</strong> යහපත් සමාජ පරිසරයක් උදෙසා ග්‍රාමීය දැනුවත් කිරීම් සංවිධානය.</li>
                </ul>
            `
        },
        bank: {
            title: "ප්‍රජාමූල බැංකු ඒකකය (Community-based Banking Unit)",
            content: `
                <p>කඹුරුපිටිය බලප්‍රදේශයේ ක්‍රියාත්මක සමෘද්ධි ප්‍රජාමූල බැංකු මඟින් ග්‍රාමීය ජනතාවගේ මූල්‍ය අවශ්‍යතා කඩිනමින් සහ ලිහිල් කොන්දේසි මත සපුරාලයි.</p>
                <h4>මූල්‍ය සේවා:</h4>
                <ul class="modal-list">
                    <li><strong>ක්ෂුද්‍ර ණය පහසුකම්:</strong> ඇපකරුවන් නොමැතිව, ඉතා අඩු පොලී අනුපාත යටතේ ස්වයං රැකියා ණය, ගොවි ණය සහ පරිභෝජන ණය ලබාදීම.</li>
                    <li><strong>ඉතුරුම් සහ තැන්පතු:</strong> දරුවන්ගේ අධ්‍යාපනයට "කැකුළු" ගිණුම්, කාන්තාවන් සඳහා "දිරිය" ගිණුම් ඇතුළු විශේෂ ඉතුරුම් යෝජනා ක්‍රම.</li>
                    <li><strong>නිලධාරී ඉතුරුම් සහ විශ්‍රාම අරමුදල්:</strong> ප්‍රජාවගේ මූල්‍ය ස්වයංපෝෂිතභාවය ඉහළ නැංවීමේ සේවාවන්.</li>
                </ul>
            `
        },
        pension: {
            title: "විශ්‍රාම වැටුප් ඒකකය (Pension Unit)",
            content: `
                <p>මෙම ඒකකය මඟින් සමෘද්ධි සාමාජිකයින්ගේ සමාජ ආරක්ෂණ විශ්‍රාම වැටුප් සහ සේවයෙන් විශ්‍රාම ගිය සමෘද්ධි නිලධාරීන්ගේ විශ්‍රාම වැටුප් කළමනාකරණය සිදුකරනු ලබයි.</p>
                <h4>වගකීම්:</h4>
                <ul class="modal-list">
                    <li><strong>සමෘද්ධි සාමාජික විශ්‍රාම වැටුප:</strong> අවුරුදු 60 ඉක්මවූ ලියාපදිංචි සමෘද්ධි ප්‍රතිලාභීන් සඳහා විශ්‍රාම වැටුප් ගෙවීම් සකස් කිරීම.</li>
                    <li><strong>නිලධාරී විශ්‍රාම වැටුප් යෝජනා ක්‍රම:</strong> සේවයෙන් විශ්‍රාම ගත් සමෘද්ධි සංවර්ධන නිලධාරීන්ගේ විශ්‍රාම වැටුප් සහ පාරිතෝෂික දීමනා යාවත්කාලීන කිරීම.</li>
                    <li>ලේඛනගත කිරීම් සහ හිමිකම් පරීක්ෂා කිරීම් විධිමත්ව පවත්වාගෙන යාම.</li>
                </ul>
            `
        }
    };
    
    // Bind triggers (both the card click and the explicit link click)
    detailLinks.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            // Prevent double triggers if card and link nested
            e.stopPropagation();
            
            const unitKey = trigger.getAttribute("data-unit") || trigger.getAttribute("data-unit-target");
            const data = unitInfo[unitKey];
            
            if (data) {
                modalContent.innerHTML = `
                    <div class="modal-header-section">
                        <div class="subtitle-badge">ඒකක විස්තරය</div>
                        <h3 class="modal-header-title">${data.title}</h3>
                    </div>
                    <div class="modal-body-content">
                        ${data.content}
                    </div>
                `;
                modal.classList.add("active");
                modal.setAttribute("aria-hidden", "false");
            }
        });
    });
    
    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.classList.remove("active");
            modal.setAttribute("aria-hidden", "true");
        });
    });
}

function setupLightbox() {
    const modal = document.getElementById("lightbox-modal");
    const img = document.getElementById("lightbox-image");
    const caption = document.getElementById("lightbox-caption");
    const closeBtns = modal.querySelectorAll(".lightbox-close, .modal-overlay");
    
    window.openLightbox = function(src, desc) {
        img.src = src;
        caption.innerText = desc;
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
    };
    
    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.classList.remove("active");
            modal.setAttribute("aria-hidden", "true");
        });
    });
}

// --- Contact Form Submission ---
function setupContactForm() {
    const form = document.getElementById("contact-form");
    const successAlert = document.getElementById("contact-success");
    
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Simulating API loading/submission
            const submitBtn = form.querySelector("button[type='submit']");
            submitBtn.disabled = true;
            submitBtn.innerText = "යොමු වෙමින් පවතී...";
            
            setTimeout(() => {
                form.classList.add("hide");
                successAlert.classList.remove("hide");
                submitBtn.disabled = false;
                submitBtn.innerText = "පණිවිඩය යොමු කරන්න";
                
                // Automatically reset after 5 seconds to allow another message
                setTimeout(() => {
                    form.reset();
                    form.classList.remove("hide");
                    successAlert.classList.add("hide");
                }, 6000);
            }, 1200);
        });
    }
}


// --- Content Management System (CMS) Admin Dashboard Logic ---
function setupAdminPanel() {
    const adminModal = document.getElementById("admin-modal");
    const loginView = document.getElementById("admin-login-view");
    const dashboardView = document.getElementById("admin-dashboard-view");
    
    const adminLoginBtn = document.getElementById("admin-login-btn");
    const footerAdminLink = document.querySelector(".admin-link-trigger");
    const loginForm = document.getElementById("admin-login-form");
    const logoutBtn = document.getElementById("admin-logout-btn");
    
    const closeBtns = adminModal.querySelectorAll(".modal-close, .modal-overlay");
    const loginError = document.getElementById("login-error");
    
    // Open Admin view
    const openAdmin = () => {
        adminModal.classList.add("active");
        adminModal.setAttribute("aria-hidden", "false");
        
        // Check if already logged in
        if (localStorage.getItem("admin_logged_in") === "true") {
            loginView.classList.add("hide");
            dashboardView.classList.remove("hide");
            renderAdminDashboard();
        } else {
            loginView.classList.remove("hide");
            dashboardView.classList.add("hide");
        }
    };
    
    if (adminLoginBtn) adminLoginBtn.addEventListener("click", openAdmin);
    if (footerAdminLink) footerAdminLink.addEventListener("click", (e) => { e.preventDefault(); openAdmin(); });
    
    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            adminModal.classList.remove("active");
            adminModal.setAttribute("aria-hidden", "true");
            loginError.classList.add("hide");
        });
    });
    
    // Authentication Submission
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById("admin-username").value;
            const passwordInput = document.getElementById("admin-password").value;
            
            // Standard credentials
            if (usernameInput === "admin" && passwordInput === "admin123") {
                localStorage.setItem("admin_logged_in", "true");
                loginError.classList.add("hide");
                loginForm.reset();
                loginView.classList.add("hide");
                dashboardView.classList.remove("hide");
                renderAdminDashboard();
            } else {
                loginError.classList.remove("hide");
            }
        });
    }
    
    // Logout Handler
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.setItem("admin_logged_in", "false");
            dashboardView.classList.add("hide");
            loginView.classList.remove("hide");
        });
    }
    
    // Admin Dashboard internal Tabs
    const tabBtns = document.querySelectorAll(".admin-tab-btn");
    const tabContents = document.querySelectorAll(".admin-tab-content");
    
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));
            
            btn.classList.add("active");
            const targetId = btn.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
        });
    });

    // Setup CRUD Modal triggers
    setupCrudForms();
}

// Render dynamic tables inside CMS dashboard
function renderAdminDashboard() {
    renderAdminNewsTable();
    renderAdminStaffTable();
    renderAdminDownloadsTable();
    renderAdminGalleryTable();
}

function renderAdminNewsTable() {
    const tbody = document.getElementById("admin-news-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    newsData.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${item.title}</strong></td>
            <td><span class="news-badge badge-${item.category}">${item.category}</span></td>
            <td>${item.date}</td>
            <td class="admin-actions-cell">
                <button class="btn-action-edit" onclick="openEditForm('news', '${item.id}')" title="සංස්කරණය">
                    <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button class="btn-action-delete" onclick="deleteItem('news', '${item.id}')" title="මකන්න">
                    <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderAdminStaffTable() {
    const tbody = document.getElementById("admin-staff-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    staffData.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${item.name}</strong></td>
            <td>${item.designation}</td>
            <td>${item.phone}</td>
            <td class="admin-actions-cell">
                <button class="btn-action-edit" onclick="openEditForm('staff', '${item.id}')" title="සංස්කරණය">
                    <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button class="btn-action-delete" onclick="deleteItem('staff', '${item.id}')" title="මකන්න">
                    <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderAdminDownloadsTable() {
    const tbody = document.getElementById("admin-downloads-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    downloadsData.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${item.name}</strong></td>
            <td>${item.type}</td>
            <td>${item.date}</td>
            <td class="admin-actions-cell">
                <button class="btn-action-edit" onclick="openEditForm('downloads', '${item.id}')" title="සංස්කරණය">
                    <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button class="btn-action-delete" onclick="deleteItem('downloads', '${item.id}')" title="මකන්න">
                    <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderAdminGalleryTable() {
    const tbody = document.getElementById("admin-gallery-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    galleryData.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${item.image}" alt="" style="width: 50px; height: 35px; object-fit: cover; border-radius: 4px;"></td>
            <td>${item.caption}</td>
            <td class="admin-actions-cell">
                <button class="btn-action-edit" onclick="openEditForm('gallery', '${item.id}')" title="සංස්කරණය">
                    <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button class="btn-action-delete" onclick="deleteItem('gallery', '${item.id}')" title="මකන්න">
                    <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Delete item handler
window.deleteItem = function(type, id) {
    if (confirm("මෙම අයිතමය සම්පූර්ණයෙන්ම මකා දැමීමට අවශ්‍ය බව සහතිකද?")) {
        if (type === 'news') {
            newsData = newsData.filter(x => x.id !== id);
            saveState('samurdhi_news', newsData);
            renderNewsCards();
            renderAdminNewsTable();
        } else if (type === 'staff') {
            staffData = staffData.filter(x => x.id !== id);
            saveState('samurdhi_staff', staffData);
            renderStaffCards();
            renderAdminStaffTable();
        } else if (type === 'downloads') {
            downloadsData = downloadsData.filter(x => x.id !== id);
            saveState('samurdhi_downloads', downloadsData);
            renderDownloadsTable();
            renderAdminDownloadsTable();
        } else if (type === 'gallery') {
            galleryData = galleryData.filter(x => x.id !== id);
            saveState('samurdhi_gallery', galleryData);
            renderGalleryGrid();
            renderAdminGalleryTable();
        }
    }
};

// Form variables to track edits
let currentFormType = "";
let currentEditId = null;

function setupCrudForms() {
    const formModal = document.getElementById("admin-form-modal");
    const cancelBtn = document.getElementById("btn-cancel-admin-form");
    const closeBtn = document.getElementById("admin-form-close-btn");
    const universalForm = document.getElementById("admin-universal-form");
    
    const closeForm = () => {
        formModal.classList.remove("active");
        formModal.setAttribute("aria-hidden", "true");
        currentEditId = null;
        universalForm.reset();
    };
    
    cancelBtn.addEventListener("click", closeForm);
    closeBtn.addEventListener("click", closeForm);
    
    // Bind Add buttons
    document.getElementById("btn-add-news-modal").addEventListener("click", () => openCreateForm("news"));
    document.getElementById("btn-add-staff-modal").addEventListener("click", () => openCreateForm("staff"));
    document.getElementById("btn-add-download-modal").addEventListener("click", () => openCreateForm("downloads"));
    document.getElementById("btn-add-gallery-modal").addEventListener("click", () => openCreateForm("gallery"));
    
    // Submit form logic
    universalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        saveFormSubmit(closeForm);
    });
}

function openCreateForm(type) {
    currentFormType = type;
    currentEditId = null;
    
    const formTitle = document.getElementById("admin-form-title");
    formTitle.innerText = getFormTitleLabel(type, false);
    
    generateFormFields(type);
    
    const formModal = document.getElementById("admin-form-modal");
    formModal.classList.add("active");
    formModal.setAttribute("aria-hidden", "false");
}

window.openEditForm = function(type, id) {
    currentFormType = type;
    currentEditId = id;
    
    const formTitle = document.getElementById("admin-form-title");
    formTitle.innerText = getFormTitleLabel(type, true);
    
    generateFormFields(type, id);
    
    const formModal = document.getElementById("admin-form-modal");
    formModal.classList.add("active");
    formModal.setAttribute("aria-hidden", "false");
};

function getFormTitleLabel(type, isEdit) {
    const action = isEdit ? "සංස්කරණය" : "එක් කිරීම";
    if (type === 'news') return `පුවතක් ${action}`;
    if (type === 'staff') return `නිලධාරියෙක් ${action}`;
    if (type === 'downloads') return `ලේඛනයක් ${action}`;
    if (type === 'gallery') return `පින්තූරයක් ${action}`;
    return `අයිතමය ${action}`;
}

// Generate HTML Form inputs on-the-fly
function generateFormFields(type, editId = null) {
    const fieldsContainer = document.getElementById("dynamic-form-fields");
    fieldsContainer.innerHTML = "";
    
    if (type === 'news') {
        const item = editId ? newsData.find(x => x.id === editId) : { title: "", category: "announcement", date: new Date().toISOString().split('T')[0], excerpt: "", content: "" };
        
        fieldsContainer.innerHTML = `
            <div class="form-group">
                <label for="f-title">මාතෘකාව <span class="required">*</span></label>
                <input type="text" id="f-title" required value="${item.title}">
            </div>
            <div class="form-group">
                <label for="f-category">වර්ගීකරණය</label>
                <select id="f-category">
                    <option value="announcement" ${item.category === 'announcement' ? 'selected' : ''}>නිවේදන</option>
                    <option value="circular" ${item.category === 'circular' ? 'selected' : ''}>චක්‍රලේඛ</option>
                    <option value="project" ${item.category === 'project' ? 'selected' : ''}>ව්‍යාපෘති පුවත්</option>
                    <option value="notice" ${item.category === 'notice' ? 'selected' : ''}>ප්‍රතිලාභී දැනුම්දීම්</option>
                </select>
            </div>
            <div class="form-group">
                <label for="f-date">දිනය <span class="required">*</span></label>
                <input type="date" id="f-date" required value="${item.date}">
            </div>
            <div class="form-group">
                <label for="f-excerpt">සාරාංශය (කෙටි විස්තරය) <span class="required">*</span></label>
                <input type="text" id="f-excerpt" required value="${item.excerpt}">
            </div>
            <div class="form-group">
                <label for="f-content">සම්පූර්ණ අන්තර්ගතය <span class="required">*</span></label>
                <textarea id="f-content" rows="6" required>${item.content}</textarea>
            </div>
        `;
    } 
    else if (type === 'staff') {
        const item = editId ? staffData.find(x => x.id === editId) : { name: "", designation: "", phone: "", email: "", photo: "" };
        
        fieldsContainer.innerHTML = `
            <div class="form-group">
                <label for="f-name">නම <span class="required">*</span></label>
                <input type="text" id="f-name" required value="${item.name}">
            </div>
            <div class="form-group">
                <label for="f-designation">තනතුර <span class="required">*</span></label>
                <input type="text" id="f-designation" required value="${item.designation}">
            </div>
            <div class="form-group">
                <label for="f-phone">දුරකථනය <span class="required">*</span></label>
                <input type="tel" id="f-phone" required value="${item.phone}">
            </div>
            <div class="form-group">
                <label for="f-email">විද්‍යුත් ලිපිනය <span class="required">*</span></label>
                <input type="email" id="f-email" required value="${item.email}">
            </div>
            <div class="form-group">
                <label for="f-photo">ඡායාරූපය (ඇත්නම් පමණක්)</label>
                <input type="file" id="f-photo" accept="image/*">
                <input type="hidden" id="f-photo-base64" value="${item.photo}">
                <div class="image-preview-box" id="preview-staff-box">
                    ${item.photo ? `<img src="${item.photo}">` : `<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`}
                </div>
            </div>
        `;
        
        // Setup FileReader base64 converter
        document.getElementById("f-photo").addEventListener("change", function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    document.getElementById("f-photo-base64").value = evt.target.result;
                    document.getElementById("preview-staff-box").innerHTML = `<img src="${evt.target.result}">`;
                };
                reader.readAsDataURL(file);
            }
        });
    }
    else if (type === 'downloads') {
        const item = editId ? downloadsData.find(x => x.id === editId) : { name: "", type: "PDF", size: "", date: new Date().toISOString().split('T')[0] };
        
        fieldsContainer.innerHTML = `
            <div class="form-group">
                <label for="f-name">ලේඛන නාමය <span class="required">*</span></label>
                <input type="text" id="f-name" required value="${item.name}">
            </div>
            <div class="form-group">
                <label for="f-type">ලේඛන වර්ගය</label>
                <select id="f-type">
                    <option value="PDF" ${item.type === 'PDF' ? 'selected' : ''}>PDF</option>
                    <option value="DOCX" ${item.type === 'DOCX' ? 'selected' : ''}>DOCX / Word</option>
                </select>
            </div>
            <div class="form-group">
                <label for="f-size">ප්‍රමාණය (Size, e.g. 250 KB) <span class="required">*</span></label>
                <input type="text" id="f-size" required value="${item.size}">
            </div>
            <div class="form-group">
                <label for="f-date">දිනය <span class="required">*</span></label>
                <input type="date" id="f-date" required value="${item.date}">
            </div>
        `;
    }
    else if (type === 'gallery') {
        const item = editId ? galleryData.find(x => x.id === editId) : { caption: "", image: "" };
        
        fieldsContainer.innerHTML = `
            <div class="form-group">
                <label for="f-caption">ඡායාරූප විස්තරය (Caption) <span class="required">*</span></label>
                <input type="text" id="f-caption" required value="${item.caption}">
            </div>
            <div class="form-group">
                <label for="f-image">ඡායාරූපය උඩුගත කරන්න <span class="required">*</span></label>
                <input type="file" id="f-image" accept="image/*" ${editId ? '' : 'required'}>
                <input type="hidden" id="f-image-base64" value="${item.image}">
                <div class="image-preview-box" id="preview-gallery-box" style="width:100%; height: 130px; border-radius: 6px;">
                    ${item.image ? `<img src="${item.image}">` : `<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`}
                </div>
            </div>
        `;
        
        // Setup FileReader base64 converter
        document.getElementById("f-image").addEventListener("change", function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    document.getElementById("f-image-base64").value = evt.target.result;
                    document.getElementById("preview-gallery-box").innerHTML = `<img src="${evt.target.result}" style="width:100%; height: 100%; object-fit:cover;">`;
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// Save Admin universal form submission
function saveFormSubmit(callback) {
    if (currentFormType === 'news') {
        const titleVal = document.getElementById("f-title").value;
        const catVal = document.getElementById("f-category").value;
        const dateVal = document.getElementById("f-date").value;
        const excerptVal = document.getElementById("f-excerpt").value;
        const contentVal = document.getElementById("f-content").value;
        
        if (currentEditId) {
            // Edit existing
            const index = newsData.findIndex(x => x.id === currentEditId);
            if (index !== -1) {
                newsData[index] = { id: currentEditId, title: titleVal, category: catVal, date: dateVal, excerpt: excerptVal, content: contentVal };
            }
        } else {
            // Create new
            const newObj = {
                id: "news-" + Date.now(),
                title: titleVal,
                category: catVal,
                date: dateVal,
                excerpt: excerptVal,
                content: contentVal
            };
            newsData.unshift(newObj);
        }
        saveState('samurdhi_news', newsData);
        renderNewsCards();
        renderAdminNewsTable();
    }
    else if (currentFormType === 'staff') {
        const nameVal = document.getElementById("f-name").value;
        const desVal = document.getElementById("f-designation").value;
        const phoneVal = document.getElementById("f-phone").value;
        const emailVal = document.getElementById("f-email").value;
        const photoVal = document.getElementById("f-photo-base64").value;
        
        if (currentEditId) {
            const index = staffData.findIndex(x => x.id === currentEditId);
            if (index !== -1) {
                staffData[index] = { id: currentEditId, name: nameVal, designation: desVal, phone: phoneVal, email: emailVal, photo: photoVal };
            }
        } else {
            const newObj = {
                id: "staff-" + Date.now(),
                name: nameVal,
                designation: desVal,
                phone: phoneVal,
                email: emailVal,
                photo: photoVal
            };
            staffData.push(newObj);
        }
        saveState('samurdhi_staff', staffData);
        renderStaffCards();
        renderAdminStaffTable();
    }
    else if (currentFormType === 'downloads') {
        const nameVal = document.getElementById("f-name").value;
        const typeVal = document.getElementById("f-type").value;
        const sizeVal = document.getElementById("f-size").value;
        const dateVal = document.getElementById("f-date").value;
        
        if (currentEditId) {
            const index = downloadsData.findIndex(x => x.id === currentEditId);
            if (index !== -1) {
                downloadsData[index] = { id: currentEditId, name: nameVal, type: typeVal, size: sizeVal, date: dateVal };
            }
        } else {
            const newObj = {
                id: "dl-" + Date.now(),
                name: nameVal,
                type: typeVal,
                size: sizeVal,
                date: dateVal
            };
            downloadsData.unshift(newObj);
        }
        saveState('samurdhi_downloads', downloadsData);
        renderDownloadsTable();
        renderAdminDownloadsTable();
    }
    else if (currentFormType === 'gallery') {
        const capVal = document.getElementById("f-caption").value;
        const imgVal = document.getElementById("f-image-base64").value;
        
        if (currentEditId) {
            const index = galleryData.findIndex(x => x.id === currentEditId);
            if (index !== -1) {
                galleryData[index] = { id: currentEditId, caption: capVal, image: imgVal ? imgVal : galleryData[index].image };
            }
        } else {
            const newObj = {
                id: "gal-" + Date.now(),
                caption: capVal,
                image: imgVal
            };
            galleryData.unshift(newObj);
        }
        saveState('samurdhi_gallery', galleryData);
        renderGalleryGrid();
        renderAdminGalleryTable();
    }
    
    // Reset and close
    callback();
}

// --- Hero Section Image Slider / Carousel ---
function setupHeroSlider() {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".slider-dot");
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    const heroSection = document.querySelector(".hero");
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let slideInterval = null;
    const intervalTime = 6000; // Auto-slide every 6 seconds
    
    function showSlide(index) {
        // Deactivate current slide and dot
        slides[currentSlide].classList.remove("active");
        if (dots.length > currentSlide) {
            dots[currentSlide].classList.remove("active");
        }
        
        // Wrap index around boundaries
        currentSlide = (index + slides.length) % slides.length;
        
        // Activate new slide and dot
        slides[currentSlide].classList.add("active");
        if (dots.length > currentSlide) {
            dots[currentSlide].classList.add("active");
        }
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    function startAutoSlide() {
        if (!slideInterval) {
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    }
    
    function stopAutoSlide() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }
    
    // Bind Arrow Clicks
    if (prevArrow) {
        prevArrow.addEventListener("click", () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });
    }
    
    if (nextArrow) {
        nextArrow.addEventListener("click", () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
    }
    
    // Bind Dots Clicks
    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const targetIndex = parseInt(e.target.getAttribute("data-slide"), 10);
            stopAutoSlide();
            showSlide(targetIndex);
            startAutoSlide();
        });
    });
    
    // Pause Auto-slide on Hover
    if (heroSection) {
        heroSection.addEventListener("mouseenter", stopAutoSlide);
        heroSection.addEventListener("mouseleave", startAutoSlide);
    }
    
    // Start Auto-sliding
    startAutoSlide();
}
