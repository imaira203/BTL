const onUser = document.querySelector('#username');
const onPass = document.querySelector('#password');

const username = document.getElementById("username");
const password = document.getElementById("password");
  
    function validate(){
      if (username.value == '' || password.value == '') {
        alert("Vui lòng nhập tài khoản và mật khẩu");
        return;
      } 
      else {
        if (username.value == "123" && password.value == "456") {
          window.location.href = "./main/main.html";
        } else {
          alert("Đăng nhập thất bại. Vui lòng kiểm tra tên đăng nhập và mật khẩu.");
        }
      }
    }
  
onPass.addEventListener('keypress', (event) => {
  if (event.key === "Enter") {
     validate();
  }
});
onUser.addEventListener('keypress', (event) => {
  if (event.key === "Enter") {
     validate();
  }
});
