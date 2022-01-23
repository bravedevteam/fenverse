$(function(){
  // 로그인 팝업 시작
  $(".btnMenu").click(function(e){
    e.preventDefault();
    $("html, body").css("overflow", "hidden");
    $("#popLogin").fadeIn(300);
  });
  // 로그인 팝업 끝

  // 회원가입 팝업 시작
  $(".btnJoin").click(function(e){
    e.preventDefault();
    $("#popLogin").fadeOut(300);
    $("#popJoin").fadeIn(300);
  });
  // 회원가입 팝업 끝

  // 로그인 후 팝업 시작
  $(".btnGoogle, .btnKlip").click(function(e){
    e.preventDefault();
    $("#popLogin").fadeOut(300);
    $("#popUser").fadeIn(300);
  });
  // 로그인 후 팝업 끝

  // 팝업 닫기 시작
  $(".popBasic .popClose").click(function(){
    $("html, body").css("overflow", "auto");
    $(this).parents(".popBasic").fadeOut(300);
  });
  // 팝업 닫기 끝

  // 탭 시작
  $(".tabArea a").click(function(e){
    e.preventDefault();
    var target = $(this).attr("data-tab");
    $(this).addClass("active").siblings().removeClass("active");
    $("#"+target).addClass("active").siblings(".tabCont").removeClass("active");

    if($(this).parent().hasClass("is--action")){
      var idx = $(this).index();
      $(this).parent().attr("class", "tabArea is--action");
      $(this).parent().addClass("pos"+idx);
    }
  });
  // 탭 끝

  // 헤더 액션 시작
  $(window).on("scroll", function(){
    var _top = $(this).scrollTop();
    if(0 < _top){
      $("#header").addClass("fixed");
    }else{
      $("#header").removeClass("fixed");
    }
  });
  // 헤더 액션 끝
});