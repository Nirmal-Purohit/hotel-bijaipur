// ===== NAVIGATION SCROLL EFFECT =====
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===== MOBILE MENU TOGGLE =====
function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// ===== TAB FUNCTIONALITY =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById('tab-' + tabId).classList.add('active');
    });
});

// ===== LIGHTBOX =====
let currentLightboxImages = [];
let currentLightboxIndex = 0;

function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    // Gather all sibling images in the same gallery/section
    const parentGallery = imgElement.closest('.grid-gallery, .masonry-gallery');
    if (parentGallery) {
        currentLightboxImages = Array.from(parentGallery.querySelectorAll('img'));
        currentLightboxIndex = currentLightboxImages.indexOf(imgElement);
    } else {
        currentLightboxImages = [imgElement];
        currentLightboxIndex = 0;
    }
    
    lightboxImg.src = imgElement.src;
    lightboxImg.alt = imgElement.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
    if (event.target === event.currentTarget || event.target.classList.contains('lightbox-close')) {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function navigateLightbox(direction) {
    event.stopPropagation();
    currentLightboxIndex += direction;
    
    if (currentLightboxIndex < 0) currentLightboxIndex = currentLightboxImages.length - 1;
    if (currentLightboxIndex >= currentLightboxImages.length) currentLightboxIndex = 0;
    
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = currentLightboxImages[currentLightboxIndex].src;
    lightboxImg.alt = currentLightboxImages[currentLightboxIndex].alt;
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
    }
});

// ===== LOAD MORE PHOTOS =====
const additionalPhotos = [
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (4).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (5).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (6).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (7).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (8).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (9).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (10).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (11).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (12).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (13).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (14).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (15).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (16).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (17).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (18).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (19).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (20).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (21).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (22).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (23).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (24).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (25).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (26).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (27).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (28).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (29).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (30).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (31).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.06 PM (32).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.07 PM.jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.07 PM (1).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.07 PM (2).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.07 PM (3).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.07 PM (4).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.07 PM (5).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.07 PM (6).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.05 PM (10).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.05 PM (11).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.05 PM (12).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.05 PM (13).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.05 PM (14).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.05 PM (15).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.05 PM (16).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.05 PM (19).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.05 PM (20).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.05 PM (21).jpeg",
    "Hotel_Photos_Gallary/WhatsApp Image 2026-07-11 at 8.44.05 PM (22).jpeg",
    "Hotel_Photos_Gallary/horse safari 7-8-08 161.JPG.jpeg",
    "Hotel_Photos_Gallary/Md - Copy.jpg.jpeg",
    "Hotel_Photos_Gallary/05 (2).jpg.jpeg"
];

let photosLoaded = false;

function loadMorePhotos() {
    if (photosLoaded) return;
    
    const gallery = document.querySelector('.masonry-gallery');
    const btn = document.getElementById('loadMoreBtn');
    
    additionalPhotos.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Hotel Bijaipur Palace';
        img.loading = 'lazy';
        img.onclick = function() { openLightbox(this); };
        gallery.appendChild(img);
    });
    
    photosLoaded = true;
    btn.textContent = 'All Photos Loaded';
    btn.style.opacity = '0.5';
    btn.style.cursor = 'default';
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
