window.onload=function(){
  /*日期调用*/
  YYYYMMDDstart();
  /* 登陆  邮箱手机声明*/
  var phone=document.getElementById('phone');
  var email=document.getElementById('email');

  var loginChoose=document.getElementById('loginChoose');
  var line1=loginChoose.getElementsByClassName("line1");
  var line2=loginChoose.getElementsByClassName("line2");
  var phoneLogin=document.getElementById('phoneLogin');
  var emailLogin=document.getElementById('emailLogin');
  /* 注册  邮箱手机声明*/
  var phoneR=document.getElementById('phoneR');
  var emailR=document.getElementById('emailR');
  var registerChoose=document.getElementById('registerChoose');
  var phoneRegister=document.getElementById('phoneRegister');
  var emailRegister=document.getElementById('emailRegister');
  var line3=registerChoose.getElementsByClassName("line1");
  var line4=registerChoose.getElementsByClassName("line2");

  /* 登陆注册 声明*/
  var chooseCard1=document.getElementById('chooseCard1');
  var chooseCard2=document.getElementById('chooseCard2');
  var switch1=chooseCard1.getElementsByTagName("span");
  var switch2=chooseCard2.getElementsByTagName("span");
  var register=document.getElementById('register');
  var login=document.getElementById('login');

  /* 设置个人信息 */

  var next1=document.getElementById('next1');
  var next2=document.getElementById('next2');
  var information=document.getElementById('information');

  /*注册 转入信息填写*/
  next1.onclick=function(){
     register.className="register hide";
    information.className="information"
  }
  next2.onclick=function(){
    register.className="register hide";
    information.className="information";
  }

  /* 注册手机切换 */
  switch1[1].onclick=function(){
    login.className="login hide";
    register.className="register";
  }
  switch2[0].onclick=function(){
    login.className="login";
    register.className="register hide";
  }


  /* 注册 邮箱手机切换 */
  phoneR.onclick=function(){
    this.className="true";
    emailR.className="";
    phoneRegister.className="phoneRegister";
    emailRegister.className="emailRegister hide";
    line3[0].className="line1 arc";
    line4[0].className="line2";
  }
  emailR.onclick=function(){
    this.className="true";
    phoneR.className="";
    phoneRegister.className="phoneRegister hide";
    emailRegister.className="emailRegister";
    line3[0].className="line1";
    line4[0].className="line2 arc";
  }
  /* 登陆 邮箱手机切换 */
  phone.onclick=function(){
    this.className="true";
    email.className="";
    phoneLogin.className="phoneLogin";
    emailLogin.className="emailLogin hide";
    line1[0].className="line1 arc";
    line2[0].className="line2";
  }
  email.onclick=function(){
    this.className="true";
    phone.className="";
    phoneLogin.className="phoneLogin hide";
    emailLogin.className="emailLogin";
    line1[0].className="line1";
    line2[0].className="line2 arc";
  }
      //获取上传按钮
      var input1 = document.getElementById("upload");
      if(typeof FileReader === 'undefined') {
        //result.innerHTML = "抱歉，你的浏览器不支持 FileReader"; 
        input1.setAttribute('disabled', 'disabled');
      } else {
        input1.addEventListener('change', readFile, false);
 
      }
 
      function readFile() {
        var file = this.files[0]; //获取上传文件列表中第一个文件
        if(!/image\/\w+/.test(file.type)) {
          //图片文件的type值为image/png或image/jpg
          alert("文件必须为图片！");
          return false;
        }
        // console.log(file);
        var reader = new FileReader(); //实例一个文件对象
        reader.readAsDataURL(file); //把上传的文件转换成url
        //当文件读取成功便可以调取上传的接口
        reader.onload = function(e) {
          
          

          var image = new Image();
          // 设置src属性 
          image.src = e.target.result;
          // image.src="../image/QQ图片20180816231406.png"
          var max = 200;
          // 绑定load事件处理器，加载完成后执行，避免同步问题
          image.onload = function() {
            // 获取 canvas DOM 对象 
            var canvas = document.getElementById("headCVS");
            // 获取 canvas的 2d 环境对象, 
            var ctx = canvas.getContext("2d");
            // canvas清屏 
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var width = image.width;
              var height = image.height;
              ctx.clearRect(0, 0, width, height);
              //开始路径画圆,剪切处理
              ctx.save();
              ctx.beginPath();
              ctx.arc(60, 60, 60, 0, Math.PI * 2, false);
              ctx.clip(); //剪切路径
              ctx.drawImage(image, 0, 0);
              //恢复状态
              ctx.restore();
            
          };
        }
      };
}

function YYYYMMDDstart(){   
  MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];     
  //先给年下拉框赋内容   
  var y  = new Date().getFullYear();   
  for (var i = (y-30); i < (y+30); i++) //以今年为准，前30年，后30年   
         document.reg_testdate.YYYY.options.add(new Option(" "+ i +" 年", i));   

  //赋月份的下拉框   
  for (var i = 1; i < 13; i++)   
         document.reg_testdate.MM.options.add(new Option(" " + i + " 月", i));   

  document.reg_testdate.YYYY.value = y;   
  document.reg_testdate.MM.value = new Date().getMonth() + 1;   
  var n = MonHead[new Date().getMonth()];   
  if (new Date().getMonth() ==1 && IsPinYear(YYYYvalue)) n++;   
      writeDay(n); //赋日期下拉框Author:meizz   
  document.reg_testdate.DD.value = new Date().getDate();   
}   
// if(document.attachEvent)   
//    window.attachEvent("onload", YYYYMMDDstart);   
// else   
//    window.addEventListener('load', YYYYMMDDstart, false);   
function YYYYDD(str){
//年发生变化时日期发生变化(主要是判断闰平年)   
 var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;   
 if (MMvalue == ""){ var e = document.reg_testdate.DD; optionsClear(e); return;}   
 var n = MonHead[MMvalue - 1];   
 if (MMvalue ==2 && IsPinYear(str)) n++;   
  writeDay(n)   
}   
function MMDD(str){   
//月发生变化时日期联动   
  var YYYYvalue = document.reg_testdate.YYYY.options[document.reg_testdate.YYYY.selectedIndex].value;   
  if (YYYYvalue == ""){ var e = document.reg_testdate.DD; optionsClear(e); return;}   
  var n = MonHead[str - 1];   
  if (str ==2 && IsPinYear(YYYYvalue)) n++;   
  writeDay(n)   
}   
function writeDay(n){   //据条件写日期的下拉框   
  var e = document.reg_testdate.DD; optionsClear(e);   
  for (var i=1; i<(n+1); i++)   
      e.options.add(new Option(" "+ i + " 日", i));   
}   
function IsPinYear(year){//判断是否闰平年   
  return(0 == year%4 && (year%100 !=0 || year%400 == 0));}   
function optionsClear(e){   
  e.options.length = 1;   
}   