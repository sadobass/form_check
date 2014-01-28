//@ 드림위버 기본
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

//@ 쿠키관련
/**
 * setCookie( "is_end", "done" , 1); -> 쿠키보관일 : 하루

 * if (getCookie( "is_end" ) == "done") {
 *		alert('쿠키가 만료되었습니다.');
 * }
 **/
function setCookie2(name, value, expiredays){
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function getCookie2(uName) {
	var flag = document.cookie.indexOf(uName+'=');
	if (flag != -1) {
		flag += uName.length + 1
		end = document.cookie.indexOf(';', flag)
		if (end == -1) end = document.cookie.length
		return unescape(document.cookie.substring(flag, end))
	}
}

function getCookie( name ) {
	var nameOfCookie = name + "=";
	var x = 0;
	while ( x <= document.cookie.length ) {
		var y = (x+nameOfCookie.length);
		if ( document.cookie.substring( x, y ) == nameOfCookie ) {
			if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 ) endOfCookie = document.cookie.length;
			return unescape( document.cookie.substring( y, endOfCookie ) );
		}
		x = document.cookie.indexOf( " ", x ) + 1;
		if ( x == 0 ) break;
	}
	return "";
}

function deleteCookie( cookieName ){
	var expireDate = new Date();

	//어제 날짜를 쿠키 소멸 날짜로 설정한다.
	expireDate.setDate( expireDate.getDate() - 1 );
	document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";
}

function winpopup(str, idx, sno, tp, lf, wd, ht, sc) {
	if ( getCookie(str) != "done" ) {
		noticeWindow = window.open('/popup/popup.asp?idx='+idx,'popup'+idx,'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=' + sc + ',resizable=no,width=' + wd + ',height=' + ht + ',top=' + tp + ',left=' + lf);
        if (noticeWindow)
        {
            noticeWindow.opener = self;
            noticeWindow.window.moveTo(400*sno+sno*10, 0);
            noticeWindow.focus();
        }
	}
}

//@ 영문만 입력 가능하게 하는 스크립트..
function onlyEng(objtext1) {
	var inText = objtext1.value;
	var ret;
	var str = "";
	objtext1.style.imeMode = "disabled";

	for (var i = 0; i < inText.length; i++) {
		ret = inText.charCodeAt(i);
		if ((ret > 122) || (ret < 48) || (ret > 57 && ret < 65) || (ret > 90 && ret < 97)) {
			alert("영문자와 숫자만을 입력하세요");
			objtext1.value = str;
			objtext1.focus();
			return false;
		} else{
			str += inText.substring(i, i+1);
		}
	}
	return true;
}

//@ 영문과 숫자만 입력 가능하게 하는 스크립트..
function onlyEngNum(objtext1) {
	var inText = objtext1.value;
	var ret;
	var str = "";
	objtext1.style.imeMode = "disabled";

	for (var i = 0; i < inText.length; i++) {
		ret = inText.charCodeAt(i);
		if ((ret > 122) || (ret < 48) || (ret > 57 && ret < 65) || (ret > 90 && ret < 97)) {
			alert("영문자와 숫자만을 입력하세요");
			objtext1.value = str;
			objtext1.focus();
			return false;
		} else{
			str += inText.substring(i, i+1);
		}
	}
	return true;
}


//@ 영문 + 숫자 + "-" + "_" 만 입력 가능하게 하는 스크립트..
function onlyEng2(objtext1) {
	var inText = objtext1.value;
	var ret;
	var str = "";

	for (var i = 0; i < inText.length; i++) {
		ret = inText.charCodeAt(i);
		if ((ret > 122) || (ret < 48 && ret != 45) || (ret > 57 && ret < 65) || (ret > 90 && ret < 97 && ret != 95)) {
			alert("영문자와 숫자만을 입력하세요");
			objtext1.value = str;
			objtext1.focus();
			return false;
		} else{
			str += inText.substring(i, i+1);
		}
	}
	return true;
}


//@ 숫자만 입력 가능하게 하는 스크립트..
function onlynum(objtext1){
	var inText = objtext1.value;
	var ret;
	var str = "";
	objtext1.style.imeMode = "disabled";

	for (var i = 0; i < inText.length; i++) {
	    ret = inText.charCodeAt(i);
		if (!((ret > 47) && (ret < 58)))  {
			alert("숫자만 입력 가능합니다.");
			objtext1.value = str;
			objtext1.focus();
			return false;
		} else{
			str += inText.substring(i, i+1);
		}
	}
	return true;
}

//@ 숫자와 컴마 입력 가능하게 하는 스크립트..
function onlyMoney(objtext1){
	var inText = objtext1.value;
	var ret;
	var str = "";

	for (var i = 0; i < inText.length; i++) {
	    ret = inText.charCodeAt(i);
		if (ret!=44 && !((ret > 47) && (ret < 58)))  {
            alert("숫자와 컴마만 입력 가능합니다.");
            objtext1.value = str;
            objtext1.focus();
            return false;
		} else{
			str += inText.substring(i, i+1);
		}
	}
	return true;
}

//@ 특수문자 사용못하게 하는 스크립트..
function onlyChar(objtext1) {
	var inText = objtext1.value;
	var ret;
	var str = "";

	for (var i = 0; i < inText.length; i++) {
		ret = inText.charCodeAt(i);
		if (ret>=0 && ret<=127) {
			if ((ret>=48 && ret<=57) || (ret>=65 && ret<=90) || (ret>=97 && ret<=122)) {
				str += inText.substring(i, i+1);
			}else{
				alert("특수문자는 사용할 수 없습니다.");
				objtext1.value = str;
				objtext1.focus();
				return false;
			}
		} else{
			str += inText.substring(i, i+1);
		}
	}
	return true;
}

//@ 특수문자 사용못하게 하는 스크립트.. 컴마포함
function onlyChar2(objtext1) {
	var inText = objtext1.value;
	var ret;
	var str = "";

	for (var i = 0; i < inText.length; i++) {
		ret = inText.charCodeAt(i);
		if (ret>=0 && ret<=127) {
			if ((ret>=48 && ret<=57) || (ret>=65 && ret<=90) || (ret>=97 && ret<=122) || ret==44) {
				str += inText.substring(i, i+1);
			}else{
				alert("특수문자와 공백은 사용할 수 없습니다.");
				objtext1.value = str;
				objtext1.focus();
				return false;
			}
		} else{
			str += inText.substring(i, i+1);
		}
	}
	return true;
}


//@ 새창 띄우기 스크립트
function new_win(filename,p_name,s_width,s_height,s_scrol)
{
	x = screen.width;
	y = screen.height;
	wid = (x / 2) - (s_width / 2);
	hei = (y / 2) - (s_height / 2);

    a = window.open(filename, p_name, "toolbar=no,location=0,directories=0,status=yes,menubar=0,resizable=0,scrollbars=" + s_scrol + ",width=" + s_width + ",height=" + s_height + ",top=" + hei + ",left=" + wid);
	a.focus();
}

//@ 이메일 유효성 검사
function checkEmail(Email){
	//email 체크
	var strEmail = Email;
    var i;
    var strCheck1 = false;
    var strCheck2 = false;
	var iEmailLen = strEmail.length

	if (iEmailLen > 0) {
		// strEmail 에 '.@', '@.' 이 있는 경우 에러메시지.
		// strEmail의 맨앞 또는 맨뒤에  '@', '.' 이 있는 경우 에러메시지.
		if ((strEmail.indexOf(".@") != -1) || (strEmail.indexOf("@.") != -1) ||
			(strEmail.substring(0,1) == ".") || (strEmail.substring(0,1) == "@") ||
			(strEmail.substring(iEmailLen-1,iEmailLen) == ".") || (strEmail.substring(iEmailLen-1,iEmailLen) == "@"))
		{
			return false;
		}
	    for ( i=0; i<iEmailLen; i++ ) {
	        if ( (strEmail.substring(i,i+1) == ".") || (strEmail.substring(i,i+1) == "-") || (strEmail.substring(i,i+1) == "_") ||
				((strEmail.substring(i,i+1) >= "0") && (strEmail.substring(i,i+1) <= "9")) ||
				((strEmail.substring(i,i+1) >= "@") && (strEmail.substring(i,i+1) <= "Z")) ||
				((strEmail.substring(i,i+1) >= "a") && (strEmail.substring(i,i+1) <= "z")) ) {
	                if (strEmail.substring(i,i+1) == ".")
						strCheck1 = true;
	                if (strEmail.substring(i,i+1) == "@")
						strCheck2 = true;
	        }
	        else {
				return false;
	        }
	    }

	    if ((strCheck1 == false) || (strCheck2 == false)) {
			return false;
	    }
		return true;
	} else{
		return false;
	}

}

function checkEmailer(Email){
	var strEmail = Email;

	var mailers = new Array(
	"hanmail.co.kr","hanmill.net", "hatmail.com", "hanmail.co.kr", "hanmaill.net","hanmeil.com","hanmil.net","daum.com","daum.co.kr","hamll.net",
	"hanmali.net","hanmall.net","hanmai.net","hanmeil.net","hannail.net","hanmali.net","hanmall.com",
	"hanmeil.net","duam.net","hanmale.net","naver.co.kr","never.com","naver.net","never.com",
	"hangame.com","nerer.com","naver.dom","never.co.kr","naber.com","hatmail.com","hotmail.net",
	"hatmail.net","hotmai.com","yahoo.net","yahoo.co.ke","yohoo.co.kr","yhoo.co.kr","yaoo.co.kr",
	"hayoo.com","yahool.co.kr","hayoo.co.kr","yauoo.co.kr","yawoo.co.kr","lycos.net","ycos.co.kr",
	"laicos.co.kr","licos.net","lycusmail.net","licos.com","co.net","konet.net","sayclue.com",
	"drimwiz.com","dremwiz.net","hananet.com","hanmir.net","co.kr","netian.co.kr","natian.net",
	"sinmani.com"
	);

	mailer = strEmail.substring(strEmail.indexOf("@") + 1)

	for( i = 0; i < mailers.length; i++ )
	{
		if( mailers[i] == (mailer) )
			return false;
	}
	return true;
}

