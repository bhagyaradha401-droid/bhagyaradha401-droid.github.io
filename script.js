// ================================
// EDIT YOUR PERSONAL INFORMATION
// ================================
const portfolioData = {
  name: "Bhagya-CSE",
  role: "Computer Science & Engineering Student",
  email: "[YOUR EMAIL]",
  phone: "[YOUR PHONE]",
  location: "[YOUR LOCATION]",
  github: "[YOUR GITHUB]",
  linkedin: "[YOUR LINKEDIN]",
  instagram: "[YOUR INSTAGRAM]",
};

// ================================
// SKILLS
// ================================
const skills = [
  {
    icon: "fa-solid fa-code",
    title: "Web Development",
    description: "HTML, CSS, JavaScript and responsive websites.",
  },
  {
    icon: "fa-brands fa-python",
    title: "Python",
    description: "Programming, automation and problem solving.",
  },
  {
    icon: "fa-solid fa-pen-ruler",
    title: "UI/UX Design",
    description: "Creating clean and user-friendly interfaces.",
  },
  {
    icon: "fa-solid fa-brain",
    title: "Artificial Intelligence",
    description: "Exploring AI concepts and applications.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Machine Learning",
    description: "Working with data and predictive models.",
  },
  {
    icon: "fa-brands fa-github",
    title: "Git & GitHub",
    description: "Version control and project collaboration.",
  },
];

// ================================
// PROJECTS
// Add new project cards here.
// Update title, description, technologies, and links.
// ================================
const projects = [
  {
    title: "Campus Navigation System",
    description:
      "A web-based solution designed to help students easily navigate their campus and locate important facilities.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "assets/project1-campus-navigation.svg",
    link: "[PROJECT 1 GITHUB LINK]",
  },
  {
    title: "Women Safety & Emergency Alert Application",
    description:
      "A safety-focused application designed to provide quick emergency assistance and alert functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "assets/project2-women-safety.svg",
    link: "[PROJECT 2 GITHUB LINK]",
  },
  {
    title: "Retail Inventory Demand Prediction",
    description:
      "A machine learning project that predicts future product demand using historical sales and inventory data.",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    image: "assets/project3-retail-demand.svg",
    link: "[PROJECT 3 GITHUB LINK]",
  },
  {
    title: "Smart Gas Leakage Sensor",
    description:
      "An IoT safety prototype that monitors gas levels with an MQ-2 sensor and uses audible and visual alerts to warn of a leak.",
    technologies: ["Arduino", "MQ-2 Sensor", "ESP32", "IoT"],
    image: "assets/smart-gas-leakage.svg",
    link: "assets/smart-gas-leakage-idt.pptx",
    linkLabel: "DOWNLOAD PRESENTATION",
    download: true,
  },
  {
    title: "Sakhi — Women’s Safety Companion",
    description:
      "A student demo for emergency support, with an SOS flow, India helplines, trusted contacts, location sharing, and practical safety tips.",
    technologies: ["HTML", "CSS", "JavaScript", "Geolocation API"],
    image: "assets/sakhi-project.svg",
    link: "sakhi.html",
    linkLabel: "OPEN SAKHI DEMO",
  },
];

// ================================
// CERTIFICATES
// Add image files inside assets/certificates/ and add a new object here to create a sixth certificate later.
// Keep the file names in the same folder and the card will appear automatically.
// ================================
const certificates = [
  {
    image: "assets/certificates/ibm-generative-ai.jpg",
    title: "Use Generative AI for Software Development",
    issuer: "IBM SkillsBuild",
    date: "",
    category: "technical",
    verificationUrl: "",
  },
  {
    image: "assets/certificates/redhat-linux.jpg",
    title: "Fundamentals of Red Hat Enterprise Linux",
    issuer: "Coursera / Red Hat",
    date: "",
    category: "technical",
    verificationUrl: "",
  },
  {
    image: "assets/certificates/packt-data-structures.jpg",
    title: "Introduction to Data Structures and Algorithmic Foundations",
    issuer: "Packt / Coursera",
    date: "",
    category: "technical",
    verificationUrl: "",
  },
  {
    image: "assets/certificates/mybharat-budget-quest.jpg",
    title: "My Bharat Budget Quest 2026",
    issuer: "Ministry of Youth Affairs & Sports / MYBharat",
    date: "",
    category: "achievement",
    verificationUrl: "",
  },
  {
    image: "assets/certificates/quizoff-2026.jpg",
    title: "QuizOff 2026: India's Biggest AI Quiz",
    issuer: "CampusCrew / Unstop",
    date: "",
    category: "achievement",
    verificationUrl: "",
  },
];

