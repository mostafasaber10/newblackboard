
// 


var opions ={
    strings: ["خاص بالشباب من 15 حتي 35", "يهتم بتقديم و بيع مستلزمات الشباب"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  };
  var test = new Typed (".text",opions);






// 


document.getElementById("generateCode").addEventListener("click", function () {
  const playerName = document.getElementById("playerName").value.trim();
  if (playerName === "") {
      alert("الرجاء إدخال اسمك أولاً.");
      return;
  }

  // قم بإنشاء كود الخصم ونسبة الخصم هنا
  const { discountCode, discountPercentage } = generateRandomDiscount();

  // عرض كود الخصم ونسبة الخصم على الشاشة
  const opponentInfo = `كود الخصم: ${discountCode}<br>نسبة الخصم: ${discountPercentage}%`;
  const opponentInfoElement = document.getElementById("opponentInfo");
  opponentInfoElement.innerHTML = opponentInfo;
  opponentInfoElement.classList.remove("hidden");
});

function generateRandomDiscount() {
  // هنا يمكنك توليد كود الخصم ونسبة الخصم بأي طريقة تريدها
  // لهذا المثال، سأقوم بإنشاء كود خصم عشوائي مؤقت ونسبة خصم عشوائية
  const discountCode = Math.random().toString(36).substring(2, 8).toUpperCase();
  const discountPercentage = Math.floor(Math.random() * 50) + 10; // قيمة عشوائية بين 10 و 59

  return { discountCode, discountPercentage };
}


// 







document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["myform"];
  form.addEventListener("submit", function (event) {
      const username = form.elements["username"].value;
      const email = form.elements["email"].value;
      const password = form.elements["password"].value;
      const confirmPassword = form.elements["confirm"].value;

      if (username.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
          alert("الرجاء ملء جميع الحقول");
          event.preventDefault();
      } else if (password !== confirmPassword) {
          alert("يجب أن تكون كلمة المرور وتأكيدها متطابقين");
          event.preventDefault();
      } else {
          // إذا تم التحقق من جميع البيانات بنجاح، سيتم توجيه المستخدم إلى الصفحة الرئيسية
          Window.location.href = "/home/board.html"; // استبدل "/" بالمسار الذي ترغب في توجيه المستخدم إليه
      }
  });
});













// 

function togglePasswordVisibility() {
  let passwordInput = document.getElementById("password");
  let togglePasswordButton = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePasswordButton.textContent = "🙈"; // تغيير الرمز إلى رمز إخفاء
  } else {
      passwordInput.type = "password";
      togglePasswordButton.textContent = "👁️"; // تغيير الرمز إلى رمز عرض
  }


}




function toggle() {
 let confirmInput = document.getElementById("confirm");
 let toggleIcon  = document.getElementById("toggle");

 if (confirmInput.type === "password") {
  confirmInput.type = "text";
  toggleIcon.textContent = "🙈"; 
} else {
  confirmInput.type = "password";
  toggleIcon.textContent = "👁️";
}


}


