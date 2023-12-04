const headerElement = document.getElementById("main");

//スクロールイベントリスナー追加
window.addEventListener("scroll", function ()
{

  // windowのスクロール位置を取得
  const scrollPosition = this.window.pageYOffset;
  
  // headerElementが特定の位置に達したかチェック
  if (scrollPosition > 500)
  {
      headerElement.classList.add("p-header-fix", "fading-in");
  }
  else if (scrollPosition > 300)
  {
    headerElement.classList.remove("p-header-fix", "fading-in");

  }

});



