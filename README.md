# Minerals Spectrum Survey Website 2.0

Static bilingual corporate website for MSS / Minerals Spectrum Survey.

## Structure

- `index.html` — landing page
- `about.html` — About Us
- `services.html` — MSS Smart Solutions and service detail sections
- `partners.html` — partners page
- `newsroom.html` — events, articles, bulletins and case studies
- `contacts.html` — contact / proposal request form placeholder
- `resources.html` — resource library and anonymized portfolio
- `data.js` — reusable bilingual content, services, case studies, news, partners
- `script.js` — rendering, language switcher, search, mobile menu, form placeholder, animations
- `styles.css` — responsive premium industrial / geoscience visual system
- `assets/` — fallback image and favicon

## How to open locally

1. Unzip the folder.
2. Open `index.html` in a browser.
3. The site works locally without a backend. External images and Google Fonts load only when internet is available. If images fail, the local SVG fallback is used.

## How to upload to GitHub and deploy on Vercel

1. Create a new GitHub repository.
2. Upload all files and the `assets` folder to the repository root.
3. In Vercel, choose **Add New Project** and import the GitHub repository.
4. Framework preset: **Other** or **Static**.
5. Build command: leave empty.
6. Output directory: `.` or leave default.
7. Deploy.

## Editing content

Most text is stored in `data.js`. Each bilingual text field uses:

```js
{ en: "English text", ru: "Русский текст" }
```

To change services, case studies, partners, news or resources, edit the corresponding arrays in `data.js`.

## Contact form

The form is static and does not send messages yet. It is prepared for later integration with a service such as Formspree, a Vercel serverless function, or a custom backend.

## Current build summary

- Total files: 14
- HTML pages: 7
- Service cards: 5
- Case-study / project cards: 13
- News/demo cards: 6
- Resource/demo cards: 3
- Partner cards: 5
- Local links/assets checked: yes
- External images: linked, lazy-loaded, documented in `IMAGE_SOURCES.md`, with local fallback

## Review notes

Some content from the guide contained comments such as “нужен другой текст”, “позднее будет понятно” or question marks. Those parts were rewritten into professional website copy and marked in the UI with **Review copy** or **Demo content** badges.