//@ 문자열에 num, char만 있다면 true 를 return...
function isValid_Char(sBuf){
	var	numbers	= "1234567890";
	var	chars	= "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
	var	charnum	= numbers + chars;
	for ( var i=0; i<sBuf.length; i++ ) {
		if (charnum.indexOf(sBuf.charAt(i)) < 0) {
			return false;
		}
	}
	return true;
}

function errPassword(sPassword, sId, sBirth, sCivil2, sHphone){
	// Error일 경우 return true
	var ch, i, nLen, sSocialID;

	nLen = sPassword.length;
	//if (nLen < MAX_PASSWORD_LEN) return true;

	ch = sPassword.substring(0, 1);
	for ( i=0; i<nLen; i++ ) {
		if (ch != sPassword.substring(i, i + 1)) break;
	}
	if (i >= nLen) return true;
	if (sId     && sPassword.indexOf(sId) >= 0)     return true;
	if (sBirth  && sPassword.indexOf(sBirth) >= 0)  return true;
	if (sCivil2 && sPassword.indexOf(sCivil2) >= 0) return true;
	if (sHphone && sPassword.indexOf(sHphone) >= 0) return true;
	if (sPassword=="1234") return true;

	return false;
}

//@ 주민번호 체크
function ChksocialidNum(socialid, socialid1) {
    var sum = 0;

    sum += socialid.charAt(0)*2;
    sum += socialid.charAt(1)*3;
    sum += socialid.charAt(2)*4;
    sum += socialid.charAt(3)*5;
    sum += socialid.charAt(4)*6;
    sum += socialid.charAt(5)*7;

    sum += socialid1.charAt(0)*8;
    sum += socialid1.charAt(1)*9;
    sum += socialid1.charAt(2)*2;
    sum += socialid1.charAt(3)*3;
    sum += socialid1.charAt(4)*4;
    sum += socialid1.charAt(5)*5;

    check = (11 - sum % 11) % 10;

    if (socialid1.charAt(6) != check || (socialid.length != 6 && socialid1.length != 7))
    {
        return false;
    }

    if(!(socialid1.charAt(0) == '1' || socialid1.charAt(0)  == '2' ||
		 socialid1.charAt(0) == '3' || socialid1.charAt(0) == '4'))
    {
    	return false;
    }

   return true;
}



//@ 문자열에 num만 있다면 true를 return
function isValid_Num(sNum){
	var	numbers	= "1234567890";
	for ( var i=0; i<sNum.length; i++ ) {
		if (numbers.indexOf(sNum.charAt(i)) < 0) {
			return false;
		}
	}
	return true;
}


//@ radio object의 값을 return
function getRadioValue(radioObject){
	var ret = null;
	for (var i=0; i<radioObject.length; i++) 	{
		if (radioObject[i].checked) 		{
			ret = radioObject[i].value;
			break;
		}
	}
	return ret;
}


//@ oObj의 value가 비어있는지 check하고, 만약 비어있다면 sWhere로 error 메시지를 보여준다. oObj으로 focus 이동
function checkNull(oObj, sWhere){
    if (typeof(oObj) == "string")
    {
        if (oObj == "" || oObj == 0)
        {
            err_msg(sWhere, oObj);
            return false;
        }
    }
    else if (typeof(oObj) == "object")
    {
        if (oObj.value == "" || oObj.value == 0)
        {
            err_msg_focus(sWhere, oObj);
            return false;
        }
    }
    else
    {
        err_msg(sWhere, oObj);
        return false;
    }
	return true;
}


//@ oObj의 value가 비어있는지 check하고, 만약 비어있다면 sWhere로 error 메시지를 보여준다.
function checkNull2(oObj, sWhere){
    if (typeof(oObj) == "string")
    {
        if (oObj == "" || oObj == 0)
        {
            err_msg(sWhere, oObj);
            return false;
        }
    }
    else if (typeof(oObj) == "object")
    {
        if (oObj.value == "" || oObj.value == 0)
        {
            err_msg(sWhere, oObj);
            return false;
        }
    }
    else
    {
        err_msg(sWhere, oObj);
        return false;
    }
	return true;
}


//@ sWhere에서 오류가 나타났음을 알려주고, oObj로 focus를 이동한다.
function err_msg_focus(sWhere, oObj)
{
	alert(sWhere + " 항목이 누락되었습니다.");
	oObj.focus();
}


//@ sWhere에서 오류가 나타났음을 알려준다.
function err_msg(sWhere)
{
	alert(sWhere + " 항목이 누락되었습니다.");
}


String.prototype.trim = function(){
	return this.replace(/(^\s*)|(\s*$)/gi, "");
}

String.prototype.replaceAll = function(str1, str2){
	var temp_str = "";

	if (this.trim() != "" && str1 != str2){
		temp_str = this.trim();

		while (temp_str.indexOf(str1) > -1){
			temp_str = temp_str.replace(str1, str2);
		}
	}

	return temp_str;
}

//@ 해당 데이터 가져 오기
function DoCallBack(url, param)
{
    var pageUrl = url + "?param=" + param;
    if (window.XMLHttpRequest)
        var xmlRequest = new XMLHttpRequest();
    else
        var xmlRequest = new ActiveXObject("Microsoft.XMLHTTP");

        xmlRequest.open("POST", pageUrl, false);
        xmlRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlRequest.onreadystatechange = function () {
        if (xmlRequest.readyState == 4) {
            if(xmlRequest.status != 200) {
                alert("Error loading page");
                return;
            }
        }
    }
    xmlRequest.send(null);

    return xmlRequest;
}


//@ 새창띄우기
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}


//@ 이미지 새창에서 보기
function moveIMGView(obj){
	var img = new Image();
	img.src = obj.src;
	var ht = parseInt(img.height+45);
	var wd = parseInt(img.width+37);
	if (ht>screen.height) ht = screen.height;
	if (wd>screen.width) wd = screen.width;
	a = window.open("/pub/showImg.asp?imgPath=" + escape(img.src), "", "width="+wd+", height="+ht+", top=0, left=0, scrollbars=yes, resizable=yes");
	a.focus();
}


function swf_include(url, wN, hN, vars, id) {
	var codeStr =
	"<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width='"+wN+"' height='"+hN+"' id='"+id+"' align='middle'>"+
	"<param name='allowScriptAccess' value='sameDomain' />"+
	"<param name='movie' value='"+url+"' />"+
	"<param name='FlashVars' value='"+vars+"'/>"+
	"<param name='loop' value='false' />"+
	"<param name='menu' value='false' />"+
	"<param name='wmode' value='transparent' />"+
	"<param name='quality' value='high' />"+
	"<param name='bgcolor' value='#FFFFFF' />"+
	"<embed src='"+url+"' FlashVars='"+vars+"' quality='high' bgcolor='#EEF8FF' width='"+wN+"' height='"+hN+"' name='"+id+"' align='middle' allowScriptAccess='sameDomain' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />"+
	"</object>";
	document.write(codeStr);
}

function getObjById(str) {
	var obj = document.getElementById(str);
	return obj;
}

function setFocus(str1, str2, cnt) {
	var obj = getObjById(str1);
	if(onlynum(obj)){
		if(obj.value.length==cnt){ getObjById(str2).focus();}
	}
}


//@ jumpMenu
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}


function jShowHide(clsNm, idx){
    $('.' + clsNm).hide();
    $('.' + clsNm).eq(idx).show();
}

function jToggleArea(tg)
{
	$(tg).toggle();
}

//=====================================================================================
//@ fck 관련
//=====================================================================================
function createFck(dvn, dvn2){
    var oFCKeditor = new FCKeditor('contents' + dvn) ;
    oFCKeditor.BasePath                 = '/fckeditor/' ;
    oFCKeditor.Width                    = '670';
    oFCKeditor.Height                   = '360' ;
    oFCKeditor.ToolbarSet               = dvn2 ;
    oFCKeditor.Value                    = document.getElementById('TempContents' + dvn).value ;
    if (dvn2=='Admin') {
        oFCKeditor.Config[ "ImageUpload" ]  = 'true' ;
        oFCKeditor.Config[ "FlashUpload" ]  = 'true' ;
    }
    oFCKeditor.Create() ;
}

function checkContents(objName, tName){
    var oEditor = FCKeditorAPI.GetInstance(objName) ;
    var contents = oEditor.GetXHTML() ;
    if (contents == "")
    {
		alert(tName + " 항목이 누락되었습니다");
        oEditor.Focus();
        return false;
    } else {
		return true;
	}
}
//=====================================================================================


function tab_list(on,off,tg,url) {
	elon = document.getElementById(on);
	eloff = document.getElementById(off);
	elon.style.display = "block";
	eloff.style.display = "none";
	imgf = document.getElementById(on+'_img');
	imgs = document.getElementById(off+'_img');
	murl = document.getElementById(tg);
	if (imgf.src.indexOf("_over")<=0)
	{
		imgf.src = imgf.src.replace(".gif","_over.gif");
	}
	if (imgs.src.indexOf("_over")>0)
	{
		imgs.src = imgs.src.replace("_over.",".");
	}
	murl.href = url;
}

function delFile(idx){
    if (confirm("파일을 삭제 하시겠습니까?")){
        f.action = "/pub/filedelete.asp";
        f.target = "delFrm";
        f.fidx.value = idx;
        f.submit();
    }
}

function Download(idx){
    f.fidx.value = idx;
    f.action = "/pub/download.asp";
    f.submit();
}

