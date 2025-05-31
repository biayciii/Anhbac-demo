function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");
  const qrDiv = document.getElementById("qrcode");

  if (username === "Dchou" && password === "01062025") {
    message.textContent = "";
    document.getElementById("login-form").style.display = "none";
    startCountdown(100); // 10 giây đếm ngược

    qrDiv.style.display = "block";
    generateQRCode(`Gửi bé nhất ${username} 
        \n
         Vậy là cũng đã hơn 1 tháng một chút xíu chúng ta yêu nhau, đây là lần đầu tiên anh viết thư cho em dưới hình thức lạ hoắc này
         Có lẽ khoảng thời gian bên em là lúc anh cảm thấy vui vẻ nhất. Gần đây anh có đôi chút mệt mỏi vì học tập và công việc, nhưng mỗi khi được nói chuyện hay gặp em, 
        nụ cười lại hiện lên trên môi anh. Em mang đến cho anh cảm giác hạnh phúc và háo hức, như thể mọi mệt mỏi đều tan biến khi em xuất hiện
         Cảm ơn em vì đã đến bên anh, đã mang đến cho anh một tình yêu mà anh luôn khao khát. Anh mong rằng mình sẽ còn tạo ra nhiều điều bất ngờ, 
        nhiều niềm vui hơn thế này dành cho người con gái anh yêu nhất. <3 
        \n Yêu vợ tương lai, Xbac của em <3`);
  } else {
    message.textContent = "Tên đăng nhập hoặc mật khẩu sai!";
  }
  if (username === "đinhtrong" && password === "02081995") {
    message.textContent = "";
    document.getElementById("login-form").style.display = "none";
    startCountdown(100); // 10 giây đếm ngược

    qrDiv.style.display = "block";
    generateQRCode(`Xin chào ${username}!`);
  } else {
    message.textContent = "Tên đăng nhập hoặc mật khẩu sai!";
  }
  if (username === "biayciii" && password === "Anhbac2@@5") {
    message.textContent = "";
    document.getElementById("login-form").style.display = "none";
    startCountdown(100); // 10 giây đếm ngược

    qrDiv.style.display = "block";
    generateQRCode(`Xin chào ${username}!`);
  } else {
    message.textContent = "Tên đăng nhập hoặc mật khẩu sai!";
  }
}

function generateQRCode(text) {
    
  QRCode.toCanvas(document.getElementById('canvas'), text, function (error) {
    if (error) console.error(error);
  });

  new QRCode(qrDiv, {
    text: text,
    width: 200,
    height: 200
  });
}
function startCountdown(seconds) {
  const qrDiv = document.getElementById("qrcode");
  const timer = document.createElement("p");
  timer.id = "timer";
  qrDiv.appendChild(timer);

  let timeLeft = seconds;
  timer.textContent = `Quay lại sau ${timeLeft} giây`;

  const interval = setInterval(() => {
    timeLeft--;
    timer.textContent = `Quay lại sau ${timeLeft} giây`;

    if (timeLeft <= 0) {
      clearInterval(interval);
      // Ẩn QR, hiển thị lại form
      qrDiv.style.display = "none";
      document.getElementById("login-form").style.display = "block";
      timer.remove();
    }
  }, 1000);
}
