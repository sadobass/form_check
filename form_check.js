/**
 * @author Shin HyunSub
 * @version 0.3.6
 * @make : 2008/06/24
 * @modify 
 * -. 2008/06/26 : 폼이 여러개 일 경우 해당 폼만 체크 기능 추가 
 * -. 2008/06/27 : 폼 포커스 기능 강화, 이메일 체크 기능 추가
 * -. 2008/07/03 : 체크박스 기능 추가, 금액 단위 기능 추가
 * -. 2008/07/08 : return 후 각페이지 checkSubmit 에서 제어되도록 수정
 * -. 2008/12/09 : select, textarea 체크되도록 수정
 * -. 2009/06/03 : 체크 항크 필터로 호출, 체크 항목 최소, 최대 추가
 * -. 2009/07/02 : 외부 함수 실행시키기
 * -. 2009/07/07 : text minlength 체크 추가
 * -. 2009/09/07 : 같은 이름이 있을 경우 값 같아지는 문제 해결
 * -. 2009/09/18 : 이메일 체크 변경 및 모바일, 전화, 팩스 타입 추가, 주민번호, 전화 맥스값 다음으로 넘어가기(다음 넘어가기 파폭에서 작동 안함 ㅜㅜ)
 * -. 2010/11/09 : 비밀번호 재확인 기능 추가 
 * -. 2011/01/17 : 이메일 정규식 변경 ( 아이디 마지막에서 _ 들어가도록, 모메인 마지막 6글자까지..
 * @use 
 * -. checkValidForm 체크 후 각 페이지의 checkSubmit 으로 각 페이지 조절
 * -. class 명을 기준으로 체크
 * -. checkBtn input 버튼 클릭시 해당 폼을 체크 ( button 태그 사용시 FF에서 오류 발생 )
 * -. required 필수 항목
 * -. numeric 숫자 항목 [ 직접 호출시 : checkOnlyNum($this) ]
 * -. numStr 숫자를 금액 단위로 노출 [ 직접 호출시 : checkNumFormat(this.name), '#' + form.name + 'Str' 에 노출 ]
 * -. title 프로퍼티를 경고창 이름으로 인식
 * -. emailType 이메일 타입 체크 
 * -. 체크박스 일 경우 mincheck='2' 어트리뷰트로 최소 개수 체크
 * -. 체크박스 일 경우 maxcheck='2' 어트리뷰트로 최대 개수 체크
 * -. class 에 exeFunction 있을 경우 함수로 간주하고 value 실행 ( 계속 진행이 필요할 경우 true 리턴 시킬것 )
 * -. text일 경우 minlength='2' 최소 문자수
 * -. text일 경우 maxlength='2' 최대 문자수
 * -. mobileType, telType, faxType 핸드폰, 전화, 팩스 타입 체크 
 */

$(document).ready(function(){
	$('input.checkBtn').live("click", function(){
        var rt = checkValidForm(this.form.name);
		if (rt)
        {
            checkSubmit();
        }
	});

	// maxlength 다음으로 넘어 가기..
	$(":text, :password").keyup(function(event){
		if (event.keyCode == '13') {event.preventDefault();};
		if ($(this).val().length==$(this).attr("maxlength")) $(this).next().focus();
	});
	
	$(".numeric").keyup(function(){ checkOnlyNum($(this)); });
});

function checkValidForm(frmName){
    var chkRet = true;
	var chkColor = '#EEFFEE';
	var $tarObj = $('form[name="' + frmName + '"] *').filter("input, select, textarea");     
	var tmpcnt = $tarObj.length;
	$tarObj.css('backgroundColor','');
	for (i=0; i<tmpcnt; i++)
	{
		if (!checkValue($tarObj.eq(i))) 
		{
			if ($tarObj.eq(i).attr('type')!='radio' && $tarObj.eq(i).attr('type')!='checkbox')
			{
				$tarObj.eq(i).css('backgroundColor', chkColor);
			}
			else
			{
				$tarObj.filter('[name="' + $tarObj.eq(i).attr('name') + '"]').css('backgroundColor', chkColor);
			}			
			chkRet = false;
            break;
		}
	}
    return chkRet;
}

