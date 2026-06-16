# Case Studies Feature

This directory contains all components for the Case Studies feature.

## Structure

### Pages
- `/case-studies` - Listing page showing all case studies in a grid
- `/case-studies/[slug]` - Individual case study detail page

### Components

#### CaseStudyBanner.jsx
Banner component for the case studies listing page with company branding.

#### Sections/GoalChallengeOutcome.jsx
Displays three sections specific to each case study:
- **Goal**: What the client wanted to achieve
- **Challenge**: Challenges faced during the project
- **Outcome**: Results and achievements

Each section uses a 3-column layout with title, separator line, and content.

#### Sections/ProcessesSection.jsx
Processes section with scrollspy navigation:
- **Left**: Sticky sidebar with process titles (highlights active section)
- **Center**: Vertical separator line
- **Right**: Dynamic process content
  - Process title
  - Highlights (bullet points)
  - Rich text content (using Portable Text from Sanity)
  - Image gallery per process

Features:
- Scroll detection to highlight active process
- Smooth scroll to section on click
- Responsive design

Supports rich text formatting including:
- Headings (H1, H2, H3)
- Paragraphs
- Lists (bullet and numbered)
- Images with captions
- Links
- Bold and italic text

## Sanity Schema

The case study schema (`sanity-backend/schemaTypes/caseStudy.ts`) includes:

### Required Fields
- `title` - Case study title
- `slug` - URL-friendly identifier
- `client` - Client name
- `goal` - Project goal
- `challenge` - Challenges faced
- `outcome` - Results achieved
- `processes` - Array of process objects
  - Each process has: title, highlights, content (rich text), images
- `publishedAt` - Publication date

### Optional Fields
- `industry` - Client's industry
- `bannerImage` - Hero image
- `excerpt` - Short description for listing page
- `featured` - Featured flag

## Usage

### Adding a New Case Study

1. Go to Sanity Studio
2. Create a new "Case Study" document
3. Fill in the required fields:
   - Title (e.g., "Healthcare App Redesign")
   - Slug (auto-generated from title)
   - Client name
   - Goal, Challenge, Outcome
   - Processes (add multiple):
     - Process title
     - Highlights (optional)
     - Content (rich text)
     - Images (optional)
   - Published At
4. Add optional fields:
   - Industry
   - Banner Image
   - Excerpt
   - Featured
5. Publish the document

The case study will automatically appear on the `/case-studies` listing page and have its own detail page at `/case-studies/[slug]`.

### Customization

To customize the styling:
- Update Tailwind classes in component files
- Modify the color scheme (currently using `#6F36D2` and `#8000FF`)
- Adjust the layout grid in `ProcessesSection.jsx`

## Dependencies

- `@portabletext/react` - For rendering rich text from Sanity
- `next/image` - For optimized images
- Sanity client and image utilities

## Features

✅ Separate pages for each case study
✅ Case study listing page with grid layout
✅ Individual case study detail pages
✅ Goal, Challenge, Outcome sections (specific to each case study)
✅ Processes section with scrollspy navigation
✅ Sticky sidebar navigation for processes
✅ Active process highlighting on scroll
✅ Smooth scroll to section
✅ Rich text content with images
✅ Image gallery per process
✅ Responsive design
✅ Reuses existing Testimonials component
