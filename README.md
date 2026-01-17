# 🛒 TechShop — Modern Gadget Store

![Next.js](https://img.shields.io/badge/Next.js-16+-black?logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Utility--First-blue?logo=tailwindcss)
![DaisyUI](https://img.shields.io/badge/DaisyUI-UI_Framework-purple)

**TechShop** is a modern gadget e-commerce web application built with **Next.js App Router** and **MongoDB**.  
It allows users to browse, compare, and view detailed tech products with a clean, responsive UI.

---

## Key Features
- Browse all gadgets
- Featured products & categories
- Product details page
- Product comparison section
- Demo authentication (login)
- Reviews & FAQ sections
- Dark / light theme support
- Responsive navbar with active route highlight

---

## Feature Explanation 

- Direct Database Fetching: Server Components fetch data directly from MongoDB for better performance.

- Featured & Comparison Sections: Help users discover and compare gadgets easily.

- Demo Authentication: Allows reviewers to explore protected routes without real auth.

- Modern UI: Built with Tailwind CSS & DaisyUI, fully responsive and theme-aware.

---

## Routes summary

| Route | Description |
|------|------------|
| `/` | Home page |
| `/all-gadgets` | All products |
| `/gadgets/[id]` | Product details |
| `/add-gadget` | Add new gadget |
| `/login` | Demo login |
| `/about` | About page |
| `/api/gadgets` | Gadget API |

---

## Setup & Installation

```bash
git clone <repository-url>
cd tech-shop
npm install
