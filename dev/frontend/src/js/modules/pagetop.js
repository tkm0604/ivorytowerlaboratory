window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
  {
    document.getElementById("pagetop").style.opacity = "0.7";
  } else
  {
    document.getElementById("pagetop").style.opacity = "0";

  }  
};

document.getElementById("pagetop").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});