function isInstr(oStr, tStr)
{
	if (oStr)
	{
		if (oStr.indexOf(tStr, 0)>-1)
			return true;
		else
			return false;
	}
}

//@ 전체 롤 오버 이미지 관련 기능 2008-12-11
function checkMOMOImg()
{
	var tmpImgSrc = new Array();
	$("img.MOMOImage").each(function(i){
		var $src = $(this).attr("src");
		if (!tmpImgSrc[i]) tmpImgSrc[i] = $src;
		$(this).hover(function(){
			if (!isInstr($src, "_on."))
			{
				$(this).attr("src", $src.replace(".", "_on."));
			}
		}
		, function(){
			$(this).attr("src", tmpImgSrc[i]);
		});
	});
}

//@ 롤 이미지 변경 2008-12-26
function changeMOMOImg(obj, mn2)
{
	// prt 로 같은 부류 이미지로 묶기 필수사항
	// 이미지 경로는 절대 경로로.. /경로/파일명
	var $obj = $(obj);
	$("img[prt='" + $obj.attr('prt') + "']").each(function (){
		var tmpsrc = $(this).attr("src");
		$(this).attr("src", tmpsrc.replace("_on.", "."));
		if (!isInstr($obj.attr("src"), "_on."))
		{
			$obj.attr("src", $obj.attr("src").replace(".", "_on."));
		}
	});
	// 롤 이미지 초기화
	checkMOMOImg();
	// product 로딩
	mn02 = mn2;
	// 해당 페이지 로딩 호출
	//getProductList();
}

//@ 왼쪽 메뉴 관련 시작-----------------------------------------------------------------
function getJSONMnList(obj, permission)
{
	if (obj)
	{
		$(obj).each(function(i, item){
			tmpSH = (item.level>0) ? 'none' : '';
			if(item.children) {
				var tmpImgSrc = '/img/ic_1depth_01.gif\' class=\'hand';
				var tmpclick = " onclick='mnToggle(this);'"
			} else {
				var tmpImgSrc = '/img/ic_2depth.gif';
				var tmpclick = "";
			}
			tmpGoUrl = (item.gourl) ? 'javascript: js_GoMenu("' + item.gourl + '", "' + item.mid + '");' : '#';
			if (item.level==0 && tmpImgSrc=='/img/ic_2depth.gif') tmpImgSrc = '/img/ic_1depth_03.gif';
			if (parseInt(permission) >= parseInt(item.permission))
			{
				$("<li id='" + item.mid + "' style='padding-left: " + (item.level*20) + "px; display:" + tmpSH + ";'><img src='" + tmpImgSrc + "' hspace='8'" + tmpclick + "><a href='" + tmpGoUrl + "' class='link04'>" + item.title + "</a></li>").appendTo($("#leftMenuArea01>ul"));
			}

			// 하위 메뉴 추가
			getJSONMnList(item.children, permission);
		});
	}
}

function js_GoMenu(gourl, mid)
{
	if (typeof(gourl)=='object') gourl = $(gourl).attr("href");
	if (gourl!="#") $.cookie("showLM", mid, {path: '/'});
	$.cookie("nowPage", 1, {path: "/"});
	//$.cookie("pageSize", 10, {path: '/'});
	$.cookie("nowState", '', {path: '/'});
	$.cookie("category", '', {path: '/'});
	$.cookie("searchdvn", '', {path: '/'});
	$.cookie("searchtxt", '', {path: '/'});
	$.cookie("searchcpno", '', {path: '/'});
	$.cookie("eventstate", '', {path: '/'});
	$.cookie("eventsite", '', {path: '/'});
	$.cookie("bannerstate", '', {path: '/'});
	$.cookie("bannersite", '', {path: '/'});
	$.cookie("bannerradio1", '', {path: '/'});
	$.cookie("bannerradio2", '', {path: '/'});
	$.cookie("bannerradio3", '', {path: '/'});
	$.cookie("bannerradio4", '', {path: '/'});
	$.cookie("SWS", '', {path: '/'});
	location.href = gourl;
}

var navigationStr = "";
function getLeftMenu(dvn, permission, jsonurl)
{
	$("#leftMenuArea01>ul>li").not("#M").remove();
	$.getJSON(jsonurl, function(data){
		getJSONMnList(eval('data.LeftMenu' + dvn), permission);

		// 해당 메뉴 펼치기
		//var tmpmn = location.hash;
		var tmpmn = $.cookie("showLM"); //"$("#menuFrm input[name=mid]").val();
		if (tmpmn)
		{
			var arr_tmpmn = tmpmn.split("_");
			var selecter = '';

			$("li[id^='" + arr_tmpmn[0] + "_" + arr_tmpmn[1] + "']").show().find('img').attr('src', function(){
				return $(this).attr('src')== '/img/ic_1depth_01.gif' ? '/img/ic_1depth_02.gif' : $(this).attr('src');
			});
			$('#' + tmpmn).css("font-weight", "bold");

			for(i = 0; i < arr_tmpmn.length; i++){
				if (i != 0){selecter += "_";navigationStr += " > ";}
				selecter = selecter + arr_tmpmn[i];
				navigationStr += $("li[id='" + selecter + "']").text();
			}
			getNavigation();
		}
		$("#leftMenuArea01 li:eq(1)").css("border-top","0px solid #eeeeee");
	});
}

function getNavigation(){
	if ($(".navigation").length > 0){
		$(".navigation").html(navigationStr);
	}else if ($("#navigation").length > 0){
		$("#navigation").html($("#navigation").html() + "  " + navigationStr);
	}
}

function mnToggle(obj){
	var tmpimg = $(obj).attr('src');
	var tmpLIID = $(obj).parent().attr('id');
	var $tmpMN = $("li[id^='" + tmpLIID + "_']");
	if (tmpimg.indexOf('/img/ic_1depth') > -1)
	{
		//tmpimg = (tmpimg.indexOf('/img/ic_1depth_01.gif') > -1) ? '/img/ic_1depth_02.gif' : '/img/ic_1depth_01.gif';
		if (tmpimg.indexOf('/img/ic_1depth_01.gif') > -1)
		{
			$tmpMN.filter(function(){
				return $(this).attr('id').split('_').length == $("li[id^='" + tmpLIID + "']").attr('id').split('_').length+1;
			}).show();
			tmpimg = '/img/ic_1depth_02.gif';
			// 하위 메뉴 펼침 복원
			$tmpMN.find('img').filter(function(){
				return $(this).attr('src').indexOf('/img/ic_1depth_02.gif') > -1;
			}).click().click();
		}
		else
		{
			$tmpMN.hide();
			tmpimg = '/img/ic_1depth_01.gif';
		}
		$(obj).attr('src', tmpimg);
	}
}
//$("#leftMenuArea01>ul").load('/inc/inc_LM_data.asp?part=<%=left01 %>');
// 왼쪽 메뉴 관련 끝 -----------------------------------------------------------------
var menuDVN = 0; // 왼쪽 메뉴 구분자
var posX = 0;
var posY = 0;

//@ 리스트 뷰 노출 관련
function setShowList()
{
	$("#ListArea").show();
	$("#ViewArea").empty();
}
function setShowView()
{
	$("#ListArea").hide();
	$("#ViewArea").show();
}

//@ 페이징 관련---------------------------------------------------------------------------
var pg = 1;
var pgsize = 10;
var totalrec = 0;
var totalpg = 1;

function movePage(page)
{
	if (parseInt(page, 10)>=1 && parseInt(page, 10)<=parseInt(totalpg, 10))
	{
		if (pg==page)
		{
			alert("현재 페이지입니다.");
		}
		else
		{
			pg = page;
			// 각자 실 페이지 로드 함수 호출하기
			getUCIList();
		}
	}
	else
	{
		alert("해당 페이지가 없습니다!");
	}
}

function movePageGo(obj)
{
	movePage($(obj).parent().parent().before().find("input.gopage").val());
}

function movePrevPage()
{
	var tmp = $(".gopage").eq(0).val();
	if (parseInt(tmp, 10)>1)
	{
		tmp = parseInt(tmp, 10)-1;
		movePage(tmp);
	}
	else
	{
		alert("처음 페이지입니다.");
	}
}

function moveNextPage()
{
	var tmp = $(".gopage").eq(0).val();
	if (parseInt(tmp, 10)<parseInt(totalpg, 10))
	{
		tmp = parseInt(tmp, 10)+1;
		movePage(tmp);
	}
	else
	{
		alert("마지막 페이지입니다.");
	}
}

function moveLastPage()
{
	if (pg == totalpg)
	{
		alert("마지막 페이지입니다.");
	}
	else
	{
		movePage(totalpg);
	}
}

function setTotalPage()
{
	// 페이지 2개 있을 경우
	checkPaging2('');

	if (parseInt(pgsize, 10) >= parseInt(totalrec, 10))
	{
		totalpg = 1;
	}
	else
	{
		totalpg = parseInt(parseInt(totalrec-1, 10)/pgsize, 10)+1;
	}

	$(".totalpg").text(totalpg);
	$(".gopage").val(pg);
}

function checkPaging2(tgOb)
{
	if ($(tgOb + " .paging").eq(1).size()==1)
	{
		$(tgOb + " .paging").eq(1).html($(tgOb + " .paging").eq(0).html());
	}
	$(".totalpg").text(totalpg);
	$(".gopage").val(pg);
}
//@ 로딩 이미지 관련-----------------------------------------------------
function showLoading(PX, PY, img) {
	var imgpath = '<img src="/images/common/loader.gif">';
	if (PX) posX = PX;
	if (PY) posY = PY;
	if (img=='NoImg') imgpath = '';
	if ($("#loadingImgArea").length==0) $("body").append("<div id='loadingImgArea' class='dsnone' style='position: absolute; top:0; left:0;'>" + imgpath + "</div>").css({"top":posY, "left":posX}).show();
	$("#loadingImgArea").html(imgpath).appendTo("body").css({"top":posY, "left":posX}).show();
}

