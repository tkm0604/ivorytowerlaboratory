const headerElement = document.getElementById("main");

//スクロールイベントリスナー追加
window.addEventListener("scroll", function ()
{

  // windowのスクロール位置を取得
  const scrollPosition = this.window.pageYOffset;
  
  // headerElementが特定の位置に達したかチェック
  if (scrollPosition > 180)
  {
      headerElement.classList.add("show");
  }
  else if (scrollPosition >= 50)
  {
    headerElement.classList.remove("show");

  }

});



