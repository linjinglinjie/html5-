'user strict';

window.onload = function () {
	/*if (window.localStorage) {
		 localStorage.setItem("clarity", 'assets/plug/video/Incredibles_Teaser.m4v');	
	}*/
    //初始化
    var video = $('#video1').videoCt({
        title: localStorage.getItem("title"),              //标题
        img:localStorage.getItem("img"),
        volume: 1,                //音量
        barrage: true,              //弹幕开关
        comment: true,              //弹幕
        signBox: true,
        reversal: true,             //镜像翻转
        sign: true,
        playSpeed: true,            //播放速度
        update: true,               //下载
        autoplay: false,            //自动播放
        clarity: {
            type: ['360P','480P'],            //清晰度
            src: [localStorage.getItem("clarity"),
                  'assets/plug/video/mov_bbb.mp4']      //链接地址
        },
        commentFile: 'comment.json'           //导入弹幕json数据
    });

    //扩展
    video.title;                    //标题
    video.status;                   //状态
    video.currentTime;              //当前时长
    video.duration;                 //总时长
    video.volume;                   //音量
    video.clarityType;              //清晰度
    video.claritySrc;               //链接地址
    video.fullScreen;               //全屏
    video.reversal;                 //镜像翻转
    video.playSpeed;                //播放速度
    video.cutover;                  //切换下个视频是否自动播放
    video.commentTitle;             //弹幕标题
    video.commentId;                //弹幕id
    video.commentClass;             //弹幕类型
    video.commentSwitch;            //弹幕是否打开
    $('#video1').bind('ended', function() {
        console.log('弹幕json数据：\n'+ video.comment());              //获取弹幕json数据
    });
   var videoLi = $('.picList').find('li');
   for(i=0;i<videoLi.length;i++){
   		videoLi.eq(i).on('click',function(){
   			var index = $(this).index();
		    var des = $('.descript-video');
		    var jsonattr = $('.json').find('.play1').eq(index);
		    var titlename = jsonattr.find('.title').text();
		    var videoImg = $(this).find('.pic').find('a').find('img').attr('src');
		    var playnum = jsonattr.find('.playnum').text();
		    var videotype = jsonattr.find('.videotype').text();
		    var playtime = jsonattr.find('.playtime').text();
		    var teacher = jsonattr.find('.teacher').text();
		    var school = jsonattr.find('.school').text();
		    var xueke = jsonattr.find('.xueke').text();
		    var classq = jsonattr.find('.class').text();
		    var xueqi = jsonattr.find('.xueqi').text();
		    var zhangjie = jsonattr.find('.zhangjie').text();
		    var descript = jsonattr.find('.descript').text();
   			$('.video-in').empty();
   			$('.video-in').append('<video width="100%" height="85%" id="video1"></video>');
   			var videoSrc = $(this).attr('datasrc');
   			localStorage.setItem("clarity", videoSrc);	
   			$('#video1').videoCt({
		        title: titlename,              //标题
		        img:videoImg,
		        volume: 1,                //音量
		        barrage: true,              //弹幕开关
		        comment: true,              //弹幕
		        signBox: true,
		        reversal: true,             //镜像翻转
		        sign: true,
		        playSpeed: true,            //播放速度
		        update: true,               //下载
		        autoplay: false,            //自动播放
		        clarity: {
		            type: ['360P','480P'],            //清晰度
		            src: [videoSrc,
		                  'assets/plug/video/mov_bbb.mp4']      //链接地址
		        },
		        commentFile: 'comment.json'           //导入弹幕json数据
		    });
		   
		    des.find('.titlename').text(titlename)
		    des.find('.playnum').text(playnum)
		    des.find('.videotype').text(videotype)
		    des.find('.playtime').text(playtime)
		    des.find('.teacher').text(teacher)
		    des.find('.school').text(school)
		    des.find('.xueke').text(xueke)
		    des.find('.class').text(classq)
		    des.find('.xueqi').text(xueqi)
		    des.find('.zhangjie').text(zhangjie)
		    des.find('.descript').text(descript)
   		})
   }
	
}

//时间格式化
  function gTimeFormat(seconds) {
        var m = Math.floor(seconds / 60) < 10 ? "0" + Math.floor(seconds / 60) : Math.floor(seconds / 60);
        var s = Math.floor(seconds - (m * 60)) < 10 ? "0" + Math.floor(seconds - (m * 60)) : Math.floor(seconds - (m * 60));
        return m + ":" + s;
    };
