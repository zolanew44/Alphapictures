================================================================================
ALPHA PICTURES (ALPHA STUDIO) — WEBSITE OWNER USER GUIDE
Addis Ababa, Ethiopia · Luxury Photography Portfolio
================================================================================

HOW TO DEPLOY TO VERCEL (GITHUB + VERCEL)
1. Create a GitHub repo (e.g. alphapictures).
2. Upload everything inside C:\Alpha Studio Website\ to that repo
   (do NOT upload the C:\Alpha Studio\ folder).
3. Go to vercel.com → New Project → Import the repo.
4. Framework preset: "Other" (plain static site).
5. Build command: leave blank.
6. Output directory: leave blank (or set to ".").
7. Click Deploy — you get a URL like alphapictures.vercel.app.
8. Future updates: just push to GitHub, Vercel redeploys automatically.

================================================================================
WELCOME & OVERVIEW
================================================================================
This website is completely self-contained within C:\Alpha Studio Website\.
All images, styles, scripts, and configuration files are bundled together.
There is NO build step, NO npm, and NO complex software needed.

--------------------------------------------------------------------------------
TABLE OF CONTENTS
--------------------------------------------------------------------------------
1. How to Deploy to Vercel (GitHub + Vercel)
2. How to Open and View the Website Locally
3. How to Edit Text and Information (Using Notepad)
4. How to Update Phone Numbers, Email, and Telegram Link
5. How to Add New Photos to the Portfolio Gallery
6. How the Private Client Gallery Demo Works
7. Self-Contained Project Structure & Image Reference

================================================================================
2. HOW TO OPEN AND VIEW THE WEBSITE LOCALLY
================================================================================
You can open and test your website right now on any computer without needing an
internet connection or web server:

1. Open your File Explorer.
2. Navigate to:
   C:\Alpha Studio Website\
3. Double-click on:
   index.html
4. The website will immediately open in your default web browser (Chrome, Edge,
   Firefox, Safari, etc.).

All interactive features — the responsive navigation, category filters,
full-screen image lightbox modal, client gallery unlock, and Telegram booking
button — work immediately right out of the box.

================================================================================
3. HOW TO EDIT TEXT AND INFORMATION (USING NOTEPAD)
================================================================================
Every section of the website has clean, self-explanatory HTML code with clear
comments indicating where to edit.

To edit text:
1. Right-click on index.html inside C:\Alpha Studio Website\
2. Select "Open with" -> "Notepad" (or VS Code / Notepad++ if installed).
3. Press Ctrl + F to search for the section you want to edit.
4. Modify the text between the HTML tags (such as <h2>, <h3>, or <p>).
5. Save the file (Ctrl + S) and refresh your browser (F5) to see the changes.

Key sections marked for editing:
- Lead Photographer Bio (Ermi):
  Search for: "Meet Our Lead Photographer"
  You can edit the quote, years of experience, or specialties.

- The Three Photographers Grid:
  Search for: "<!-- EDIT: to show 3 photographers"
  Under this comment, you will find cards for:
  - Ermi (Lead Photographer & Founder)
  - Mati (Creative & Event Photographer)
  - Wabi (Studio & Portrait Specialist)
  You can edit names, titles, descriptions, or change their portrait images.

- Studio Sanctuary / Facilities:
  Search for: "The Alpha Studio Facility"
  You can edit the descriptions of your studio rooms, equipment, cycloramas,
  and lounges.

================================================================================
4. HOW TO UPDATE PHONE NUMBERS, EMAIL, AND TELEGRAM
================================================================================
Your studio's official contact details are located in multiple strategic spots:
the header mobile drawer, the booking section, and the footer.

