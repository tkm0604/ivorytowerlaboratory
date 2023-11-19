document.addEventListener('DOMContentLoaded', function() {
    let url = window.location.href;
    
    // URL末尾に応じたクラスの切り替え
    if (url.endsWith('#confirmation')) {
        // #contactの場合、navi_01からクラスを削除し、navi_02に追加
        document.querySelector('.navi_01.p-contact-head__item-current').classList.remove('p-contact-head__item-current');
        document.getElementById('confirmation').classList.add('p-contact-head__item-current');
    } else if (url.endsWith('#contact_finish')) {
        // #contact_finishの場合、navi_01からクラスを削除し、navi_03に追加
        document.querySelector('.navi_01.p-contact-head__item-current').classList.remove('p-contact-head__item-current');
        document.getElementById('send-completely').classList.add('p-contact-head__item-current');
    }
});
