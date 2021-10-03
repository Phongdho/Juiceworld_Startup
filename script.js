// Wrap every letter in a span
var textWrapper = document.querySelector('.slider__txt');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.slider__txt .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1)
  }).add({
    targets: '.slider__txt',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// slider
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const tabActive = $('.tab-item.active');
const line = $('.tabs .line');
line.style.width = tabActive.offsetWidth + 'px';
line.style.left = tabActive.offsetLeft + 'px';

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $('.tab-item.active').classList.remove('active')
    $('.tab-pane.active').classList.remove('active')
    line.style.width = this.offsetWidth + 'px';
    line.style.left = this.offsetLeft + 'px';
    this.classList.add('active')
    pane.classList.add('active')
  }
})