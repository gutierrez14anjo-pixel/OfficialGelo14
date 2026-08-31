/* =========================================================
   FEATURED BUSINESSES — SINGLE SOURCE OF TRUTH
   Exactly 5 cards / 5 categories / 3 photos per card.
   Previous, Next and swipe operate only on the selected card.
========================================================= */

const businessData = [
  {
    category: "Fashion & Clothing",
    businessName: "Veloura Apparel",
    productName: "Everyday Style Collection",
    description: "Trendy and comfortable clothing for every style and occasion.",
    logoClass: "logo-fashion",
    logoType: "fashion",
    photos: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85"
    ],
    shops: {
      tiktok: "",
      shopee: "",
      lazada: "",
      facebook: ""
    }
  },
  {
    category: "Beauty & Personal Care",
    businessName: "Glowtique Beauty",
    productName: "Natural Glow Essentials",
    description: "Skincare and beauty essentials that bring out your natural glow.",
    logoClass: "logo-beauty",
    logoType: "beauty",
    photos: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1200&q=85"
    ],
    shops: {
      tiktok: "",
      shopee: "",
      lazada: "",
      facebook: ""
    }
  },
  {
    category: "Home & Living",
    businessName: "Casa Verde Living",
    productName: "Everyday Home Collection",
    description: "Stylish and functional home essentials for everyday living.",
    logoClass: "logo-home",
    logoType: "home",
    photos: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
    ],
    shops: {
      tiktok: "",
      shopee: "",
      lazada: "",
      facebook: ""
    }
  },
  {
    category: "Health, Fitness & Wellness",
    businessName: "FitLife Hub",
    productName: "Fitness & Wellness Essentials",
    description: "Quality fitness gear and wellness products for a healthier you.",
    logoClass: "logo-health",
    logoType: "health",
    photos: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=85"
    ],
    shops: {
      tiktok: "",
      shopee: "",
      lazada: "",
      facebook: ""
    }
  },
  {
    category: "Gifts & Personalized Products",
    businessName: "Giftique Studio",
    productName: "Personalized Gift Collection",
    description: "Personalized gifts and custom items made with heart and creativity.",
    logoClass: "logo-gifts",
    logoType: "gifts",
    photos: [
      "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1200&q=85"
    ],
    shops: {
      tiktok: "",
      shopee: "",
      lazada: "",
      facebook: ""
    }
  }
];

const businessGrid = document.getElementById("businessGrid");
const viewer = document.getElementById("businessViewer");
const viewerImage = document.getElementById("viewerImage");
const viewerTitle = document.getElementById("viewerTitle");
const viewerDescription = document.getElementById("viewerDescription");
const shopLinks = document.getElementById("shopLinks");
const viewerClose = document.getElementById("viewerClose");
const viewerPrev = document.getElementById("viewerPrev");
const viewerNext = document.getElementById("viewerNext");
const viewerPhotoArea = document.querySelector(".viewer-photo");
const menu = document.getElementById("menu");
const mobileNav = document.getElementById("mobileNav");

let selectedBusinessIndex = -1;
let selectedPhotoIndex = 0;
let touchStartX = 0;
let touchStartY = 0;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function logoMarkup(type) {
  const common = 'viewBox="0 0 100 100" aria-hidden="true"';

  if (type === "fashion") {
    return `<svg ${common}>
      <path d="M35 31c4-6 26-6 30 0l9 9-8 9-6-6v27H40V43l-6 6-8-9 9-9z" fill="none" stroke="currentColor" stroke-width="3"/>
      <path d="M44 29c0 8 12 8 12 0" fill="none" stroke="currentColor" stroke-width="3"/>
      <text x="50" y="84" text-anchor="middle" font-size="12" font-family="Georgia,serif">VELOURA</text>
    </svg>`;
  }

  if (type === "beauty") {
    return `<svg ${common}>
      <path d="M50 70c-15-5-20-18-13-30 5-8 13-13 13-13s8 5 13 13c7 12 2 25-13 30z" fill="none" stroke="currentColor" stroke-width="3"/>
      <path d="M50 27c-1-8 3-13 9-17M50 34c-9-3-15-1-20 5M52 38c8-6 15-6 21-2" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <text x="50" y="87" text-anchor="middle" font-size="11" font-family="Georgia,serif">GLOWTIQUE</text>
    </svg>`;
  }

  if (type === "home") {
    return `<svg ${common}>
      <path d="M22 45 50 21l28 24v32H22z" fill="none" stroke="currentColor" stroke-width="3"/>
      <path d="M40 77V57h20v20M50 39v24M41 53c5-3 12-1 14 5-7 1-12-1-14-5z" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <text x="50" y="91" text-anchor="middle" font-size="9" font-family="Georgia,serif">CASA VERDE</text>
    </svg>`;
  }

  if (type === "health") {
    return `<svg ${common}>
      <path d="M24 43h52M32 36v28M68 36v28M25 55h50M43 26v38M57 26v38" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
      <circle cx="43" cy="26" r="5" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <circle cx="57" cy="26" r="5" fill="none" stroke="currentColor" stroke-width="2.5"/>
      <text x="50" y="88" text-anchor="middle" font-size="10" font-family="Georgia,serif">FITLIFE</text>
    </svg>`;
  }

  return `<svg ${common}>
    <path d="M27 40h46v38H27zM20 40h60M50 40v38" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M50 40c-16 0-18-16-8-16 8 0 8 10 8 16zm0 0c16 0 18-16 8-16-8 0-8 10-8 16z" fill="none" stroke="currentColor" stroke-width="3"/>
    <text x="50" y="91" text-anchor="middle" font-size="10" font-family="Georgia,serif">GIFTIQUE</text>
  </svg>`;
}