//显示标记
function showSign(obj){
	$("#signNum").val($(obj).index());
	$('.signbg').removeClass('cur');
	$(obj).addClass('cur');
	var id = $(obj).attr('attr');
	var sign = $('#sign-List').find('.signList');
	$('.video-signBox').find('.prevnext').show();
	for(var i=0;i<sign.length;i++){
		if(sign.eq(i).attr('id') == id){
			var time = id.split('msg').join('');
			var signT = sign.eq(i).html();
			$('.video-signBox').fadeIn();
			$('.video-signBox').find("#signTime").text(gTimeFormat(time*100));
			$('.video-signBox').find("#signText").val(signT);
			$('.video-signBox').find('.sign-submit').hide();
			$('.video-signBox').find('.sign-look').show();
			
		}
	}
	$("#signID").val(id);
	$('.signtitle').find('.caozuo').removeClass('shezhi').addClass('delete').attr('onclick','deleteSign()')
}
//保存修改记录
function saveSign(obj){
	var id = $("#signID").val();
	var sign = $('#sign-List').find('.signList');
	for(var i=0;i<sign.length;i++){
		if(sign.eq(i).attr('id') == id){
			var newText = $(obj).parent().find('.text').find('#signText').val();
			sign.eq(i).html(newText);
			$('.video-signBox').fadeOut();
		}
	}
	$('.signbg').removeClass('cur');
}
 //基本信息收缩
function inforSlide(){
	$('.video-title').find('em').toggleClass('active');
	$('.descript-video').toggleClass('descript-hide');
	$('.video-playw').toggleClass('active');
}
/*打点翻页*/
function next(obj){
	var id = $("#signID").val();
	var sign = $('#sign-List').find('.signList');
	for(var i=0;i<sign.length;i++){
		if(sign.eq(i).attr('id') == id){
			$('#signNum').val(i);
		}
	}
	var num = $('#signNum').val();
	num>=sign.length-1?num=sign.length-1:num++;
	$('#signNum').val(num);
	var showTime = sign.eq(num).attr('id').split('msg').join('');
	var showHtml = sign.eq(num).html();
	$("#signID").val(sign.eq(num).attr('id'));
	$('.video-signBox').find("#signTime").text(gTimeFormat(showTime*100));
	$('.video-signBox').find("#signText").val(showHtml);
	var signP = $('.setSign').find('.signbg');
	for(var j=0;j<signP.length;j++){
		signP.eq(j).removeClass('cur');
		if(signP.eq(j).attr('attr') == $("#signID").val()){
			signP.eq(j).addClass('cur');
		}
	}
}
function prev(obj){
	var id = $("#signID").val();
	var sign = $('#sign-List').find('.signList');
	for(var i=0;i<sign.length;i++){
		if(sign.eq(i).attr('id') == id){
			$('#signNum').val(i);
		}
	}
	var num = $('#signNum').val();//2
	num<=0?num=0:num--;
	$('#signNum').val(num);
	var showTime = sign.eq(num).attr('id').split('msg').join('');
	var showHtml = sign.eq(num).html();
	$("#signID").val(sign.eq(num).attr('id'));
	$('.video-signBox').find("#signTime").text(gTimeFormat(showTime*100));
	$('.video-signBox').find("#signText").val(showHtml);
	signbggl()
}
//删除打点
function deleteSign(){
	var id = $("#signID").val();
	var sign = $('#sign-List').find('.signList');
	
	for(var i=0;i<sign.length;i++){
		if(sign.eq(i).attr('id') == id){
			var signP = $('.setSign').find('.signbg');
			for(var j=0;j<signP.length;j++){
				if(signP.eq(j).attr('attr') == sign.eq(i).attr('id')){
					signP.eq(j).remove();
				}
			}
			sign.eq(i).remove();
			var num = $('#signNum').val();
			if(num!=0){
				num--;
				$('#signNum').val(num);
				$("#signID").val(sign.eq(num).attr('id'));
				var showTime = sign.eq(num).attr('id').split('msg').join('');
				var showHtml = sign.eq(num).html();
				$('.video-signBox').find("#signTime").text(gTimeFormat(showTime*100));
				$('.video-signBox').find("#signText").val(showHtml);
				signbggl()
			}else{
				$('.video-signBox').fadeOut();
			}
			
		}
	}
	
}
function signbggl(){
	var signP = $('.setSign').find('.signbg');
	for(var j=0;j<signP.length;j++){
		signP.eq(j).removeClass('cur');
		if(signP.eq(j).attr('attr') == $("#signID").val()){
			signP.eq(j).addClass('cur');
		}
	}
}
