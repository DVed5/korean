document.addEventListener('DOMContentLoaded', function () {
	const menuBtn = document.querySelector('.header__menu-btn');
	const menuList = document.querySelector('.header__menu-list');

	// Открыть/закрыть меню при клике на кнопку
	menuBtn.addEventListener('click', function (event) {
		event.stopPropagation(); // Останавливаем всплытие события
		menuList.classList.toggle('active');
	});

	// Предотвратить закрытие меню при клике внутри него
	menuList.addEventListener('click', function (event) {
		event.stopPropagation(); // Останавливаем всплытие события
	});

	// Закрыть меню при клике вне его области
	document.addEventListener('click', function () {
		menuList.classList.remove('active');
	});
});


const dialog = document.querySelector('.dialog')
const openModals = document.querySelectorAll('.open-modal');
const closeModal = dialog.querySelector('.close-modal')

function openModalAndBlockScroll() {
	dialog.showModal()
	document.body.classList.add('scroll-block')
}

function returnScroll() {
	document.body.classList.remove('scroll-block')
}

function close() {
	dialog.close()
	returnScroll()
}

function closeOnOverlayClick({ currentTarget, target }) {
	const dialog = currentTarget
	const isOnOverlayClick = target === dialog
	if (isOnOverlayClick) {
		close()
	}
}

openModals.forEach((openModal) => {
	openModal.addEventListener('click', openModalAndBlockScroll)
})

closeModal.addEventListener('click', () => {
	close()
})

dialog.addEventListener('click', closeOnOverlayClick)
dialog.addEventListener('cancel', () => {
	returnScroll()
});



// Стрелочка вверх, которая появляется при скролле
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		scrollToTopButton.style.display = 'flex';
	} else {
		scrollToTopButton.style.display = 'none';
	}
});

scrollToTopButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

// Появление services__item

const gridItems = document.querySelectorAll('.services__item');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry, index) => {
		if (entry.isIntersecting) {
			setTimeout(() => {
				entry.target.classList.add('visible');
			}, index * 350); // Задержка между элементами
		}
	});
}, {
	threshold: 0.2, // Срабатывание, если элемент виден на 20%
});

gridItems.forEach((item) => observer.observe(item));


// вопрос-ответ
document.querySelectorAll('.faq__button').forEach(function (faq) {
	faq.addEventListener('click', function () {
		this.classList.toggle('fixed');
		var answer = this.closest('.faq__item').querySelector('.faq__answer');
		answer.style.display = this.classList.contains('fixed') ? 'block' : 'none';
	});
});

// swiper
var swiper = new Swiper(".swiper", {
  slidesPerView: 3, // Количество слайдов на больших экранах
  spaceBetween: 20, // Расстояние между слайдами
  initialSlide: 0, // Слайдер всегда начинается с первого слайда
  centeredSlides: false, // Отключает центрирование
  loop: true, // Зацикливание слайдера
  breakpoints: {
    // Ширина экрана >= 
    930: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // Ширина экрана < 
    645: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // Ширина экрана < 
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