function hideLoading()
{
	$("#loadingImgArea").hide(700);
}

//@ 체크 박스 전체 토글
function checkBoxToggle(obj, cbnm)
{
	$(":checkbox[name=" + cbnm + "]").attr("checked", $(obj).attr("checked"));
}

//@ serializeArray, 값 받아오기
function getSerialValue($jObj, sep)
{
	if (!sep) sep = "|";
    var fields = $jObj.serializeArray();
    var results = "";
    jQuery.each(fields, function(i, field){
        if (i>0) results = results + sep;
        results = results + $(field).val();
    });
    return results;
}

//@ serializeArray, 필드=값 받아오기
function getSerialFull($jObj, sep)
{
	if (!sep) sep = "|";
    var fields = $jObj.serializeArray();
    var results = "";
    jQuery.each(fields, function(i, field){
        if (i>0) results = results + sep;
        results = results + field.name + "=" + field.value;
    });
    return results;
}

//@ serializeArray, 필드=값 받아오기
function getSerialFull2($jObj, sep)
{
	if (!sep) sep = "|";
    var fields = $jObj.serializeArray();
    var results = "";
    jQuery.each(fields, function(i, field){
        if (i>0) results = results + sep;
        results = results + field.name + "=" + escape(field.value);
    });
    return results;
}

//@ form 값 자동 노출
function getFormValue(frmName){
	var formValue = '', inputClass, proValue='', proDim='Dim ', proWrite='';
	inputClass = $("#" + frmName + "  input");
	formValue += "{ <br>";
	inputClass.each(function() {
		formValue += "\"" + $(this).attr("name") + "\" : $(\"#" + frmName + " input[name=" + $(this).attr("name") + "]"
		if ($(this).attr("type") == "radio" || $(this).attr("type") == "checkbox" )
		{
			formValue += ":checked"
		}
		formValue += "\").val() <br> ,"

		proDim += "get" + $(this).attr("name") + ", ";
		proValue += "get" + $(this).attr("name") + " = RF(\"" + $(this).attr("name") + "\", false)<br>";
		proWrite += "response.write \"get" + $(this).attr("name") + " = \" & get"  + $(this).attr("name") + " & \"&lt;br&gt;\"<br>"
	});

	selectClass = $("#" + frmName + "  select");
	selectClass.each(function() {
		formValue += "\"" + $(this).attr("name") + "\" : $(\"#" + frmName + " select[name=" + $(this).attr("name") + "]\").val() <br> ,"

		proDim += "get" + $(this).attr("name") + ", ";
		proValue += "get" + $(this).attr("name") + " = RF(\"" + $(this).attr("name") + "\", false)<br>";
		proWrite += "response.write \"get" + $(this).attr("name") + " = \" & get"  + $(this).attr("name") + " & \"&lt;br&gt;\"<br>"
	});
	formValue = formValue.substring(0, formValue.length - 2);
	formValue += " }<hr>";

	proDim = proDim.substring(0, proDim.length - 2) + "<br><br>";
	proValue = proValue + "<br><br>";
	return formValue + proDim + proValue + proWrite;
}

function Keycode(e){
	var result;
	if(window.event)
		result = window.event.keyCode;
	else if(e)
		result = e.which;
	return result;
}

//@ 글자 자르기
function strInsertBr(str, cnt)
{
	var tmp = "";
	for (var i=0; i<str.length; i++)
	{
		tmp += str.substr(i,1);
		if (i % cnt == cnt-1) tmp += "<br>";
	}
	return tmp;
}

//@ 리스트 타이틀 글자 자르기
function strCut(str, cnt)
{
	var tmp = "";
	if (str.length > cnt)
	{
		tmp = str.substr(0,cnt) + '...';
	}
	else
	{
		tmp = str;
	}
	return tmp;
}

//@ 글자 자르기
function strCut2(str, cnt)
{
	var tmp = "";
	if (str.length > cnt)
	{
		tmp = str.substr(0,cnt);
	}
	else
	{
		tmp = str;
	}
	return tmp;
}

//@ 날짜 앞 10자리 자르기
function dateCut(strDate)
{
	var tmp = "";
	if (strDate!=''&&strDate!=null)
	{
		tmp = strDate.substr(0,10);
	}
	else
	{
		tmp = '';
	}
	return tmp;
}

//----------------------------------------------------------
// 콘텐츠 가져 오기 관련
// 2009-06-10 ----------------------------------------------
//@ 공통 기능 : 미리보기 영역 생성
var $ppVeiwArea = "";
function js_setProductPreViewArea()
{
	if ($(".productPreViewArea").length < 1) {
		$("body").append("<div class='productPreViewArea'></div>");
		$ppVeiwArea = $(".productPreViewArea");
		$ppVeiwArea.load("/web/pro.asp");
	}
	var tgPosX = 0;
	var tgPosY = 0;

	$(".preViewImg").unbind("mouseenter mousemove"); // 중복 제거 위해..

	$(".preViewImg").mouseenter(function(){
		tgPosX = mousePosX+25;
		if ((mousePosX - 100)>$(document).width()/2) tgPosX = mousePosX-35 - $ppVeiwArea.width();
		tgPosY = mousePosY-$ppVeiwArea.height()/2;
		$ppVeiwArea.css({"top": tgPosY, "left": tgPosX });
		$ppVeiwArea.find(".imgArea img").attr("src", $(this).attr("src").replace("_139.","_170.").replace("_108.","_170.")).end()
			.find(".val:first").text($(this).attr("idx")).end()
			.find(".val:last").text($(this).attr("price")).end().show();
	}).mousemove(function(){
		tgPosX = mousePosX+25;
		if ((mousePosX - 100)>$(document).width()/2) tgPosX = mousePosX-35 - $ppVeiwArea.width();
		tgPosY = mousePosY-$ppVeiwArea.height()/2;
		$ppVeiwArea.css({"top": tgPosY, "left": tgPosX });
		if (isInstr($ppVeiwArea.find(".imgArea img").attr("src"),"loader.gif")) {
			$ppVeiwArea.find(".imgArea img").attr("src", $(this).attr("src").replace("_139.","_170.").replace("_108.","_170.")).end()
			.find(".val:first").text($(this).attr("idx")).end()
			.find(".val:last").text($(this).attr("price")).end().show();
		}
	}).mouseleave(function(){
		$ppVeiwArea.hide();
	}).click(function(){
		$ppVeiwArea.hide();
	});
}

var pgsize = 24;
var pg = 1;

function js_CheckPagingCnt(dvn)
{
	if ($("#viewCnt").length==1) pageSize = $("#viewCnt").val();
	if (isNaN(dvn))
		var tmpNowPage = $(dvn).text();
	else
		var tmpNowPage = dvn;

//	if (tmpNowPage==nowPage) {
//		alert('현재 페이지입니다.');
//		$("input[name=gopage]").val($(".pgNumArea:eq(0) a.bold").text());
//		return false;
//	}
	//if (tmpNowPage>totalPage) { alert('해당 페이지가 없습니다.'); return false; }
	nowPage = tmpNowPage;
	if (nowPage==0) nowPage = 1;
	return true;
}

function js_CheckPagingCnt2(dvn)
{
	if ($("#viewCnt").length==1) pageSize = $("#viewCnt").val();
	if (isNaN(dvn))
		var tmpNowPage = $(dvn).text();
	else
		var tmpNowPage = dvn;
	//if (tmpNowPage>totalPage) { alert('해당 페이지가 없습니다.'); return false; }
	nowPage = tmpNowPage;
	if (nowPage==0) nowPage = 1;
	return true;
}

// 콘텐츠 가져오기 : url, 타켓영역이름, 한줄당 노출수, 임시현재페이지, 상품구분, category, 검색구분, 검색어, 리스트구분, 정렬구분, cpno
function js_getProductList(geturl, targetArea, rowcnt, tmppage, goodstype, cate, sdvn, stxt, datatype, orderby, cpno)
{
	// 페이지 체크 후 동일 페이지이거나 없는 페이지 일 경우 리턴 처리
	if(!js_CheckPagingCnt(tmppage)) return;
	$("." + targetArea).find("div").css("opacity", 0.3);//.hide().slideDown();

	$.getJSON(geturl
		, {
			"pagesize" : pageSize // 페이지 당 노출 수
			,"nowpage" : nowPage // 현재 페이지
			,"dvn" : "1cut"
			,"catid" : cate
			,"searchdvn" : sdvn
			,"searchtxt" : stxt
			,"orderby" : orderby
			,"datatype" : datatype
			,"goodstype" : goodstype
			,"cpno" : js_IsNull(cpno, 0)
		}
		, function(res)
		{
			var $pTarget = $("." + targetArea);
			var tmplate = $pTarget.find("ul>li").html();
			totalRec = res.CNT; // 총 레코드 수
			js_SetTotalPage(); // totalPage 셋팅
			$("." + targetArea + "tCnt").text(totalRec);
			var viewCnt = res.GOODS.length; // 결과 레코드 수
			var tmpHtml = "";
			var tmp = "";
			var imgsize = (rowcnt==5 || targetArea=="productsArea3" || targetArea=="productsArea4") ? "139" : "108";
			if (viewCnt==0)
			{
				$("." + targetArea + " .loadingArea").html("<div class='center'>No Data</div><br>").show();
				if ($pTarget.find("ul").length>1) $pTarget.find("ul:last").empty();
				$(".paging").hide();
				$pTarget.find("div").css("opacity", 1);
			}
			else
			{
				$.each(res.GOODS, function (i, item)
				{
					if (item.goods_no)
					{
						imgpath = (item.file_server_url) ? " src='" + item.file_server_url + item.file_server_nickname + "/Thumbnail/" + item.cp_no + "/List/" + (parseInt(item.original_goods_no/100)+1) + "/" + item.original_goods_no + "/list_" + imgsize + ".jpg' " :  (item.file_name) ? " src='/upload/uci/" + item.file_name + "' " : " src='/img/noimg_" + imgsize + ".gif' ";

						tmp = Common.format(tmplate
							, imgpath
							, item.pimg
							, item.original_goods_no
							, js_AddComma(item.selling_price)
							, (item.category_code=='CSFW')?item.contents_name:item.original_goods_no
							, item.category_code
						); //, item.contents_name, item.category_code
						if (i % rowcnt == 0)
						{
							tmp = "<li class='first'>" + tmp + "</li>";
						}
						else
						{
							tmp = "<li>" + tmp + "</li>";
						}
						tmpHtml += tmp;
					}
					if (i == viewCnt-1) // 콘텐츠 로딩 후 처리 되야 할것들..
					{
						// 콘텐츠 노출
						if ($pTarget.find("ul").length==1)
							$pTarget.append("<ul>" + tmpHtml + "</ul>");
						else
							$pTarget.find("ul:last").empty().append(tmpHtml);
						$(".loadingArea").hide();
						// 페이징 노출
						js_MovePage(nowPage);
						// 미리보기 영역 생성
						js_setProductPreViewArea();
						$pTarget.find("div").css("opacity", 1);
					}
				});
				js_SetBannerPosition();
			}
		}
	);
}

