# Nxt Trendz – E-Commerce Web App

A React-based e-commerce web application with JWT authentication, protected 
routing, and live product data fetched from an external API.

## Features
- Login with JWT-based authentication; token persisted via cookies (js-cookie)
- Protected routes — unauthenticated users are redirected to `/login`
- Product listing with sort-by-price (high→low, low→high) and loading spinners
- "Prime Deals" section fetched from a separate authenticated endpoint, with a
  fallback promotional banner for non-prime users
- Client-side routing (Home, Products, Cart, 404) via React Router
- Logout clears the auth token and redirects to login

## Tech Stack
React.js, React Router, js-cookie, react-icons, react-spinners

## Run Locally
\`\`\`bash
git clone https://github.com/Uday-6145/E-commerce-website.git
cd E-commerce-website
npm install
npm run dev
\`\`\`

## Future Improvements
- Full cart functionality (add/remove items, quantity, totals)
- Deployment (Vercel)
