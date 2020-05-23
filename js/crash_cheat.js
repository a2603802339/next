/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "../../images/failure.png");
      $('[rel="shortcut icon"]').attr('href', "../../images/failure.png");
      document.title = '╭(°A°`)╮ 你丑你就走 ~';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "../../images/favicon-32x32-next.png");
      $('[rel="shortcut icon"]').attr('href', "../../images/favicon-32x32-next.png");
      document.title = '(ฅ>ω<*ฅ) 你帅你就来~！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
    }
  });
};