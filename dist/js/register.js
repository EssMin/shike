var $phone=$("#phone"),$code=$("#code"),$gain=$("#gaincode"),$next=$("#next"),$box=$("#box"),$phonespan=$("<span></span>");$phonespan.insertBefore($box);var $test=$('<input typle = "text" placeholder = "验证码" id = "inpt">'),$img1=$('<img src = "../image/LoginValidateCode.aspx">'),$box2=$("<div>看不清换一张</div>");function convertCookieStrToObj(e){if(!e)return{};for(var o=e.split(","),t={},n=0;n<o.length;n++){var r=o[n].split(":");t[r[0]]=r[1]}return t}function convertObjToCookieStr(e){var o="";for(var t in e){o&&(o+=","),o+=t+":"+e[t]}return o}$test.insertBefore($code),$img1.insertBefore($code),$box2.insertBefore($code),$phone.blur(function(){var e=$(this).val();/\d{11}/.test(e)?($phonespan.html(" "),arr[0]=!0):($phonespan.html("请输入你要注册的手机"),arr[0]=!1)}),$phone.focus(function(){$phonespan.html(" "),$phone.attr("placeholder"," ")}),$code.focus(function(){$code.attr("placeholder"," ")}),$code.blur(function(){var e=$(this).val();/^[0-9a-zA-Z]{6,16}$/.test(e)?($phonespan.html(""),arr[1]=!0):($phonespan.html("请输入6-16位密码（包含字母数字）"),arr[1]=!1)}),$gain.click(function(){$phonespan.html("为保护您的账号安全，请先输入图形验证码"),$test.css("display","block"),$img1.css("display","block"),$box2.css("display","block")}),$test.focus(function(){$test.attr("placeholder"," ")}),$test.blur(function(){var e=$(this).val();arr[3]="y3A8"===e?($phonespan.html(" "),!0):($phonespan.html("验证码错误，正确验证码y3A8"),!1)}),$againpwd.blur(function(){$(this).val()===$pwd.val()?($pwdr.html(""),arr[2]=!0):($pwdr.html("密码与第一次输入不符"),arr[2]=!1)}),$encode.blur(function(){var e=$(this).val();arr[3]="8w58"===e||"8W58"===e?($codewarn.html(""),!0):($codewarn.html("验证码错误，正确验证码8w85"),!1)}),$reg.click(function(e){var o=$phone.val(),t=$pwd.val();if(o)if(-1==arr.indexOf(!1)){var n=$.cookie("user")?$.cookie("user"):"",r=convertCookieStrToObj(n);o in r?alert("用户名已存在"):(r[o]=t,n=convertObjToCookieStr(r),$.cookie("user",n,{expires:7,path:"/"}),alert("注册成功！"),location.href="login.html")}else alert("请正确填写信息！");else alert("用户名不能为空！")});