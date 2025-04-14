import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
// Import postcss plugins if needed, though Rsbuild often includes defaults
// const tailwindcss = require('tailwindcss');
// const autoprefixer = require('autoprefixer');

const pageTitle = 'RatteCS Link Funnel - Socials, Affiliates & Codes';
const pageDescription = 'Your central hub for RatteCS social media profiles (Twitch, Discord, YouTube, etc.), affiliate links (Gamerbulk, AceZone, SkinVault), coupon codes, and CS2 config.';
const pageKeywords = 'rattecs, counter-strike, cs2, twitch, discord, youtube, kick, steam, csfloat, skinport, eliteklan, gamerbulk, acezone, skinvault, affiliate, coupon, code, settings, peripherals';
const canonicalUrl = 'http://ratte.seweraim.com/'; // Replace if using HTTPS

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  },
  html: {
    title: pageTitle,
    // Inject meta tags and font links
    tags: [
      // -- Meta Tags --
      { tag: 'meta', attrs: { charset: 'UTF-8' } },
      { tag: 'meta', attrs: { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' } },
      { tag: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } },
      { tag: 'meta', attrs: { name: 'description', content: pageDescription } },
      { tag: 'meta', attrs: { name: 'keywords', content: pageKeywords } },
      { tag: 'meta', attrs: { name: 'author', content: 'RatteCS' } },
      // -- Canonical Link --
      { tag: 'link', attrs: { rel: 'canonical', href: canonicalUrl } },
      // -- Open Graph Tags --
      { tag: 'meta', attrs: { property: 'og:title', content: pageTitle } },
      { tag: 'meta', attrs: { property: 'og:description', content: pageDescription } },
      { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
      { tag: 'meta', attrs: { property: 'og:url', content: canonicalUrl } },
      { tag: 'meta', attrs: { property: 'og:site_name', content: 'RatteCS Link Funnel' } },
      // { tag: 'meta', attrs: { property: 'og:image', content: 'URL_TO_PREVIEW_IMAGE.jpg' } }, // Optional: Add later
      // -- Twitter Card Tags --
      { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
      { tag: 'meta', attrs: { name: 'twitter:title', content: pageTitle } },
      { tag: 'meta', attrs: { name: 'twitter:description', content: pageDescription } },
      // { tag: 'meta', attrs: { name: 'twitter:image', content: 'URL_TO_PREVIEW_IMAGE.jpg' } }, // Optional: Add later
      // -- Preconnect/Font Links (Existing) --
      {
        tag: 'link',
        attrs: {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        }
      },
      {
        tag: 'link',
        attrs: {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        }
      },
      {
        tag: 'link',
        attrs: {
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
          rel: 'stylesheet'
        }
      }
    ]
  },
  // Rsbuild usually detects Tailwind automatically.
  // If not, we might need to add tools.tailwindcss: {}
}); 