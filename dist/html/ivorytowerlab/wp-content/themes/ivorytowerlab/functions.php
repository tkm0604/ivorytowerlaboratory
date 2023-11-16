<?php

//-----------------------------------------------------
// 投稿メニューを非表示
//-----------------------------------------------------
function remove_menus () {
  remove_menu_page( 'edit.php' ); 
}
add_action('admin_menu', 'remove_menus');

add_action( 'init' , 'my_remove_post_support' );
function my_remove_post_support() {
     remove_post_type_support('works','editor'); 
     remove_post_type_support('about_me','editor'); 
}


