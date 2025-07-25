# Claude Development Notes

## Important Development Guidelines

### Image Assets - CRITICAL
- **NEVER use localhost URLs** (e.g., `http://localhost:3845/assets/...`) in production code
- **Always download images** from Figma/localhost and save them to `app/assets/` directory
- **Use Next.js Image component**: `import Image from "next/image"`
- **Import images properly**: `import imageName from "../assets/image.png"`
- **Specify dimensions**: Always include `width` and `height` props for Next.js Image
- This ensures images work when deployed online, not just in development

### Styling Guidelines
- Uses Tailwind CSS with custom colors defined in `tailwind.config.js`
- Custom color palette includes:
  - `navy`: Dark blue tones (50-900)
  - `gold`: Warm accent colors (50-900) 
  - `olive`: Green text color (`olive-500: #3D5033`)
  - `beige`: Background colors (`beige-500: #fcf5e8`)
- Font configuration uses Playfair Display (serif) and Inter (sans-serif)

### Component Structure
- Use semantic HTML elements (`<section>`, `<main>`, etc.)
- Prefer CSS Grid over Flexbox for complex layouts
- Always include proper alt text for images
- Use responsive design patterns (mobile-first)

### Layout Best Practices
- When recreating Figma designs, analyze the grid structure carefully
- Use CSS Grid with explicit column/row spans for precise positioning
- Download and properly import all images from Figma/localhost URLs
- Test responsive behavior across different screen sizes

## Project Structure
- Components: `/app/components/`
- Assets: `/app/assets/`
- Styles: Tailwind CSS with custom config
- Framework: Next.js 14 with App Router