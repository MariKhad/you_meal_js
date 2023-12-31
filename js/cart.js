import { catalogList, countAmount, modalDelivery, modalDeliveryContainer, modalProductBtn, order, orderClose, orderCount, orderList, orderSubmit, orderTotalAmount, orderWrapTitle } from "./elements.js";
import { API_URL, ModalDeliveryContainerInnerHTML, PREFIX_PRODUCT } from "./const.js";
import { getData } from "./getData.js";
import { orderController } from "./orderController.js";

export const getCart = () => {
	const cartList = localStorage.getItem('cart');
	if (cartList) {
		return JSON.parse(cartList);
	} else
		return [];
};



const renderCartList = async () => {
	const cartList = await getCart();
	orderSubmit.disabled = !cartList.length;
	const allIdProduct = cartList.map(item => item.id);
	const data = cartList.length
		? await getData(`${API_URL}${PREFIX_PRODUCT}?list=${allIdProduct}`)
		: [];


	const countProduct = cartList.reduce((acc, item) => acc + item.count, 0);

	orderCount.textContent = countProduct;
	let totalPrice = 0;
	const cartItems = data.map((item) => {
		const li = document.createElement('li');
		li.classList.add('order__item');
		li.dataset.idProduct = item.id;
		const product = cartList.find(cartItem => cartItem.id === item.id);
		//totalPrice += product.count * item.price;
		li.innerHTML = `
		<img class="order__img" src="${API_URL}/${item.image}" alt=${item.title}>
		<div class="order__product">
		<h3 class="order__product-title">
			${item.title}
		</h3>
		<p class="order__product-weight">${item.weight}г</p>
		<p class="order__product-price">${item.price}
			<span class="currency">₽</span>
		</p>
		</div>
		<div class="order__product-count count">
		<button class="count__minus" data-id-product=${product.id}>-</button>
		<p class="count__amount">${product.count}</p>
		<button class="count__plus" data-id-product=${product.id}>+</button>
		</div>`;
		return li;
	})
	orderList.textContent = '';
	orderList.append(...cartItems);
	orderTotalAmount.textContent = data.reduce((acc, item) => {
		const product = cartList.find(cartItem => cartItem.id === item.id);
		return acc + (product.count * item.price);
	}, 0);
}

const updateCartList = (cartList) => {
	localStorage.setItem('cart', JSON.stringify(cartList));
	renderCartList();
}

export const addCart = (id, count = 1) => {
	const cartList = getCart();
	const product = cartList.find((item) => item.id === id);

	if (product) {
		product.count += count;
	} else {
		cartList.push({ id, count });
	}
	updateCartList(cartList);
};

export const removeCart = (id) => {
	const cartList = getCart();
	const index = cartList.findIndex((item) => item.id === id);
	if (cartList[index].count === 1) {
		cartList.splice(index, 1);
	} else {
		cartList[index].count -= 1;
	}
	updateCartList(cartList);
};

export const clearCart = () => {
	localStorage.removeItem('cart');
	renderCartList();
}


const cartController = () => {
	catalogList.addEventListener('click', ({ target }) => {
		if (target.closest('.product__add')) {
			addCart(target.closest('.product').dataset.idProduct)
		}
	})
	modalProductBtn.addEventListener('click', () => {
		addCart(modalProductBtn.dataset.idProduct,
			parseInt(countAmount.textContent))
	})

	orderWrapTitle.addEventListener('click', () => {
		order.classList.toggle('order_open');
	})

	orderClose.addEventListener('click', () => {
		order.classList.remove('order_open');
	})



	orderSubmit.addEventListener('click', () => {
		modalDelivery.classList.add('modal_open');
	})


};

export const cartInit = () => {
	cartController();
	renderCartList();
	orderController();
	//	countOrderController();
}