const journey = [
  { step: "01", title: "Started Computer Science & Engineering", text: "Built a strong foundation in programming and core CS concepts." },
  { step: "02", title: "Explored Web Development and Programming", text: "Learned HTML, CSS, JavaScript, and user-focused frontend design." },
  { step: "03", title: "Started building real-world projects", text: "Turned concepts into practical solutions and portfolio-ready work." },
];

const benefits = ["Problem Solver", "Creative Thinker", "Continuous Learner"];

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.querySelector('.back-to-top');
const revealElements = document.querySelectorAll('.reveal');
const currentYear = document.getElementById('currentYear');
const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

const updatePersonalText = () => {
  document.title = `${portfolioData.name} | ${document.body.dataset.pageTitle || 'Portfolio'}`;
  const homeHeading = document.querySelector('.hero-copy h1');
  if (homeHeading) homeHeading.innerHTML = `Hi, I'm <span>${portfolioData.name}</span>`;
  document.querySelector('.brand-text').textContent = portfolioData.name;
  const copyrightName = document.getElementById('copyrightName');
  if (copyrightName) copyrightName.textContent = portfolioData.name;
  const footerName = document.querySelector('.footer-name');
  if (footerName) footerName.textContent = portfolioData.name;
  const footerRole = document.querySelector('.site-footer p');
  if (footerRole) footerRole.textContent = portfolioData.role;
  const contactEmail = document.querySelector('a[href="mailto:[YOUR EMAIL]"]');
  if (contactEmail) contactEmail.href = `mailto:${portfolioData.email}`;
  if (contactEmail) contactEmail.textContent = portfolioData.email;

  const contactPhone = document.querySelector('a[href="tel:[YOUR PHONE]"]');
  if (contactPhone) {
    contactPhone.href = `tel:${portfolioData.phone}`;
    contactPhone.textContent = portfolioData.phone;
  }

  const locationText = document.querySelectorAll('.contact-list div')[2];
  if (locationText) locationText.innerHTML = '<span class="label">Location</span><span>' + portfolioData.location + '</span>';

  const githubLinks = document.querySelectorAll('a[href="[YOUR GITHUB]"]');
  githubLinks.forEach((link) => {
    link.href = portfolioData.github;
  });

  const linkedinLinks = document.querySelectorAll('a[href="[YOUR LINKEDIN]"]');
  linkedinLinks.forEach((link) => {
    link.href = portfolioData.linkedin;
  });

  const instagramLinks = document.querySelectorAll('a[href="[YOUR INSTAGRAM]"]');
  instagramLinks.forEach((link) => {
    link.href = portfolioData.instagram;
  });
};

const renderSkills = () => {
  const container = document.getElementById('skillsGrid');
  if (!container) return;

  container.innerHTML = skills
    .map(
      (skill) => `
        <article class="skill-card reveal">
          <div class="icon"><i class="${skill.icon}"></i></div>
          <h3>${skill.title}</h3>
          <p>${skill.description}</p>
          <span class="arrow">→</span>
        </article>
      `
    )
    .join('');
};

