/* -------------------------------------------------------------------------

File javascript của tất cả các trang: main.js (Gồm nút chuyển lên đầu trang khi cuộn, phần hiện lịch sử tìm kiếm của phần search, phần xem thêm và ẩn bớt của sản phẩm,..)
1. Người viết: 
    - Trần Thanh Hòa _ MSSV: B1908387 _ Email: hoaB1908387@student.ctu.edu.vn
    - Đỗ Quốc Trường _ MSSV: B1913349 _ Email: truongB1913349@student.ctu.edu.vn
    - Lê Thị Kim Hân _ MSSV: B1906469 _ Email: hanB1906469@student.ctu.edu.vn
2. Ngày tạo: 22/11/2021
3. Cập nhật lần cuối: 15/12/2021
4. Tham khảo: 
    a) https://fullstack.edu.vn
    b) https://www.nodemy.vn
    c) https://www.youtube.com/watch?v=gphMli74Chk

------------------------------------------------------------------------- */

// Show on scroll
// Lấy tất cả phần tử có class là show-on-scroll
let elToShow = document.querySelectorAll('.show-on-scroll')

let isElInViewPort = (el) => {
    // Trả về kích thước và vị trí của phần tử trong trang
    let rect = el.getBoundingClientRect()
        // Trả về chiều cao của vùng hiển thị cho một đối tượng, tính bằng pixel. Giá trị chứa chiều cao với phần đệm, nhưng nó không bao gồm scrollBar, viền và lề.
    let viewHeight = window.innerHeight || document.documentElement.clientHeight

    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
        (rect.top >= 0 && rect.bottom <= viewHeight)
    )
}

function loop() {
    elToShow.forEach((item) => {
        if (isElInViewPort(item)) {
            // Thêm class start vào từng dạng cuộn tương ứng
            item.classList.add('start')
        } else {
            // Xóa class start ở từng dạng cuộn tương ứng
            item.classList.remove('start')
        }
    })
}

window.onscroll = loop

loop()


// Back To Top
const backToTopButton = document.querySelector('.footer__active-up>button');
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    //Show backToTopButton
    // Khi cuộn tới mức nhất định sẽ hiện button back to top
    if (window.pageYOffset > 100) {
        if (!backToTopButton.classList.contains('btnEntrance')) {
            backToTopButton.classList.remove('btnExit');
            backToTopButton.classList.add('btnEntrance');
            backToTopButton.style.display = 'block';
        }
    }
    //Hide backToTopButton
    else {
        if (backToTopButton.classList.contains('btnEntrance')) {
            backToTopButton.classList.remove('btnEntrance');
            backToTopButton.classList.add('btnExit');
            setTimeout(function() {
                backToTopButton.style.display = 'none';
            }, 250)
        }
    }
}
backToTopButton.addEventListener('click', smoothScrollBackToTop);

// Khi bấm vào nút thì nó sẽ quay về điểm trên cùng của thanh cuộn, cộng thêm scroll-behavior: smooth; ở thẻ html
function smoothScrollBackToTop() {
    window.scrollTo(0, 0);
}

// countdown time
let time__seconds = document.querySelector("#time__seconds");
let time__minutes = document.querySelector("#time__minutes");
let time__hours = document.querySelector("#time__hours");

function setTime() {
    if (time__seconds.value <= 60) {
        time__seconds.value--;
    }
    if (time__seconds.value == 0) {
        time__seconds.value = 59;
        time__minutes.value--;
    }
    if (time__minutes.value == 0) {
        time__hours.value--;
        time__minutes.value = 59;
    }
}
setInterval(setTime, 1000);

