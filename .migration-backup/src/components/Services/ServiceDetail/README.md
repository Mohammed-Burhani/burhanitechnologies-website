# Service Detail Page - Redesigned

This directory contains the redesigned service detail page components following the Simform website structure with Burhani Technologies theme.

## Structure

The service detail page follows this layout:

1. **Hero Section** - Full-width hero with service title and CTA
2. **Intro Text** - Service description and overview
3. **Service Offerings** - Grid of service capabilities
4. **Credibility** - Stats and achievements
5. **Social Proof** - Testimonials (from parent component)
6. **Case Studies** - Related success stories
7. **Process/Why** - How we work methodology
8. **Blog Posts** - Related articles
9. **CTA** - Final call-to-action (from parent component)

## Components

### ServiceHero.jsx
Full-width hero section with:
- Gradient background (purple theme)
- Service title
- Description
- Contact CTA button
- Decorative logo elements

### ServiceIntro.jsx
Introduction section displaying:
- Rich text content from Sanity
- Portable Text support
- Clean, readable layout

### ServiceOfferings.jsx
Grid layout showcasing service capabilities:
- 3-column responsive grid
- Icon + title + description cards
- Hover effects
- Supports custom icons or default

### ServiceCredibility.jsx
Statistics and credibility section:
- 4-column stats grid
- Icons with numbers
- Dark gradient background
- Glassmorphism effect

### ServiceProcess.jsx
Process/methodology section:
- 2-column grid layout
- Numbered steps
- Hover effects
- Supports custom processes or defaults

### ServiceCaseStudies.jsx
Related case studies section:
- Fetches latest 3 case studies from Sanity
- Card layout with images
- Links to full case studies
- "View All" CTA

## Sanity Schema Updates

The services schema now includes:

### offerings (array)
```javascript
{
  title: string,
  description: text,
  icon: string (path)
}
```

### processes (array)
```javascript
{
  step: string (e.g., "01"),
  title: string,
  description: text
}
```

## Usage

### Adding Service Offerings in Sanity

1. Go to Sanity Studio
2. Edit a service document
3. Scroll to "Service Offerings"
4. Add offerings with:
   - Title (e.g., "Cloud Migration")
   - Description
   - Icon path (optional, e.g., "/icons/cloud.svg")

### Adding Service Processes in Sanity

1. In the same service document
2. Scroll to "Service Processes"
3. Add processes with:
   - Step number (e.g., "01")
   - Title (e.g., "Discovery & Planning")
   - Description

## Theme Colors

- Primary Purple: `#6F36D2`
- Secondary Purple: `#8000FF`
- Dark: `#180030`
- Accent: `#6622DC`

## Features

✅ Modern, clean design
✅ Fully responsive
✅ AOS animations
✅ Gradient backgrounds
✅ Hover effects
✅ Real-time Sanity data
✅ SEO-friendly
✅ Reuses existing components
✅ Follows brand guidelines

## Customization

To customize:
- Update colors in Tailwind classes
- Modify grid layouts in component files
- Add/remove sections in ServicePageClient.jsx
- Update default data in components
