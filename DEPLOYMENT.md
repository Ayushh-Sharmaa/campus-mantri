# 🚀 Campus Mantri Website - Deployment Guide

## Zero to Live in 5 Minutes

This guide will help you deploy the Campus Mantri website to Vercel.

---

## Method 1: Drag & Drop on Vercel (Easiest)

### Step 1: Extract the ZIP file
- Unzip the `campus-mantri.zip` file on your computer
- You'll see a folder named `campus-mantri`

### Step 2: Go to Vercel
- Visit: https://vercel.com
- Sign up or log in (use GitHub, GitLab, or email)

### Step 3: Create New Project
- Click "Add New" → "Project"
- Select "Continue with Git"
- Or import the folder directly

### Step 4: Configure & Deploy
- Vercel auto-detects Next.js
- Click "Deploy"
- Wait 2-3 minutes
- Your site is LIVE! 🎉

**Your Site URL:** `https://campus-mantri-[random-id].vercel.app`

---

## Method 2: GitHub + Vercel (Recommended for Teams)

### Step 1: Push to GitHub
```bash
# Initialize git in the folder
cd campus-mantri
git init
git add .
git commit -m "Initial commit"

# Go to github.com and create a new repository
# Then push:
git remote add origin https://github.com/YOUR-USERNAME/campus-mantri.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel
- Visit: https://vercel.com/new
- Click "Import Git Repository"
- Paste: `https://github.com/YOUR-USERNAME/campus-mantri.git`
- Click "Import"

### Step 3: Auto Deploy
- Every push to `main` = auto deploy ✅
- View deployments in Vercel dashboard

---

## Method 3: Vercel CLI (For Developers)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
cd campus-mantri
vercel
```

### Step 3: Follow Prompts
- Link to existing project or create new
- Select account
- Done! 🎉

---

## Method 4: Local First, Then Deploy

### Step 1: Test Locally
```bash
cd campus-mantri
npm install
npm run dev
```

Visit: http://localhost:3000

### Step 2: Build for Production
```bash
npm run build
```

### Step 3: Deploy via Vercel
- Use Method 1, 2, or 3 above

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Website loads on mobile
- [ ] All links work correctly:
  - Dashboard link
  - LinkedIn link
  - GeeksforGeeks links
- [ ] Navigation menu responsive on mobile
- [ ] Tasks section expands/collapses properly
- [ ] Footer displays correctly
- [ ] Page is fast (< 2 seconds load)

---

## 🔧 Customization After Deployment

### Change Content
1. Edit files in `campus-mantri` folder
2. Push changes:
```bash
git add .
git commit -m "Update content"
git push
```
3. Vercel auto-deploys in ~30 seconds

### Change Colors/Branding
Edit `tailwind.config.js`:
```javascript
'gfg-green': '#YOUR-COLOR-CODE',
```

### Update Links
Edit components:
- `components/Navbar.js` - Navigation links
- `components/Footer.js` - Footer links
- `components/Steps.js` - Getting started links

---

## 📊 Analytics & Monitoring

### Enable Vercel Analytics (Optional)
1. Go to your Vercel project
2. Settings → Analytics
3. Enable "Web Vitals"

### Monitor Performance
- Dashboard shows deployment history
- View real-time traffic
- Check for errors

---

## 🆘 Troubleshooting

### Issue: Build Fails
**Solution:**
```bash
# Delete node_modules
rm -rf node_modules

# Reinstall
npm install

# Try deploy again
```

### Issue: Links Not Working
**Solution:**
Edit the links in:
- `components/Navbar.js`
- `components/Footer.js`
- `components/Steps.js`

### Issue: Slow Loading
**Solution:**
- Run locally: `npm run build && npm start`
- Check if assets are optimized
- Report to Vercel support

### Issue: Mobile Menu Not Working
**Solution:**
Clear browser cache (Ctrl+Shift+Delete)
Refresh page

---

## 🎯 Next Steps

1. **Customize Content**
   - Replace placeholder text with your content
   - Update all links to point to correct URLs

2. **Add Custom Domain** (Optional)
   - In Vercel dashboard → Settings → Domains
   - Add your domain (e.g., campus-mantri.your-domain.com)

3. **Set Up Email Updates** (Optional)
   - Contact form integration
   - Newsletter signup

4. **Share Your Site**
   - Copy your Vercel URL
   - Share on social media
   - Add to email signature

---

## 📈 Performance Tips

- Site is already optimized ✓
- Images are lazy-loaded ✓
- CSS is minified ✓
- Code splitting enabled ✓

No additional work needed!

---

## 🆘 Need Help?

1. **Vercel Docs:** https://vercel.com/docs
2. **Next.js Docs:** https://nextjs.org/docs
3. **Tailwind Docs:** https://tailwindcss.com/docs
4. **Contact Ayush:**
   - LinkedIn: https://www.linkedin.com/in/ayushh-sharmaa/
   - GeeksforGeeks: https://www.geeksforgeeks.org/profile/cmayush

---

## 📝 Environment Variables (Not Needed)

This website doesn't require any environment variables. It works perfectly out of the box!

---

## 🎉 Congratulations!

Your Campus Mantri website is now LIVE! 

Share the link with:
- Campus students
- College groups
- Social media
- Email

Good luck with the program! 🚀

---

**Last Updated:** June 2026
**Version:** 1.0.0