// Page container
var container = {
    showInput: function() {
        var showMore = document.querySelector('.show-more');
        var historyCompact = document.querySelector('.history-compact');
        var hideMore = document.querySelector('.hide-more');
        var closeProduct = document.querySelectorAll('.close-history-product')[0];
        var nameProduct = document.querySelectorAll('.history-header-search-item')[0];
        var closeProductTwo = document.querySelectorAll('.close-history-product')[1];
        var nameProductTwo = document.querySelectorAll('.history-header-search-item')[1];
        var closeProductThree = document.querySelectorAll('.close-history-product')[2];
        var nameProductThree = document.querySelectorAll('.history-header-search-item')[2];

        closeProduct.addEventListener('click', function() {
            nameProduct.style.display = 'none';
        })

        closeProductTwo.addEventListener('click', function() {
            nameProductTwo.style.display = 'none';
        })

        closeProductThree.addEventListener('click', function() {
            nameProductThree.style.display = 'none';
        })

        showMore.addEventListener('click', function() {
            historyCompact.style.display = 'block'
            showMore.style.display = 'none'
            hideMore.style.display = 'block'
        })

        hideMore.addEventListener('click', function() {
            historyCompact.style.display = 'none'
            showMore.style.display = 'block'
            hideMore.style.display = 'none'
        })

    },

    showHistoryBtn: function() {
        var outPutSearch = document.querySelector('.output__search');
        var clickOnInput = document.querySelector('.input-search');
        var clickOffInput = document.querySelector('.close-the-search-panel-title');

        clickOnInput.addEventListener('click', function() {
            outPutSearch.style.display = 'block'
        })

        clickOffInput.addEventListener('click', function() {
            outPutSearch.style.display = 'none'
        })
    },

    showProduct: function() {
        // Dành cho bạn
        var showProduct2 = document.querySelector('#suggestions-main-js-2');
        var btnShow1 = document.querySelector('#show-main-1');
        var hideItemMain1 = document.getElementById('hide-main-product-1');
        var showClickMoreA = document.getElementById('show-click-more-a');
        var btnHide1 = document.querySelector('#hide-main-1');

        btnShow1.addEventListener('click', function() {
            showProduct2.style.display = 'flex';
            hideItemMain1.style.display = 'none';
            showClickMoreA.style.display = 'flex';
        })

        btnHide1.addEventListener('click', function() {
            showProduct2.style.display = 'none';
            showClickMoreA.style.display = 'none';
            btnShow1.style.display = 'block';
            hideItemMain1.style.display = 'block';
        })

        // Sale cực to 50%
        var showProduct4 = document.querySelector('#suggestions-main-js-4');
        var btnShow3 = document.querySelector('#show-main-3');
        var hideItemMain3 = document.getElementById('hide-main-product-3');
        var showClickMoreB = document.getElementById('show-click-more-b');
        var btnHide3 = document.querySelector('#hide-main-3');

        btnShow3.addEventListener('click', function() {
            showProduct4.style.display = 'flex';
            hideItemMain3.style.display = 'none';
            showClickMoreB.style.display = 'flex';
        })

        btnHide3.addEventListener('click', function() {
            showProduct4.style.display = 'none';
            btnShow3.style.display = 'block';
            showClickMoreB.style.display = 'none';
            hideItemMain3.style.display = 'block';
        })

        // Thời trang -50%
        var showProduct6 = document.querySelector('#suggestions-main-js-6');
        var btnShow5 = document.querySelector('#show-main-5');
        var hideItemMain5 = document.getElementById('hide-main-product-5');
        var showClickMoreC = document.getElementById('show-click-more-c');
        var btnHide5 = document.querySelector('#hide-main-5');

        btnShow5.addEventListener('click', function() {
            showProduct6.style.display = 'flex';
            hideItemMain5.style.display = 'none';
            // xài display: flex nó bị nhỏ hơn mấy sp khác
            showClickMoreC.style.display = 'block';
        })

        btnHide5.addEventListener('click', function() {
            showProduct6.style.display = 'none';
            btnShow5.style.display = 'block';
            showClickMoreC.style.display = 'none';
            hideItemMain5.style.display = 'block';
        })

        // Freeship
        var showProduct8 = document.querySelector('#suggestions-main-js-8');
        var btnShow7 = document.querySelector('#show-main-7');
        var hideItemMain7 = document.getElementById('hide-main-product-7');
        var showClickMoreD = document.getElementById('show-click-more-d');
        var btnHide7 = document.querySelector('#hide-main-7');

        btnShow7.addEventListener('click', function() {
            showProduct8.style.display = 'flex';
            hideItemMain7.style.display = 'none';
            showClickMoreD.style.display = 'flex';
        })

        btnHide7.addEventListener('click', function() {
            showProduct8.style.display = 'none';
            btnShow7.style.display = 'block';
            showClickMoreD.style.display = 'none';
            hideItemMain7.style.display = 'block';
        })

        // Rẻ vô đối
        var showProduct10 = document.querySelector('#suggestions-main-js-10');
        var btnShow9 = document.querySelector('#show-main-9');
        var hideItemMain9 = document.getElementById('hide-main-product-9');
        var showClickMoreE = document.getElementById('show-click-more-e');
        var btnHide9 = document.querySelector('#hide-main-9');

        btnShow9.addEventListener('click', function() {
            showProduct10.style.display = 'flex';
            hideItemMain9.style.display = 'none';
            showClickMoreE.style.display = 'flex';
        })

        btnHide9.addEventListener('click', function() {
            showProduct10.style.display = 'none';
            btnShow9.style.display = 'block';
            showClickMoreE.style.display = 'none';
            hideItemMain9.style.display = 'block';
        })
    },

    start: function() {
        this.showInput();
        this.showHistoryBtn();
        this.showProduct();
    }
};
container.start();