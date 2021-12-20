/* ----------------------------------------------------------

File javascript của phần sản phẩm (file san-pham.html): product.js
1. Người viết: 
    - Trần Thanh Hòa _ MSSV: B1908387 _ Email: hoaB1908387@student.ctu.edu.vn
    - Đỗ Quốc Trường _ MSSV: B1913349 _ Email: truongB1913349@student.ctu.edu.vn
    - Lê Thị Kim Hân _ MSSV: B1906469 _ Email: hanB1906469@student.ctu.edu.vn
2. Ngày tạo: 22/11/2021
3. Cập nhật lần cuối: ../12/2021
4. Tham khảo: https://fullstack.edu.vn/

-------------------------------------------------------------*/


var product = {
    productFreeShip: function() {
        var freeShipFull = document.querySelector('.product-free-ship');
        var freeShipPrev = document.querySelector('.product-move-prev');
        var freeShipNext = document.querySelector('.product-move-next');

        freeShipNext.addEventListener('click', function() {
            freeShipFull.style.transform = 'translateX(-100%)';
            freeShipPrev.style.display = 'block';
            freeShipNext.style.display = 'none';
        });

        freeShipPrev.addEventListener('click', function() {
            freeShipFull.style.transform = 'translateX(0)';
            freeShipPrev.style.display = 'none';
            freeShipNext.style.display = 'block';
        });
    },

    productDiscount: function() {
        var discount = document.querySelector('.discount__product--full');
        var prevDiscount = document.querySelector('.discount__product--prev');
        var nextDiscount = document.querySelector('.discount__product--next');

        nextDiscount.addEventListener('click', function() {
            discount.style.transform = 'translateX(-100%)';
            prevDiscount.style.display = 'block';
            nextDiscount.style.display = 'none';
        })

        prevDiscount.addEventListener('click', function() {
            discount.style.transform = 'translateX(0)';
            prevDiscount.style.display = 'none';
            nextDiscount.style.display = 'block';
        })
    },

    tabIndex: function() {
        var boxTab = document.querySelectorAll('.sticky-list-tab');
        var productSuggestions = document.querySelectorAll('.product-suggestions-container');
        var result = boxTab.forEach(function(tab, index) {
            var pane = productSuggestions[index];
            tab.onclick = function() {
                document.querySelector('.sticky-list-tab.sticky-active').classList.remove('sticky-active');
                document.querySelector('.product-suggestions-container.block-active').classList.remove('block-active');

                this.classList.add('sticky-active')
                pane.classList.add('block-active')
            }
        })
    },

    start: function() {
        this.productFreeShip();
        this.productDiscount();
        this.tabIndex();
    }
};
product.start();

// 
var showDiscount = document.querySelector('#show-discount');
var productDiscount = document.querySelector('#show_discount');
var hideDiscount = document.querySelector('#hide-discount');
var showProductHided1 = document.querySelector('#hide-on-all1');
var hideMore1 = document.querySelector('.hide-more1');

showDiscount.addEventListener('click', function() {
    productDiscount.style.display = 'flex';
    hideMore1.style.display = 'none';
    showProductHided1.style.display = 'block';
});
hideDiscount.addEventListener('click', function() {
    productDiscount.style.display = 'none';
    hideMore1.style.display = 'flex';
    showProductHided1.style.display = 'none';
});


var showClothes = document.querySelector('#show-clothes');
var productClothes = document.querySelector('#show_clothes');
var hideClothes = document.querySelector('#hide-clothes');
var showProductHided2 = document.querySelector('#hide-on-all2');
var hideMore2 = document.querySelector('.hide-more2');

showClothes.addEventListener('click', function() {
    productClothes.style.display = 'flex';
    hideMore2.style.display = 'none';
    showProductHided2.style.display = 'block';
});
hideClothes.addEventListener('click', function() {
    productClothes.style.display = 'none';
    hideMore2.style.display = 'flex';
    showProductHided2.style.display = 'none';
});


// Show and hide product on PC
var showMoreProduct = document.querySelector('.show-more-prod');
var productMain2 = document.querySelector('.product__main-2');
var hideMoreProduct = document.querySelector('.hide-more-prod');

showMoreProduct.addEventListener('click', function() {
    productMain2.style.display = 'block';
    hideMoreProduct.style.display = 'block';
    showMoreProduct.style.display = 'none';
});

hideMoreProduct.addEventListener('click', function() {
    productMain2.style.display = 'none';
    showMoreProduct.style.display = 'block';
    hideMoreProduct.style.display = 'block';
});