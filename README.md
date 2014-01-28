form_check
==========
 + checkValidForm 체크 후 각 페이지의 checkSubmit 으로 각 페이지 조절
 + class 명을 기준으로 체크
 + checkBtn input 버튼 클릭시 해당 폼을 체크 ( button 태그 사용시 FF에서 오류 발생 )
 + required 필수 항목
 + numeric 숫자 항목 [ 직접 호출시 : checkOnlyNum($this) ]
 + numStr 숫자를 금액 단위로 노출 [ 직접 호출시 : checkNumFormat(this.name), '#' + form.name + 'Str' 에 노출 ]
 + title 프로퍼티를 경고창 이름으로 인식
 + emailType 이메일 타입 체크 
 + 체크박스 일 경우 mincheck='2' 어트리뷰트로 최소 개수 체크
 + 체크박스 일 경우 maxcheck='2' 어트리뷰트로 최대 개수 체크
 + class 에 exeFunction 있을 경우 함수로 간주하고 value 실행 ( 계속 진행이 필요할 경우 true 리턴 시킬것 )
 + text일 경우 minlength='2' 최소 문자수
 + text일 경우 maxlength='2' 최대 문자수
 + mobileType, telType, faxType 핸드폰, 전화, 팩스 타입 체크 
