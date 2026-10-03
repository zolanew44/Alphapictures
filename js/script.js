/**
 * ==============================================================================
 * ALPHA PICTURES (ALPHA STUDIO) — MASTER JAVASCRIPT
 * Addis Ababa, Ethiopia
 * 
 * Features:
 *   1. Full PORTFOLIO Dataset (Weddings, Engagements, Birthdays, Graduations, Portraits, Events)
 *   2. Dual-Path Asset Resolution (Portfolio/ <-> Profile/ seamless fallback)
 *   3. Dynamic Responsive Portfolio Gallery Rendering & Filtering
 *   4. Full-Featured Lightbox Modal (Keyboard, Arrows, Esc, Swipe, Counter)
 *   5. Private Client Gallery Demo Portal (Access PIN Unlock & Proof Sheet Viewer)
 *   6. Dynamic Telegram Session Booking Form Generator (@alpha2223)
 *   7. Sticky Header State & ScrollSpy Active Section Tracking
 *   8. Mobile Navigation Drawer Controller
 *   9. Intersection Observer Scroll Fade-In Animations
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ============================================================================
     1. PORTFOLIO DATASET CONFIGURATION
     ============================================================================ */
  const PORTFOLIO_DATA = [
    // --- WEDDINGS ---
    {
      id: 'wed-1',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'Imperial Habesha Matrimony',
      subtitle: 'Addis Ababa · Holy Trinity Cathedral',
      file: 'jpeg (1).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(1).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(1).jpeg'
    },
    {
      id: 'wed-2',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'The Royal Procession',
      subtitle: 'Sheraton Addis Grand Ballroom',
      file: 'jpeg (2).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(2).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(2).jpeg'
    },
    {
      id: 'wed-3',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'Embroidered Zuria Elegance',
      subtitle: 'Bole Medhane Alem Ceremony',
      file: 'jpeg (3).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(3).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(3).jpeg'
    },
    {
      id: 'wed-4',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'Golden Sunset Vows',
      subtitle: 'Entoto Mountain Hilltop',
      file: 'jpeg (4).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(4).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(4).jpeg'
    },
    {
      id: 'wed-5',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'Sacred Melse Rite',
      subtitle: 'Addis Ababa Banquet Estate',
      file: 'jpeg (5).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(5).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(5).jpeg'
    },
    {
      id: 'wed-6',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'Imperial Crown Coronation',
      subtitle: 'Traditional Orthodox Matrimony',
      file: 'jpeg (6).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(6).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(6).jpeg'
    },
    {
      id: 'wed-7',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'The Eternal Embrace',
      subtitle: 'Skylight Hotel Addis Ababa',
      file: 'jpeg (7).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(7).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(7).jpeg'
    },
    {
      id: 'wed-8',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'Bridal Radiance & Veils',
      subtitle: 'Private Suite Preparations',
      file: 'jpeg (8).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(8).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(8).jpeg'
    },
    {
      id: 'wed-9',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'Majestic Evening Banquet',
      subtitle: 'Addis Ababa Grand Pavilion',
      file: 'jpeg (9).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(9).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(9).jpeg'
    },
    {
      id: 'wed-10',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'Ancestral Blessings',
      subtitle: 'Elders & Traditional Blessing',
      file: 'jpeg (10).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(10).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(10).jpeg'
    },
    {
      id: 'wed-11',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'Groom & Groomsmen Formation',
      subtitle: 'Classic Tailored Elegance',
      file: 'jpeg (11).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(11).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(11).jpeg'
    },
    {
      id: 'wed-12',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'First Dance Euphoria',
      subtitle: 'Chandelier Lights & Romance',
      file: 'jpeg (12).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(12).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(12).jpeg'
    },
    {
      id: 'wed-13',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'The Royal Departure',
      subtitle: 'Luxury Carriage & Motorcade',
      file: 'jpeg (13).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(13).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(13).jpeg'
    },
    {
      id: 'wed-14',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'Intimate Twilight Portraits',
      subtitle: 'Botanical Gardens of Addis',
      file: 'jpeg (14).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(14).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(14).jpeg'
    },
    {
      id: 'wed-15',
      category: 'weddings',
      categoryLabel: 'Weddings',
      title: 'Golden Matrimonial Seal',
      subtitle: 'Sacred Covenant Sealed',
      file: 'jpeg (15).jpeg',
      primaryPath: 'images/portfolio/weddings/jpeg%20(15).jpeg',
      fallbackPath: 'images/profile/weddings/jpeg%20(15).jpeg'
    },

    // --- ENGAGEMENTS (SHIMGILINA & CHILOT) ---
    {
      id: 'eng-1',
      category: 'engagements',
      categoryLabel: 'Engagements',
      title: 'Traditional Shimgilina Union',
      subtitle: 'Ancestral Elder Negotiations & Covenant',
      file: 'jpeg (10).jpeg',
      primaryPath: 'images/portfolio/engagements/jpeg%20(10).jpeg',
      fallbackPath: 'images/profile/birthdays/jpeg%20(10).jpeg'
    },
    {
      id: 'eng-2',
      category: 'engagements',
      categoryLabel: 'Engagements',
      title: 'The Sacred Proposal Ring',
      subtitle: 'Golden Vows & Family Blessings',
      file: 'jpeg (11).jpeg',
      primaryPath: 'images/portfolio/engagements/jpeg%20(11).jpeg',
      fallbackPath: 'images/profile/birthdays/jpeg%20(11).jpeg'
    },
    {
      id: 'eng-3',
      category: 'engagements',
      categoryLabel: 'Engagements',
      title: 'Chilot & Cultural Covenant',
      subtitle: 'Traditional Cloth & Intimate Joy',
      file: 'jpeg (17).jpeg',
      primaryPath: 'images/portfolio/engagements/jpeg%20(17).jpeg',
      fallbackPath: 'images/profile/birthdays/jpeg%20(17).jpeg'
    },
    {
      id: 'eng-4',
      category: 'engagements',
      categoryLabel: 'Engagements',
      title: 'Hand-in-Hand Twilight Walk',
      subtitle: 'Pre-Wedding Sunset Session',
      file: 'jpeg (8).jpeg',
      primaryPath: 'images/portfolio/engagements/jpeg%20(8).jpeg',
      fallbackPath: 'images/profile/portraits/jpeg%20(8).jpeg'
    },
    {
      id: 'eng-5',
      category: 'engagements',
      categoryLabel: 'Engagements',
      title: 'Family Joy & Congratulations',
      subtitle: 'Two Families Becoming One',
      file: 'jpeg (7).jpeg',
      primaryPath: 'images/portfolio/engagements/jpeg%20(7).jpeg',
      fallbackPath: 'images/profile/family/jpeg%20(7).jpeg'
    },

    // --- BIRTHDAYS ---
    {
      id: 'bday-1',
      category: 'birthdays',
      categoryLabel: 'Birthdays',
      title: 'The Milestone First Jubilee',
      subtitle: 'Golden Crown & Luxury Nursery Set',
      file: 'jpeg (1).jpeg',
      primaryPath: 'images/portfolio/birthdays/jpeg%20(1).jpeg',
      fallbackPath: 'images/profile/birthdays/jpeg%20(1).jpeg'
    },
    {
      id: 'bday-2',
      category: 'birthdays',
      categoryLabel: 'Birthdays',
      title: 'Little Princess Celebration',
      subtitle: 'Pastel Florals & Handcrafted Sets',
      file: 'jpeg (2).jpeg',
      primaryPath: 'images/portfolio/birthdays/jpeg%20(2).jpeg',
      fallbackPath: 'images/profile/birthdays/jpeg%20(2).jpeg'
    },
    {
      id: 'bday-3',
      category: 'birthdays',
      categoryLabel: 'Birthdays',
      title: 'Candlelight & Pure Wonder',
      subtitle: 'Bespoke Confectionery Shoot',
      file: 'jpeg (3).jpeg',
      primaryPath: 'images/portfolio/birthdays/jpeg%20(3).jpeg',
      fallbackPath: 'images/profile/birthdays/jpeg%20(3).jpeg'
    },
    {
      id: 'bday-4',
      category: 'birthdays',
      categoryLabel: 'Birthdays',
      title: 'Joyful Childhood Laughter',
      subtitle: 'Alpha Studio Toddler Stage',
      file: 'jpeg (4).jpeg',
      primaryPath: 'images/portfolio/birthdays/jpeg%20(4).jpeg',
      fallbackPath: 'images/profile/birthdays/jpeg%20(4).jpeg'
    },
    {
      id: 'bday-5',
      category: 'birthdays',
      categoryLabel: 'Birthdays',
      title: 'Golden Balloons & Sweet Memories',
      subtitle: 'Festive Portrait Suite',
      file: 'jpeg (5).jpeg',
      primaryPath: 'images/portfolio/birthdays/jpeg%20(5).jpeg',
      fallbackPath: 'images/profile/birthdays/jpeg%20(5).jpeg'
    },
    {
      id: 'bday-6',
      category: 'birthdays',
      categoryLabel: 'Birthdays',
      title: 'Elegant Debutante Portrait',
      subtitle: 'Sweet Sixteen & Milestone Years',
      file: 'jpeg (6).jpeg',
      primaryPath: 'images/portfolio/birthdays/jpeg%20(6).jpeg',
      fallbackPath: 'images/profile/birthdays/jpeg%20(6).jpeg'
    },
    {
      id: 'bday-7',
      category: 'birthdays',
      categoryLabel: 'Birthdays',
      title: 'Heritage Childhood Memories',
      subtitle: 'Traditional Attire Celebration',
      file: 'jpeg (7).jpeg',
      primaryPath: 'images/portfolio/birthdays/jpeg%20(7).jpeg',
      fallbackPath: 'images/profile/birthdays/jpeg%20(7).jpeg'
    },
    {
      id: 'bday-8',
      category: 'birthdays',
      categoryLabel: 'Birthdays',
      title: 'Grand Family Birthday Banquet',
      subtitle: 'Generations Celebrating Life',
      file: 'jpeg (8).jpeg',
      primaryPath: 'images/portfolio/birthdays/jpeg%20(8).jpeg',
      fallbackPath: 'images/profile/birthdays/jpeg%20(8).jpeg'
    },
    {
      id: 'bday-9',
      category: 'birthdays',
      categoryLabel: 'Birthdays',
      title: 'Studio Cake Smash Fun',
      subtitle: 'Playful High-Key Studio Magic',
      file: 'jpeg (9).jpeg',
      primaryPath: 'images/portfolio/birthdays/jpeg%20(9).jpeg',
      fallbackPath: 'images/profile/birthdays/jpeg%20(9).jpeg'
    },

    // --- GRADUATIONS ---
    {
      id: 'grad-1',
      category: 'graduations',
      categoryLabel: 'Graduations',
      title: 'Academic Triumph & Honors',
      subtitle: 'Addis Ababa University Graduate',
      file: 'jpeg (1).jpeg',
      primaryPath: 'images/portfolio/graduations/jpeg%20(1).jpeg',
      fallbackPath: 'images/profile/graduations/jpeg%20(1).jpeg'
    },
    {
      id: 'grad-2',
      category: 'graduations',
      categoryLabel: 'Graduations',
      title: 'Gown, Sash & Golden Future',
      subtitle: 'Distinguished Degree Conferral',
      file: 'jpeg (2).jpeg',
      primaryPath: 'images/portfolio/graduations/jpeg%20(2).jpeg',
      fallbackPath: 'images/profile/graduations/jpeg%20(2).jpeg'
    },
    {
      id: 'grad-3',
      category: 'graduations',
      categoryLabel: 'Graduations',
      title: 'The Graduate’s Proud Stance',
      subtitle: 'Studio Cyclorama Portrait',
      file: 'jpeg (3).jpeg',
      primaryPath: 'images/portfolio/graduations/jpeg%20(3).jpeg',
      fallbackPath: 'images/profile/graduations/jpeg%20(3).jpeg'
    },
    {
      id: 'grad-4',
      category: 'graduations',
      categoryLabel: 'Graduations',
      title: 'Family Pride & Celebration',
      subtitle: 'Parents Honoring Their Scholar',
      file: 'jpeg (4).jpeg',
      primaryPath: 'images/portfolio/graduations/jpeg%20(4).jpeg',
      fallbackPath: 'images/profile/graduations/jpeg%20(4).jpeg'
    },
    {
      id: 'grad-5',
      category: 'graduations',
      categoryLabel: 'Graduations',
      title: 'Cap Toss & Freedom',
      subtitle: 'Outdoor Campus Moments',
      file: 'jpeg (5).jpeg',
      primaryPath: 'images/portfolio/graduations/jpeg%20(5).jpeg',
      fallbackPath: 'images/profile/graduations/jpeg%20(5).jpeg'
    },
    {
      id: 'grad-6',
      category: 'graduations',
      categoryLabel: 'Graduations',
      title: 'The Next Chapter Unfolds',
      subtitle: 'Executive Professional Headshot',
      file: 'jpeg (6).jpeg',
      primaryPath: 'images/portfolio/graduations/jpeg%20(6).jpeg',
      fallbackPath: 'images/profile/graduations/jpeg%20(6).jpeg'
    },

    // --- PORTRAITS ---
    {
      id: 'port-1',
      category: 'portraits',
      categoryLabel: 'Portraits',
      title: 'Haute Ethiopian Beauty',
      subtitle: 'Editorial Fine Art Lighting',
      file: 'jpeg (1).jpeg',
      primaryPath: 'images/portfolio/portraits/jpeg%20(1).jpeg',
      fallbackPath: 'images/profile/portraits/jpeg%20(1).jpeg'
    },
    {
      id: 'port-2',
      category: 'portraits',
      categoryLabel: 'Portraits',
      title: 'Traditional Habeshashe Woven Grace',
      subtitle: 'Golden Tilf & Natural Soul',
      file: 'jpeg (2).jpeg',
      primaryPath: 'images/portfolio/portraits/jpeg%20(2).jpeg',
      fallbackPath: 'images/profile/portraits/jpeg%20(2).jpeg'
    },
    {
      id: 'port-3',
      category: 'portraits',
      categoryLabel: 'Portraits',
      title: 'Sovereign Gaze',
      subtitle: 'Chiaroscuro Studio Portrait',
      file: 'jpeg (3).jpeg',
      primaryPath: 'images/portfolio/portraits/jpeg%20(3).jpeg',
      fallbackPath: 'images/profile/portraits/jpeg%20(3).jpeg'
    },
    {
      id: 'port-4',
      category: 'portraits',
      categoryLabel: 'Portraits',
      title: 'Contemporary Fashion Study',
      subtitle: 'Profoto High-Definition Strobe',
      file: 'jpeg (4).jpeg',
      primaryPath: 'images/portfolio/portraits/jpeg%20(4).jpeg',
      fallbackPath: 'images/profile/portraits/jpeg%20(4).jpeg'
    },
    {
      id: 'port-5',
      category: 'portraits',
      categoryLabel: 'Portraits',
      title: 'Timeless Maternity Serenity',
      subtitle: 'Warm Bouclé Studio Lounge',
      file: 'jpeg (5).jpeg',
      primaryPath: 'images/portfolio/portraits/jpeg%20(5).jpeg',
      fallbackPath: 'images/profile/portraits/jpeg%20(5).jpeg'
    },
    {
      id: 'port-6',
      category: 'portraits',
      categoryLabel: 'Portraits',
      title: 'Executive Leadership Headshot',
      subtitle: 'Distinguished Business Profile',
      file: 'jpeg (6).jpeg',
      primaryPath: 'images/portfolio/portraits/jpeg%20(6).jpeg',
      fallbackPath: 'images/profile/portraits/jpeg%20(6).jpeg'
    },
    {
      id: 'port-7',
      category: 'portraits',
      categoryLabel: 'Portraits',
      title: 'Ethiopian Crown & Golden Ornaments',
      subtitle: 'Heritage Jewelry & Crown',
      file: 'jpeg (7).jpeg',
      primaryPath: 'images/portfolio/portraits/jpeg%20(7).jpeg',
      fallbackPath: 'images/profile/portraits/jpeg%20(7).jpeg'
    },
    {
      id: 'port-8',
      category: 'portraits',
      categoryLabel: 'Portraits',
      title: 'The Golden Hour Glimmer',
      subtitle: 'Ambient Addis Ababa Sunset',
      file: 'jpeg (8).jpeg',
      primaryPath: 'images/portfolio/portraits/jpeg%20(8).jpeg',
      fallbackPath: 'images/profile/portraits/jpeg%20(8).jpeg'
    },

    // --- CULTURAL EVENTS & FAMILY ---
    {
      id: 'ev-1',
      category: 'events',
      categoryLabel: 'Cultural Events',
      title: 'Traditional Ethiopian Buna Ceremony',
      subtitle: 'Frankincense, Clay Jebena & Grass',
      file: 'jpeg (1).jpeg',
      primaryPath: 'images/portfolio/events/jpeg%20(1).jpeg',
      fallbackPath: 'images/profile/events/jpeg%20(1).jpeg'
    },
    {
      id: 'ev-2',
      category: 'events',
      categoryLabel: 'Cultural Events',
      title: 'Festive Timkat & Epiphany Joy',
      subtitle: 'Procession of Chants & Velvet Robes',
      file: 'jpeg (2).jpeg',
      primaryPath: 'images/portfolio/events/jpeg%20(2).jpeg',
      fallbackPath: 'images/profile/events/jpeg%20(2).jpeg'
    },
    {
      id: 'ev-3',
      category: 'events',
      categoryLabel: 'Cultural Events',
      title: 'Meskel Bonfire & Golden Crosses',
      subtitle: 'Demera Illumination in Meskel Square',
      file: 'jpeg (3).jpeg',
      primaryPath: 'images/portfolio/events/jpeg%20(3).jpeg',
      fallbackPath: 'images/profile/events/jpeg%20(3).jpeg'
    },
    {
      id: 'ev-4',
      category: 'events',
      categoryLabel: 'Cultural Events',
      title: 'Sacred Orthodox Christening',
      subtitle: 'Holy Water Blessing & Family Love',
      file: 'jpeg (4).jpeg',
      primaryPath: 'images/portfolio/events/jpeg%20(4).jpeg',
      fallbackPath: 'images/profile/events/jpeg%20(4).jpeg'
    },
    {
      id: 'ev-5',
      category: 'events',
      categoryLabel: 'Cultural Events',
      title: 'Eskista Rhythm & Feast',
      subtitle: 'Vibrant Dance at Banquet Hall',
      file: 'jpeg (5).jpeg',
      primaryPath: 'images/portfolio/events/jpeg%20(5).jpeg',
      fallbackPath: 'images/profile/events/jpeg%20(5).jpeg'
    },
    {
      id: 'ev-6',
      category: 'events',
      categoryLabel: 'Cultural Events',
      title: 'Imperial Family Dynasty',
      subtitle: 'Three Generations Under One Roof',
      file: 'jpeg (1).jpeg',
      primaryPath: 'images/portfolio/family/jpeg%20(1).jpeg',
      fallbackPath: 'images/profile/family/jpeg%20(1).jpeg'
    },
    {
      id: 'ev-7',
      category: 'events',
      categoryLabel: 'Cultural Events',
      title: 'Maternal Warmth & Heritage',
      subtitle: 'Mother & Infant Sacred Bond',
      file: 'jpeg (3).jpeg',
      primaryPath: 'images/portfolio/family/jpeg%20(3).jpeg',
      fallbackPath: 'images/profile/family/jpeg%20(3).jpeg'
    },
    {
      id: 'ev-8',
      category: 'events',
      categoryLabel: 'Cultural Events',
      title: 'The Patriarch’s Legacy',
      subtitle: 'Golden Wisdom & Family Honor',
      file: 'jpeg (5).jpeg',
      primaryPath: 'images/portfolio/family/jpeg%20(5).jpeg',
      fallbackPath: 'images/profile/family/jpeg%20(5).jpeg'
    }
  ];

  // Demo album proofs dataset for private gallery showcase
  const DEMO_ALBUM_PHOTOS = [
    {
      title: 'Ceremonial Entrance & Procession',
      primary: 'images/demo-album-wedding/001.jpg',
      fallback: 'images/profile/weddings/jpeg%20(1).jpeg'
    },
    {
      title: 'Exchange of Sacred Gold Rings',
      primary: 'images/demo-album-wedding/002.jpg',
      fallback: 'images/profile/weddings/jpeg%20(2).jpeg'
    },
    {
      title: 'Orthodox Crowning Ceremony',
      primary: 'images/demo-album-wedding/003.jpg',
      fallback: 'images/profile/weddings/jpeg%20(3).jpeg'
    },
    {
      title: 'Bridal Portrait Under Cathedral Arch',
      primary: 'images/demo-album-wedding/004.jpg',
      fallback: 'images/profile/weddings/jpeg%20(4).jpeg'
    },
    {
      title: 'Banquet Hall Candlelight Toast',
      primary: 'images/demo-album-wedding/005.jpg',
      fallback: 'images/profile/weddings/jpeg%20(5).jpeg'
    },
    {
      title: 'The Melse Royal Regalia',
      primary: 'images/demo-album-wedding/006.jpg',
      fallback: 'images/profile/weddings/jpeg%20(6).jpeg'
    },
    {
      title: 'Joyful Eskista Dance Celebration',
      primary: 'images/demo-album-wedding/007.jpg',
      fallback: 'images/profile/weddings/jpeg%20(7).jpeg'
    },
    {
      title: 'Golden Sunset Silhouette',
      primary: 'images/demo-album-wedding/008.jpg',
      fallback: 'images/profile/weddings/jpeg%20(8).jpeg'
    }
  ];

  /* ============================================================================
     1B. PHOTOGRAPHERS DATASET CONFIGURATION
     ============================================================================ */
  const PHOTOGRAPHERS = {
    ermi: {
      name: 'Ermi',
      role: 'Lead Photographer & Founder',
      phone: '+251 923 214 406',
      phoneRaw: '+251923214406',
      bio: "Ermi is the founder of Alpha Pictures. With over 12 years behind the lens, Ermi leads every wedding and major event with a refined editorial eye — capturing Ethiopia's most beautiful moments with timeless elegance and cultural depth.",
      portrait: 'images/portfolio/photographer%203.png',
      gallery: [
        'images/portfolio/weddings/jpeg%20(1).jpeg',
        'images/portfolio/weddings/jpeg%20(2).jpeg',
        'images/portfolio/weddings/jpeg%20(3).jpeg',
        'images/portfolio/weddings/jpeg%20(5).jpeg',
        'images/portfolio/weddings/jpeg%20(7).jpeg',
        'images/portfolio/events/jpeg%20(1).jpeg',
        'images/portfolio/events/jpeg%20(3).jpeg',
        'images/portfolio/events/jpeg%20(5).jpeg'
      ]
    },
    mati: {
      name: 'Mati',
      role: 'Creative & Event Photographer',
      phone: '+251 913 851 893',
      phoneRaw: '+251913851893',
      bio: 'Mati captures emotion in motion — from reception dance floors to grand cultural ceremonies — with a creative, cinematic style that feels alive and full of energy.',
      portrait: 'images/portfolio/photographer%201.png',
      gallery: [
        'images/portfolio/events/jpeg%20(2).jpeg',
        'images/portfolio/events/jpeg%20(4).jpeg',
        'images/portfolio/events/jpeg%20(6).jpeg',
        'images/portfolio/events/jpeg%20(8).jpeg',
        'images/portfolio/engagements/jpeg%20(10).jpeg',
        'images/portfolio/engagements/jpeg%20(11).jpeg',
        'images/portfolio/engagements/jpeg%20(17).jpeg',
        'images/portfolio/weddings/jpeg%20(12).jpeg'
      ]
    },
    wabi: {
      name: 'Wabi',
      role: 'Studio & Portrait Specialist',
      phone: '+251 922 576 132',
      phoneRaw: '+251922576132',
      bio: 'Wabi creates relaxed, flattering portraits for families, newborns, graduates, and studio sessions — with warm lighting and genuine smiles.',
      portrait: 'images/portfolio/photographer%202.png',
      gallery: [
        'images/portfolio/portraits/jpeg%20(1).jpeg',
        'images/portfolio/portraits/jpeg%20(2).jpeg',
        'images/portfolio/portraits/jpeg%20(5).jpeg',
        'images/portfolio/graduations/jpeg%20(1).jpeg',
        'images/portfolio/graduations/jpeg%20(3).jpeg',
        'images/portfolio/birthdays/jpeg%20(1).jpeg',
        'images/portfolio/family/jpeg%20(1).jpeg',
        'images/portfolio/studio/jpeg%20(3).jpeg'
      ]
    }
  };

  /* ============================================================================
     2. DOM ELEMENTS
     ============================================================================ */
  const header = document.getElementById('header');
  const mainNav = document.getElementById('mainNav');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const portfolioGrid = document.getElementById('portfolioGrid');
  const portfolioFilters = document.getElementById('portfolioFilters');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCountText = document.getElementById('portfolioCountText');

  // Lightbox
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxLoader = document.getElementById('lightboxLoader');

  // Photographer Profile Modal
  const photographerModal = document.getElementById('photographerModal');
  const photographerModalBackdrop = document.getElementById('photographerModalBackdrop');
  const photographerModalClose = document.getElementById('photographerModalClose');
  const photographerModalPrev = document.getElementById('photographerModalPrev');
  const photographerModalNext = document.getElementById('photographerModalNext');
  const photographerModalPortrait = document.getElementById('photographerModalPortrait');
  const photographerModalName = document.getElementById('photographerModalName');
  const photographerModalRole = document.querySelector('.photographer-modal__role');
  const photographerModalBio = document.querySelector('.photographer-modal__bio');
  const photographerModalContact = document.querySelector('.photographer-modal__contact');
  const photographerModalGallery = document.querySelector('.photographer-modal__gallery');
  const photographerModalCtaName = document.querySelector('.photographer-modal__cta-name');
  const photographerModalCtaLink = document.getElementById('photographerModalCtaLink');
  const photographerCards = document.querySelectorAll('.photographer-card');

  // Demo Client Gallery
  const portalForm = document.getElementById('portalForm');
  const portalSubmitBtn = document.getElementById('portalSubmitBtn');
  const galleryCodeInput = document.getElementById('galleryCode');
  const demoGalleryResults = document.getElementById('demoGalleryResults');
  const demoAlbumGrid = document.getElementById('demoAlbumGrid');
  const demoProofSheet = document.getElementById('demoProofSheet');
  const viewFullProofBtn = document.getElementById('viewFullProofBtn');
  const closeDemoGalleryBtn = document.getElementById('closeDemoGalleryBtn');

  // Booking Form
  const bookingForm = document.getElementById('bookingForm');

  /* ============================================================================
     3. STATE VARIABLES
     ============================================================================ */
  let currentFilter = 'all';
  let activeGalleryItems = []; // List of currently active lightbox images
  let currentLightboxIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  let currentPhotographerId = null;
  let lastFocusedCard = null;
  let previousActiveGalleryItems = null;
  const PHOTOGRAPHER_KEYS = ['ermi', 'mati', 'wabi'];

  /* ============================================================================
     4. PORTFOLIO GALLERY RENDERING
     ============================================================================ */
  function renderPortfolio(filterCategory = 'all') {
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = '';
    
    // Filter dataset
    const filteredItems = filterCategory === 'all' 
      ? PORTFOLIO_DATA 
      : PORTFOLIO_DATA.filter(item => item.category === filterCategory);

    // Update active lightbox list
    activeGalleryItems = filteredItems.map(item => ({
      src: item.primaryPath,
      fallback: item.fallbackPath,
      title: item.title,
      subtitle: `${item.categoryLabel} · ${item.subtitle}`
    }));

    if (portfolioCountText) {
      const catName = filterCategory === 'all' ? 'All Works' : filterCategory.charAt(0).toUpperCase() + filterCategory.slice(1);
      portfolioCountText.textContent = `Displaying ${filteredItems.length} curated masterworks in ${catName}`;
    }

    // Render items
    filteredItems.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'portfolio-item fade-in visible';
      card.setAttribute('data-category', item.category);
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View ${item.title}`);

      card.innerHTML = `
        <img 
          src="${item.primaryPath}" 
          data-fallback="${item.fallbackPath}"
          alt="${item.title}" 
          class="portfolio-img" 
          loading="lazy"
        >
        <div class="portfolio-overlay">
          <span class="item-category-tag">${item.categoryLabel}</span>
          <h3 class="item-caption-text">${item.title}</h3>
          <span class="item-zoom-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
            Click to expand
          </span>
        </div>
      `;

      // Dual-path error handler
      const imgElem = card.querySelector('img');
      imgElem.addEventListener('error', function() {
        const fb = this.getAttribute('data-fallback');
        if (fb && this.src !== fb) {
          this.src = fb;
        }
      });

      // Click to open lightbox
      card.addEventListener('click', () => {
        openLightbox(index);
      });

      // Keyboard accessibility (Enter or Space)
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      portfolioGrid.appendChild(card);
    });
  }

  // Filter Buttons Handling
  if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        
        currentFilter = btn.getAttribute('data-filter') || 'all';
        renderPortfolio(currentFilter);
      });
    });
  }

  // Footer Category Jump Filter Links
  const jumpFilterLinks = document.querySelectorAll('[data-jump-filter]');
  jumpFilterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetFilter = link.getAttribute('data-jump-filter');
      if (targetFilter) {
        const correspondingBtn = document.querySelector(`.filter-btn[data-filter="${targetFilter}"]`);
        if (correspondingBtn) {
          correspondingBtn.click();
        }
      }
    });
  });

  /* ============================================================================
     5. LIGHTBOX MODAL FUNCTIONALITY
     ============================================================================ */
  function openLightbox(index) {
    if (!lightboxModal || !activeGalleryItems.length) return;

    currentLightboxIndex = (index >= 0 && index < activeGalleryItems.length) ? index : 0;
    updateLightboxContent();

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    // Maintain hidden body scroll if photographer modal remains open
    if (photographerModal && photographerModal.classList.contains('is-open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function updateLightboxContent() {
    if (!lightboxImage || !activeGalleryItems[currentLightboxIndex]) return;

    const item = activeGalleryItems[currentLightboxIndex];

    if (lightboxLoader) lightboxLoader.style.display = 'block';

    // Set image with dual path fallback
    lightboxImage.src = item.src;
    lightboxImage.alt = item.title;

    lightboxImage.onerror = function() {
      if (item.fallback && this.src !== item.fallback) {
        this.src = item.fallback;
      }
    };

    lightboxImage.onload = function() {
      if (lightboxLoader) lightboxLoader.style.display = 'none';
    };

    if (lightboxTitle) {
      lightboxTitle.innerHTML = `<strong>${item.title}</strong> · <span style="color: var(--color-gold);">${item.subtitle}</span>`;
    }

    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${activeGalleryItems.length}`;
    }
  }

  function showNextLightbox() {
    if (!activeGalleryItems.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % activeGalleryItems.length;
    updateLightboxContent();
  }

  function showPrevLightbox() {
    if (!activeGalleryItems.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
    updateLightboxContent();
  }

  // Lightbox event listeners
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevLightbox);

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    // Lightbox modal takes precedence if active
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        showNextLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrevLightbox();
      }
      return;
    }

    // Photographer modal keyboard interactions
    if (photographerModal && photographerModal.classList.contains('is-open')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closePhotographerModal();
      } else if (e.key === 'Tab') {
        handleModalFocusTrap(e);
      } else if (e.key === 'ArrowLeft') {
        navigatePhotographer(-1);
      } else if (e.key === 'ArrowRight') {
        navigatePhotographer(1);
      }
    }
  });

  // Touch Swipe for Mobile Lightbox
  if (lightboxModal) {
    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleLightboxSwipe();
    }, { passive: true });
  }

  function handleLightboxSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    if (Math.abs(swipeDistance) > 45) {
      if (swipeDistance < 0) {
        showNextLightbox(); // Swipe left -> Next
      } else {
        showPrevLightbox(); // Swipe right -> Previous
      }
    }
  }

  /* ============================================================================
     5B. PHOTOGRAPHER PROFILE MODAL FUNCTIONALITY
     ============================================================================ */
  function openPhotographerModal(id, triggerElement = null, setFocus = true) {
    if (!photographerModal || !PHOTOGRAPHERS[id]) return;

    currentPhotographerId = id;
    if (triggerElement) {
      lastFocusedCard = triggerElement;
    }

    const data = PHOTOGRAPHERS[id];

    // Populate photographer header info
    if (photographerModalPortrait) {
      photographerModalPortrait.src = data.portrait;
      photographerModalPortrait.alt = `${data.name} — ${data.role}`;
    }
    if (photographerModalName) {
      photographerModalName.textContent = data.name;
    }
    if (photographerModalRole) {
      photographerModalRole.textContent = data.role;
    }
    if (photographerModalBio) {
      photographerModalBio.textContent = data.bio;
    }

    // Update direct phone pill in contact block
    const modalPhone = photographerModal.querySelector('.photographer-modal__phone');
    const modalPhoneNumber = photographerModal.querySelector('.photographer-modal__phone-number');
    if (modalPhone) {
      modalPhone.href = 'tel:' + data.phoneRaw;
      modalPhone.setAttribute('aria-label', `Call ${data.name} directly at ${data.phone}`);
    }
    if (modalPhoneNumber) {
      modalPhoneNumber.textContent = data.phone;
    }

    // Update CTA button text & destination (still links to Telegram)
    if (photographerModalCtaName) {
      photographerModalCtaName.textContent = data.name;
    }
    if (photographerModalCtaLink) {
      photographerModalCtaLink.href = 'https://t.me/alpha2223';
    }

    // Update Call note line under CTA
    const callNote = document.getElementById('photographerModalCallNote');
    if (callNote) {
      callNote.innerHTML = `Or call ${data.name} directly: <a href="tel:${data.phoneRaw}">${data.phone}</a>`;
    }

    // Populate selected work gallery
    if (photographerModalGallery) {
      photographerModalGallery.innerHTML = '';
      data.gallery.forEach((imgUrl, idx) => {
        const thumb = document.createElement('img');
        thumb.src = imgUrl;
        thumb.alt = `${data.name} selected work photo ${idx + 1}`;
        thumb.loading = 'lazy';
        thumb.setAttribute('tabindex', '0');
        thumb.setAttribute('role', 'button');
        thumb.setAttribute('aria-label', `View ${data.name}'s photo ${idx + 1} of ${data.gallery.length} in full screen`);

        // Clicking thumb opens in lightbox
        const triggerThumbLightbox = () => {
          if (!previousActiveGalleryItems) {
            previousActiveGalleryItems = activeGalleryItems;
          }
          activeGalleryItems = data.gallery.map((img, i) => ({
            src: img,
            fallback: img.replace('images/portfolio/', 'images/profile/'),
            title: `${data.name} — ${data.role}`,
            subtitle: `Selected Work · Photo ${i + 1} of ${data.gallery.length}`
          }));
          openLightbox(idx);
        };

        thumb.addEventListener('click', triggerThumbLightbox);
        thumb.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            triggerThumbLightbox();
          }
        });

        photographerModalGallery.appendChild(thumb);
      });
    }

    // Open modal with smooth animation
    photographerModal.removeAttribute('hidden');
    void photographerModal.offsetWidth; // Force reflow
    photographerModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    if (setFocus && photographerModalClose) {
      photographerModalClose.focus();
    }
  }

  function closePhotographerModal() {
    if (!photographerModal) return;

    photographerModal.classList.remove('is-open');
    setTimeout(() => {
      if (!photographerModal.classList.contains('is-open')) {
        photographerModal.setAttribute('hidden', '');
      }
    }, 300);

    // Only restore body scrolling if lightbox is not active
    if (!lightboxModal || !lightboxModal.classList.contains('active')) {
      document.body.style.overflow = '';
    }

    // Restore portfolio activeGalleryItems
    if (previousActiveGalleryItems && (!lightboxModal || !lightboxModal.classList.contains('active'))) {
      activeGalleryItems = previousActiveGalleryItems;
      previousActiveGalleryItems = null;
    }

    // Return focus to triggering card
    if (lastFocusedCard && typeof lastFocusedCard.focus === 'function') {
      lastFocusedCard.focus();
    }
  }

  function navigatePhotographer(direction) {
    if (!currentPhotographerId) return;
    const currentIndex = PHOTOGRAPHER_KEYS.indexOf(currentPhotographerId);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + PHOTOGRAPHER_KEYS.length) % PHOTOGRAPHER_KEYS.length;
    openPhotographerModal(PHOTOGRAPHER_KEYS[nextIndex], null, false);
  }

  function handleModalFocusTrap(e) {
    if (!photographerModal || !photographerModal.classList.contains('is-open')) return;

    const focusableSelectors = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusables = Array.from(photographerModal.querySelectorAll(focusableSelectors))
      .filter(el => el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0);

    if (focusables.length === 0) return;

    const firstElement = focusables[0];
    const lastElement = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  // Photographer Cards Click & Keyboard Listeners
  if (photographerCards.length > 0) {
    photographerCards.forEach(card => {
      const photogId = card.getAttribute('data-photographer');
      if (!photogId) return;

      card.addEventListener('click', (e) => {
        // If clicking on direct phone link, don't trigger modal
        if (e.target.closest('.photographer-card__phone')) return;
        e.preventDefault();
        openPhotographerModal(photogId, card);
      });

      card.addEventListener('keydown', (e) => {
        if (e.target.closest('.photographer-card__phone')) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openPhotographerModal(photogId, card);
        }
      });
    });
  }

  // Direct Phone Links on Cards (prevent modal open & open dialer)
  const photographerCardPhoneLinks = document.querySelectorAll('.photographer-card__phone');
  photographerCardPhoneLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      const href = link.getAttribute('href');
      if (href) {
        window.location.href = href;
      }
    });

    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.stopPropagation();
      }
    });
  });

  // Modal Control Listeners
  if (photographerModalClose) {
    photographerModalClose.addEventListener('click', closePhotographerModal);
  }
  if (photographerModalBackdrop) {
    photographerModalBackdrop.addEventListener('click', closePhotographerModal);
  }
  if (photographerModalPrev) {
    photographerModalPrev.addEventListener('click', () => navigatePhotographer(-1));
  }
  if (photographerModalNext) {
    photographerModalNext.addEventListener('click', () => navigatePhotographer(1));
  }

  // Expose on window for convenience
  window.openPhotographerModal = openPhotographerModal;
  window.closePhotographerModal = closePhotographerModal;

  /* ============================================================================
     6. PRIVATE CLIENT GALLERY DEMO PORTAL
     ============================================================================ */
  function buildDemoAlbumGrid() {
    if (!demoAlbumGrid) return;
    demoAlbumGrid.innerHTML = '';

    DEMO_ALBUM_PHOTOS.forEach((photo, idx) => {
      const item = document.createElement('div');
      item.className = 'demo-album-item';
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', `View proof photo: ${photo.title}`);

      item.innerHTML = `
        <img src="${photo.primary}" data-fallback="${photo.fallback}" alt="${photo.title}" loading="lazy">
      `;

      const img = item.querySelector('img');
      img.addEventListener('error', function() {
        const fb = this.getAttribute('data-fallback');
        if (fb && this.src !== fb) {
          this.src = fb;
        }
      });

      // Clicking opens this demo photo in lightbox
      item.addEventListener('click', () => {
        // Temporarily override activeGalleryItems for demo album viewer
        activeGalleryItems = DEMO_ALBUM_PHOTOS.map(p => ({
          src: p.primary,
          fallback: p.fallback,
          title: p.title,
          subtitle: 'Private Client Proof Session · Watermarked'
        }));
        openLightbox(idx);
      });

      demoAlbumGrid.appendChild(item);
    });
  }

  function unlockDemoGallery() {
    if (!demoGalleryResults) return;

    // Build the grid
    buildDemoAlbumGrid();

    // Show the results container with smooth animation
    demoGalleryResults.style.display = 'block';
    demoGalleryResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (portalSubmitBtn) {
      portalSubmitBtn.innerHTML = '✓ Gallery Unlocked';
      portalSubmitBtn.style.backgroundColor = 'var(--color-gold-dark)';
    }
  }

  if (portalForm) {
    portalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      unlockDemoGallery();
    });
  }

  if (portalSubmitBtn) {
    portalSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      unlockDemoGallery();
    });
  }

  if (closeDemoGalleryBtn) {
    closeDemoGalleryBtn.addEventListener('click', () => {
      if (demoGalleryResults) demoGalleryResults.style.display = 'none';
      if (portalSubmitBtn) {
        portalSubmitBtn.innerHTML = 'Unlock Gallery';
        portalSubmitBtn.style.backgroundColor = '';
      }
      // Restore standard portfolio items for lightbox
      renderPortfolio(currentFilter);
    });
  }

  // Expand Full Proof Sheet in Lightbox
  if (viewFullProofBtn && demoProofSheet) {
    viewFullProofBtn.addEventListener('click', () => {
      const fullSrc = demoProofSheet.getAttribute('data-full') || demoProofSheet.src;
      activeGalleryItems = [{
        src: fullSrc,
        fallback: 'images/profile/weddings/jpeg%20(1).jpeg',
        title: 'Master Proof Sheet & Album Collage',
        subtitle: 'High-Resolution Confidential Proof'
      }];
      openLightbox(0);
    });
  }

  /* ============================================================================
     7. TELEGRAM BOOKING INQUIRY GENERATOR (@alpha2223)
     ============================================================================ */
  function showTelegramToast() {
    const toast = document.getElementById('telegramToast');
    if (toast) {
      toast.classList.add('active');
      setTimeout(() => {
        toast.classList.remove('active');
      }, 7000);
    } else {
      alert('Your details have been copied. Telegram will now open — just paste the message into the chat.');
    }
  }

  function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    } else {
      // Robust fallback for file:// or older environments
      return new Promise((resolve, reject) => {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          const successful = document.execCommand('copy');
          textArea.remove();
          successful ? resolve() : reject(new Error('execCommand copy failed'));
        } catch (err) {
          textArea.remove();
          reject(err);
        }
      });
    }
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = (document.getElementById('clientName')?.value || '').trim();
      const phone = (document.getElementById('clientPhone')?.value || '').trim();
      const email = (document.getElementById('clientEmail')?.value || '').trim();
      const sessionType = (document.getElementById('sessionType')?.value || '').trim();
      const date = (document.getElementById('preferredDate')?.value || '').trim();
      const message = (document.getElementById('clientMessage')?.value || '').trim();

      if (!name || !phone || !sessionType) {
        alert('Please fill in your name, phone number, and preferred photography service.');
        return;
      }

      // Format Telegram message cleanly
      let tgMessage = `ALPHA PICTURES — BOOKING INQUIRY\n`;
      tgMessage += `━━━━━━━━━━━━━━━━━━━━━━\n`;
      tgMessage += `👤 Name: ${name}\n`;
      tgMessage += `📞 Phone: ${phone}\n`;
      if (email) tgMessage += `✉️ Email: ${email}\n`;
      tgMessage += `📷 Service: ${sessionType}\n`;
      if (date) tgMessage += `📅 Date: ${date}\n`;
      if (message) tgMessage += `📝 Notes/Vision:\n${message}\n`;
      tgMessage += `━━━━━━━━━━━━━━━━━━━━━━\n`;
      tgMessage += `Sent from Alpha Pictures Portfolio Website`;

      const telegramUrl = 'https://t.me/alpha2223';

      // Copy message to clipboard, display toast instruction, and open Telegram
      copyTextToClipboard(tgMessage)
        .then(() => {
          showTelegramToast();
          setTimeout(() => {
            window.open(telegramUrl, '_blank', 'noopener,noreferrer');
          }, 600);
        })
        .catch(() => {
          alert('Your details have been copied. Telegram will now open — just paste the message into the chat.');
          window.open(telegramUrl, '_blank', 'noopener,noreferrer');
        });
    });
  }

  /* ============================================================================
     8. STICKY HEADER & SCROLLSPY NAVIGATION
     ============================================================================ */
  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Run on initial page load

  // Active section scrollspy
  const sections = document.querySelectorAll('section[id]');
  function updateScrollSpy() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
        mobileNavLinks.forEach(mLink => {
          mLink.classList.remove('active');
          if (mLink.getAttribute('href') === `#${id}`) {
            mLink.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateScrollSpy, { passive: true });

  /* ============================================================================
     9. MOBILE NAVIGATION DRAWER CONTROLLER
     ============================================================================ */
  function toggleMobileMenu() {
    if (!mobileMenu || !hamburgerBtn) return;
    const isOpen = mobileMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMobileMenu() {
    if (!mobileMenu || !hamburgerBtn) return;
    mobileMenu.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close mobile drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu || !hamburgerBtn) return;
    if (mobileMenu.classList.contains('open') && 
        !mobileMenu.contains(e.target) && 
        !hamburgerBtn.contains(e.target)) {
      closeMobileMenu();
    }
  });

  /* ============================================================================
     10. INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
     ============================================================================ */
  const fadeElements = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    fadeElements.forEach(el => el.classList.add('visible'));
  }

  /* ============================================================================
     11. INITIALIZATION CALL
     ============================================================================ */
  renderPortfolio('all');
});