function checkValue($jqObj){
	var ret = true;
	var tType = $jqObj.attr('type');
	var tClass = $jqObj.attr('class');
	var tValue = $jqObj.attr('value');
	var tName = $jqObj.attr('name');
	if (tType == 'text' || tType == 'password' || tType == 'file' || $jqObj.get(0).tagName == 'SELECT')
	{
		if ($jqObj.get(0).tagName == 'SELECT') 
		{
			tValue = ($jqObj.find("option:selected").val()) ? $jqObj.find("option:selected").val() : "";
		}

		if (tValue.replace(/\s/g,"") == '') // 공백, 탭, 폼피드 등의 공백을 찾습니다
		{
			if ($jqObj.hasClass('required'))
			{
				ret = err_msg_return($jqObj, '');
			}
		}
		else
		{
			if (tType == "text" || tType == "password")
			{
				ret = ret & checkLength($jqObj);
			}

			if ($jqObj.hasClass('numeric'))
			{
				ret = ret & checkOnlyNum($jqObj);
			}
			
			if ($jqObj.hasClass('numStr'))
			{
				checkNumFormat(tName);
			}
			
			if ($jqObj.hasClass('emailType'))
			{
				ret = ret & checkStyleType(tValue, 0);
			}
			
			if ($jqObj.hasClass('mobileType'))
			{
				ret = ret & checkStyleType(tValue, 1);
			}
			
			if ($jqObj.hasClass('telType'))
			{
				ret = ret & checkStyleType(tValue, 2);
			}
			
			if ($jqObj.hasClass('faxType'))
			{
				ret = ret & checkStyleType(tValue, 3);
			}

			if ($jqObj.hasClass('exeFunction'))
			{
				ret = ret & eval(tValue);
			}			
		}
	}
	else if (tType == 'radio' || tType == 'checkbox') 
	{
		ret = checkRadio(tName);
	}
	else if ($jqObj.get(0).tagName == 'TEXTAREA' && $jqObj.hasClass('required')) 
	{
		var tmpTAtxt = "";
		if ($jqObj.hasClass('.fck')==true)
		{
			tmpTAtxt = $('textarea[name=' + $jqObj.attr('name') + ']').html($.fck.content($jqObj.attr('name'))).text();
		}
		else
		{
			tmpTAtxt = tValue;
		}
		if (tmpTAtxt=='')
		{
			ret = err_msg_return($jqObj, '');
		}
	}
	return ret;
}

function checkRadio(str){
	var ret = true;
	var $tObj = $('input[name=' + str + ']');
	var tmpMinCnt = 0;
	var tmpMaxCnt = 1;
	var tmptxt = '';

	if ($tObj.hasClass('required')) tmpMinCnt = 1;
    if ($tObj.attr('type')=='checkbox')
    {
		if ($tObj.attr('mincheck')>1) tmpMinCnt = $tObj.attr('mincheck');
        tmpMaxCnt = $tObj.attr('maxcheck');
		tmptxt = '(' + tmpMinCnt + '~' + tmpMaxCnt + '개)';
		if (tmpMinCnt==tmpMaxCnt)
			tmptxt = '(' + tmpMaxCnt + '개)';
		else if (tmpMinCnt > tmpMaxCnt)
		{
			tmptxt = "";
			tmpMaxCnt = 1;
		}
    }
	
	if ($tObj.filter(":checked").length < tmpMinCnt || $tObj.filter(":checked").length > tmpMaxCnt)
	{
		var $Obj = $tObj.eq(0);
		ret = err_msg_return($Obj, tmptxt);
	}
	return ret;
}

function checkOnlyNum($tObj){
	var ret = true;
	//var $tObj = $('input[name=' + str + ']');
	tmp = $tObj.val();
	if (tmp!='')
	{
		tmp = tmp.trim();
		tmp = tmp.replaceAll(',', '');
		if (isNaN(tmp) || tmp=='')
		{
			alert('숫자만 입력 가능합니다.');
			$tObj.val('');			
			$tObj.focus();
			ret = false;
		}
		else
		{
			$tObj.attr('value',tmp);
		}
	}	
	
	return ret;
}

function checkInstr(oStr, tStr){
	if (oStr.indexOf(tStr, 0)>-1)
		return true;
	else
		return false;
}

