const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.addEventListener('DOMContentLoaded', function () {
  const cookieConsent = document.getElementById('cookieConsent');
  const acceptBtn = document.getElementById('acceptCookies');

  // Show banner only if not accepted before
  if (!localStorage.getItem('cookieAccepted')) {
    cookieConsent.style.display = 'block';
  }

  // When user clicks accept
  acceptBtn.addEventListener('click', function () {
    localStorage.setItem('cookieAccepted', 'true');
    cookieConsent.style.display = 'none';
  });
});
function hi(){
    alert("Your message has been sent succesfully!")
}