Currently configured details:
- Main Booking Desk:       +251 923 214 406
- Studio Line 2:           +251 913 851 893
- Studio Line 3:           +251 922 576 132
- Email:                   Alphapictuers@gmail.com
- Telegram:                @alpha2223 (https://t.me/alpha2223)
- Coordinates:             9.005480, 38.890596 (Addis Ababa, Ethiopia)

To change a phone number or email:
1. Open index.html in Notepad.
2. Press Ctrl + H (Find and Replace).
3. Find the old number (e.g., +251 923 214 406) and replace with your new number.
4. To update your Telegram username (@alpha2223):
   - Open index.html in Notepad and search for: https://t.me/alpha2223
     Replace with your updated Telegram link.
   - Open js\script.js in Notepad and search for: https://t.me/alpha2223
     Replace with your updated Telegram link.
5. Save both files.

================================================================================
5. HOW TO ADD NEW PHOTOS TO THE PORTFOLIO GALLERY
================================================================================
All gallery photographs are loaded dynamically using the PORTFOLIO_DATA list
inside the file:
C:\Alpha Studio Website\js\script.js

All images are stored locally inside the self-contained folder:
C:\Alpha Studio Website\images\

To add a new photo to the portfolio:
1. Place your new image file into the appropriate category folder inside:
   C:\Alpha Studio Website\images\portfolio\<category>\
   (For example: images\portfolio\weddings\new-wedding-photo.jpg)

2. Open C:\Alpha Studio Website\js\script.js in Notepad.

3. Find the section matching your category (weddings, engagements, birthdays,
   graduations, portraits, or events).

4. Copy and paste an existing item block at the end of that category, and change
   the details.

   EXAMPLE OF AN ITEM BLOCK:
   -----------------------------------------------------------------
   {
     id: 'wed-16',
     category: 'weddings',
     categoryLabel: 'Weddings',
     title: 'Grand Palace Evening Reception',
     subtitle: 'Addis Ababa · Skylight Ballroom',
     file: 'new-wedding-photo.jpg',
     primaryPath: 'images/portfolio/weddings/new-wedding-photo.jpg',
     fallbackPath: 'images/profile/weddings/new-wedding-photo.jpg'
   },
   -----------------------------------------------------------------

5. Save js\script.js and refresh index.html in your browser. Your new photo
   will appear instantly in the gallery, complete with high-resolution lightbox
   zoom, title overlay, and category filtering!

================================================================================
6. HOW THE PRIVATE CLIENT GALLERY DEMO WORKS
================================================================================
Alpha Pictures offers private, confidential proof galleries for couples and clients
accessed via QR codes on proof cards.

The website includes a live client demo portal:
- Located under section #gallery ("Private Client Gallery — Demo").
- Clients can type any access code (e.g. ALPHA2026) or click "Unlock Gallery".
- It unlocks the Royal Habesha Matrimony Proof Album.
- Includes the master curated multi-image wedding proof sheet
  (images/Private%20Wedding%20Album.jpeg) with an "Expand Full Proof" zoom button,
  plus 8 high-resolution individual proof previews with watermarked badges.
- To close the private album, clients simply click "Close Private Viewer".

================================================================================
7. SELF-CONTAINED PROJECT STRUCTURE & IMAGE REFERENCE
================================================================================
Your website files are completely self-contained:

C:\Alpha Studio Website\
├── index.html       → The entire website structure, text, and layout
├── vercel.json      → Vercel deployment configuration (clean URLs)
├── .gitignore       → Git ignore rules for node_modules and OS caches
├── css\
│   └── style.css    → Complete luxury visual design, fonts, animations, mobile styles
├── js\
│   └── script.js    → Interactive portfolio, lightbox modal, Telegram booking, demo gallery
├── images\          → Self-contained high-resolution studio assets:
│   ├── logo/        → Studio logo assets
│   ├── portfolio/   → Portfolio category photos (weddings, birthdays, etc.)
│   ├── profile/     → Studio facilities, photographer portraits, fallbacks
│   └── demo-album-wedding/ → Proof session demo photos
└── README.txt       → This instruction manual

Your original photography archive remains 100% untouched and safe in:
C:\Alpha Studio\

================================================================================
SUPPORT & FINAL NOTES
================================================================================
- All photos in the website are coded with lazy-loading attributes ("loading=lazy")
  ensuring rapid page load speeds even with dozens of ultra-high-resolution images.
- The website is 100% mobile responsive and has been tested across 1200px, 1024px,
  768px, and 480px screen widths.
- No files inside C:\Alpha Studio\ were altered, compressed, moved, or deleted.

Alpha Pictures · Addis Ababa, Ethiopia · The Art of Capturing Legacy
================================================================================
