const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
console.log("Sajid Main app ")



anime.timeline({
	loop: true
})
.add({
	targets: '.text span',
	translateY: [-600, 0],
	scale: [10, 1],
	opacity: [0,1],
	easing: "easeOutExpo",
	duration: 1500,
	delay: anime.stagger(100)
})
.add({
	targets: '.text span',
	translateX: [0, -1000],
	scale: [1, 1],
	opacity: [1,0],
	easing: "easeOutExpo",
	duration: 2000,
	delay: anime.stagger(100)
})

var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	slidesPerView: 'auto',
	coverflowEffecct: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,

	},
})


var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});



const fib = (n) => {
  if(n <= 2){
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}
console.log(fib(7))



















