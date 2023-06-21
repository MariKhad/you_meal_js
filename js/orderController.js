import { clearCart, getCart } from "./cart.js";
import { ModalDeliveryContainerInnerHTML } from "./const.js";
import { modalDeliveryForm, modalDeliveryContainer } from "./elements.js"

const checkDelivery = () => {
	if (modalDeliveryForm.format.value === 'pickup') {
		modalDeliveryForm.address_info.classList.add('modal-delivery__fieldset_hide');
	}

	if (modalDeliveryForm.format.value === 'delivery') {
		modalDeliveryForm.address_info.classList.remove('modal-delivery__fieldset_hide');
	}
}

export const orderController = () => {
	modalDeliveryForm.addEventListener('change', checkDelivery)

}


modalDeliveryForm.addEventListener('submit', e => {
	e.preventDefault();
	const formData = new FormData(modalDeliveryForm);
	const data = Object.fromEntries(formData);
	data.order = getCart();

	fetch('https://reqres.in/api/users', {
		method: 'POST',
		body: JSON.stringify(data)
	}).then(response => response.json())
		.then(response => {

			modalDeliveryContainer.innerHTML = `
			<h2 class="modal-delivery__h2">Большое спасибо за ваш заказ!!!</h2>
			<h3 class="modal-delivery__h3">Номер вашего заказа: ${response.id}</h3>
			<p class="modal-delivery__text">C вами в ближайшее время свяжется наш менеджер.</p>
			`
			clearCart();
		});


})
