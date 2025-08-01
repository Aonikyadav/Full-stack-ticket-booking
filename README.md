
<div align="center">

# QUICKSHOW 🎬🍿🎥


<br />

## 🎦 LIVE - DEMO 🌐
  
**UI** 👉 [LINK](https://quickshow-sigma-roan.vercel.app/)

⚠️ Warning: Movies Section Not Displaying

If the Movies section is not opening or is showing the message:
“Movies not available”,
this likely means that the API key has expired.
The API key is time-limited and may need to be refreshed periodically.
As a result, the MongoDB server cannot connect to the main server, preventing movies from being fetched or displayed.

🔧 To resolve this issue, ensure the API key is valid and properly configured in your environment variables.

📸 Reference Screenshots

Below are screenshots showing how the frontend and backend are expected to look and function when everything is working correctly:

![alt text](screencapture-quickshow-sigma-roan-vercel-app-2025-07-04-07_02_38.png)

<br /><hr /><br />

**Admin Dashboard** 👉 [LINK](https://quickshow-sigma-roan.vercel.app/admin)

![alt text](screencapture-quickshow-sigma-roan-vercel-app-admin-2025-07-04-07_02_14.png)

</div>

 **Environment Configuration**
   
   Create `.env` files in both `server` and `client` directories:
   
   **Server (.env)**
   ```env
   # 🌐 Database
   MONGODB_URI=mongodb://localhost:27017/quickshow
    
   # 🔐 Clerk Authentication
   CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   CLERK_SECRET_KEY=your-clerk-secret-key
    
   # ⚙️ Inngest Event Scheduling
   INNGEST_EVENT_KEY=your-inngest-event-key
   INNGEST_SIGNING_KEY=your-inngest-signing-key
    
   # 🎬 TMDB API (for movie data)
   TMDB_API_KEY=your-tmdb-api-key
    
   # 💳 Stripe Payment Integration
   STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
    
   # 📧 Email Notifications (Nodemailer or similar SMTP setup)
   SENDER_EMAIL=your-sender@example.com
   SMTP_USER=your-smtp-username
   SMTP_PASS=your-smtp-password

   ```
   
   **Client (.env)**
   ```env
   # 💱 Currency Symbol
   VITE_CURRENCY=$

   # 🔐 Clerk Authentication (Public Key for Frontend)
   VITE_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key

   # 🌐 Base API URL (Proxy to Backend)
   VITE_BASE_URL=http://localhost:3000

   # 🎞️ TMDB Image Base URL
   VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original

   ```

### Usage

1. **Start the development servers**
   
   **Terminal 1 - Server**
   ```console
   cd server
   npm run dev
   ```
   
   **Terminal 2 - Client**
   ```console
   cd client
   npm run dev
   ```

2. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

3. **Admin Access**
   - Create an admin account through the API or manually in the database
   - Access admin panel at `/admin`




client .env









VITE_CURRENCY = '$'

VITE_CLERK_PUBLISHABLE_KEY=pk_test_ZmxleGlibGUtc3VuYmVhbS0zNS5jbGVyay5hY2NvdW50cy5kZXYk

VITE_BASE_URL = http://localhost:3000


VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original





server .env











# MONGODB_URI=mongodb+srv://aonikyadav:aonik2411@cluster0.j9cm5nc.mongodb.net

# MONGODB_URI=mongodb+srv://aonikyadav:aonik2411@cluster0.j9cm5nc.mongodb.net/quickshow2?retryWrites=true&w=majority&appName=Cluster0
  MONGODB_URI=mongodb+srv://aonikyadav:aonik2411@cluster0.j9cm5nc.mongodb.net

CLERK_PUBLISHABLE_KEY=pk_test_ZmxleGlibGUtc3VuYmVhbS0zNS5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_g2GuDw2ImAtoGEpbSfJ3rVRms5VzzoiRwY9kSawRFk   

INNGEST_EVENT_KEY=19I3BYkYNIwNZQSG9vX3B0eqDl2JyCunUD6HqEM5ETYmmCLbD4PAWWD3_UVaNip9gMfwYnmWdyBp2v3aEjN4kw

INNGEST_SIGNING_KEY=signkey-prod-97df6b2e36e96aefb24208acb7c62b2062a74582ee55cc4cfa0232585d7dae21


TMDB_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzQ3ZDNhYzcwZTc3NmRkZWJhMTQwMjkzNTYxY2NiMCIsIm5iZiI6MTc1Mzg4ODQ4My45ODMsInN1YiI6IjY4OGEzNmUzNmNhNGY2MGY5ZjVhZTI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Lh6cUNYPGxuKbIudRP_e7JjFMmniJbmcTVWT2BGC-c



STRIPE_PUBLISHABLE_KEY=pk_test_51Rqzc1H2GSxTSXfNy2YYlNRPYvqfz2FXxHEw3ExcQlraQRwo62QsUgB6NrLl78WANgRkohCSgd340GTmcCH4nyFl00BlYX0max
STRIPE_SECRET_KEY=sk_test_51Rqzc1H2GSxTSXfNiuJ7X6dBnKwYNoPscLmIVSlDVEGsjjZAXQ0TReNDPYWfM9556mj3JuhFquF4ZavYpzDTLME500t23k1cix
# STRIPE_WEBHOOK_SECRET=



