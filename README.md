# Campus Mantri - GeeksforGeeks Ambassador Program

A modern, professional website for the GeeksforGeeks Campus Mantri program. Built with Next.js and Tailwind CSS, ready for instant deployment on Vercel.

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Deploy to Vercel

#### Option 1: One-Click Deploy
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import this repository or upload the ZIP file
4. Click "Deploy"

#### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel
```

#### Option 3: GitHub Integration
1. Push this code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on every push

## 📋 Project Structure

```
campus-mantri/
├── pages/
│   ├── _app.js          # Global app wrapper
│   ├── _document.js     # HTML document wrapper
│   └── index.js         # Home page
├── components/
│   ├── Navbar.js        # Navigation bar
│   ├── Hero.js          # Landing hero section
│   ├── Steps.js         # Getting started steps
│   ├── Tasks.js         # Tasks showcase
│   └── Footer.js        # Footer
├── styles/
│   └── globals.css      # Global styles
├── package.json         # Dependencies
├── next.config.js       # Next.js config
├── tailwind.config.js   # Tailwind CSS config
└── vercel.json         # Vercel deployment config
```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js` and update the color variables:
```javascript
'gfg-green': '#0F9D58',  // Change this
'gfg-dark': '#1a1a1a',
```

### Update Links
Replace these links with your own:
- Dashboard: `https://campus-portal.geeksforgeeks.org/`
- LinkedIn: `https://www.linkedin.com/in/ayushh-sharmaa/`
- GFG Profile: `https://www.geeksforgeeks.org/profile/cmayush`

### Modify Content
- **Hero Section:** Edit `components/Hero.js`
- **Getting Started Steps:** Edit `components/Steps.js`
- **Tasks:** Edit `components/Tasks.js`

## 🔧 Technology Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS 3
- **Fonts:** Sora (Display), Inter (Body)
- **Deployment:** Vercel
- **Node:** 18+

## ✨ Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ Smooth scroll animations
✅ Interactive task cards with expand/collapse
✅ Professional gradient effects
✅ Fast page load times
✅ SEO optimized
✅ Mobile hamburger menu
✅ Social media links
✅ Accessible (WCAG compliant)

## 📝 Build & Deploy

### Build for production:
```bash
npm run build
npm start
```

### Check for issues:
```bash
npm run lint
```

## 🌐 Environment Setup

No environment variables needed! This website is fully static and works out of the box.

## 📱 Mobile Responsive

The website is fully responsive with:
- Mobile: Optimized for 320px+
- Tablet: 768px+
- Desktop: 1024px+

## 🔗 Important Links

- **Dashboard:** https://campus-portal.geeksforgeeks.org/
- **Registration:** https://share.google/4T3Vb47CpehXdYodV
- **GFG Profile:** https://www.geeksforgeeks.org/profile/
- **LinkedIn:** https://www.linkedin.com/in/ayushh-sharmaa/
- **GeeksforGeeks:** https://www.geeksforgeeks.org/

## ❓ Support

For issues or questions, contact Ayush through:
- LinkedIn: https://www.linkedin.com/in/ayushh-sharmaa/
- GeeksforGeeks: https://www.geeksforgeeks.org/profile/cmayush

## 📄 License

Created for the GeeksforGeeks Campus Mantri Program.

---

**Ready to deploy? Push to Vercel and go live in seconds! 🚀**
