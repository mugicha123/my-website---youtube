const setTheme = light => {
	document.body.classList.toggle('light', light);
	document.getElementById('themeIcon').textContent = light ? '☾' : '☀';
	document.getElementById('themeToggle').setAttribute(
		'aria-label',
		light ? 'ダークモードに切り替える' : 'ライトモードに切り替える'
	);
};

const hour = new Date().getHours();
setTheme(hour >= 6 && hour < 16);

document.getElementById('themeToggle').addEventListener('click', () => {
	setTheme(!document.body.classList.contains('light'));
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', event => {
		const element = document.querySelector(anchor.getAttribute('href'));

		if (element) {
			event.preventDefault();
			element.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

const observer = new IntersectionObserver(
	entries =>
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		}),
	{ threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(element => {
	observer.observe(element);
});