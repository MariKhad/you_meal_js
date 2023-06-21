//export const API_URL = 'http://localhost:3024';
export const API_URL = 'https://magic-magic-flavor.glitch.me';
export const PREFIX_PRODUCT = '/api/product';
export const ModalDeliveryContainerInnerHTML = `<h2 class="modal-delivery__title">Доставка</h2>
<form class="modal-delivery__form" id="delivery">
	<fieldset class="modal-delivery__fieldset">
		<input class="modal-delivery__input" type="text" name="name" required placeholder="Ваше имя">
		<input class="modal-delivery__input" type="tel" name="phone" required placeholder="Телефон">
	</fieldset>
	<fieldset class="modal-delivery__fieldset modal-delivery__fieldset_radio">
		<label class="modal-delivery__label">
			<input class="modal-delivery__radio" type="radio" name="format" value="pickup" checked>
			<span>Самовывоз</span>
		</label>
		<label class="modal-delivery__label">
			<input class="modal-delivery__radio" type="radio" name="format" value="delivery">
			<span>Доставка</span>
		</label>
	</fieldset>
	<fieldset class="modal-delivery__fieldset modal-delivery__fieldset_hide" name="address_info">
		<input class="modal-delivery__input" type="text" name="address" placeholder="Улица, дом, квартира">
		<input class="modal-delivery__input modal-delivery__input_half" type="number" name="floor"
			placeholder="Этаж">
		<input class="modal-delivery__input modal-delivery__input_half" type="number" name="intercom"
			placeholder="Домофон">
	</fieldset>
</form>
<button class="modal-delivery__submit" type="submit" form="delivery">Оформить</button>`;