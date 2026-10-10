# Personal Portfolio Website

## About the Project
This is a modern, professional personal portfolio website built for a Computer Science & Engineering student. It is designed to look polished, recruiter-friendly, and easy to customize.

## Features
- Modern hero section with profile image and floating info cards
- Sticky navigation with mobile hamburger menu
- About section with academic and personal highlights
- Skills cards and technology strip
- Featured project cards
- Certification section with easy-to-update data array
- Education and learning journey timeline
- Contact form with frontend validation
- Responsive design for desktop, tablet, and mobile
- Smooth scroll and scroll reveal animations

## Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome
- Google Fonts

## Pages
- `index.html` — Home
- `about.html` — About
- `skills.html` — Skills
- `projects.html` — Projects
- `certificates.html` — Certificates
- `education.html` — Education and learning journey
- `contact.html` — Contact form and social links

All pages share `style.css` and `script.js`, so the navigation, responsive styling,
skills, projects, certificates, and contact validation behave consistently.
The visual theme uses a dark base with neon-pink accents and light-yellow text/highlights.

## Project Structure
```text
portfolio/
├── index.html
├── about.html
├── skills.html
├── projects.html
├── certificates.html
├── education.html
├── contact.html
├── sakhi.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg
    ├── project1-campus-navigation.svg
    ├── project2-women-safety.svg
    ├── project3-retail-demand.svg
    ├── sakhi-project.svg
    ├── smart-gas-leakage.svg
    ├── smart-gas-leakage-idt.pptx
    ├── resume.pdf
    └── certificates/
        ├── certificate1.jpg
        ├── certificate2.jpg
        ├── certificate3.jpg
        └── certificate4.jpg
```

## How to Run
1. Open the project folder in VS Code.
2. Right-click on `index.html` and open with Live Server or open it directly in a browser.
3. The website will work immediately as a static HTML/CSS/JS project.

## How to Change Personal Information
Open `script.js` and edit the `portfolioData` object at the top:

```js
const portfolioData = {
  name: "[YOUR NAME]",
  role: "Computer Science & Engineering Student",
  email: "[YOUR EMAIL]",
  phone: "[YOUR PHONE]",
  location: "[YOUR LOCATION]",
  github: "[YOUR GITHUB]",
  linkedin: "[YOUR LINKEDIN]",
  instagram: "[YOUR INSTAGRAM]",
};
```

## How to Add Profile Photo
Replace the file at `assets/profile.jpg` with your own photo.
If the image is missing, the website shows a placeholder automatically.

## How to Add About Photo
Replace the file at `assets/about.jpg` with a suitable image for the About section.

## How to Add Projects
Update the `projects` array in `script.js`:

```js
const projects = [
  {
    title: "Campus Navigation System",
    description: "A web-based solution designed to help students...",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "assets/project1.jpg",
    link: "[PROJECT 1 GITHUB LINK]",
  },
];
```

For downloadable project files, set `download: true` and provide a `linkLabel` in the project object. The link points to a file in `assets/`.

## How to Add Certificates
Use the `certificates` array in `script.js` and place your files inside `assets/certificates/`.
The section is already wired to the following filenames:

```text
assets/certificates/
├── ibm-generative-ai.jpg
├── redhat-linux.jpg
├── packt-data-structures.jpg
├── mybharat-budget-quest.jpg
└── quizoff-2026.jpg
```

If the actual certificate images are not already in your VS Code project, copy them into that folder using File Explorer or VS Code Explorer, then keep the same filenames above. Do not rename them; the JavaScript array references those exact file names.

To add a sixth certificate later, add one more object to the `certificates` array in `script.js`. The card appears automatically without editing the HTML.

## How to Add Resume
Place your resume PDF in `assets/resume.pdf`.
The download button in the hero section already points to that file.

## How to Update Skills
Edit the `skills` array in `script.js` to change the skill titles, descriptions, and icons.

## How to Update Education and Journey
Edit the `education` or `journey` content directly in `script.js` if you want to personalize the academic and learning sections.

## Future Improvements
- Add real project screenshots and live demo links
- Add a resume download page
- Connect the contact form to a backend/email service
- Add more advanced animations and transitions
- Add dark mode toggle

## Author
[YOUR NAME]

---
This portfolio is intentionally easy to customize and suitable for showcasing your work to recruiters and project evaluators.
