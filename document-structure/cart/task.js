'use strict';

const valueCount = Array.from(document.querySelectorAll('.product__quantity-value'));
const valueInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const valueDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));

valueInc.forEach((inc) => {
  inc.addEventListener('click', () => {
    let valueParam = inc.closest('.product__quantity-controls');
    let valueChange = valueParam.querySelector('.product__quantity-value');
    valueChange.textContent++;
  })
});

valueDec.forEach((dec) => {
  dec.addEventListener('click', () => {
    let valueParam = dec.closest('.product__quantity-controls');
    let valueChange = valueParam.querySelector('.product__quantity-value');
    if (valueChange.textContent > 1) {
      valueChange.textContent--;
    }
  })
});

function productBody(id, image, quantity){
  const productBody = document.createElement('div');
  productBody.classList.add('cart__product');
  productBody.dataset['id'] = id;
  productBody.innerHTML = `<img class="cart__product-image" src="${image}">
  <div class="cart__product-count">${quantity}</div>
  `;
  return productBody;
}


productAdd.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();

    const product = event.target.closest('.product');
    const productQty = Number(product.querySelector('div.product__quantity-value').textContent);
    const productImg = product.querySelector('img.product__image').src;
    const cart = document.querySelector('.cart__products');
    const productInCart = Array.from(cart.children).find(elem => elem.dataset['id'] === product.dataset['id']);
      
    if (productInCart) {
      const productInCartQty = Number(productInCart.querySelector('.cart__product-count').textContent);
      cart.replaceChild(productBody(product.dataset['id'], productImg, productQty + productInCartQty), productInCart);
    } else {
      cart.appendChild(productBody(product.dataset['id'], productImg, productQty));
    }
  })
})