function checkNumFormat(str1){		
	tmpstr = '';
	tmporg = '';
	kk = 0;
	var $tObj = $('input[name=' + str1 + ']');
	sObj = $('#' + str1 + 'Str');
	str = $tObj.val();
	tLen = str.length;	
	for (k=0; k<tLen; k++)
	{
		tmpstr += str.substr(k, 1);
		tmporg += str.substr(k, 1);
		kk++;
		
		if (k == 0 && tmporg == 0) 
		{
			$tObj.val('');
			sObj.html('');
			return false;
		}
		else
		{
			tmpstr += checkUnitStr(tLen-k, str);
			
			if (str.substr(k, 1)>0)
			{
				switch ((tLen-k)%4)
				{
					case 3: tmpstr += '백'; break;
					case 2: tmpstr += '십'; break;
					case 0: tmpstr += '천'; break;
				}
			}
		
			tmpstr = tmpstr.replaceAll('1', '일');
			tmpstr = tmpstr.replaceAll('2', '이');
			tmpstr = tmpstr.replaceAll('3', '삼');
			tmpstr = tmpstr.replaceAll('4', '사');
			tmpstr = tmpstr.replaceAll('5', '오');
			tmpstr = tmpstr.replaceAll('6', '육');
			tmpstr = tmpstr.replaceAll('7', '칠');
			tmpstr = tmpstr.replaceAll('8', '팔');
			tmpstr = tmpstr.replaceAll('9', '구');
			tmpstr = tmpstr.replaceAll('0', '');
			
			if ((tLen-k)%3 == 1 && k < tLen-1) tmporg += ',';
		}
	}
	$tObj.val(tmporg);
	sObj.html(tmpstr + ' 원');
	if (tmporg.length==0) sObj.html(''); 
}

function checkUnitStr(dvn, str){
	var tmps = '';
	if (dvn == 5) {tmps = '만 ';}
	else if (dvn == 9) {tmps = '억 ';}
	else if (dvn == 13) {tmps = '조 ';}
	if (str.length > (dvn+3)) 
	{
		if (str.substr((str.length-(dvn+3)), 4) == '0000') { tmps = '';}
	}
	return tmps;
}

function checkComma(obj){
	var str = obj.value;
	if (str)
	{
		str = addComma(str);
	}
	obj.value = str; 
}

function addComma(str){
	if (str)
	{
		str = removeComma(str);		
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

function removeComma(str){
	if (str) 
	{
		return str.replaceAll(',', '');
	}  
}

function checkStyleType(valstr, typedvn){
	/** 이메일, 핸드폰, 일반 전화 정규식
	/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	/^\d{3}-\d{3,4}-\d{4}$/;
	/^\d{2,4}-\d{3,4}-\d{4}$/;
	**/
	var dvnTxt = new Array("이메일", "핸드폰", "전화", "팩스");
	var strChk = new Array(/^[a-zA-Z0-9+_.-]*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,6}$/i, /^\d{3}-\d{3,4}-\d{4}$/, /^\d{2,4}-\d{3,4}-\d{4}$/, /^\d{2,4}-\d{3,4}-\d{4}$/);
	var ret = true;
	
	ret = strChk[typedvn].test(valstr);
	
	if (!ret)
	{
		alert(dvnTxt[typedvn] + ' 형식에 맞지 않습니다.');
		$('input[value=' + valstr +']').focus();			
	}
	
	return ret;
}

function checkLength($jqObj){
	var ret = true;
	
	var minlength = $jqObj.attr('minlength');
	var maxlength = $jqObj.attr('maxlength');
	//alert($jqObj.attr('name') +"::" +  minlength +"::" +  maxlength + "::" + $jqObj.val().length);
	if ($jqObj.val().length < minlength)
	{
		if (minlength ==  maxlength)
		{
			alert($jqObj.attr('title') + ' 항목은 ' + minlength + " 글자를 입력하셔야 합니다.");
		}
		else if(maxlength <= 0)
		{
			alert($jqObj.attr('title') + ' 항목은 ' + minlength + "이상 글자를 입력하셔야 합니다.");
		}
		else
		{
			alert($jqObj.attr('title') + ' 항목은 ' + minlength + " ~ " + maxlength + " 글자를 입력하셔야 합니다.");
		}

		
		$jqObj.focus();
		ret = false;
	}
	else {
		if ($jqObj.attr("type")=="password") {
			if ($(".fcpwd").length=="2" && $(".fcpwd:eq(0)").val().length==$(".fcpwd:eq(1)").val().length && $(".fcpwd:eq(0)").val()!=$(".fcpwd:eq(1)").val()){
				alert("비밀번호가 일치하지 않습니다.");
	
				$(".fcpwd:eq(1)").focus();
				ret = false;			
			}
		}
	}
	return ret;
}

function err_msg_return($Obj, tmp)
{
	if ($Obj.hasClass('onlyTitle'))
	{
		alert($Obj.attr('title'));
	}else{
		alert($Obj.attr('title') + ' 항목' + tmp + '을 체크해 주세요.');
	}    
	$Obj.focus();
	return false;
}

/** global.js 중복 **/
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
}/**/