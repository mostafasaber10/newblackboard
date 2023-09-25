const productButton = document.querySelectorAll('.purchase-btn')

  const pay = document.querySelector('.pay')

  const closes = document.querySelector('.closes')

  const seop = document.querySelector('.seop')


  productButton.forEach((button) =>{
     button.addEventListener("click",()=>
  {
      pay.style.display ="flex";
 }
    )

  })


  closes.addEventListener("click",()=>
   {
      pay.style.display ="none";
  }

 )









 // متغير يخزن عدد العناصر في السلة
let cartdetails = 0;

// مصفوفة لتخزين التفاصيل الخاصة بالعناصر في السلة
const cartItems = [];

// احصل على عناصر الواجهة
const sgi = document.querySelector('.sgi');
const quantityElement = document.querySelector('.quantity');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const cartDetailsList = document.querySelector('.cart-details');
const totalDetailsPrice = document.querySelector('.total-price-details');

// احصل على جميع أزرار زيادة ونقص الكمية
const increaseQuantityButtons = document.querySelectorAll('.increase-quantity');
const decreaseQuantityButtons = document.querySelectorAll('.decrease-quantity');
const deleteItemButtons = document.querySelectorAll('.delete-item'); // أزرار حذف المنتج


window.addEventListener('load', () => {
    const cartVisible = localStorage.getItem('cartVisible');
    if (cartVisible === 'visible') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
});



// عند النقر على الزرار لإظهار القائمة
sgi.addEventListener('click', () => {
    // إذا كانت القائمة مرئية، قم بإخفائها وقم بتحديث localStorage
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
        localStorage.setItem('cartVisible', 'hidden');
    } else {
        // إذا كانت القائمة مختفية، قم بإظهارها وقم بتحديث localStorage
        popup.style.display = 'block';
        localStorage.setItem('cartVisible', 'visible');
        // هنا يمكنك إضافة الكود الخاص بعرض التفاصيل في القائمة
    }
});








// الدالة التي تفتح نافذة السلة
function openCartWindow() {
    // مسح قائمة السلة
    cartDetailsList.innerHTML = '';
    
    let total = 0;
    
    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        
        <span>اسم المنتج: ${item.name}</span><br>
            <span>النوع: ${item.type}</span><br>
            <span>السعر: $${item.price.toFixed(2)}</span><br>
            <span>الكمية: <span class="quantity">${item.quantity}</span></span>
            <button class="increase-quantity" onclick="increaseQuantity(${index})">+</button>
            <button class="decrease-quantity" onclick="decreaseQuantity(${index})">-</button>
            <button class="delete-item" onclick="deleteItem(${index})">(X)</button> <!-- زر حذف المنتج -->
            `;
        cartDetailsList.appendChild(listItem);
        total += item.price * item.quantity;
    });

    // تحديث المجموع في تفاصيل السلة
    totalDetailsPrice.textContent = `المجموع: $${total.toFixed(2)}`;

    // إظهار النافذة المنبثقة
    popup.style.display = 'block';

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });
}

// دالة لزيادة كمية المنتج
function increaseQuantity(index) {
    cartItems[index].quantity++;
    updateCart();
}

// دالة لنقص كمية المنتج
function decreaseQuantity(index) {
    if (cartItems[index].quantity > 0) {
        cartItems[index].quantity--;
        updateCart();
    }
}

// دالة لحذف المنتج
function deleteItem(index) {
    cartItems.splice(index, 1);
    cartdetails--;
    updateCart();
}


// دالة لإضافة منتج إلى السلة
function addToCart(item) {
    cartItems.push(item);
    cartdetails++;
    updateCart();
}

// دالة لتحديث نص عدد المنتجات في السلة
function updateCart() {
    const quantityElement = document.querySelector('.quantity');
    quantityElement.textContent = cartdetails;
    openCartWindow();
}



// إضافة عناصر إلى السلة
const newItem1 = {
    name: 'منتج 1',
    type: 'نوع المنتج 1',
    price: 20.00,
    quantity: 1,
};
addToCart(newItem1);

const newItem2 = {
    name: 'منتج 2',
    type: 'نوع المنتج 2',
    price: 25.00,
    quantity: 1,
};
addToCart(newItem2);

// الزر الذي يفتح نافذة السلة عند النقر عليه
sgi.addEventListener('click', openCartWindow);