// 오버뷰 콘텐츠 가져오기 : url, 타켓영역이름, 한줄당 노출수
function js_getProductListOverview(geturl, targetArea, rowcnt, iw)
{
	$.getJSON(geturl
		, {
		}
		, function(res)
		{
			var $pTarget = $("." + targetArea);
			var tmplate = $pTarget.find("ul>li").html();
			var viewCnt = res.GOODS.length; // 결과 레코드 수
			var tmpHtml = "";
			var tmp = "";
			var imgpath = "";
            //if ($pTarget.find("ul").length==2) $pTarget.find("ul:eq(1)").remove();

			$.each(res.GOODS, function (i, item)
			{
				if (item.original_goods_no)
				{
                    iw = (iw)?iw:"108";
					imgpath = (item.file_server_url) ? " src='" + item.file_server_url + item.file_server_nickname + "/Thumbnail/" + item.cp_no + "/List/" + (parseInt(item.original_goods_no/100)+1) + "/" + item.original_goods_no + "/list_" + iw + ".jpg' " :  (item.file_name) ? " src='/upload/uci/" + item.file_name + "' " : " src='/img/noimg_" + iw + ".gif' ";

					tmp = Common.format(tmplate
						, imgpath
						, item.pimg
						, item.original_goods_no
						, js_AddComma(item.selling_price)
						, (item.category_code=='CSFW')?item.contents_name:item.original_goods_no
						, item.category_code
					);
					if (i % rowcnt == 0)
					{
						tmp = "<li class='first'>" + tmp + "</li>";
					}
					else
					{
						tmp = "<li>" + tmp + "</li>";
					}
					tmpHtml += tmp;
				}
				if (i == viewCnt-1) // 콘텐츠 로딩 후 처리 되야 할것들..
				{
					// 콘텐츠 노출
					$pTarget.append("<ul>" + tmpHtml + "</ul>");
					// 미리보기 영역 생성
					js_setProductPreViewArea();
				}
			});
            // 로딩 이미지 숨기기
            $pTarget.find(".loadingArea").hide();
		}
	);
}

function js_SetBannerPosition()
{
	$("#siteRightBanner").appendTo("body");
	js_SetPosition("#siteRightBanner", "left", -568);
	if ($("#mainBannerArea").length>0) js_SetPosition("#siteRightBanner", "top", 236);
	if (isInstr(location.href, "/search/search")) js_SetPosition("#siteRightBanner", "top", 260);
	if (isInstr(location.href, "/search/new_cd")) js_SetPosition("#siteRightBanner", "top", 250);
}

var mousePosX = 0;
var mousePosY = 0;
$(document).ready(function(){
	// 마우스 오른쪽 막기
   /* if (location.hash!="#freegine")
    {
        $(document).bind("contextmenu", function(e){
            alert("프리진을 이용해 주셔서 감사합니다. 좋은 하루 되세요~");
            return false;
        });
    }
*/
	// 1cut 보여주기 호출
	js_Show1CutView();

	// 왼쪽 고정 메뉴 처리
	js_SetBannerPosition();
	$(window).bind("resize", function(){
		js_SetBannerPosition();
	});

	$(".numeric").bind("keyup", function(){
		onlynum(this);
	});

	// 롤 이미지 체크
	checkMOMOImg();
//	// 왼쪽 메뉴 가져오기
//	getLeftMenu(menuDVN);

	// 공통 마우스 위치
	$().mousemove(function(e){
		mousePosX = e.pageX;
		mousePosY = e.pageY;
		posX = mousePosX;
		posY = mousePosY;
	});

	// 페이징 엔터 처리
	$(".gopage").keypress(function(event){
		if (event.keyCode==13) {
			js_MovePageGo(this.value);
		}
	});
});

//@ 페이징 관련 --------------------------
var nowPage = 0;
var pageSize = 16;
var totalRec = 0;
var totalPage = 1;
var blockPage = 10;
var nowState = '';

function js_MovePage(page)
{
	//curHash = ""; // ajax back 용도..

	if (nowPage>1) $(document).scrollTop($(".paging:first").offset().top-55);
	nowPage = page;
	if (nowPage>=1 && nowPage<=totalPage)
	{
		var tmpRatio = (parseInt(page/blockPage)); // 블럭 단위 페이징 위해
		var tmpIdx = nowPage % blockPage; // 페이징영역 인덱스 순서
		if (tmpIdx > 0)
		{
			tmpIdx--;
		}
		else
		{
			tmpIdx = 9;
			tmpRatio--;
		}

		// 페이징 번호 변경
		js_SetPageNum(tmpRatio);
		$("input[name=gopage]").val(nowPage);
		$(".pgNumArea a.page").removeClass("bold");
		$(".pgNumArea a.page").eq(tmpIdx).addClass("bold");

		// 페이징 2개 있을 경우
		if ($(".paging").length > 1) {
			$(".pgNumArea:eq(1) a.page").eq(tmpIdx).addClass("bold");
		}
	}
	else
	{
		//alert("해당 페이지가 없습니다.");
		//$("input[name=gopage]").val($(".pgNumArea:eq(0) a.bold").text());
		nowPage = totalPage;
		js_GetList(totalPage);
	}
	$(".paging").show();
	$.cookie("nowPage", nowPage, {path: '/'});
	$.cookie("pageSize", pageSize, {path: '/'});

	js_checkPageButton();
}

function js_SetTotalPage()
{
	if (parseInt(pageSize, 10) >= parseInt(totalRec, 10))
	{
		totalPage = 1;
	}
	else
	{
		totalPage = parseInt(parseInt(totalRec-1, 10)/pageSize, 10)+1;
	}
//alert(nowPage + ":" + totalPage + ":" + totalRec + ":" + pageSize);
	$("input[name=gopage]").val(nowPage);
	$(".totalpg").text(totalPage);
}

function js_SetPageNum(r)
{
	$(".pgNumArea a.page").each(function (j)
	{
		if (parseInt($(this).text()%blockPage)==0)
		{
			tmp = 10;
		}
		else
		{
			tmp = 0;
		}
		var tmpt = parseInt($(this).text()%blockPage)+tmp+(blockPage*r);
		$(this).text(tmpt);

		if (tmpt>totalPage)
		{
			$(this).hide();
			$(".pgNumArea span").eq(j-1).hide();
			if (j>blockPage) $(".pgNumArea span").eq(j-2).hide();
		}
		else
		{
			$(this).show();
			$(".pgNumArea span").eq(j-1).show();
		}
	});
}

function js_MovePageGo(obj)
{
	if (isNaN(obj))
		var tmppage = $(obj).parent().prev().find(".gopage").val();
	else
		var tmppage = obj;

	if (tmppage==0) tmppage = 1;
	if (totalPage>0 &&  totalPage<tmppage)
	{
		alert("해당 페이지가 없습니다. 마지막 페이지로 이동합니다.");
		tmppage = totalPage;
	}
	js_GetList(tmppage);
}

function js_movePrevPage()
{
	var tmp = parseInt($(".pgNumArea a.page:first").text());
	if (parseInt(tmp,10)>parseInt(blockPage,10))
	{
		js_GetList(tmp-1);
	}
}

function js_moveNextPage()
{
	var tmp = parseInt($(".pgNumArea a.page:last").text());
	if (tmp<totalPage)
	{
		js_GetList(tmp+1);
	}
}

//추가 : 페이징시 버튼 보여지고 안보여지고..
function js_checkPageButton()
{
	$("a.page").each(function(){$(this).attr("href", "#"+$(this).text())});
	(nowPage>1)?$("img.paging_prev").show():$("img.paging_prev").hide();
	(nowPage<totalPage)?$("img.paging_next").show():$("img.paging_next").hide();
	(parseInt(nowPage,10)>parseInt(blockPage,10))?$("img.paging_prev1").show():$("img.paging_prev1").hide();
	(((nowPage%blockPage==0)?((parseInt(nowPage/blockPage)-1)*10+1):(parseInt(nowPage/blockPage)*10+1))+10<=totalPage)?$("img.paging_next1").show():$("img.paging_next1").hide();
}

