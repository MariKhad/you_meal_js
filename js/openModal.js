import { API_URL, PREFIX_PRODUCT } from './const.js';
import {
	modalProduct,
	modalProductTitle,
	modalProductImg,
	modalProductDescription,
	ingreditentsList,
	ingredientsCalories,
	modalProductPriceCount,
	modalProductBtn,
	countAmount
} from './elements.js';
import { getData } from './getData.js';

export const openModal = async (id) => {
	const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`)
	modalProductTitle.textContent = product.title;
	modalProductImg.src = `${API_URL}/${product.image}`;
	modalProductImg.alt = product.title;
	modalProductDescription.textContent = product.description;
	ingreditentsList.textContent = '';
	ingredientsCalories.textContent = `${product.weight}г, ккал ${product.calories}`;
	modalProductPriceCount.textContent = product.price;
	modalProductBtn.dataset.idProduct = product.id;

	const ingredientsListItems = product.ingredients.map((item) => {
		const li = document.createElement('li');
		li.classList.add('ingredients__item');
		li.textContent = item;
		return li;
	})

	countAmount.textContent = '1';

	ingreditentsList.append(...ingredientsListItems);
	modalProduct.classList.add('modal_open');
}