function renderBusinessCards() {
  // Defensive guard: this page is permanently limited to exactly five records.
  const records = businessData.slice(0, 5);

  businessGrid.innerHTML = records.map((business, index) => `
    <article class="business-card" data-business-index="${index}" tabindex="0" role="button" aria-label="View ${escapeHtml(business.businessName)}">
      <div class="business-logo ${business.logoClass}">
        ${logoMarkup(business.logoType)}
      </div>

      <h2>${escapeHtml(business.businessName)}</h2>
      <p class="business-category">${escapeHtml(business.category)}</p>
      <p class="business-description">${escapeHtml(business.description)}</p>

      <span class="view-business">
        View Business
        <span aria-hidden="true">→</span>
      </span>
    </article>
  `).join("");

  businessGrid.querySelectorAll(".business-card").forEach(card => {
    const index = Number(card.dataset.businessIndex);

    card.addEventListener("click", () => openBusiness(index));

    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openBusiness(index);
      }
    });
  });
}

const shopDefinitions = [
  { key: "tiktok", name: "TikTok Shop", icon: "♪" },
  { key: "shopee", name: "Shopee", icon: "S" },
  { key: "lazada", name: "Lazada", icon: "L" },
  { key: "facebook", name: "Facebook Marketplace", icon: "f" }
];

function renderShopLinks(business) {
  shopLinks.innerHTML = "";

  shopDefinitions.forEach(shop => {
    const url = business.shops?.[shop.key];

    // Blank platform = hidden platform.
    if (!url) return;

    const link = document.createElement("a");
    link.className = "shop-link";
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    link.innerHTML = `
      <span class="shop-icon" aria-hidden="true">${escapeHtml(shop.icon)}</span>
      <span class="shop-name">${escapeHtml(shop.name)}</span>
      <span class="shop-external" aria-hidden="true">↗</span>
    `;

    shopLinks.appendChild(link);
  });

  // The product viewer must always show the buying-platform heading.
  // Individual platforms remain optional: only platforms with a real URL
  // are displayed underneath it.
  const heading = viewer.querySelector(".viewer-info h3");
  heading.style.display = "";

  if (shopLinks.children.length) {
    shopLinks.style.display = "";
  } else {
    shopLinks.style.display = "";
    shopLinks.innerHTML = '<p class="shop-empty">Seller platform links will appear here when available.</p>';
  }
}

function showBusinessPhoto(index) {
  if (selectedBusinessIndex < 0) return;

  const business = businessData[selectedBusinessIndex];
  const photos = business.photos;

  if (!Array.isArray(photos) || photos.length !== 3) return;

  selectedPhotoIndex = ((index % photos.length) + photos.length) % photos.length;

  viewerImage.src = photos[selectedPhotoIndex];
  viewerImage.alt = `${business.productName} — example photo ${selectedPhotoIndex + 1}`;
}

function openBusiness(index) {
  const business = businessData[index];

  if (!business) return;

  // Selected business is the permanent navigation context.
  selectedBusinessIndex = index;
  selectedPhotoIndex = 0;

  viewerTitle.textContent = business.businessName;
  viewerDescription.textContent = business.description;

  renderShopLinks(business);
  showBusinessPhoto(0);

  viewer.classList.add("open");
  viewer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  viewerClose.focus();
}

