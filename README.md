# Guild of Opulence™ — Landing Page

A2P-compliant landing page for [guildofopulence.com](https://guildofopulence.com), built for a warm audience targeting the Opulence Operating System™ program.

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JavaScript (no build step required)
- Cloudflare Pages compatible (`_redirects` and `_headers` included)
- Google Fonts: Cormorant Garamond + Montserrat

## File Structure

```
/
├── index.html          # Main landing page
├── style.css           # All styles (black/gold luxury theme)
├── script.js           # Interactions, animations, form handler
├── privacy.html        # Privacy Policy (A2P required)
├── terms.html          # Terms of Service
├── sms-policy.html     # SMS Policy (A2P required)
├── _redirects          # Cloudflare Pages URL routing
├── _headers            # Cloudflare Pages security headers
├── logo.jpg            # Guild of Opulence logo
├── product-stack.png   # Opulence Operating System product image
├── community-cover.png # Community cover (hero background)
└── portal-art.png      # Portal art / about section image
```

## Deploying to Cloudflare Pages

### Option A: Connect GitHub Repository (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages**
2. Click **Create a project** → **Connect to Git**
3. Select the `guildofopulence-landing` repository
4. Configure build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (root)
5. Click **Save and Deploy**
6. After deployment, go to **Custom Domains** and add `guildofopulence.com`
7. Update your DNS in Cloudflare to point to Pages

### Option B: Direct Upload

1. Go to Cloudflare Dashboard → **Pages**
2. Click **Create a project** → **Direct Upload**
3. Upload all files from this directory
4. Add custom domain `guildofopulence.com`

## Connecting Your Form

The form currently has a placeholder submit handler in `script.js`. To connect it to GoHighLevel (GHL) or another CRM:

### GoHighLevel Integration

Replace the form's `action` attribute with your GHL form embed URL, or use the GHL JavaScript embed:

```html
<!-- Replace the <form> element with your GHL form embed -->
```

Or use the fetch API in `script.js` to POST to your GHL webhook:

```javascript
const response = await fetch('YOUR_GHL_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## A2P Compliance Checklist

- [x] Explicit SMS opt-in checkbox with full disclosure language
- [x] Explicit email opt-in checkbox
- [x] STOP / HELP instructions in consent language
- [x] "Message & data rates may apply" disclosure
- [x] SMS Policy page at `/sms-policy`
- [x] Privacy Policy page at `/privacy`
- [x] Terms of Service page at `/terms`
- [x] SMS disclosure in footer
- [x] Earnings disclaimer in footer
- [x] No data sharing statement

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Black | `#0a0a0a` | Background |
| Gold | `#c9a84c` | Primary accent |
| Gold Light | `#e8c96a` | Hover states |
| White | `#f5f0e8` | Body text |

## Contact

Guild of Opulence™ / Ulrich Kakou Coaching  
[ulrichkakou.com](https://ulrichkakou.com)