// px2cm
function js_calPx2Cm(obj)
{
	if ($("."+obj).length>0)
	{
		var px1 = $("." + obj + ":eq(0)").val();
		var px2 = $("." + obj + ":eq(1)").val();
		var dpi = $("." + obj + ":eq(2)").val();
		if (px1>0 && px2>0 && dpi>0)
		{
			var cm1 = parseInt(px1/dpi*2.5*100)/100;
			var cm2 = parseInt(px2/dpi*2.5*100)/100;
			$("." + obj + ":eq(3)").val(cm1);
			$("." + obj + ":eq(4)").val(cm2);
		}
		else
		{
			alert("값을 넣어주세요");
		}
	}
}

// CD 뷰페이지 이동
function js_GoViewCD(pidx, cate)
{
	var tmpcate = js_GetCategoryFolder(cate);

	if (isInstr(location.href, "/search/"))
		window.open(tmpcate + "cd_view.asp?pidx=" + pidx);
	else
		location.href = tmpcate + "cd_view.asp?pidx=" + pidx;
}
function js_viewCD(pidx)
{
	location.href = "cd_view.asp?pidx=" + pidx;
}

// 1Cut 뷰페이지 레이어 띄우기
function js_view1Cut(pidx, tmpcate)
{
	$.post("/web/1cut_view.asp"
		, {
			"pidx" : pidx // 콘텐츠 번호
			, "cate" : tmpcate // 카테고리 공통코드
		}, function(res){
			$("#popupArea").html(res);

			//본창 스크롤 고정 시작
			//scrollstate = true;
			//scrollval = $(window).scrollTop();
            //document.body.style.overflow = "hidden";

		}
	);
}

// CD 뷰페이지 레이어 띄우기
function js_viewcdLY(pidx, tmpcate)
{
	$.post("/web/cd_view_layer.asp"
		, {
			"pidx" : pidx // 콘텐츠 번호
			, "cate" : tmpcate // 카테고리 공통코드
			, "STAL" : "Y"
		}, function(res){
			$("#popupArea").html(res);
		}
	);
}

// 공통코드 이름 가져오기
function js_GetCodeName(cd)
{
	cd = cd.trim();
	if (cd) var tmp = eval('$("div:eq(0)").data("ucode").' + cd);
	if (!tmp) tmp = cd;
	return tmp;
}

// ajax upload
function bindFile(targetID, actionURL, fileInputName, imgdvn, cntdvn)
{
	$.ajax_upload(targetID, {
		action : actionURL,
		name: fileInputName,
		onSubmit : function(file, ext){
			showLoading();
			if (imgdvn == "img")
			{
				var allowed = ['jpg', 'png', 'gif', 'jpeg'];
				var msg = "Error: 이미지 파일(jpg, gif, png)만 올려주세요.";
			}
			else if (imgdvn == "swf")
			{
				var allowed = ['swf'];
				var msg = "Error: 플래시 파일(swf)만 올려주세요.";
			}

			if (imgdvn != "all")
			{
				if ($.inArray(ext, allowed ) == -1){
					// extension is not allowed
					alert(msg);
					// cancel upload
					hideLoading();
					return false;
				}
			}
		},
		onComplete: function(file, response) {
			hideLoading();
			if (cntdvn=="one")
			{
				$(targetID + '_orgnm').html("<div><span class='file_no dsnone'>" + response + "|</span>" + file + "</div>");
				$(targetID + '_savenm').val(response);
			}
			else
			{
				$(targetID + '_orgnm').append("<div><span class='file_no dsnone'>" + response + "|</span><img src='/cp_admin/img/3_btn_del.gif' width=12 class='hand' onclick='imageDel(\"" + response + "\", this);'>" + file + "</div>");
				//$(targetID + '_savenm').val(response);
			}
		},
		onSuccess : function(file, response){
			hideLoading();
			if (cntdvn=="one")
			{
				$(targetID + '_orgnm').html("<div><span class='file_no dsnone'>" + response + "|</span>" + file + "</div>");
				$(targetID + '_savenm').val(response);
			}
			else
			{
				$(targetID + '_orgnm').append("<div><span class='file_no dsnone'>" + response + "|</span><img src='/cp_admin/img/3_btn_del.gif' width=12 class='hand' onclick='imageDel(\"" + response + "\", this);'>" + file + "</div>");
				//$(targetID + '_savenm').val(response);
			}
		},
		onError : function(file, response){
			hideLoading();
			alert(response);
		}
	});
}

function bindFile2(targetID, fdvn, fileInputName, imgdvn, cntdvn, partyNo){
	var response = "";
	var file = "";
	var ext = "";
    var swfh = 500;
    var swfw = 500;
	if (imgdvn == 'img') ext = '*.jpg;*.gif;*.png';
	if (imgdvn == 'swf') ext = '*.swf';
	$(targetID).uploadify({
		'uploader'       : '/cp_admin/contents/uploadify.swf',
		'script'         : '/cp_admin/contents/uploadify.asp',
		'cancelImg'      : '/cp_admin/img/3_btn_del.gif',
		'folder'         : '/upload',
		'queueID'        : 'loadingImgArea',
		'wmode'          : 'transparent',
		'auto'           : true,
		'multi'          : false,
		'width'          : 110,
		'height'         : 28,
		//'buttonImg'      : '/_images/browse-files.png',
		'buttonText'     : 'Add ' + imgdvn,
		//'hideButton'     : true,
		'fileDesc'       : ext,
		'fileExt'        : ext,
		'scriptData'     : {'partyNo':partyNo, 'fdvn':fdvn, 'swfh':swfh, 'swfw':swfw},
		'onSelect': function(e, q, f) {
            if (imgdvn == 'swf') {
                var ret = prompt("플래시 파일의 width 값을 넣어주세요~");
                if (!isNaN(ret)) swfw = ret;
                ret = prompt("플래시 파일의 height 값을 넣어주세요~");
                if (!isNaN(ret)) swfh = ret;
            }
			showLoading(posX, posY, 'NoImg');
		},
		'onComplete': function(e, q, f, r, d) {
			file = f.name;
			response = r;
            if (imgdvn == 'swf') {
                response = response.replace("|swfh|", swfh);
                response = response.replace("|swfw|", swfw);
            }
		},
		'onCancel': function() {
			hideLoading();
		},
		'onAllComplete': function(e, d) {
			if (d.errors == 0) {
				//window.location = '이동페이지';
				if (cntdvn=="one")
				{
					$(targetID + '_orgnm').html("<div><span class='file_no dsnone'>" + response + "|</span>" + file + "</div>");
					$(targetID + '_savenm').val(response);
				}
				else
				{
					$(targetID + '_orgnm').append("<div><span class='file_no dsnone'>" + response + "|</span><img src='/cp_admin/img/3_btn_del.gif' width=12 class='hand' onclick='imageDel(\"" + response + "\", this);'>" + file + "</div>");
					//$(targetID + '_savenm').val(response);
				}
			} else {
				// error handling
				alert("업로드 중 에러가 발생했습니다.");
			}
			hideLoading();
		}
	});
}

// 컴마 붙이기
function js_AddComma(str){
	if (str)
	{
		str = str.toString().replaceAll(',', '');
		var strlen = str.length;
		var tmporg = '';
		for (i=0; i<strlen; i++)
		{
			tmporg += str.substr(i, 1);
			if ((strlen-i)%3 == 1 && i<strlen-1) tmporg += ',';
		}
		str = tmporg;
	}
	return str;
}

function js_NewDate(datetime)
{

	if (datetime == null)
	{
		return false;
	}
	datetime = datetime.replace(/\s/g,"");
	if (datetime.match('오후'))
	{
		plustime = 12;
		date = datetime.split('오후')[0];
		time = datetime.split('오후')[1];
	}
	else if(datetime.match('오전'))
	{
		plustime = 0;
		date = datetime.split('오전')[0];
		time = datetime.split('오전')[1];
	}else{
		return false;
	}
	var newdatetemp = new Date(date.split('-')[0],date.split('-')[1],date.split('-')[2],Number(time.split(':')[0])+plustime,time.split(':')[1],time.split(':')[2]);
	newdate = newdatetemp.setMonth(newdatetemp.getMonth()-1);

	return newdate;
}

function js_GetCategoryFolder(cat)
{
	var ret = "";
	if (cat)
	{
		switch (cat)
		{
			case "CWEB" : ret = "/web/"; break;
			case "CFLA" : ret = "/flash/"; break;
			case "CILL" : ret = "/illust/"; break;
			case "CPNT" : ret = "/painter/"; break;
			case "CGRP" : ret = "/graphic/"; break;
			case "CPHT" : ret = "/photo/"; break;
			case "CPPT" : ret = "/ppt/"; break;
			case "CSFT" : ret = "/software/"; break;
		}
	}
	return ret;
}

function js_addCart(tp){
	if(!getRadioValue($(".useDvn"))){
		alert("콘텐츠를 선택해주세요");
		return false;
	}

	$.post("/myzone/cart_add_ajax.asp"
		, {
			"goodsno"			: $(".useDvn:checked").val() // 상품 번호
			, "cartcode"		: tp
			, "sepLicenseno"	: ""
			, "sepUse"			: ""
			, "sepProduct"		: ""
			, "sepPrice"		: ""
			, "sepArea"			: ""
			, "sepHost"			: ""
		}, function(res){
			if (res != "OK"){
				alert(res);
			}
			else {
				//location.href = "/myzone/"+((tp=="CDCT")?"order_step1":"cart")+".asp?cartcode=" + tp;
				if (tp=="CDCT"){
					location.href = "/myzone/order_step1.asp?cartcode=" + tp;
				}
				else{
					alert("장바구니에 담겼습니다");
				}
			}
		}
	);
}

