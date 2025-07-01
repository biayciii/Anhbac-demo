// Danh sách tài khoản và nội dung QR tương ứng
const users = [
  {
    username: "Dchou",
    password: "01062025",
    qrText: `Gửi bé nhất Dchou 
\n
Vậy là cũng đã hơn 1 tháng một chút xíu chúng ta yêu nhau, đây là lần đầu tiên anh viết thư cho em dưới hình thức lạ hoắc này.
Có lẽ khoảng thời gian bên em là lúc anh cảm thấy vui vẻ nhất. Gần đây anh có đôi chút mệt mỏi vì học tập và công việc, 
nhưng mỗi khi được nói chuyện hay gặp em, nụ cười lại hiện lên trên môi anh.
Em mang đến cho anh cảm giác hạnh phúc và háo hức, như thể mọi mệt mỏi đều tan biến khi em xuất hiện.
Cảm ơn em vì đã đến bên anh, đã mang đến cho anh một tình yêu mà anh luôn khao khát. 
Anh mong rằng mình sẽ còn tạo ra nhiều điều bất ngờ, nhiều niềm vui hơn thế này dành cho người con gái anh yêu nhất. <3 
\nYêu vợ tương lai, Xbac của em <3`
  },
  {
  username: "Dchou",
  password: "02072025",
  qrText: 
    `Chân thành cho em iuuuu 💖

Mặc dù anh không hề ngại ngùng khi viết, nhưng vì muốn em rèn luyện bản thân nên anh sẽ viết bằng tiếng Anh he :))).

I am very happy to open the source code to write you these sincere words. Another month has passed, we have
memories, quarrels, joys, happiness, etc. But I am still the same - still here, the one who holds you in his arms,
listens to your stories and jokes.
Thank you for being with me, even though there were times when I accidentally forgot you, forgot your waiting. I am not
a perfect person but I will try to improve myself so that I can continue with you in the following days, then we will
write letters to each other, tell each other about what we have experienced, encountered in life, love.
Let me think about you :))). Love You 4ever <3`

},

  {
    username: "đinhtrong",
    password: "02081995",
    qrText: "Xin chào đinhtrong!"
  },
  {
    username: "biayciii",
    password: "Anhbac2@@5",
    qrText: "Xin chào biayciii!"
  },
  {
    username: "admin",
    password: "admin123",
    qrText: "Chào mừng admin đã đăng nhập thành công!"
  }
];

// Hàm đăng nhập
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");
  const qrDiv = document.getElementById("qrcode");

  const foundUser = users.find(
    user => user.username === username && user.password === password
  );

  if (foundUser) {
    message.textContent = "";
    document.getElementById("login-form").style.display = "none";
    qrDiv.style.display = "block";
    generateQRCode(foundUser.qrText);
    startCountdown(100); // 100 giây đếm ngược
  } else {
    message.textContent = "Tên đăng nhập hoặc mật khẩu sai!";
  }
}

// Hàm tạo QR code
function generateQRCode(text) {
  const canvas = document.getElementById("canvas");

  // Xóa QR cũ trước khi tạo mới
  QRCode.toCanvas(canvas, text, function (error) {
    if (error) {
      console.error("Lỗi khi tạo mã QR:", error);
    }
  });
}

// Hàm đếm ngược và tự động quay lại form
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
      qrDiv.style.display = "none";
      document.getElementById("login-form").style.display = "block";
      timer.remove();
    }
  }, 1000);
}
