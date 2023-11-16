// .nav_toggle 要素を取得
const navToggle = document.querySelector("#nav_toggle");
// .nav 要素を取得
const nav = document.querySelector(".p-sp-menu");
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

// .nav_toggle 要素にクリックイベントリスナーを設定
navToggle.addEventListener("click", function () {
  // .nav_toggle と .nav の両方に show クラスを切り替え
  this.classList.toggle("show");
  nav.classList.toggle("show");
  document.body.classList.toggle('no-scroll');
});

// .p-sp-menu__item 要素を全て取得
const listItems = document.querySelectorAll(".p-sp-menu__item");

// 各 .p-sp-menu__item 要素にクリックイベントリスナーを設定
listItems.forEach(item => {
    item.addEventListener("click", function () {
        // メニューを閉じる
        navToggle.classList.remove("show");
        nav.classList.remove("show");
        document.body.classList.remove('no-scroll');
    });
});

// スムーズスクロールのためのイベントリスナーを設定
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const targetElement = document.querySelector(href);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // メニューを閉じるロジックもここに含める
        navToggle.classList.remove("show");
        nav.classList.remove("show");
        document.body.classList.remove('no-scroll');
    });
});
