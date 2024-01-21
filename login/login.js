
    const username = document.getElementById("username");
    const password = document.getElementById("password");
  
    function validate(){
      if (username.value == "123" && password.value == "456") {
        window.location.href = "../index.html";
      } else {
        alert("Đăng nhập thất bại. Vui lòng kiểm tra tên đăng nhập và mật khẩu.");
      }
    }
  
