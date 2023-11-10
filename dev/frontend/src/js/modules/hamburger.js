// .nav_toggle 要素を取得します。
const navToggle = document.querySelector("#nav_toggle");
// .nav 要素を取得します。
const nav = document.querySelector(".p-sp-menu");
// .nav 要素を取得します。
const list = document.querySelector(".p-sp-menu__item");

// .nav_toggle 要素にクリックイベントリスナーを設定します。
navToggle.addEventListener("click", function () {
  // .nav_toggle と .nav の両方に show クラスを切り替えます。
  this.classList.toggle("show");
    nav.classList.toggle("show");
    list.classList.toggle("list");
});
