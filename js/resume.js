var scrollBlock = {
  service: null,
  portfolio: null,
  about:null,
  team: null,
  contact:null,
  init: function () {
    this.service=document.querySelector(".service").offsetTop;
    this.portfolio=document.querySelector(".portfolio").offsetTop;
    this.about = document.querySelector(".about").offsetTop;
    this.team=document.querySelector(".team").offsetTop;
    this.contact= document.querySelector(".contact").offsetTop;
  },
  start:function(){
    $("#mymenu").on("click","li>a",this.scroll.bind(this));
    window.onscroll=this.trackScroll.bind(this);
  },
  trackScroll:function(){
    if(window.scrollY>=this.service){
      $("[href=service]").parent().addClass("active").siblings().removeClass("active");
    }
    if(window.scrollY>=this.portfolio){
      $("[href=portfolio]").parent().addClass("active").siblings().removeClass("active");
    }
    if(window.scrollY>=this.about){
      $("[href=about]").parent().addClass("active").siblings().removeClass("active");
    }
    if(window.scrollY>=this.team){
      $("[href=team]").parent().addClass("active").siblings().removeClass("active");
    }
    if(window.scrollY>=this.contact){
      $("[href=contact]").parent().addClass("active").siblings().removeClass("active");
    }
  },
  scroll: function (e) {
    e.preventDefault();
    var block = $(e.target).attr("href");
    var position = null;
    if (block == "service") {
      position = this.service
    }
    else if (block == "portfolio") {
      position = this.portfolio
    }
    else if (block == "about") {
      position = this.about
    }
    else if (block == "team") {
      position = this.team
    }
    else if (block == "contact") {
      position = this.contact
    }
    $("body,html").animate({
      scrollTop: position
    }, 500);
  }

}
//初始化各个块的位置
scrollBlock.init();
window.onresize=function(){
  scrollBlock.init();
}
//可以开始滚动
scrollBlock.start();


