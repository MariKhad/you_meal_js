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

/* export const getOrderCountBtns = () => {
	const minusesOrder = document.querySelectorAll('.order__product-count .count__minus')
	console.log('minusesOrder: ', minusesOrder);
	const plusesOrder = document.querySelectorAll('.order__product-count .count__plus')
	console.log('plusesOrder: ', plusesOrder);

	return { minusesOrder, plusesOrder };
}

export const countOrderController = () => {
	const { minusesOrder, plusesOrder } = getOrderCountBtns();
	minusesOrder.forEach(minus => {
		const idMinus = minus.dataset.idProduct;
		minus.addEventListener('click', removeCart(idMinus));
	})

	plusesOrder.forEach(plus => {
		const idPlus = plus.dataset.idProduct;
		plus.addEventListener('click', addCart(idPlus));
	})
}  */
