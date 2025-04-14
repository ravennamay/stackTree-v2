# User Flow & Project Structure

## User Flow

1.  **Entry:** A user (or search engine crawler) arrives at the single-page website `ratte.seweraim.com`.
2.  **Exploration:** The user sees the main sections: Header (branding, theme toggle), Content (list of social media links, affiliate links, and coupon codes), and Footer (contact info).
3.  **Interaction:** 
    - The user can visually scan the links and codes.
    - The user can click on any link to be redirected to the corresponding external platform (Twitch, Discord, affiliate site, etc.).
    - The user can manually copy coupon codes.
    - The user can toggle between light and dark themes.
4.  **Indexing:** Search engine crawlers and coupon site scrapers can access and index all link URLs and coupon codes directly from the static HTML content without obstruction.

## Project Structure (Proposed)

```
/src
 ├── /components
 │    ├── Header.tsx         // Site branding and dark/light toggle
 │    ├── LinkCard.tsx       // Individual link and affiliate card component
 │    ├── LinkList.tsx       // Container for aggregating LinkCard components
 │    ├── Footer.tsx         // Footer containing contact and legal info
 │    ├── LinkIcon.tsx       // Icon handling for various link types
 ├── /assets
 │    └── (images, icons, etc.)
 ├── App.tsx                // Main component to layout the header, content, and footer
 ├── index.tsx              // Entry point for the React application
 └── index.css              // Global styles and Tailwind CSS integration
```

### Component Details

- **Header.tsx:**  
  - Displays the site's branding (name, tagline) and includes the light/dark mode toggle.
  - Uses semantic HTML and structured markup for SEO.

- **LinkCard.tsx:**  
  - Accepts props like link title, URL, affiliate code, click count, etc.
  - Presents the link in a format that is clearly accessible to web crawlers and scrapers.
  - Includes visual elements (Share button, Redirect label, etc.) as placeholders that do not impede bot indexing.

- **LinkList.tsx:**  
  - Iterates through an array of link objects, rendering a LinkCard for each.
  - The data for links (including affiliate codes) is stored in a JSON or JavaScript configuration file to keep the site's content easily readable by scrapers and search engines.

- **Footer.tsx:**  
  - Provides additional contact details and branding.
  - Uses semantic footer elements to reinforce SEO and accessibility.

- **LinkIcon.tsx:**
  - Manages the rendering of appropriate icons for different link types.
  - Centralizes icon handling for consistent usage across the application. 