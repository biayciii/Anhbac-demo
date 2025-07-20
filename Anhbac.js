/* ---------- DATA ---------- */
const users = [
  {
    username: "Dchou",
    password: "14082005",
    letters: [
      {
        title: "02062025: Gửi bé nhất Dchou",
        content: `Vậy là cũng đã hơn 1 tháng một chút xíu chúng ta yêu nhau, đây là lần đầu tiên anh viết thư cho em dưới hình thức lạ hoắc này.
Có lẽ khoảng thời gian bên em là lúc anh cảm thấy vui vẻ nhất. Gần đây anh có đôi chút mệt mỏi vì học tập và công việc, nhưng mỗi khi được nói chuyện hay gặp em, nụ cười lại hiện lên trên môi anh.
Em mang đến cho anh cảm giác hạnh phúc và háo hức, như thể mọi mệt mỏi đều tan biến khi em xuất hiện.
Cảm ơn em vì đã đến bên anh, đã mang đến cho anh một tình yêu mà anh luôn khao khát.
Anh mong rằng mình sẽ còn tạo ra nhiều điều bất ngờ, nhiều niềm vui hơn thế này dành cho người con gái anh yêu nhất. <3 

Yêu vợ tương lai, Xbac của em <3`,
        code: "02062025"
      },
      {
        title: "02072025: Chân thành cho em iu 💖",
        content: `Mặc dù anh không hề ngại ngùng khi viết, nhưng vì muốn em rèn luyện bản thân nên anh sẽ viết bằng tiếng Anh he :))).

I am very happy to open the source code to write you these sincere words. Another month has passed; we have memories, quarrels, joys, happiness, etc. But I am still the same – still here, the one who holds you in his arms, listens to your stories and jokes.
Thank you for being with me, even though there were times when I accidentally forgot you. I am not a perfect person, but I will try to improve myself so that we can continue together in the following days, writing letters to each other and telling each other about what we have experienced in life and love.
Let me think about you :))). Love you forever <3`,
        code: "02072025"
      },
      {
  title: "22072025: This's love for DieuChou",
  content: `Đã gần một tháng, anh lại viết ra những dòng tâm trạng này. Khi anh viết xong và nhìn lại thấy sao thư dài hơn những tháng trước vậy, vì lại thêm một tháng trôi qua, chúng ta lại có những kỉ niệm và có cả những biến cố. Nhớ lại những ngày tháng đi chơi với em anh lại thấy rất vui vì lần đầu anh được đi leo đồi, được ngắm bình minh, được cùng em trải qua những tháng ngày tươi đẹp đó.
Nhưng xen lẫn vào đó là một chút hối hận trong anh, anh đã một lần nữa làm em tổn thương, làm em đau thêm một lần nữa. Lúc đấy anh như một thằng bé hoảng loạn, chỉ biết nói lời xin lỗi và òa lên khóc. Anh tệ mà đúng không em, anh không thể biết sau này có thể cùng em qua được 8 năm như anh đã từng nói không.
Nhưng nếu ngày nào còn yêu em, anh sẽ yêu em cho đến khi em không cần anh nữa.
Mà em biết không, đôi khi anh cũng kể cho em là đi làm anh chán, một phần do đổi ca làm và xử lí nhiều đơn, mà một phần quan trọng nữa là... thiếu em đấy. Đôi khi anh cảm thấy bất lực và mỏi mệt, nhưng rồi gặp em, anh lại có thêm sức sống để có thể nói chuyện với nhau, cười cho nhau nghe những câu chuyện vô chi của chính mình. Nhưng khum sao, khi em đã đọc được dòng thư này, tâm trạng của anh cũng đã tốt lên rùi, nên bé đừng lo cho anh nhé.
Vậy là chúng ta cũng đi đến những ngày cuối tháng 7 rồi, gần 3 tháng bên nhau — vui có, buồn có, từng sắp tan vỡ cũng có — nhưng rồi chúng ta vẫn đứng đây, vẫn ở bên nhau, cùng nhau đón nhận những màu sắc mới của nhiều ngày tháng sắp tới. Hy vọng rằng đi quân sự, anh sẽ có thể gặp em nhiều hơn để có thể quan tâm đến sức khỏe và được trò chuyện với em nhiều hơn.
<3 u 4e,  
Dchou`,
  code: "22072025"
}

    ]
  }
];

/* ---------- GLOBAL ---------- */
let selectedLetter = null;

/* ---------- AUTH ---------- */
function login() {
  const user = users.find(
    u =>
      u.username === document.getElementById("username").value.trim() &&
      u.password === document.getElementById("password").value.trim()
  );

  if (user) {
    showLetters(user.letters);
    toggleScreen("login-screen", false);
    toggleScreen("letter-screen", true);
  } else {
    document.getElementById("login-msg").textContent = "Sai thông tin đăng nhập!";
  }
}

/* ---------- LETTER LIST ---------- */
function showLetters(letters) {
  const list = document.getElementById("letter-list");
  list.innerHTML = "";
  letters.forEach(letter => {
    const li = document.createElement("li");
    li.textContent = letter.title;
    li.onclick = () => {
      selectedLetter = letter;
      toggleScreen("letter-screen", false);
      toggleScreen("verify-screen", true);
    };
    list.appendChild(li);
  });
}

/* ---------- VERIFY CODE ---------- */
function verifyCode() {
  const codeInput = document.getElementById("verify-code").value.trim();

  if (selectedLetter && codeInput === selectedLetter.code) {
    toggleScreen("verify-screen", false);
    document.getElementById("letter-title").textContent = selectedLetter.title;
    document.getElementById("letter-body").textContent = selectedLetter.content;
    toggleScreen("letter-content-screen", true);
  } else {
    document.getElementById("verify-msg").textContent = "Mã xác nhận không đúng!";
  }
}

/* ---------- BACK TO LETTER LIST ---------- */
function backToLetterList() {
  toggleScreen("letter-content-screen", false);
  toggleScreen("letter-screen", true);
}

/* ---------- HELPER ---------- */
function toggleScreen(id, show) {
  document.getElementById(id).style.display = show ? "block" : "none";
}
