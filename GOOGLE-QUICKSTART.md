# Google Search Console — Terra at Skyeview

Canonical site: **https://www.terraskyeview.com**

The site is crawl-ready (`robots.txt`, `sitemap.xml`, unique canonicals). Google still needs you to verify ownership in Search Console. Do not invent a verification code.

---

## STEP 1: Google Search Console

### A. Add the property (preferred)

1. Open [Google Search Console](https://search.google.com/search-console)
2. Click **Add property**
3. Choose **Domain** and enter `terraskyeview.com` (no `https://`, no `www`)
4. Google will show a DNS TXT record like `google-site-verification=...`
5. Add that TXT record at the DNS host for `terraskyeview.com` (Cloudflare: DNS only / gray cloud, not proxied)
6. Wait for DNS to propagate, then click **Verify**

Domain verification covers `www`, apex, `http`, and `https` in one property.

### B. URL-prefix fallback (HTML tag)

Use this only if you cannot add a DNS TXT record:

1. Add property → **URL prefix** → `https://www.terraskyeview.com`
2. Choose **HTML tag**
3. Copy only the `content` value from the meta tag (not the full HTML)
4. In Vercel → Project **terraskyeview.com** → Settings → Environment Variables, add:
   - Name: `GOOGLE_SITE_VERIFICATION`
   - Value: the content string
   - Environments: Production and Preview
5. Redeploy production
6. View source on https://www.terraskyeview.com and confirm:
   `<meta name="google-site-verification" content="...">`
7. Click **Verify** in Search Console

HTML-file method: if Google gives you `googleNNNN.html`, put that exact file in `public/` and deploy. Do not use a placeholder filename.

### C. Submit the sitemap

1. In Search Console → **Sitemaps**
2. Submit: `https://www.terraskyeview.com/sitemap.xml`
3. Confirm robots.txt lists the same URL: https://www.terraskyeview.com/robots.txt

Then use **URL Inspection** on `https://www.terraskyeview.com/` and request indexing.

---

## STEP 2: Google Analytics (2 minutes)

### **A. Create Analytics Property**
1. Go to: https://analytics.google.com
2. Click **"Create Property"**
3. Enter:
   - Property name: `Terra at Skyeview`
   - Time zone: `America/Los_Angeles`
   - Currency: `USD`
4. Click **"Create"**

### **B. Create Data Stream**
1. Click **"Web"**
2. Enter:
   - Website URL: `https://www.terraskyeview.com`
   - Stream name: `Terra Skyeview Website`
3. Click **"Create stream"**
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### **C. Add to Vercel**
1. Go to your Vercel dashboard: https://vercel.com
2. Select your project: `terraskyeview-com`
3. Go to **Settings → Environment Variables**
4. Click **"Add New"**
5. Enter:
   - Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX` (your actual ID)
6. Click **"Save"**
7. **Redeploy** your site ✅

**DONE!** Analytics will start tracking immediately.

---

## ⚡ STEP 3: Google Business Profile (1 minute)

### **Create Your Listing**
1. Go to: https://business.google.com
2. Click **"Manage now"**
3. Enter:
   - Business name: `Dr. Jan Duffy - Terra at Skyeview Specialist`
   - Category: `Real Estate Agent`
   - Location: `8592 Vanhoy Creek Street, Las Vegas, NV 89166`
   - Phone: `(702) 919-7292`
   - Website: `https://www.terraskyeview.com`
4. Click **"Continue"**
5. Choose verification method (Google will mail/call/email you)

**DONE!** You'll appear in Google Maps within 1 week after verification.

---

## 🎉 THAT'S IT!

After these 3 steps (5 minutes total):
- ✅ Google will start indexing your site
- ✅ Analytics will track all visitors
- ✅ You'll appear in Google Maps
- ✅ You'll show up in local searches

---

## 📊 WHAT HAPPENS NEXT?

### **Within 24 Hours:**
- Google discovers and starts crawling your site
- Search Console shows first data

### **Within 1 Week:**
- All 10 pages indexed
- Site appears in Google for "Terra at Skyeview"
- Analytics shows first visitors

### **Within 1 Month:**
- Ranking for brand terms
- Local pack appearance (with Google Business)
- Rich snippets showing

---

## 🔍 VERIFY IT WORKS

### **Test Your Structured Data:**
1. Go to: https://search.google.com/test/rich-results
2. Enter: `https://www.terraskyeview.com`
3. Click **"Test URL"**
4. You should see:
   - ✅ LocalBusiness
   - ✅ RealEstateAgent
   - ✅ FAQPage
   - ✅ RealEstateListing

### **Test Your Mobile Performance:**
1. Go to: https://pagespeed.web.dev/
2. Enter: `https://www.terraskyeview.com`
3. Target scores:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 100

---

## 📞 NEED HELP?

If you get stuck:
1. Check GOOGLE-SEO-SETUP.md (comprehensive guide)
2. Check Search Console "Help" section
3. Use Google's live chat support (very helpful!)

---

## ✅ YOUR SITE IS ALREADY OPTIMIZED FOR:

- ✅ Mobile-first indexing
- ✅ Core Web Vitals
- ✅ Structured data (4 schemas)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Meta tags (all pages)
- ✅ Open Graph / Twitter Cards
- ✅ Canonical URLs
- ✅ H1/H2/H3 hierarchy
- ✅ 750+ words per page
- ✅ Image alt text
- ✅ Fast loading (Vercel)
- ✅ HTTPS secure
- ✅ Analytics component ready

**You just need to add your Google IDs and verify! 🎉**

