# Be Part – Events & Communication

> **Notice:**  
> This repository is an exclusive project developed by Dexorteck for Be Part.  
> We do not accept external contributions.

An elegant and responsive landing page for the "Be Part – Events & Communication" brand, developed with React, Next.js, and Tailwind CSS.

🎯 About the Project  
An institutional landing page that presents Be Part's services in a sophisticated and modern way, highlighting:

- Strategic consulting
- Event planning and production
- Communication services
- Sustainable solutions (Evergreen Solutions)

🎨 Design  
- Colors: White, black, dark gray, and soft gold/light beige  
- Typography: Playfair Display (serif) for headings, Inter (sans-serif) for text  
- Layout: Spacious, smooth transitions, elegant scroll effects  
- Responsive: Fully adapted for mobile, tablet, and desktop

🔧 Technologies  
- Framework: Next.js 14 (App Router)  
- Styling: Tailwind CSS  
- Icons: Lucide React  
- Typography: Google Fonts (Playfair Display, Inter)  
- Language: TypeScript

📦 Installation  
Clone the repository:
```bash
git clone [repository-url]
cd be-part-landing
```
Install dependencies:
```bash
npm install
```
Run in development:
```bash
npm run dev
```
Open in your browser:  
http://localhost:3000

🚀 Deploy  
Production:
```bash
npm run build
npm run start
```
Recommended deploy on Vercel:
```bash
npx vercel
```

📁 Project Structure
```
be-part-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx          # Main section
│   ├── About.tsx         # About us + Ricardo Reis quote
│   ├── Services.tsx      # Services (3 cards)
│   ├── Evergreen.tsx     # Sustainable solutions
│   ├── Testimonials.tsx  # Founders
│   └── CTA.tsx           # Final call to action
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

🎯 Landing Page Sections  
1. Hero Section  
   - Main phrase: "BE PART: EVERY PIECE MATTERS"  
   - Subheadline: "Events. Communication. Strategic Consulting."  
   - Main CTA: "Let's talk"

2. About Us  
   - Institutional text  
   - Poetic quote by Ricardo Reis  
   - Company mission and vision

3. Services  
   - Strategic Consulting: Solutions aligned with clear objectives  
   - Events: Planning and production of memorable experiences  
   - Communication: Visual identity, social media, content

4. Evergreen Solutions  
   - Eco-friendly catering  
   - Waste management  
   - Electronic accreditation  
   - Social impact

5. Founders  
   - Duarte Mairos – Co-founder & Communication Director  
   - Vítor Macias – Co-founder & Events Director  
   - Company statistics

6. Call to Action  
   - Final phrase: "LET US BE PART."  
   - Contact information  
   - Social media links

🎨 Customization  
**Colors**  
Colors can be adjusted in the `tailwind.config.js` file:
```js
colors: {
  gold: {
    // Custom gold shades
  }
}
```
**Typography**  
Fonts are set in `app/globals.css`:
- Playfair Display (serif)
- Inter (sans-serif)

📱 Responsiveness  
The landing page is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

⚡ Performance  
- SEO optimized
- Lazy loading of components
- Optimized fonts
- Responsive images

## 📞 Contact
Email: info@bepart.pt  
Phone: +351 123 456 789  
Location: Lisbon, Portugal

Be Part – Events & Communication  
Connecting people, ideas, and experiences. Every piece matters. 