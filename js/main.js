import {
	catalogList,
	countModal,
	countsOrder,
	modalProduct,
	modalProductBtn
} from './elements.js'

import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';
import { navigationListController } from './navigationListController.js';
import { cartInit } from './cart.js';
import { countModalController, countOrderController } from './countController.js';


const burgerMax = {
	title: 'Мега Бургер',
	price: 10000,
	weight: 5000,
	calories: 15000,
	image: '/img/megaburger.jpg',
	description: 'Огромный бургер, съешь сам или поделись с компанией',
	ingredients: [
		'Пшеничная булочка',
		'Мега котлета из говядины',
		'Хрустящий лук',
		'Сыр Чеддер',
		'Листья свежайшего салата',
		'Соус от шефа',
	]

}

const closeModalKey = (event) => {
	if (event.key === 'Escape')
		modalProduct.classList.remove('modal_open');
	document.removeEventListener('keydown', closeModalKey);
}




catalogList.addEventListener('click', (event) => {
	const target = event.target;
	if (target.closest('.product__detail') || target.closest('.product__img')) {
		const id = target.closest('.product').dataset.idProduct;
		openModal(id);
		modalProductBtn.focus();
		document.addEventListener('keydown', closeModalKey);
	}
})

const modalClose = ({ target, currentTarget }) => {
	if (target.closest('.modal__close') || target === currentTarget) {
		modalProduct.classList.remove('modal_open');
	}
}

modalProduct.addEventListener('click', modalClose)

const init = () => {
	renderListProduct();
	navigationListController(renderListProduct);
	cartInit();
	countModalController();
}

init();
