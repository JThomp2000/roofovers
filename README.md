# CSRS Roofovers - Modernized Website

This is a modernized React/TypeScript version of the `roofovers.com` website, specifically designed for deployment on Cloudflare Pages.

### Features
- **Responsive Design**: Optimized for both mobile and desktop viewports.
- **Automated Lead Handling**: Integrated contact form with automated email responses using Cloudflare Pages Functions and Resend.
- **Project Portfolio**: A modern "Job Photos" section showcasing company work.
- **Customer Testimonials**: A responsive grid of real customer reviews.
- **Product Information**: Dedicated sections for FAQ, product brochures, and accepted payment methods.

---

### Setup & Deployment Instructions

To activate the automated email system and ensure your website is fully functional, follow these steps:

#### 1. Configure Business Email
- Log in to your **Cloudflare Dashboard**.
- Go to the **Email** tab for `roofovers.com`.
- Enable **Email Routing**.
- Set up a destination address for `info@roofovers.com` to forward to your personal inbox.

#### 2. Set Up Email Provider (Resend)
- Sign up for a free account at [resend.com](https://resend.com).
- Add your domain (`roofovers.com`) in the Resend dashboard.
- **Crucial**: Copy the DNS records (DKIM/SPF) provided by Resend and add them to your **Cloudflare DNS** settings. This ensures your automated emails land in customers' inboxes rather than spam.
- Create an **API Key** in Resend.

#### 3. Link the Website to the Email Service
- In your **Cloudflare Pages project settings**, navigate to **Settings > Functions > Environment variables**.
- Add a new variable:
  - **Key**: `RESEND_API_KEY`
  - **Value**: [Paste your API key from Resend]
- Save the changes.

#### 4. Final Verification
- Redeploy your site to apply the new environment variables.
- Fill out the contact form to verify you receive the lead at `info@roofovers.com` and that the customer receives a branded "Thank You" message.

---

### Deployment

To deploy the website to Cloudflare Pages:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy with Wrangler**:
   ```bash
   npm run deploy
   ```
   (This command runs `wrangler pages deploy build` internally.)

---

### Local Development

To run the project locally for development or testing:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm start
   ```
   (Runs the app at [http://localhost:3000](http://localhost:3000))

3. **Build for Production**:
   ```bash
   npm run build
   ```
   (Outputs the optimized production files to the `build` folder)

### Project Structure
- `src/components/`: React UI components (Header, Footer, Hero, Services, JobPhotos, Testimonials, FAQ, Brochures, ContactForm).
- `functions/api/contact.ts`: Cloudflare Pages Function that handles form submissions and triggers emails.
- `public/`: Static assets including brand logos, partner logos, and favicons.
- `wrangler.toml`: Cloudflare configuration for deployment.
