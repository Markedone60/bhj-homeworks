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


productAdd.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();

    const cart = document.querySelector('.cart__products');
    const cartArr = Array.from(document.querySelectorAll('.cart__product'));
    const findActive = cartArr.find(item => item.classList.contains("tooltip_active"));
    const product = this.closest('.product');

    if (btn.closest('.product').dataset.id === findActive.dataset.id) {
      item.querySelector('.cart__product-count').textContent = Number(item.querySelector('.cart__product-count').textContent) +
        Number(btn.closest('.product').querySelector('.product__quantity-value').textContent);
    } else {
      cart.insertAdjacentHTML('afterBegin', `<div class="cart__product" data-id="${btn.closest('.product').dataset.id}">
                <img class="cart__product-image" src="${btn.closest('.product').querySelector('.product__image').src}">
                <div class="cart__product-count">${btn.closest('.product').querySelector('.product__quantity-value').textContent}</div>
                </div>`);
    }
  })
})



function addToBasket(){
  let product = this.closest('.product');
  let productQuantity = Number(product.querySelector('div.product__quantity-value').textContent);
  let productImage = product.querySelector('img.product__image').src;
  let cart = document.querySelector('div.cart__products');
  let productExist = Array.from(cart.children).find(el => el.dataset['id'] == product.dataset['id']);       //Не строго чтобы не преобразовывать типы

  if(productExist){
    let productExistQuantity = Number(productExist.querySelector('.cart__product-count').textContent);
    cart.replaceChild(productNode(product.dataset['id'], productImage, productQuantity + productExistQuantity), productExist);
  } else{
    cart.appendChild(productNode(product.dataset['id'], productImage, productQuantity));
  }
}

/*

productAdd.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const cart = document.querySelector('.cart__products');
    const cartArr = document.querySelectorAll('.cart__product');
    
    if (cart.children.length === 0) {
      cart.insertAdjacentHTML('afterBegin', `<div class="cart__product" data-id="${btn.closest('.product').dataset.id}">
        <img class="cart__product-image" src="${btn.closest('.product').querySelector('.product__image').src}">
        <div class="cart__product-count">${btn.closest('.product').querySelector('.product__quantity-value').textContent}</div>
        </div>`);
    } else {
      for (let i = 0; i < cartArr.length; i++) {
        if (btn.closest('.product').dataset.id === cartArr[i].dataset.id) {
          cartArr[i].querySelector('.cart__product-count').textContent = Number(cartArr[i].querySelector('.cart__product-count').textContent) +
            Number(btn.closest('.product').querySelector('.product__quantity-value').textContent);
        } else {
          cart.insertAdjacentHTML('afterBegin', `<div class="cart__product" data-id="${btn.closest('.product').dataset.id}">
                <img class="cart__product-image" src="${btn.closest('.product').querySelector('.product__image').src}">
                <div class="cart__product-count">${btn.closest('.product').querySelector('.product__quantity-value').textContent}</div>
                </div>`);
        }
      }
    }
  })
})

function toCart () {
  const cart = document.querySelector('.cart__products');
  const cartArr = Array.from(document.querySelectorAll('.cart__product'));

  const findBtn = productAdd.find(btn => btn.classList.contains("tooltip_active"));
  console.log(findBtn);
}

*/
// не получается реализовать правильно условие добавление элемента в корзину при наличии этого же элемента внутри (элементы дублируются)
