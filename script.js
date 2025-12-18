// Simple scroll reveal effect
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(40px)';
  section.style.transition = 'all 0.8s ease';
});



/*中英文切换*/
const buttons = document.querySelectorAll('.lang-switch button');
const enTexts = document.querySelectorAll('.lang-en');
const cnTexts = document.querySelectorAll('.lang-cn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (lang === 'en') {
      enTexts.forEach(el => el.style.display = 'block');
      cnTexts.forEach(el => el.style.display = 'none');
    } else {
      enTexts.forEach(el => el.style.display = 'none');
      cnTexts.forEach(el => el.style.display = 'block');
    }
  });
});

function copyEmail() {
    const email = "contact@example.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("邮箱已复制");
    }).catch(() => {
        alert("复制失败，请手动复制");
    });
}