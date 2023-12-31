import { addCart, getCart, removeCart } from "./cart.js";
import { countAmount } from "./elements.js";

export const countModalController = () => {
	const count = document.querySelector(`.modal .count`);
	const minus = count.firstElementChild;
	const plus = count.lastElementChild;

	const modalZeroCheck = () => {
		if (countAmount.textContent === '0') {
			minus.style.pointerEvents = 'none';
			minus.style.color = '#B1B1B1';
		} else {
			minus.style.color = '';
			minus.style.pointerEvents = '';
		}
	}
	modalZeroCheck();
	minus.addEventListener('click', () => {
		countAmount.textContent = parseInt(countAmount.textContent) - 1;
		modalZeroCheck();
	})
	plus.addEventListener('click', () => {
		countAmount.textContent = parseInt(countAmount.textContent) + 1;
	})
}

