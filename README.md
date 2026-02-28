<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <br/>
  <img src="https://img.shields.io/github/stars/mohitkumar9340/Portfolio-Website?style=for-the-badge&logo=github&color=22d3ee" alt="stars" />
  <img src="https://img.shields.io/github/forks/mohitkumar9340/Portfolio-Website?style=for-the-badge&logo=github&color=22d3ee" alt="forks" />
  <img src="https://img.shields.io/github/license/mohitkumar9340/Portfolio-Website?style=for-the-badge&color=22d3ee" alt="license" />
</div>

<h1 align="center">
  Portfolio Website — <a href="https://github.com/mohitkumar9340" target="_blank">Mohit Kumar</a>
</h1>

<p align="center">
  Personal portfolio built with React 19, Vite, and Tailwind CSS v4. Features project showcases, coding profile stats, experience timeline, and a contact form.
</p>

---

## ✨ Features

| | |
|---|---|
| **📖 Multi-Page Layout** | Home, About, Experience, Projects, Resume, Contact |
| **🎨 Tailwind CSS v4** | Custom cyan/purple theme, dark mode, responsive design |
| **📱 Fully Responsive** | Mobile-first with adaptive grid and collapsible nav |
| **📊 Coding Profiles** | Live LeetCode & GFG stats with difficulty breakdown |
| **📄 Resume Viewer** | Embedded PDF with annotation layers + download |
| **✉️ Contact Form** | Web3Forms integration with backend delivery |
| **✨ Particle Effects** | Lightweight tsparticles animated background |
| **⌨️ Typewriter Effect** | Animated role/text rotation on home page |

## 🛠 Tech Stack

**Frontend** — React 19, Vite 8, React Router v6, Tailwind CSS v4  
**Libraries** — tsparticles, react-pdf, react-github-calendar, react-parallax-tilt, typewriter-effect  
**Fonts** — Sora (body), Unbounded (headings), JetBrains Mono (code)  
**Deployment** — Vercel

## 🚀 Getting Started

```bash
git clone https://github.com/mohitkumar9340/Portfolio-Website.git
cd Portfolio-Website
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Environment Variables

For the contact form, create a `.env` file:

```env
VITE_WEB3FORMS_KEY=your_web3forms_key
```

## 📁 Project Structure

```
src/
├── Assets/           # Images, icons, PDFs
├── components/
│   ├── About/        # About page, skills, tools, coding profiles
│   ├── Contact/      # Contact form with Web3Forms
│   ├── Experience/   # Work & education timeline
│   ├── Home/         # Hero section, typewriter, social links
│   ├── Projects/     # Project cards with GitHub links
│   └── Resume/       # PDF viewer
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── Particle.jsx
│   ├── Pre.jsx
│   └── ScrollToTop.js
├── App.jsx           # Routes
├── index.css         # Tailwind + custom theme
└── main.jsx          # Entry point
```

## 📄 Pages

| Route | Page |
|---|---|
| `/` | Home — intro, typewriter, social links |
| `/about` | About — bio, skills, tools, coding profiles |
| `/experience` | Experience — work history & education timeline |
| `/project` | Projects — project cards with GitHub links |
| `/resume` | Resume — embedded PDF viewer |
| `/contact` | Contact — form, info sidebar, social links |

## 🎨 Customization

Edit component files under `src/components/` to personalize content, projects, experience, and resume.

- **Resume PDF** — Replace `src/Assets/Mohit_Kumar.pdf`
- **Profile image** — Replace `src/Assets/avatar.svg`
- **Project data** — Edit `src/components/Projects/Projects.jsx`
- **Experience** — Edit `src/components/Experience/Experience.jsx`
- **Theme colors** — Edit `--color-purple-accent` in `src/index.css`

## 📄 License

This project is open source and available under the MIT License.

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/mohitkumar9340" target="_blank">Mohit Kumar</a></p>
  <p>⭐ Star this repo if you find it useful!</p>
</div>