function closeBusiness() {
  viewer.classList.remove("open");
  viewer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  selectedBusinessIndex = -1;
  selectedPhotoIndex = 0;
}

function nextBusinessPhoto() {
  if (selectedBusinessIndex < 0) return;
  showBusinessPhoto(selectedPhotoIndex + 1);
}

function previousBusinessPhoto() {
  if (selectedBusinessIndex < 0) return;
  showBusinessPhoto(selectedPhotoIndex - 1);
}

viewerClose.addEventListener("click", closeBusiness);
viewerNext.addEventListener("click", nextBusinessPhoto);
viewerPrev.addEventListener("click", previousBusinessPhoto);

viewer.addEventListener("click", event => {
  // Only the overlay itself closes the viewer.
  if (event.target === viewer) {
    closeBusiness();
  }
});

document.addEventListener("keydown", event => {
  if (!viewer.classList.contains("open")) return;

  if (event.key === "Escape") closeBusiness();
  if (event.key === "ArrowRight") nextBusinessPhoto();
  if (event.key === "ArrowLeft") previousBusinessPhoto();
});

viewerPhotoArea.addEventListener("touchstart", event => {
  const touch = event.changedTouches[0];
  touchStartX = touch.screenX;
  touchStartY = touch.screenY;
}, { passive: true });

viewerPhotoArea.addEventListener("touchend", event => {
  const touch = event.changedTouches[0];
  const differenceX = touch.screenX - touchStartX;
  const differenceY = touch.screenY - touchStartY;

  // Horizontal swipe only; vertical movement is ignored.
  if (Math.abs(differenceX) < 50) return;
  if (Math.abs(differenceX) < Math.abs(differenceY)) return;

  if (differenceX < 0) {
    nextBusinessPhoto();
  } else {
    previousBusinessPhoto();
  }
}, { passive: true });

menu.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  });
});

/* Footer links */
const gelomindButton = document.getElementById("gelomindButton");
const gelomindChat = document.getElementById("gelomindChat");
const gelomindChatClose = document.getElementById("gelomindChatClose");
const gelomindChatForm = document.getElementById("gelomindChatForm");
const gelomindChatInput = document.getElementById("gelomindChatInput");
const gelomindChatMessages = document.getElementById("gelomindChatMessages");

function openGeloMind(){
  gelomindChat.classList.add("open");
  gelomindChat.setAttribute("aria-hidden", "false");
  gelomindButton.setAttribute("aria-expanded", "true");
  setTimeout(() => gelomindChatInput.focus(), 120);
}

function closeGeloMind(){
  gelomindChat.classList.remove("open");
  gelomindChat.setAttribute("aria-hidden", "true");
  gelomindButton.setAttribute("aria-expanded", "false");
}

function addGeloMessage(text, type){
  const message = document.createElement("div");
  message.className = `gelomind-message ${type}`;
  message.textContent = text;
  gelomindChatMessages.appendChild(message);
  gelomindChatMessages.scrollTop = gelomindChatMessages.scrollHeight;
}

function getGeloMindLocalReply(text){
  const q = text.toLowerCase();

  if (q.includes("business") || q.includes("card") || q.includes("product")) {
    return "You can select any Featured Business card to view its product photos and available buying platforms.";
  }

  if (q.includes("buy") || q.includes("shop") || q.includes("lazada") || q.includes("shopee") || q.includes("tiktok")) {
    return "Open a business card and choose View Business. The Product Viewer shows the available buying platforms for that product.";
  }

  if (q.includes("contact") || q.includes("email") || q.includes("gmail")) {
    return "You can contact OfficialGelo14 through the Gmail icon in the footer.";
  }

  return "I'm GeloMind for the Featured Businesses page. Ask me about the featured businesses, products, photos, or buying options.";
}

gelomindButton.addEventListener("click", openGeloMind);
gelomindChatClose.addEventListener("click", closeGeloMind);

gelomindChat.addEventListener("click", event => {
  if (event.target === gelomindChat) closeGeloMind();
});

gelomindChatForm.addEventListener("submit", event => {
  event.preventDefault();
  const text = gelomindChatInput.value.trim();
  if (!text) return;

  addGeloMessage(text, "user");
  gelomindChatInput.value = "";

  setTimeout(() => {
    addGeloMessage(getGeloMindLocalReply(text), "assistant");
  }, 180);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && gelomindChat.classList.contains("open")) {
    closeGeloMind();
  }
});

renderBusinessCards();
