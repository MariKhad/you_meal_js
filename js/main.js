import {
	catalogList,
	countModal,
	countsOrder,
	modalDelivery,
	modalDeliveryContainer,
	modalProduct,
	modalProductBtn,
	orderList
} from './elements.js'

import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';
import { navigationListController } from './navigationListController.js';
import { addCart, cartInit, removeCart } from './cart.js';
import { ModalDeliveryContainerInnerHTML } from './const.js';


const closeModalKey = (event) => {
	if (event.key === 'Escape')
		modalProduct.classList.remove('modal_open');
	modalDelivery.classList.remove('modal_open');
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
		currentTarget.classList.remove('modal_open');
		modalDeliveryContainer.innerHTML = ModalDeliveryContainerInnerHTML;
	}

}

modalProduct.addEventListener('click', modalClose);
modalDelivery.addEventListener('click', modalClose);



orderList.addEventListener('click', (event) => {
	const targetPlus = event.target.closest('.count__plus');
	if (targetPlus) {
		addCart(targetPlus.dataset.idProduct);
	}
	const targetMinus = event.target.closest('.count__minus');
	if (targetMinus) {
		removeCart(targetMinus.dataset.idProduct);
	}
})

const init = () => {
	renderListProduct();
	navigationListController();
	cartInit();
	//countOrderController();
}

init();
