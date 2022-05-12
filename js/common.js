$(function(){
  // 메인 리스트
  $(".listType a").click(function(e){
    e.preventDefault();
    var type = $(this).attr("data-type");

    $(this).addClass("on").siblings().removeClass("on");

    if(type == "thumb"){
      $(this).parents(".boxList").find(".list").addClass("is--thumb");
    }else if(type == "list"){
      $(this).parents(".boxList").find(".list").removeClass("is--thumb");
    }
  });

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

  // 유저 정보 팝업 시작
  $(".btnUserInfo").click(function(e){
    e.preventDefault();
    $(".popBasic").fadeOut(300);
    $("#popMyinfo").fadeIn(300);
  });
  // 유저 정보 팝업 끝

  $(".btnUserHistory").click(function(e){
    e.preventDefault();
    $(".popBasic").fadeOut(300);
    $("#popHistory").fadeIn(300);
  });

  // 지갑 등록하기 액션 시작
  $(".boxUserLogin a.wallet").click(function(){
    $("#loginStep1").hide();
    if($(this).parents(".boxUserLogin").attr("id") == 'loginStep1'){
      if($(this).hasClass("type--meta")){
        $("#loginStep3").show();
      }else{
        $("#loginStep2").show();
      }
    }else{
      $("#loginStep2").hide();
      $("#loginStep3").hide();
      $("#loginStep4").show();
    }
    
  });
  // 지갑 등록하기 액션 끝

  // QR팝업 시작
  $(".boxUserLogin a.btnKey").click(function(e){
    e.preventDefault();
    $("#popUser").fadeOut(300);
    $("#popQR").fadeIn(300);
  });
  // QR팝업 끝

  // 참여하기 팝업 시작
  $("#myTab1 .btn a").click(function(e){
    e.preventDefault();
    
    $("#popUser").fadeOut(300);
    $("#popComplete").fadeIn(300);
  });
  // 참여하기 팝업 끝
  
  // 결제하기 팝업 시작
  $("#btnBooking").click(function(e){
    e.preventDefault();
    $("#popSign").fadeIn(300);
  });
  // 결제하기 팝업 끝

  // 결제완료 팝업 시작
  $("#popSign .btn a").click(function(e){
    e.preventDefault();
    $("#popSign").fadeOut(300);
    $("#popFinish").fadeIn(300);
  });
  // 결제완료 팝업 끝

  // 결제내역 리스트 액션 시작
  $(".listHistory li .detail").slideUp(0);
  $(".listHistory li a").click(function(e){
    e.preventDefault();
    var _this = $(this);
    var _parent = _this.parent();
    if(_parent.hasClass("active")){
      _parent
      .removeClass("active")
      .children(".detail").slideUp(300);
    }else{
      _parent
        .addClass("active")
        .siblings().removeClass("active")
        .children(".detail").slideUp(300);
      _parent.children(".detail").slideDown(300);
    }
  });
  // 결제내역 리스트 액션 끝

  // 팝업 오픈 시작
  $(".open--popup").click(function(e){
    e.preventDefault();
    var target = $(this).attr("data-pop");
    $("html, body").css("overflow", "hidden");
    $("#"+target).fadeIn(300);

    if(target == "popCount"){
      startTimer(180, $("#countdown")); // timer = 60 * 3
    }
    
  });
  // 팝업 오픈 끝

  // 팝업 닫기 시작
  $(".popBasic .popClose, .close--popup").click(function(e){
    e.preventDefault();
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
    if(!$("#header").hasClass("is--absolute")){
      if(0 < _top){
        $("#header").addClass("fixed");
        if($("#container").hasClass("main")){
          $("#header h1").removeClass("is--white");
        }
      }else{
        $("#header").removeClass("fixed");
        if($("#container").hasClass("main")){
          $("#header h1").addClass("is--white");
        }
      }
    }
  });
  // 헤더 액션 끝

  // 카운트다운
  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var target = display.siblings(".progress");
    var target_w = target.outerWidth();
    var target_pos = target.find(".pos");
    
    var count = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        pos_w = target_pos.outerWidth();
        pos_size = pos_w - (pos_w / (timer+1));

        console.log(pos_w + "," + pos_size);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + "m : " + seconds + "s");
        target_pos.css("width", pos_size);

        if (--timer < 0) {
            timer = 0;
            display.text("00:00");
            clearInterval(count);
        }
    }, 1000);
  }

  //푸터
  $(window).resize(function(){
    footerSize();
  });
  footerSize();

  function footerSize(){
    var f_size = $("#footer").outerHeight();

    $("#container").css("padding-bottom", f_size+"px");
  }
});