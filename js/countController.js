import { addCart, removeCart } from "./cart.js";

export const countModalController = () => {
	const count = document.querySelector(`.modal .count`);
	const minus = count.firstElementChild;
	const plus = count.lastElementChild;
	const amount = document.querySelector(`.modal .count__amount`);
	const modalZeroCheck = () => {
		if (amount.textContent === '0') {
			minus.style.pointerEvents = 'none';
			minus.style.color = '#B1B1B1';
		} else {
			minus.style.color = '';
			minus.style.pointerEvents = '';
		}
	}
	modalZeroCheck();
	minus.addEventListener('click', () => {
		amount.textContent = parseInt(amount.textContent) - 1;
		modalZeroCheck();
	})
	plus.addEventListener('click', () => {
		amount.textContent = parseInt(amount.textContent) + 1;
	})
}

export const countOrderController = () => {
	const countsLive = document.getElementsByClassName(`order__product-count count`);
	const counts = [...countsLive];
	console.log(counts);
	counts.forEach(count => {
		const id = count.parentElement.dataset.idProduct;
		const minus = count.firstElementChild;
		const plus = count.lastElementChild;
		minus.addEventListener('click', removeCart(id));
		plus.addEventListener('click', addCart(id));;
	})
}
