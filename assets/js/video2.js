
//当前册别
function checkbook(obj){
	var value = $(obj).text();
	$(obj).parent().parent().prev('button').find('em').text(value);
}
//基本信息toggle
function inforToggle(obj){
	$('.ToggleBox').slideToggle();
	$(obj).find('em').toggleClass('active')
}
/*收起*/
function RelatSlide(obj){
	$(obj).closest('.title').next().slideToggle();
}
//查看解析
function openjx(obj){
	$(obj).parent().next(".resolve-content").slideToggle("slow");
}
//纠错
function addQueErrorInfo(){
	$(".dialog-edit").remove();
	$(".boxedit").remove();
	
	//2.构建弹出层html代码
	var blog ='<div class="dialog-edit"><div class="dialog-title">'+ '【习题纠错】' +'<a onclick="closeedit(this)" href="javascript:;" class="close"></a></div><div class="dialog-body"><ul><li><label>'+ '错误类型：' +'</label><select id="queErrType" style="width:220px;" ></select></li><li><label>'+ '错误描述：' +'</label><textarea id="queErrText" ></textarea></li></ul></div><div class="dialog-footer"><button onclick="saveQueError()">保存</button><button class="close" onclick="closeedit(this)">取消</button><input type="hidden" id="queErrQId"  /></div></div><div class="boxedit"></div>';
	var scrolltop = $(document).scrollTop();
	//3.弹出内容显示
	$("body").append(blog);
	$(".dialog-edit").css("top",scrolltop+400);
}
//纠错关闭
function closeedit(obj){
	$(obj).parent().parent().remove();
	$(".boxedit").remove();
	
}
/*单页导航*/
//initiating jQuery 
jQuery(function($) { 
	$(document).ready( function() {
		//为 '.navbar-wrapper' class 启用stickUp插件 
		$('.videoNav').stickUp({
			parts: { 
				0:'RelatQue', 
				1:'Relatswap', 
				2: 'Relatdata', 
			}, 
			itemClass: 'menuItem', 
			itemHover: 'active' 
		}); 
	}); 
});
//多行文本输入框剩余字数计算  
function checkMaxInput(obj, maxLen) {  
	if (obj == null || obj == undefined || obj == "") {  
	    return;  
	}  
	if (maxLen == null || maxLen == undefined || maxLen == "") {  
        maxLen = 100;  
    }  
  
    var strResult;  
    var $obj = $(obj);  
    var newid = $obj.attr("id") + 'msg';  
  
    if (obj.value.length > maxLen) { //如果输入的字数超过了限制  
		obj.value = obj.value.substring(0, maxLen); //就去掉多余的字  
		strResult = '<span id="' + newid + '" class=\'Max_msg\' ><em>还可以输入(' + (maxLen - obj.value.length) + ')</em>字</span>'; //计算并显示剩余字数  
    }  
	else {  
	    strResult = '<span id="' + newid + '" class=\'Max_msg\' >还可以输入<em>(' + (maxLen - obj.value.length) + ')</em>字</span>'; //计算并显示剩余字数 
    }  
	  
    var $msg = $("#" + newid);  
    if ($msg.length == 0) {  
        $obj.after(strResult);  
    }  
    else {  
    	$("span.Max_msg").remove(); 
    	$obj.after(strResult);  
    }  
}  
  
//清空剩除字数提醒信息  
function resetMaxmsg() {  
    $("span.Max_msg").remove();  
} 
//分享
function share(obj){
	$('.shareDialog').show();
	$('.box').show();
}
/*点赞*/
function like(obj){
	$(obj).addClass('active');
	$(obj).find('span').text('已赞');
	$(obj).find('.no').hide();
	$(obj).find('.already').show();
}
/*收藏*/
function keep(obj){
	$(obj).addClass('active');
	$(obj).find('span').text('已收藏');
	$(obj).find('.no').hide();
	$(obj).find('.already').show();
}
function sharecancel(){
	$('.shareDialog').hide();
	$('.box').hide();
	$('.sharebox textarea').val('');
}
/*回复slider*/
function replaytg(obj){
	if($(obj).parent().parent().next('.content').css('display')=='none'){
		$(obj).text('收起');
		$(obj).parent().parent().next('.content').slideDown()
	}else{
		$(obj).text('展开');
		$(obj).parent().parent().next('.content').slideUp()
	}
}
//难度题型分级
function queChose(obj,id){
	var text = $(obj).text();
	var val = $(obj).attr('value');
	$('#'+id).text(text).attr('value',val)
}
//判断对错
function turefalse(obj,trfa){
	$(obj).parent().parent().find('.onopen').show();
	if(trfa == true){
		$(obj).parent().append("<img src='../assets/images/zhengque.png' style='width:45px' />");
	}else{
		$(obj).parent().append("<img src='../assets/images/cuowu.png' style='width:45px' />")
	}
	$(obj).remove();
}
function addNavCls(obj) {
	$(obj).siblings().find('a').removeClass('active');
	$(obj).find('a').addClass('active');
	
}