const renderProjects = () => {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <img src="${project.image}" alt="${project.title}" onerror="this.onerror=null;this.src='https://placehold.co/800x600/edf7ff/1d3557?text=Project';" />
          <div class="project-content">
            <span class="project-tag">PROJECT</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-inline">
              ${project.technologies.map((tech) => `<span>${tech}</span>`).join('')}
            </div>
            <a class="project-link" href="${project.link}" ${project.download ? 'download' : 'target="_blank" rel="noreferrer"'}>${project.linkLabel || 'VIEW PROJECT'} <span>→</span></a>
          </div>
        </article>
      `
    )
    .join('');
};

const renderCertificates = () => {
  const container = document.getElementById('certificateGrid');
  if (!container) return;

  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
  const visibleCertificates =
    activeFilter === 'all'
      ? certificates
      : certificates.filter((certificate) => certificate.category === activeFilter);

  container.innerHTML = visibleCertificates
    .map(
      (certificate) => `
        <article class="cert-card reveal" data-category="${certificate.category}">
          <div class="cert-image-wrap">
            <img
              src="${certificate.image}"
              alt="${certificate.title} certificate"
              loading="lazy"
            />
            <div class="cert-image-fallback" hidden role="img">
              <strong>Certificate image unavailable</strong>
              <code></code>
            </div>
          </div>
          <div class="cert-content">
            <span class="cert-tag">${certificate.category === 'technical' ? 'Technical Certifications' : 'Achievements & Participation'}</span>
            <h3>${certificate.title}</h3>
            <p><strong>${certificate.issuer}</strong><br />${certificate.date || 'Date to be confirmed'}</p>
            <button
              type="button"
              class="cert-view-btn"
              data-title="${certificate.title}"
              data-issuer="${certificate.issuer}"
              data-image="${certificate.image}"
              data-verification-url="${certificate.verificationUrl || ''}"
              aria-label="View ${certificate.title} certificate"
            >
              VIEW CERTIFICATE <span>→</span>
            </button>
          </div>
        </article>
      `
    )
    .join('');

  container.querySelectorAll('.cert-image-wrap img').forEach((image) => {
    image.addEventListener('error', () => {
      const fallback = image.nextElementSibling;
      const filename = image.getAttribute('src').split('/').pop();

      image.hidden = true;
      fallback.querySelector('code').textContent = filename;
      fallback.setAttribute('aria-label', `Missing certificate image: ${filename}`);
      fallback.hidden = false;
    }, { once: true });
  });

  const certificateButtons = document.querySelectorAll('.cert-view-btn');
  certificateButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const cert = certificates.find(
        (item) => item.title === button.dataset.title && item.issuer === button.dataset.issuer
      );

      if (cert) {
        openCertificateModal(cert);
      }
    });
  });

  initializeReveal();
};

const openCertificateModal = (certificate) => {
  const modal = document.getElementById('certificateModal');
  const modalImage = document.getElementById('certificateModalImage');
  const modalTitle = document.getElementById('certificateModalTitle');
  const modalMeta = document.getElementById('certificateModalMeta');
  const modalLink = document.getElementById('certificateModalLink');

  if (!modal || !modalImage || !modalTitle || !modalMeta || !modalLink) return;

  modalImage.src = certificate.image;
  modalImage.alt = `${certificate.title} certificate`;
  modalTitle.textContent = certificate.title;
  modalMeta.textContent = certificate.issuer + (certificate.date ? ` • ${certificate.date}` : '');

  if (certificate.verificationUrl) {
    modalLink.href = certificate.verificationUrl;
    modalLink.classList.remove('hidden');
  } else {
    modalLink.removeAttribute('href');
    modalLink.classList.add('hidden');
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
};

const closeCertificateModal = () => {
  const modal = document.getElementById('certificateModal');
  if (!modal) return;

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
};

const setupCertificateFilters = () => {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((tab) => {
        const isActive = tab === button;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-pressed', String(isActive));
      });

      renderCertificates();
    });
  });
};

const setupCertificateModal = () => {
  const modal = document.getElementById('certificateModal');
  const closeButton = document.querySelector('.certificate-modal-close');

  if (!modal || !closeButton) return;

  closeButton.addEventListener('click', closeCertificateModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeCertificateModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeCertificateModal();
    }
  });
};

const renderJourney = () => {
  const container = document.getElementById('journeyList');
  if (!container) return;

  container.innerHTML = journey
    .map(
      (item) => `
        <article class="timeline-item" data-step="${item.step}">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join('');
};

const renderBenefits = () => {
  const container = document.getElementById('benefitsRow');
  if (!container) return;

  container.innerHTML = benefits
    .map((item) => `<div class="benefit-item">${item}</div>`)
    .join('');
};

const initializeReveal = () => {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
};

const setupNavigation = () => {
  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
};

const setupScrollEffects = () => {
  const onScroll = () => {
    const shouldShow = window.scrollY > 400;
    backToTop?.classList.toggle('visible', shouldShow);

  };

  window.addEventListener('scroll', onScroll);
  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

const setupFormValidation = () => {
  if (!contactForm) return;

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const subject = document.getElementById('subject')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !subject || !message) {
      formStatus.textContent = 'Please fill in all fields before sending your message.';
      formStatus.classList.add('error');
      formStatus.classList.remove('success');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formStatus.textContent = 'Please enter a valid email address.';
      formStatus.classList.add('error');
      formStatus.classList.remove('success');
      return;
    }

    formStatus.textContent = 'Thank you! Your message has been validated successfully.';
    formStatus.classList.remove('error');
    formStatus.classList.add('success');
    contactForm.reset();
  });
};

const setCurrentYear = () => {
  if (currentYear) currentYear.textContent = new Date().getFullYear();
};

const init = () => {
  updatePersonalText();
  renderSkills();
  renderProjects();
  renderCertificates();
  setupCertificateFilters();
  setupCertificateModal();
  renderJourney();
  renderBenefits();
  initializeReveal();
  setupNavigation();
  setupScrollEffects();
  setupFormValidation();
  setCurrentYear();
};

init();