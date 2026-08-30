 const menu = document.getElementById("menu");
const nav = document.getElementById("navlinks");

menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".navlinks a").forEach(a =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
 
/* ================================
   DISCOVER CLICK DROPDOWN
================================ */

const discoverDropdown =
  document.querySelector(".nav-dropdown");

const discoverButton =
  document.querySelector(".nav-dropdown-btn");

if (discoverDropdown && discoverButton) {

  discoverButton.addEventListener("click", function(event) {

    event.stopPropagation();

    discoverDropdown.classList.toggle("open");

  });

  document.addEventListener("click", function(event) {

    if (!discoverDropdown.contains(event.target)) {

      discoverDropdown.classList.remove("open");

    }

  });

}
const businessTrack = document.querySelector(".business-placement-track");
const businessNextButton = document.querySelector(".business-product-next");

let businessProductPage = 0;

function nextBusinessProducts() {
  if (!businessTrack) return;

  const cards = businessTrack.querySelectorAll(".business-product-card");
  if (!cards.length) return;

  const card = cards[0];
  const cardStyle = window.getComputedStyle(card);
  const trackStyle = window.getComputedStyle(businessTrack);

  const cardWidth = card.getBoundingClientRect().width;
  const gap = parseFloat(trackStyle.gap) || 0;

  const moveDistance = (cardWidth + gap) * 3;
  const maxPage = Math.ceil(cards.length / 3) - 1;

  if (businessProductPage < maxPage) {
    businessProductPage++;

    businessTrack.style.transform =
      `translateX(-${moveDistance * businessProductPage}px)`;
  }
}
function previousBusinessProducts() {
  if (!businessTrack) return;

  if (businessProductPage > 0) {
    businessProductPage--;

    const cards = businessTrack.querySelectorAll(".business-product-card");
    if (!cards.length) return;

    const card = cards[0];
    const trackStyle = window.getComputedStyle(businessTrack);

    const cardWidth = card.getBoundingClientRect().width;
    const gap = parseFloat(trackStyle.gap) || 0;

    const moveDistance = (cardWidth + gap) * 3;

    businessTrack.style.transform =
      `translateX(-${moveDistance * businessProductPage}px)`;
  }
}/* =========================================
   BUSINESS PRODUCT VIEWER
========================================= */

 const businessProducts = [
  {
    title: "Glow Skin Set",
    description: "Simple skincare essentials for everyday use.",
    image: "https://placehold.co/1000x800/e8f7ff/5b7180?text=Product+1",
    photos: [
      "https://placehold.co/1000x800/e8f7ff/5b7180?text=Product+1+Photo+1",
      "https://placehold.co/1000x800/dff4ff/5b7180?text=Product+1+Photo+2",
      "https://placehold.co/1000x800/d5efff/5b7180?text=Product+1+Photo+3"
    ],
     shops: {
  lazada: "",
  shopee: "",
  tiktok: ""
}
  },
  {
    title: "Portable Blender",
    description: "A compact rechargeable blender for everyday convenience.",
    image: "https://placehold.co/1000x800/e8f7ff/5b7180?text=Product+2",
    photos: [
      "https://placehold.co/1000x800/e8f7ff/5b7180?text=Product+1+Photo+1",
      "https://placehold.co/1000x800/dff4ff/5b7180?text=Product+1+Photo+2",
      "https://placehold.co/1000x800/d5efff/5b7180?text=Product+1+Photo+3"
    ],
    shops: {
  lazada: "",
  shopee: "",
  tiktok: ""
}
  },
  {
    title: "Wireless Earbuds",
    description: "Compact wireless audio for everyday listening.",
    image: "https://placehold.co/1000x800/e8f7ff/5b7180?text=Product+3",
    photos: [
      "https://placehold.co/1000x800/e8f7ff/5b7180?text=Product+1+Photo+1",
      "https://placehold.co/1000x800/dff4ff/5b7180?text=Product+1+Photo+2",
      "https://placehold.co/1000x800/d5efff/5b7180?text=Product+1+Photo+3"
    ],
    shops: {
  lazada: "",
  shopee: "",
  tiktok: ""
}
  },
  {
    title: "Mini Aroma Diffuser",
    description: "A small and stylish diffuser for your personal space.",
    image: "https://placehold.co/1000x800/e8f7ff/5b7180?text=Product+4",
    photos: [
      "https://placehold.co/1000x800/e8f7ff/5b7180?text=Product+1+Photo+1",
      "https://placehold.co/1000x800/dff4ff/5b7180?text=Product+1+Photo+2",
      "https://placehold.co/1000x800/d5efff/5b7180?text=Product+1+Photo+3"
    ],
shops: {
  lazada: "",
  shopee: "",
  tiktok: ""
}  },
  {
    title: "LED Desk Lamp",
    description: "Adjustable lighting for work, study and everyday use.",
    image: "https://placehold.co/1000x800/e8f7ff/5b7180?text=Product+5",
    photos: [
      "https://placehold.co/1000x800/e8f7ff/5b7180?text=Product+1+Photo+1",
      "https://placehold.co/1000x800/dff4ff/5b7180?text=Product+1+Photo+2",
      "https://placehold.co/1000x800/d5efff/5b7180?text=Product+1+Photo+3"
    ],
shops: {
  lazada: "",
  shopee: "",
  tiktok: ""
}  },
  {
    title: "Portable Fan",
    description: "A rechargeable mini fan for convenient cooling.",
    image: "https://placehold.co/1000x800/e8f7ff/5b7180?text=Product+6",
    photos: [
      "https://placehold.co/1000x800/e8f7ff/5b7180?text=Product+1+Photo+1",
      "https://placehold.co/1000x800/dff4ff/5b7180?text=Product+1+Photo+2",
      "https://placehold.co/1000x800/d5efff/5b7180?text=Product+1+Photo+3"
    ],
shops: {
  lazada: "",
  shopee: "",
  tiktok: ""
}  },
  {
    title: "Travel Organizer",
    description: "A practical organizer for keeping travel essentials together.",
    image: "https://placehold.co/1000x800/e8f7ff/5b7180?text=Product+7",
    photos: [
      "https://placehold.co/1000x800/e8f7ff/5b7180?text=Product+1+Photo+1",
      "https://placehold.co/1000x800/dff4ff/5b7180?text=Product+1+Photo+2",
      "https://placehold.co/1000x800/d5efff/5b7180?text=Product+1+Photo+3"
    ],
shops: {
  lazada: "",
  shopee: "",
  tiktok: ""
}  }
];

function openBusinessProduct(index) {
  const product = businessProducts[index];

  if (!product) return;
  currentBusinessProduct = product;
businessPhotoIndex = 0;

  const viewer = document.getElementById("business-product-viewer");
  const image = document.getElementById("business-product-viewer-image");
  const title = document.getElementById("business-product-viewer-title");
  const description = document.getElementById("business-product-viewer-description");
  const shopLinks = document.getElementById("business-product-viewer-shop-links");

if (!viewer || !image || !title || !description || !shopLinks) return;

  showBusinessPhoto(0);
  image.alt = product.title;
  title.textContent = product.title;
  description.textContent = product.description;
   shopLinks.innerHTML = "";

const shopData = [
  {
    key: "lazada",
    name: "Lazada",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/lazada.svg"
  },
  {
    key: "shopee",
    name: "Shopee",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/shopee.svg"
  },
  {
    key: "tiktok",
    name: "TikTok Shop",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tiktok.svg"
  }
];

shopData.forEach(shop => {
  const url = product.shops?.[shop.key];

  if (!url) return;

  const link = document.createElement("a");

  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "business-product-shop-link";

  link.innerHTML = `
    <img src="${shop.icon}" alt="${shop.name}">
    <span>${shop.name}</span>
    <span>↗</span>
  `;

  shopLinks.appendChild(link);
});

   viewer.classList.add("active");
}

function closeBusinessProduct() {
  const viewer = document.getElementById("business-product-viewer");

  if (!viewer) return;

  viewer.classList.remove("active");
  document.body.style.overflow = "";
}
document.addEventListener("click", function (event) {
  const viewer = document.getElementById("business-product-viewer");
  const card = document.querySelector(".business-product-viewer-card");

  if (!viewer || !card) return;

  if (!viewer.classList.contains("active")) return;

  if (event.target === viewer) {
    closeBusinessProduct();
  }
});
/* =========================================
   BUSINESS PRODUCT PHOTO GALLERY
========================================= */

let businessPhotoIndex = 0;
let currentBusinessProduct = null;

function showBusinessPhoto(index) {
  if (!currentBusinessProduct) return;

  const photos = currentBusinessProduct.photos || [
    currentBusinessProduct.image
  ];

  if (!photos.length) return;

  if (index < 0) {
    index = photos.length - 1;
  }

  if (index >= photos.length) {
    index = 0;
  }

  businessPhotoIndex = index;

  const image = document.getElementById(
    "business-product-viewer-image"
  );

  if (!image) return;

  image.src = photos[businessPhotoIndex];
  image.alt = currentBusinessProduct.title;
}

function nextBusinessPhoto() {
  if (!currentBusinessProduct) return;

  const photos = currentBusinessProduct.photos || [
    currentBusinessProduct.image
  ];

  showBusinessPhoto(
    businessPhotoIndex + 1 >= photos.length
      ? 0
      : businessPhotoIndex + 1
  );
}

function previousBusinessPhoto() {
  if (!currentBusinessProduct) return;

  const photos = currentBusinessProduct.photos || [
    currentBusinessProduct.image
  ];

  showBusinessPhoto(
    businessPhotoIndex - 1 < 0
      ? photos.length - 1
      : businessPhotoIndex - 1
  );
}

/* MOBILE SWIPE */

let businessPhotoTouchStartX = 0;

const businessPhotoArea = document.querySelector(
  ".business-product-viewer-photo"
);

if (businessPhotoArea) {

  businessPhotoArea.addEventListener(
    "touchstart",
    function(event) {
      businessPhotoTouchStartX =
        event.changedTouches[0].screenX;
    },
    { passive: true }
  );

  businessPhotoArea.addEventListener(
    "touchend",
    function(event) {

      const touchEndX =
        event.changedTouches[0].screenX;

      const difference =
        touchEndX - businessPhotoTouchStartX;

      if (Math.abs(difference) < 50) return;

      if (difference < 0) {
        nextBusinessPhoto();
      } else {
        previousBusinessPhoto();
      }

    },
    { passive: true }
  );
}
/* ================================
   BUSINESS VENTURES BRAND LINK
================================ */

const businessBrand = document.querySelector(".brand");
const businessPlacementSection =
  document.getElementById("business-placement");

if (businessBrand && businessPlacementSection) {
  businessBrand.addEventListener("click", function(event) {
    event.preventDefault();

    businessPlacementSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
 /* =========================================
   YOUTUBE VLOG SYSTEM
   ========================================= */

(function () {

  /*
   * SINGLE SOURCE OF TRUTH
   *
   * Kapag may bagong vlog:
   * 1. Idagdag ito sa UNANG position.
   * 2. Hindi na kailangang baguhin ang HTML cards.
   * 3. Automatically magiging newest ang nasa left.
   */

  const vlogData = [

    {
      title: "SM City Batangas Vlog | Vlog 6 | Philippines 🇵🇭",
      description:
        " Magvovlog pa din ako para sainyo! 💖",
      videoId: "8ElDuV3c99I"
    },

    {
      title: "How I Became A Solid Fanboy of KathNiel (Story time muna!) | SDV #12 | Philippines",
      description:
        "Sa video na to ay ibabahagi ko sainyo yung mga naging karanasan ko as a KathNiel fanboy at may konting advices din tungkol sa mga katulad kong taga probinsya at para sa mga bashers! 🔥👌",
      videoId: "Lb60vBZgUng"
    },

    {
      title: "School days to remember: Cherished Memories | Bauan Colleges Inc. | Philippines 🇵🇭",
      description:
        "Sa video na ito ay bumisita ulit ako sa school na kung saan nagsimula ako na mangarap at matuto. Dito din sa school na to, nahubog ang pagkatao ko. Proud ako na dito ako pumasok noong nursery.",
      videoId: "LfP9IvRs87A"
    },

    {
      title: "Vlogmas 1: 1K Subscribers Speech + Important Announcement | SDV #25 | Philippines 🇵🇭",
      description:
        "#Vlogmas2019 #BatangueñongVlogger #OfficialGelo14\n\nHindi ko po inexpect na ganun lang kaunti yung christmas party vlog ko! Maraming salamat sa panonood! Merry Christmas po sainyong lahat! ❤️",
      videoId: "luEdCYAqsWw"
    },

    {
      title: "New Vlogging Setup + NAIA + Q&A | Vlog 26 | Philippines 🇵🇭",
      description:
        "#BatangueñongVlogger #OfficialGelo14\n\nSo ayon! Sana patuloy tuloy lang po kayo sa panonood ng mga videos ko! ❤️ Comment nyo na rin po sa baba yung mga tanong nyo about saken! ❤️👇",
      videoId: "7lq4fAPqQ7w"
    }

  ];


  /* =========================================
     SETTINGS
     ========================================= */

  const VISIBLE_VLOGS = 3;

  /*
   * Replace this with your real YouTube channel
   * URL when we have the exact channel URL.
   */
  const YOUTUBE_CHANNEL_URL =
    "https://www.youtube.com/@officialgelo14";


  /* =========================================
     ELEMENTS
     ========================================= */

  const track =
    document.getElementById("vlogTrack");

  const viewer =
    document.getElementById("vlog-viewer");

  const viewerIframe =
    document.getElementById("vlog-viewer-iframe");

  const viewerLabel =
    document.getElementById("vlog-viewer-label");

  const viewerTitle =
    document.getElementById("vlog-viewer-title");

  const viewerDescription =
    document.getElementById("vlog-viewer-description");

  const viewerChannel =
    document.getElementById("vlog-viewer-channel");

  const viewerYoutube =
    document.getElementById("vlog-viewer-youtube");


  /* =========================================
     CAROUSEL STATE
     ========================================= */

  let currentVlog = 0;


  /* =========================================
     CREATE / UPDATE THREE VISIBLE CARDS
     ========================================= */

  function renderVlogCards() {

    if (!track) return;

    const cards =
      track.querySelectorAll(".vlog-card");

    cards.forEach(function (card, slot) {

      const index =
        currentVlog + slot;

      const vlog =
        vlogData[index];

      if (!vlog) {

        card.style.display = "none";
        return;

      }

      card.style.display = "";

      /*
       * Remove the old inline click handler.
       * We control clicks from this script.
       */
      card.removeAttribute("onclick");

      /*
       * Store the real vlog index.
       */
      card.dataset.vlogIndex = index;


      /* =====================================
         VIDEO PREVIEW
         ===================================== */

      const videoArea =
        card.querySelector(".vlog-video");

      if (videoArea) {

        videoArea.innerHTML = `
          <button
            class="vlog-thumbnail-button"
            type="button"
            aria-label="Open ${escapeHtml(vlog.title)}">

            <img
              class="vlog-thumbnail"
              src="https://img.youtube.com/vi/${vlog.videoId}/hqdefault.jpg"
              alt="${escapeHtml(vlog.title)}"
              loading="lazy">

            <span class="vlog-play-button"
              aria-hidden="true">
              ▶
            </span>

          </button>
        `;

        if (index === 0) {

          const newest =
            document.createElement("span");

          newest.className = "vlog-new";
          newest.textContent = "NEWEST";

          videoArea.appendChild(newest);
        }
      }


      /* =====================================
         TITLE + DESCRIPTION
         ===================================== */

      const title =
        card.querySelector(".vlog-info h3");

      const description =
        card.querySelector(".vlog-info p");

      if (title) {
        title.textContent = vlog.title;
      }

      if (description) {
        description.textContent =
          vlog.description;
      }


      /* =====================================
         CLICK
         ===================================== */

      card.onclick = function () {

        openVlog(index);

      };

    });


    /*
     * Keep the track in its normal position.
     *
     * We are changing the contents of the
     * three cards instead of physically moving
     * five HTML cards.
     */

    track.style.transform =
      "translateX(0)";
  }


  /* =========================================
     SAFE HTML TEXT
     ========================================= */

  function escapeHtml(text) {

    const div =
      document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
  }


  /* =========================================
     OPEN SELECTED VLOG
     ========================================= */

  window.openVlog = function (index) {

    const vlog =
      vlogData[index];

    if (!vlog) return;


    currentVlog = Math.min(
      Math.max(index, 0),
      vlogData.length - 1
    );


    if (viewerLabel) {

      viewerLabel.textContent =
        `VLOG #${index + 1}`;

    }


    if (viewerTitle) {

      viewerTitle.textContent =
        vlog.title;

    }


    if (viewerDescription) {

      viewerDescription.textContent =
        vlog.description;

    }


    /*
     * Actual YouTube video.
     *
     * Autoplay is muted so it can start
     * after the user clicks the vlog card.
     */

    if (viewerIframe) {

      viewerIframe.src =
        `https://www.youtube.com/embed/${vlog.videoId}` +
        `?autoplay=1&mute=1&rel=0&playsinline=1`;

    }


    if (viewerChannel) {

      viewerChannel.href =
        YOUTUBE_CHANNEL_URL;

    }


    if (viewerYoutube) {

      viewerYoutube.href =
        `https://www.youtube.com/watch?v=${vlog.videoId}`;

    }


    if (viewer) {

      viewer.classList.add("active");

    }


    document.body.style.overflow =
      "hidden";

  };


  /* =========================================
     CLOSE VLOG
     ========================================= */

  window.closeVlog = function () {

    if (viewer) {

      viewer.classList.remove("active");

    }


    /*
     * Stop the YouTube player.
     */

    if (viewerIframe) {

      viewerIframe.src = "";

    }


    document.body.style.overflow =
      "";

  };


  /* =========================================
     NEXT VLOGS
     ========================================= */

  window.nextVlog = function () {

    if (!vlogData.length) return;


    const maxStart =
      Math.max(
        0,
        vlogData.length - VISIBLE_VLOGS
      );


    if (currentVlog < maxStart) {

      currentVlog++;

      renderVlogCards();

    }

  };


  /* =========================================
     PREVIOUS VLOGS
     ========================================= */

  window.previousVlog = function () {

    if (!vlogData.length) return;


    if (currentVlog > 0) {

      currentVlog--;

      renderVlogCards();

    }

  };


  /* =========================================
     CLOSE WHEN CLICKING OUTSIDE
     ========================================= */

  if (viewer) {

    viewer.addEventListener(
      "click",
      function (event) {

        if (event.target === viewer) {

          closeVlog();

        }

      }
    );

  }


  /* =========================================
     ESC KEY
     ========================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {

        closeVlog();

      }

    }
  );


  /* =========================================
     RESPONSIVE RESET
     ========================================= */

  window.addEventListener(
    "resize",
    function () {

      renderVlogCards();

    }
  );


  /* =========================================
     INITIAL RENDER
     ========================================= */

  renderVlogCards();

})();
// =========================================================
// OFFICIALGELO14 NEWSLETTER SUBSCRIPTION
// =========================================================

  const NEWSLETTER_API_URL =
  "https://script.google.com/macros/s/AKfycby8v2so4gP16sHIGfVLjE5ACVO3uAdDQ0ZWT0dYqEXTnlokxokGOc8cnPhqvBpY68mAng/exec";
const newsletterForm = document.getElementById("newsletterForm");
 const newsletterMessage = document.getElementById("newsletterMessage");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const emailInput =
      document.getElementById("newsletterEmail");

    const submitButton =
      newsletterForm.querySelector('button[type="submit"]');

    const email = emailInput.value.trim();

    if (!email) {
      if (newsletterMessage) {
        newsletterMessage.textContent =
          "Please enter your email address.";
      }
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Subscribing...";

    try {
      await fetch(NEWSLETTER_API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
          email: email
        })
      });

      if (newsletterMessage) {
        newsletterMessage.textContent =
          "Thank you! You are now subscribed to OfficialGelo14.";
      }

      newsletterForm.reset();

    } catch (error) {
      if (newsletterMessage) {
        newsletterMessage.textContent =
          "Something went wrong. Please try again.";
      }
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Subscribe →";
    }
  });
}
// =========================================================
// GELOMIND AI CHAT
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  const gelomindLauncher =
    document.getElementById('gelomindLauncher');

  const gelomindChat =
    document.getElementById('gelomindChat');

  const gelomindClose =
    document.getElementById('gelomindClose');

  const gelomindMessages =
    document.getElementById('gelomindMessages');

  const gelomindInput =
    document.getElementById('gelomindInput');

  const gelomindSend =
    document.getElementById('gelomindSend');

  const gelomindSuggestions =
    document.getElementById('gelomindSuggestions');


  // =======================================================
  // PERMANENT GENERAL SUGGESTED QUESTIONS
  // =======================================================

  const GELOMIND_SUGGESTIONS = [
    "Who is Gelo?",
    "What is OfficialGelo14?",
    "What can I find on the OfficialGelo14 website?"
  ];


  // =======================================================
  // OPEN GELOMIND
  // =======================================================

  if (gelomindLauncher && gelomindChat) {

    gelomindLauncher.addEventListener('click', function () {

      gelomindChat.classList.add('is-open');
      gelomindLauncher.style.display = 'none';

      if (gelomindInput) {
        setTimeout(function () {
          gelomindInput.focus();
        }, 100);
      }

    });

  }


  // =======================================================
  // CLOSE GELOMIND
  // =======================================================

  if (gelomindClose && gelomindChat && gelomindLauncher) {

    gelomindClose.addEventListener('click', function () {

      gelomindChat.classList.remove('is-open');
      gelomindLauncher.style.display = 'flex';

    });

  }


  // =======================================================
  // SEND MESSAGE
  // =======================================================

  function sendGeloMindMessage(message) {

    if (!message || !gelomindMessages) {
      return;
    }

    message = message.trim();

    if (!message) {
      return;
    }


    // USER MESSAGE
    const userMessage =
      document.createElement('div');

    userMessage.className =
      'gelomind-message user';

    userMessage.textContent =
      message;

    gelomindMessages.appendChild(
      userMessage
    );


    // Clear input
    if (gelomindInput) {
      gelomindInput.value = '';
    }


    // Scroll to latest message
    gelomindMessages.scrollTop =
      gelomindMessages.scrollHeight;


    // -------------------------------------------------------
    // TEMPORARY RESPONSE
    // -------------------------------------------------------
    // Google Sheet knowledge connection will be added later.

    setTimeout(function () {

      const aiMessage =
        document.createElement('div');

      aiMessage.className =
        'gelomind-message ai';

      aiMessage.textContent =
        'Thank you for your question! GeloMind is currently being connected to the OfficialGelo14 knowledge base.';

      gelomindMessages.appendChild(
        aiMessage
      );

      gelomindMessages.scrollTop =
        gelomindMessages.scrollHeight;

    }, 500);

  }


  // =======================================================
  // SEND BUTTON
  // =======================================================

  if (gelomindSend) {

    gelomindSend.addEventListener('click', function () {

      if (gelomindInput) {
        sendGeloMindMessage(
          gelomindInput.value
        );
      }

    });

  }


  // =======================================================
  // ENTER KEY
  // =======================================================

  if (gelomindInput) {

    gelomindInput.addEventListener(
      'keydown',
      function (event) {

        if (
          event.key === 'Enter' &&
          !event.shiftKey
        ) {

          event.preventDefault();

          sendGeloMindMessage(
            gelomindInput.value
          );

        }

      }
    );

  }


  // =======================================================
  // SUGGESTED QUESTIONS
  // =======================================================

  if (gelomindSuggestions) {

    const buttons =
      gelomindSuggestions.querySelectorAll(
        'button'
      );

    buttons.forEach(function (button, index) {

      if (GELOMIND_SUGGESTIONS[index]) {

        button.textContent =
          GELOMIND_SUGGESTIONS[index];

      }

      button.addEventListener(
        'click',
        function () {

          sendGeloMindMessage(
            button.textContent
          );

        }
      );

    });

  }

});
// =========================================================
// GELOMIND API — ADD-ONLY CONNECTION
// =========================================================

