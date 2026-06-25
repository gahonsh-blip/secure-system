/**
 * System Interface Management Engine - V3 Production Architecture
 */

window.addEventListener('load', () => {
  // Clear Initialization Screen
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('opacity-0');
    setTimeout(() => loader.style.display = 'none', 500);
  }
  
  // Activate Core Frameworks
  AOS.init({ duration: 900, once: true });
  initTypedAnimation();
  initCounters();
  initScrollSpy();
});

// 1. Mobile-Responsive Custom Cursor Tracker Logic
const cursor = document.getElementById('cursor');
const follower = document.getElementById('follower');

if (window.innerWidth > 768 && cursor && follower) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    
    // Smooth Follower Delay Sync
    setTimeout(() => {
      follower.style.left = `${e.clientX}px`;
      follower.style.top = `${e.clientY}px`;
    }, 40);
  });
}

// 2. Typing Headline Sequence Setup
function initTypedAnimation() {
  const targetElement = document.getElementById('typed-text');
  if (targetElement) {
    new Typed('#typed-text', {
      strings: ['CCTV Installation', 'Laptop Repair', 'Networking Solutions', 'Cloud Security', 'Corporate AMC Services'],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true
    });
  }
}

// 3. Robust Numerical Increments Counter
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let currentCount = 0;
    const step = Math.ceil(target / 40);
    
    const update = () => {
      currentCount += step;
      if (currentCount < target) {
        counter.innerText = currentCount;
        setTimeout(update, 25);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
}

// 4. Scroll Tracking Progress & Active State Management Loop
function initScrollSpy() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-item');
  const progressBar = document.getElementById('progress-bar');
  const backBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    // Scroll Progress bar percentage calculation
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = `${scrolled}%`;

    // Toggle Back to top viewport control visibility
    if (backBtn) {
      if (window.scrollY > 400) {
        backBtn.classList.remove('opacity-0');
      } else {
        backBtn.classList.add('opacity-0');
      }
    }

    // Active Section Evaluation Map
    let activeId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 180;
      if (window.scrollY >= top) {
        activeId = sec.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('nav-active');
      if (item.getAttribute('href') === `#${activeId}`) {
        item.classList.add('nav-active');
      }
    });
  });

  if (backBtn) {
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}

// 5. Classic Accordion FAQ Grid Multi-Toggle
function toggleFaq(btn) {
  const icon = btn.querySelector('i');
  const panel = btn.nextElementSibling;
  
  if (panel.style.maxHeight && panel.style.maxHeight !== '0px') {
    panel.style.maxHeight = '0px';
    icon.className = 'fas fa-plus text-xs text-sky-400';
  } else {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
    icon.className = 'fas fa-minus text-xs text-sky-400';
  }
}

// 6. Direct Mail Contact Processing Routing Logic Failsafe (Alert Alternative Fix)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const service = document.getElementById('form-service').value;
    
    // Automated Mail Delivery Sequence Fallback Trigger
    const mailSubject = encodeURIComponent(`Enterprise Request from ${name}`);
    const mailBody = encodeURIComponent(`Hello Secure System Solution,\n\nI want to consult an engineer regarding: ${service}.\n\nBest Regards,\n${name}`);
    window.location.href = `mailto:info@securesystemsolution.in?subject=${mailSubject}&body=${mailBody}`;
  });
}

// 7. Initialize Swiper Carousel Container Setup
new Swiper('.testimonial-swiper', {
  loop: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  autoplay: { delay: 4500, disableOnInteraction: false }
});

// 8. Mobile responsive menu visibility toggler element event loop
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}
