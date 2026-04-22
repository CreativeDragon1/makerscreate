const revealItems = document.querySelectorAll('.reveal');
const primaryCta = document.getElementById('primary-cta');
const footerCta = document.getElementById('footer-cta');
const stickyCta = document.getElementById('sticky-cta');

const signedIn = localStorage.getItem('makerscreate-signed-in') === 'true';
const dashboardHref = '/dashboard';
const authHref = 'https://auth.hackclub.com/';

function updateCtas() {
  const label = signedIn ? 'Go to Dashboard' : 'Get Started';
  const href = signedIn ? dashboardHref : authHref;

  [primaryCta, footerCta, stickyCta].forEach((button) => {
    if (!button) return;
    button.textContent = label;
    button.setAttribute('href', href);
  });
}

function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -40px 0px',
    },
  );

  revealItems.forEach((item) => observer.observe(item));
}

updateCtas();
revealOnScroll();
