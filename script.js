const TELEGRAM_URL = 'https://t.me/+5NgTLe-9gh42OGE1';
const totalTime = 3;
const circumference = 2 * Math.PI * 40;
const timerNumber = document.getElementById('countdownSec');
const progressCircle = document.getElementById('progressCircle');
const popup = document.getElementById('vipPopup');
const main = document.querySelector('main');
const closeButton = document.getElementById('closePopup');
let hasRedirected = false;
let previousFocus;

function trackLead(source) {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {
      content_name: 'AM PRO Telegram Join',
      traffic_source: source,
    });
  }
}
function openPopup() {
  previousFocus = document.activeElement;
  popup.inert = false;
  popup.setAttribute('aria-hidden', 'false');
  popup.classList.add('active');
  main.inert = true;
  closeButton.focus();
}
function closePopup() {
  popup.classList.remove('active');
  main.inert = false;
  if (previousFocus instanceof HTMLElement) previousFocus.focus();
  popup.inert = true;
  popup.setAttribute('aria-hidden', 'true');
}
closeButton.addEventListener('click', closePopup);
popup.addEventListener('click', (event) => {
  if (event.target === popup) closePopup();
});
document.addEventListener('keydown', (event) => {
  if (!popup.classList.contains('active')) return;
  if (event.key === 'Escape') closePopup();
  if (event.key === 'Tab') {
    const join = popup.querySelector('a');
    if (event.shiftKey && document.activeElement === closeButton) {
      event.preventDefault();
      join.focus();
    } else if (!event.shiftKey && document.activeElement === join) {
      event.preventDefault();
      closeButton.focus();
    }
  }
});
document.querySelectorAll('[data-source]').forEach((link) => {
  link.addEventListener('click', () => {
    hasRedirected = true;
    clearInterval(timerInterval);
    trackLead(link.dataset.source);
  });
});
let remainingTime = totalTime;
const timerInterval = setInterval(() => {
  remainingTime -= 1;
  timerNumber.textContent = remainingTime;
  progressCircle.style.strokeDashoffset = circumference * (1 - remainingTime / totalTime);
  if (remainingTime === 5) openPopup();
  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    if (!hasRedirected) {
      hasRedirected = true;
      trackLead('Auto_Redirect_Timer');
      window.location.href = TELEGRAM_URL;
    }
  }
}, 1000);
