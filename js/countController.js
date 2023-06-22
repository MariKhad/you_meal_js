import { addCart, getCart, removeCart } from "./cart.js";

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

