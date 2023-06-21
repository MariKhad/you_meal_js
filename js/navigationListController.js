import { catalogTitle, navigationBtns, navigationList } from "./elements.js"
import { renderListProduct } from "./renderListProduct.js";

export const navigationListController = () => {
	let activeBtn = navigationList.querySelector('.navigation__button_active');
	navigationList.addEventListener('click', e => {
		const categoryItem = e.target.closest('.navigation__button');

		if (!categoryItem) return;
		activeBtn.classList.remove('navigation__button_active');

		activeBtn = categoryItem;
		catalogTitle.textContent = activeBtn.textContent;
		renderListProduct(activeBtn.dataset.category);
		activeBtn.classList.add('navigation__button_active');
	})
}