function js_addCartLic(tp){
	//alert($("#ori_goodsno").val());return false;
	if ($("#use_1>option:selected").val()==""){
		alert("용도분류를 선택하세요"); $("#use_1").focus(); return false;
	}
	if ($("#use_2>option:selected").val()==""){
		alert("용도분류를 선택하세요"); $("#use_2").focus(); return false;
	}
	if ($("#use_3>option:selected").val()==""){
		alert("용도분류를 선택하세요"); $("#use_3").focus(); return false;
	}
	if ($("#use_val").val()==""){
		alert("용도분류를 입력하세요"); $("#use_val").focus(); return false;
	}
	if ($("#use_area>option:selected").val()==""){
		alert("사용지역을 선택하세요"); $("#use_area").focus(); return false;
	}
	if ($("#use_product").val()==""){
		alert("사용 제품명을 입력하세요"); $("#use_product").focus(); return false;
	}
	if ($("#use_host").val()==""){
		alert("최종사용자를 입력하세요"); $("#use_host").focus(); return false;
	}

	$.post("/myzone/cart_add_ajax.asp"
		, {
			"goodsno"			: $("#ori_goodsno").val() // 콘텐츠 번호
			, "cartcode"		: tp
			, "sepLicenseno"	: $("#use_3>option:selected").val()
			, "sepUse"			: $("#use_val").val()
			, "sepProduct"		: $("#use_product").val()
			, "sepPrice"		: js_SetSeparatePrice($("#use_3>option:selected"))
			, "sepArea"			: $("#use_area").val()
			, "sepHost"			: $("#use_host").val()
		}, function(res){
			if (res != "OK"){
				alert(res);
			}
			else {
				location.href = "/myzone/"+((tp=="CDCT")?"order_step1":"cart")+".asp?cartcode=" + tp;
			}
		}
	);
}

function js_ShowImage(obj)
{
	if (!isInstr($(obj).attr("src"), "noimg_"))
	{
		var tmp = $(obj).attr("src").replace("list_84.jpg", "list_170.jpg");
		$("#showViewThumImg img").attr("src", tmp);
		var pX =$(obj).offset().left + $(obj).width();
		var pY =$(obj).offset().top - $(obj).height()/2; // - $("#showViewThumImg").height();
		$("#showViewThumImg").appendTo("body").css({"top":pY, "left":pX}).show();
	}
}

function js_HideImage()
{
	$("#showViewThumImg").hide();
}

function js_ViewSpecialLicense(gt)
{
	var idx = $("img." + gt + "licS").data("lic").lno;
	new_win("/web/special_lic_view.asp?idx=" + idx, "_blank", 800, 390, "yes");
}

function js_ViewLicense(obj)
{
	if ($(obj).attr("seperate")=="Y")
		new_win("/cp_admin/contents/pop_license_separate_view.asp?idx=" + $(obj).attr("lidx"), "_blank", 800, 390, "yes");
	else
		new_win("/cp_admin/contents/pop_license_view.asp?idx=" + $(obj).attr("idx"), "_blank", 800, 390, "yes");
}

function js_AMPM(date){
	return date.toString().replace("오후", '<img src="/img/ic_pm.gif" width="18" height="11" align="absmiddle" />').replace("오전", '<img src="/img/ic_am.gif" width="18" height="11" align="absmiddle" />');
}

// 라이센스 관련
function js_GetLicenseUserList(ogidx, cpno, gtype)
{
	$.getJSON("/web/1cut_view_act.asp"
		, {
			"mode" : "license"
			,"gidx" : ogidx
			,"partyNo" : cpno
		}
		, function (res)
		{
			var tmp = "";
			$.each(res.LICENSE, function (i, item)
			{
				if (item.separate_yn=="Y") // 별도
				{
					tmp = "img." + gtype + "licS";
					$(tmp).data("lic",{lno: item.license_no} );
				}
				else
				{
					tmp = "img." + gtype + "licB";
					$(tmp).data("lic",{lnm: item.license_name, lno: item.license_no, ldesc: (item.description + item.description2).replaceAll("\n","<br>")} );
				}
			});
		}
	);
}

function js_ViewUserLicense(gtype, ldvn, obj)
{
	var tmp = "";
	var idx = "";
	if($("#licArea").length>0) {
		$("#licArea").remove();
		return;
	}
	if (gtype=="1cut")
	{
		if (ldvn == "B")
		{
			$("#popupArea").prepend("<div id='licArea' style='position:absolute; top: 50px; left: 100px; z-index: 20000;'></div>");

			$.post("/web/basic_lic.asp",{},function(res){
				$("#licArea").html(res);
				if ($("img.1cutlicB").data("lic")) $("#licArea").find("div").html($("img.1cutlicB").data("lic").ldesc);
			});
		}
		else
		{
			$("#popupArea").prepend("<div id='licArea' style='position:absolute; top: 50px; left: 340px; z-index: 20000;'></div>");

			idx = ($("img." + gtype + "licS").data("lic")) ? $("img." + gtype + "licS").data("lic").lno : 0;
			$.post("/web/special_lic.asp",{"gtype": gtype, "idx": idx},function(res){
				$("#licArea").html(res);
			});
		}
	}
	else
	{
		if (ldvn == "B")
		{
			$("body").prepend("<div id='licArea' style='position:absolute; top: 360px; left: " + parseInt(($(document).width()/2)-200) + "px; z-index: 20000;'></div>");

			$.post("/web/basic_lic.asp",{},function(res){
				$("#licArea").html(res);
				if ($("img.cdlicB").data("lic")) $("#licArea").find("div").html($("img.cdlicB").data("lic").ldesc);
			});
		}
		else
		{
			$("body").prepend("<div id='licArea' style='position:absolute; top: 360px; left: " + parseInt(($(document).width()/2)+30) + "px; z-index: 20000;'></div>");

			idx = ($("img." + gtype + "licS").data("lic")) ? $("img." + gtype + "licS").data("lic").lno : 0;
			$.post("/web/special_lic.asp",{"gtype": gtype, "idx": idx},function(res){
				$("#licArea").html(res);
			});
		}
	}
}

function js_GetGoodsType(goods_tp, dist_tp){
	var tmpType;

	switch (goods_tp){
		case "GTCD":
			if (dist_tp == "DCPD" || dist_tp == "DFGD")
				tmpType = "RCD";
			else
				tmpType = "VCD";
			break;
		case "GTDN":	tmpType = "DN"; break;
		case "GTCS":	tmpType = "CS"; break;
		case "GTEV":	tmpType = "EVT"; break;
		case "GTLC":	tmpType = "LIC"; break;
		case "GTSN":	tmpType = "PD"; break;
		default:		tmpType = "NONE";
	}

	return tmpType;
}

function js_GetStateImage(state_cd){
	var tmpImg = "<img src=\"/myzone/img/3_btn_order_";

	switch (state_cd){
		case "OPRE":		tmpImg = tmpImg + "ready"; break;
		case "OWAT": case "OCMP":	tmpImg = tmpImg + "ok"; break;
		case "OCCL":		tmpImg = tmpImg + "cancel"; break;
	}

	tmpImg = tmpImg + ".gif\" />";

	return tmpImg;
}

function js_MakeLinkable(title, url){
	var tmpA;
	tmpA = "<a href=\""+url+"\" onfocus=\"this.blur();\">"+title+"</a>";
	return tmpA;
}

function js_OpenDetail(no, typ){
	var url = "/myzone/order_detail.asp";

	if (typ == "TORD")
		url = "/myzone/cash_detail.asp";

	$.post(url
		, {
			orderno	: no
		}
		, function(data){
			$("#orderDetail").html(data);
		}
	);
}

function js_IsNull(tmp, tg)
{
	return (tmp) ? tmp : tg;
}

function js_CouponDown(coupon)
{
	alert('쿠폰다운로드예정('+coupon+')');
}

function js_changeBannerAndNumber(areaId, delaytime, idx)
{
	var $title = $(areaId + " .title img");
	var $target = $(areaId + " .target div");
	idx = (idx>$target.length-1) ? 0 : idx;
	$title.each(function(){
		$(this).attr("src", $(this).attr("src").replace("_over", ""))
	});
	$title.eq(idx).attr("src", $title.eq(idx).attr("src").replace(".", "_over."));

	$target.hide().eq(idx).show().animate({ opacity: 1 }, delaytime, function()
	{
		js_changeBannerAndNumber(areaId, delaytime, parseInt(idx)+1);
	});
}

function js_RandomBanner(randomid)
{
	$(randomid + " > div").eq((Math.ceil(Math.random()*$(randomid + " > div").length))-1).removeClass("dsnone")
}

//뷰페이지에서 젤 비싼가격 표기용(라이센스에서 사용) cd : 0, 1cut : 1
var maxPrice = 0;
var maxPricecd = 0;
var maxPrice1cut = 0;
function js_SetMaxPrice(prc, gtype){
	prc = parseInt(prc);
	if (parseInt(gtype)==1) {
		if (maxPrice1cut < prc) maxPrice1cut = prc;
	} else {
		if (maxPricecd < prc) maxPricecd = prc;
	}
	//if($.browser.mozilla) console.log(maxPrice + ":" + maxPrice1cut + ":" + maxPricecd);
}

function js_SetSeparatePrice(obj){
	var tmpValue = $(obj).attr("price");

	if(isInstr(tmpValue, "배")){
		tmpValue = maxPrice * parseInt(tmpValue.replace("배",""));
	}
	else if(isInstr(tmpValue, "원")){
		tmpValue = parseInt(tmpValue.replace("원",""));
	}
	else if (tmpValue == "가격문의")
	{
		tmpValue = "";
	}

	return tmpValue;
}

function js_noInquiry(){
	alert("취소된 주문의 콘텐츠는 문의하실 수 없습니다");
}

function js_SetDocTitle(str)
{
	if (str) $(document).attr("title", str);
}

