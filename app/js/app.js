
document.addEventListener('DOMContentLoaded', () => {

	document.querySelector('.cart').addEventListener('click', function(event) {

		if (event.target.closest('.cart-product:not(.cart-product-disabled) .cart-product-link')) {
			let el = event.target.closest('.cart-product')
			checkCart(el)
		}

		if (event.target.closest('.cart-product-call-to-action a')) {
			let el = event.target.closest('.cart-product-call-to-action a').parentElement.parentElement
			checkCart(el)
		}

	})

	document.querySelector('.cart').addEventListener('mouseover', function(event) {

		if (!event.target.closest('.cart-product-link')) {
			setHover()
		}

	})

	function setHover() {
		document.querySelectorAll('.cart-product-selected').forEach(function(el) {
			el.querySelector('.cart-product-link').classList.add('cart-product-link-hover')
		})
	}

	function checkCart(el) {
		if (el.classList.contains('cart-product-selected')) {
			el.classList.remove('cart-product-selected')
			el.querySelector('.cart-product-link').classList.remove('cart-product-link-hover')
			el.querySelector('.cart-product-call-to-action').classList.remove('hidden')
			el.querySelector('.cart-product-call-to-action-selected').classList.add('hidden')
			return
		}
		el.classList.add('cart-product-selected')
		el.querySelector('.cart-product-call-to-action').classList.add('hidden')
		el.querySelector('.cart-product-call-to-action-selected').classList.remove('hidden')
		
	}

})
