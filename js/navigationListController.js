import { catalogTitle, navigationBtns, navigationList } from "./elements.js"

export const navigationListController = (cb) => {
	let activeBtn = navigationList.querySelector('.navigation__button_active');
	navigationList.addEventListener('click', e => {
		const categoryItem = e.target.closest('.navigation__button');

		if (!categoryItem) return;
		activeBtn.classList.remove('navigation__button_active');

		activeBtn = categoryItem;
		catalogTitle.textContent = activeBtn.textContent;
		cb(activeBtn.dataset.category);
		activeBtn.classList.add('navigation__button_active');
	})
}