// 입력 영역 글자 (Byte) 제한 위해..
function js_CheckBytes(obj, maxcnt)
{
	var tmp = js_GetStringLength(obj, maxcnt);
	if (tmp>maxcnt) {
		alert(maxcnt + "Bytes 까지 등록 가능합니다.");
	} else {
		$(".txtBCnt").text(tmp);
	}
}

function js_GetStringLength (obj, mxcnt)
{
	var str = $(obj).val();
	var strLength = 0;
	for (var i = 0; i < str.length; i++)
	{
		(str.charCodeAt(i) > 255) ? strLength+=2 : strLength++;

		if (strLength>mxcnt) {
			$(obj).blur().val(str.substr(0,i));
			return strLength;
		}
	}
	return strLength;
}

function js_AddFavorite()
{
	if (document.all)
		window.external.AddFavorite(location.href,$(document).attr("title"));
	else
		window.sidebar.addPanel($(document).attr("title"), location.href, "");
}

function js_SetPosition(t, d, w)
{
	//if (d=="top") w = parseInt((parseInt($(document).height())/2) + w);
	if (d=="left") w = parseInt((parseInt($(window).width())/2) + w);
	$(t).css(d, w).show();
}

// 샘플 이미지 넣기..
function js_GetSampleList(dvn, gidx, cddvn)
{
	$.getJSON("/web/1cut_view_act.asp"
		, {
			"mode" : "sample"
			,"gidx" : gidx
			,"dvn" : dvn
		}
		, function (res)
		{
			var tmp = "";
			var tmpimgsrc = "";
			$.each(res.SAMPLE, function (i, item)
			{
				tmpimgsrc = (item.file_server_url) ? item.file_server_url + item.file_server_nickname + "/Thumbnail/" + item.cp_no + "/Sample/" + (parseInt(item.original_goods_no/100)+1) + "/" + item.original_goods_no + "/" + item.file_name : "";
//console.log(tmpimgsrc);
				if (item.file_code=="FFLS") // 플래시
				{
					var ws = " ";
					var hs = " ";
					if (parseInt(item.ws) > 0){
						ws = " width='" + item.ws + "'";
					}
					if (parseInt(item.hs) > 0){
						hs = " height='" + item.hs + "'";
					}

					tmp = "<div><embed src='" + tmpimgsrc + "' " + ws + hs + " /></div>";
				}
				else
				{
					tmp = "<div><img src='" + tmpimgsrc + "'></div>";
				}
				(cddvn=="CD")?$("#contentsSampleCD").append(tmp):$("#contentsSample").append(tmp);
			});
			// 샘플이미지 크기 조정
			(cddvn=="CD")?js_SetLoadImage("#contentsSampleCD img", 700):js_SetLoadImage("#contentsSample img", 740);
		}
	);
}

// 이미지 크기 제어
function js_SetLoadImage(tg, wd)
{
	$(tg).each(function(){
		$(this).load(function(){
			if ($(this).width()>wd) $(this).width(wd);
		});
	});
}

function js_ChangePx2Cm(dpi, sz, tg)
{
	if (!isNaN(dpi))
	{
		if ($("." + tg).length>0)
		{
			var $tmp = $("." + tg);
			$tmp.eq(0).val(sz.split("x")[0].trim());
			$tmp.eq(1).val(sz.split("x")[1].trim());
			$tmp.eq(2).val(dpi);
			js_calPx2Cm(tg);
		}
	}
	else
	{
		if ($("." + tg))
		{
			var $tmp = $("." + tg);
			$tmp.eq(0).val('');
			$tmp.eq(1).val('');
			$tmp.eq(2).val('');
		}
	}
}

// 자기 페이지로 로그인 후 돌아오기
function js_MoveLogin(gourl)
{
	if (!gourl) gourl = location.href;
	$("body").append("<form name='loginFrm' method='post' action='/member/login.asp'><input type='hidden' name='returnUrl' value='" + gourl + "'></form>");
	document.loginFrm.submit();
}

// 1cut 상세 보기
function js_Show1CutView()
{
	if (location.hash)
	{
		var tmpPidx = location.hash.substr(1,20);
		if (isInstr(tmpPidx, "gno="))
		{
			tmpPidx = tmpPidx.replace("gno=", "");
			js_view1Cut(tmpPidx.substr(4,16), tmpPidx.substr(0,4));
		}
	}
}

// 신규순 리스트로 이동
function js_MoveNewList(me)
{
	$.cookie("orderby", "new", {path: "/"});
	location.href = $(me).attr("href");
}

// 기획전 관련
function js_SetEventPrice(gidx)
{
	$.getJSON("/web/1cut_view_act.asp",{
			"mode" : "favorInfo"
			,"gidx" : gidx
        },function(res){
            var flag = true;
            $.each(res.FAVOR, function (i, item)
			{
                if (item.cmethod == '%' && flag==true)
                {
                    $(".sellingprice").each(function(){
                        var tmpprice = parseInt(removeComma($(this).text()));
                        tmpprice = tmpprice - (tmpprice*(parseInt(item.cvalue)/100));
                        $(this).text(js_AddComma(tmpprice));
                    });
                    flag = false;
                }
                if (item.cmethod == '-' && flag==true)
                {
                    $(".sellingprice").each(function(){
                        var tmpprice = parseInt(removeComma($(this).text()));
                        tmpprice = tmpprice - (parseInt(item.cvalue));
                        $(this).text(js_AddComma(tmpprice));
                    });
                    flag = false;
                }
            });
		}
	);
}

var flag2 = true;
var tmpcnt = 0;
function js_SetEventPrice2(gidx, idx, cartcd)
{
	$.getJSON("/web/1cut_view_act.asp",{
			"mode" : "favorInfo"
			,"gidx" : gidx
			,"cartcd" : (cartcd)?cartcd:"CTCT"
        },function(res){
            var flag = true;
            $.each(res.FAVOR, function (i, item)
			{
                if (item.cmethod == '%' && flag==true)
                {
                    $(".sellingprice").eq(idx).each(function(){
                        var tmpprice = parseInt(removeComma($(this).text()));
                        tmpprice = tmpprice - (tmpprice*(parseInt(item.cvalue)/100));
                        $(this).text(js_AddComma(tmpprice));
                    });
                    flag = false;
                }
                if (item.cmethod == '-' && flag==true)
                {
                    $(".sellingprice").eq(idx).each(function(){
                        var tmpprice = parseInt(removeComma($(this).text()));
                        tmpprice = tmpprice - (parseInt(item.cvalue));
                        $(this).text(js_AddComma(tmpprice));
                    });
                    flag = false;
                }
                if (item.cmethod == 'C')
                {
					if($(".od" + item.cvalue).length==0 && isInstr(location.href, 'order_step2.asp') && flag2==true) {
                        $.post("/web/1cut_view_act.asp", {
                                "mode" : "preOrder"
                                ,"gidx" : gidx
                                ,"goodsno" : item.cvalue
                                ,"orderno" : cartcd
                            }, function(res){
								if (res == '-9')
								{
									flag2 = false;
								}
								else
								{
									flag2 = false;
									location.reload();
								}
                            }
                        );
                    }
                }
            });
            tmpcnt++;
            if (tmpcnt==$(".sellingprice").length) js_AmountTotalCnt();
		}
	);
}

function js_AmountTotalCnt()
{
    var tmpsum = 0;
    $(".sellingprice").each(function(){
        var tmpprice = parseInt(removeComma($(this).text()));
        var couponprice = 0;
        var cashvalue  = 0;
        if ($(".saleCoupon").length>0) couponprice = ($(".saleCoupon").text()=="")?0:parseInt(removeComma($(".saleCoupon").text()));
        if ($(".useCashValue").length>0) cashvalue  = ($(".useCashValue").text()=="")?0:parseInt(removeComma($(".useCashValue").text()));
        tmpsum = tmpsum + tmpprice;
        if ($("#cartTotal").length>0) $("#cartTotal").text(js_AddComma(tmpsum));
        if ($("#sumFixed2").length>0) $("#sumFixed2").text(js_AddComma(tmpsum));
        if ($(".fixamount").length>0) $(".fixamount").text(js_AddComma(tmpsum));
        if ($(".realamount").length>0) $(".realamount").text(js_AddComma(tmpsum-couponprice-cashvalue));
        if ($("#amount").length>0) $("#amount").val(tmpsum);
        if ($(":hidden[name=LGD_AMOUNT]").length>0) $(":hidden[name=LGD_AMOUNT]").val(tmpsum-couponprice-cashvalue);
        if ($("input.sumFixed").length>0) $("input.sumFixed").val(tmpsum);
        sumCart = tmpsum;
    });
}
//문자열 byte 체크
function checkBytes(expression)
{
	var VLength=0;
	var temp = expression;
	var EscTemp;
	if(temp!="" & temp !=null)
	{
		for(var i=0;i<temp.length;i++)
		{
		if (temp.charAt(i)!=escape(temp.charAt(i)))
		{
		 EscTemp=escape(temp.charAt(i));
		 if (EscTemp.length>=6)
		  VLength+=2;
		 else
		  VLength+=1;
	}
	else
	 VLength+=1;
	}
}
return VLength;
}


// 검색하기
function js_listSearch(str)
{
	str = (str)?str:"frmSearch"; // 기본 검색 폼 이름
	$("form[name=" + str + "]").submit();
}

// 페이지 이동
function js_goPage(vlu, tg)
{
	
	var trgt = (tg)?tg:"#page";
	$(trgt).val(vlu);
	js_listSearch();
}

// 검색도움말 레이어띄우기
function searchHelp(){
	var docId = document.getElementById('searchHelp').style.display;
	if(docId == 'block') {
		document.getElementById('searchHelp').style.display = 'none';
	}else{
		document.getElementById('searchHelp').style.display = 'block';
	}
}

//검색
function js_dsearch(){
	if ($("#skwd").val() == "")
	{
		alert("검색어를 입력해주세요.");
		return false;
	}
}