(function () {

  const GELOMIND_API_URL =
    "https://script.google.com/macros/s/AKfycby8v2so4gP16sHIGfVLjE5ACVO3uAdDQ0ZWT0dYqEXTnlokxokGOc8cnPhqvBpY68mAng/exec";

  function askGeloMindFromAPI(question, messagesBox) {

    if (!question || !messagesBox) {
      return;
    }

    const userMessage =
      document.createElement("div");

    userMessage.className =
      "gelomind-message user";

    userMessage.textContent =
      question;

    messagesBox.appendChild(userMessage);

    messagesBox.scrollTop =
      messagesBox.scrollHeight;

    const aiMessage =
      document.createElement("div");

    aiMessage.className =
      "gelomind-message ai";

    aiMessage.textContent =
      "Thinking...";

    messagesBox.appendChild(aiMessage);

    messagesBox.scrollTop =
      messagesBox.scrollHeight;

    const callbackName =
      "geloMindCallback_" +
      Date.now() +
      "_" +
      Math.floor(Math.random() * 100000);

    window[callbackName] =
      function (data) {

        try {

          if (data && data.success && data.answer) {

            aiMessage.textContent =
              data.answer;

          } else {

            aiMessage.textContent =
              data && data.message
                ? data.message
                : "I'm still learning about OfficialGelo14. Please try another question.";

          }

        } finally {

          delete window[callbackName];

          if (script && script.parentNode) {
            script.parentNode.removeChild(script);
          }

          messagesBox.scrollTop =
            messagesBox.scrollHeight;
        }
      };

    const script =
      document.createElement("script");

    script.src =
      GELOMIND_API_URL +
      "?action=gelomind" +
      "&question=" +
      encodeURIComponent(question) +
      "&callback=" +
      encodeURIComponent(callbackName);

    script.onerror =
      function () {

        aiMessage.textContent =
          "Sorry, I couldn't connect to the GeloMind knowledge base.";

        delete window[callbackName];

        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }

        messagesBox.scrollTop =
          messagesBox.scrollHeight;
      };

    document.body.appendChild(script);
  }


  document.addEventListener(
    "DOMContentLoaded",
    function () {

      const input =
        document.getElementById("gelomindInput");

      const send =
        document.getElementById("gelomindSend");

      const messages =
        document.getElementById("gelomindMessages");

      const suggestions =
        document.getElementById("gelomindSuggestions");


      // SEND BUTTON
      document.addEventListener(
        "click",
        function (event) {

          const button =
            event.target.closest("#gelomindSend");

          if (!button) {
            return;
          }

          event.preventDefault();
          event.stopImmediatePropagation();

          if (!input || !messages) {
            return;
          }

          const question =
            input.value.trim();

          if (!question) {
            return;
          }

          input.value = "";

          askGeloMindFromAPI(
            question,
            messages
          );

        },
        true
      );


      // ENTER KEY
      document.addEventListener(
        "keydown",
        function (event) {

          if (
            !input ||
            event.target !== input ||
            event.key !== "Enter" ||
            event.shiftKey
          ) {
            return;
          }

          event.preventDefault();
          event.stopImmediatePropagation();

          const question =
            input.value.trim();

          if (!question) {
            return;
          }

          input.value = "";

          askGeloMindFromAPI(
            question,
            messages
          );

        },
        true
      );


      // SUGGESTED QUESTIONS
      if (suggestions) {

        document.addEventListener(
          "click",
          function (event) {

            const button =
              event.target.closest(
                "#gelomindSuggestions button"
              );

            if (!button) {
              return;
            }

            event.preventDefault();
            event.stopImmediatePropagation();

            const question =
              button.textContent.trim();

            if (!question) {
              return;
            }

            askGeloMindFromAPI(
              question,
              messages
            );

          },
          true
        );

      }

    }
  );

})();