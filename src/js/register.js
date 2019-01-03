//获取元素
var $phone = $('#phone');
var $code = $('#code');
var $gain = $('#gaincode');
var $next = $('#next');
var $box = $('#box');
//创建元素
var $phonespan = $('<span></span>');
$phonespan.insertBefore($box);
var $test = $('<input typle = "text" placeholder = "验证码" id = "inpt">');
var $img1 = $('<img src = "../image/LoginValidateCode.aspx">');
var $box2 = $('<div>看不清换一张</div>')
$test.insertBefore($code);
$img1.insertBefore($code);
$box2.insertBefore($code);
//设置失焦事件
$phone.blur(function(){
	//alert(this);T
	var phone = $(this).val();
	//alert(phone);
	var re = /\d{11}/;
	if(!re.test(phone)){
		//alert($phonespan)
		$phonespan.html('请输入你要注册的手机');
		arr[0] = false;
	}else{
		$phonespan.html(' ');
		arr[0] = true;
	}
	
})
$phone.focus(function(){
	$phonespan.html(' ');
	$phone.attr('placeholder',' ');
})

$code.focus(function(){
	$code.attr('placeholder',' ');
})
$code.blur(function(){
	var code = $(this).val();
	var re = /^[0-9a-zA-Z]{6,16}$/;
	if(!re.test(code)){
		$phonespan.html('请输入6-16位密码（包含字母数字）');
		arr[1] = false;
	}else{
		$phonespan.html('');
		arr[1] = true;
	}
})
$gain.click(function(){
	
	$phonespan.html('为保护您的账号安全，请先输入图形验证码');
	$test.css("display","block");
	$img1.css("display","block");
	$box2.css("display","block");
})

$test.focus(function(){
	$test.attr('placeholder',' ');
})
$test.blur(function(){

	var test = $(this).val();
	//alert(test);
	if(test === 'y3A8'){
		$phonespan.html(' ');
		arr[3] = true;
	}else{
		
		$phonespan.html('验证码错误，正确验证码y3A8');
		arr[3] = false;
	}
})
$againpwd.blur(function(){
	var uApwd = $(this).val();
	if(uApwd === $pwd.val()){
		$pwdr.html('');
		arr[2] = true;
	}else{
		$pwdr.html('密码与第一次输入不符');
		arr[2] = false;
	}
})



$encode.blur(function(){
	var encode = $(this).val();
	if((encode === '8w58') || (encode === '8W58')){
		$codewarn.html('');
		arr[3] = true;
	}else{
		$codewarn.html('验证码错误，正确验证码8w85');
		arr[3] = false;
	}
})
$reg.click(function(event){
	//alert($phone.val())
	var phone = $phone.val();
	//alert(phone);
	var uPwd = $pwd.val();
	//alert(uPwd);
	if(!phone){
		alert('用户名不能为空！');
		return;
	}
	if(arr.indexOf(false) != -1){
		alert('请正确填写信息！');
		return;
	}
	
	var cookieStr = $.cookie('user') ? $.cookie('user') : '';
	var cookieObj = convertCookieStrToObj(cookieStr);
	//alert(user);
	if(phone in cookieObj){
		alert('用户名已存在');
	}else{ 
		cookieObj[phone] = uPwd;
		cookieStr = convertObjToCookieStr(cookieObj);
		//alert(JSON.stringify(cookieObj));
		$.cookie('user',cookieStr,{expires : 7,path : '/'});
		alert('注册成功！');
		location.href = 'login.html'
	}
	//alert(decodeURIComponent(document.cookie));
})






function convertCookieStrToObj(str){
		if(!str){
			return {};
		}
		
		var arr = str.split(','); 
		//console.log(arr);
		var obj = {};
		for(var i = 0;i < arr.length;i ++){
			var list = arr[i].split(':');
			obj[list[0]] = list[1];
		}
		return obj;
	}
	//将对象转为cookie字符串
	function convertObjToCookieStr(obj){
		var str = '';
		for(var i in obj){
			var pwd = obj[i];
			if(str){
				str += ',';
			}
			str += i + ':' + pwd;
		}
		return str;
	}
