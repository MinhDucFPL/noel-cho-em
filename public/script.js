const showButton = document.getElementById("showButton");
const christmasMessage = document.getElementById("as");

showButton.addEventListener("click", function () {
  if (christmasMessage.style.display === "none") {
    christmasMessage.style.display = "block";
  } else {
    christmasMessage.style.display = "none";
  }
});
document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("as").style.display = "block";
  treeIcon.style.display = "block";
});

document.getElementById("showButton").addEventListener("click", function () {
  var guideInfo = document.getElementById("guideInfo");
  var button = document.getElementById("showButton");

  button.classList.add("hidden");
  treeIcon.style.display = "none";
  guideInfo.classList.remove("hidden");
  guideInfo.classList.add("show");
});

document.getElementById("showButton").addEventListener("click", function () {
  var guideInfo = document.getElementById("guideInfo");
  var button = document.getElementById("showButton");

  button.classList.add("hidden");

  guideInfo.classList.remove("hidden");
  guideInfo.classList.add("show");
});

document.getElementById("closeButton").addEventListener("click", function () {
  var guideInfo = document.getElementById("guideInfo");
  var button = document.getElementById("showButton");

  guideInfo.classList.remove("show");
  setTimeout(function () {
    guideInfo.classList.add("hidden");
    button.classList.remove("hidden");
  }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
  var encodedText = '&#68;&#101;&#115;&#105;&#103;&#110;&#32;&#98;&#121;&#32;&#80;&#97;&#110;&#98;&#97;&#112;';
  var footer = document.createElement("a");
  footer.innerHTML = encodedText;
  document.body.appendChild(footer); 
});
const treeIcon = document.querySelector(".tree-icon");

treeIcon.addEventListener("mouseenter", function () {
  treeIcon.classList.add("shake-animation");

  treeIcon.addEventListener("animationend", function () {
    treeIcon.classList.remove("shake-animation");
  });
});
document.addEventListener("click", function (event) {
  // Kiểm tra nếu nhấn ngoài cửa sổ thiệp
  if (!guideInfo.contains(event.target) && !showButton.contains(event.target)) {
    if (guideInfo.classList.contains("show")) {
      guideInfo.classList.remove("show");
      guideInfo.classList.add("hidden");

      // Hiển thị nút "Gửi bé nè"
      showButton.classList.remove("hidden");

      // Hiển thị lại cây thông
      treeIcon.style.display = "block";
    }
  }
});
function createSnowflakes() {
  const snowflakesContainer = document.createElement("div");
  snowflakesContainer.id = "snowflakeContainer"; // Đặt ID như trong CSS của bạn
  document.body.appendChild(snowflakesContainer);

  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Thêm ký tự ❋ vào nội dung của snowflake
    snowflake.textContent = "❄";

    const size = Math.random() * 20 + 20;
    snowflake.style.fontSize = `${size}px`; // Sử dụng font-size thay vì width/height
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 2 + 3}s`;
    snowflake.style.animationDelay = `${Math.random() * 20}s`;
    snowflake.style.setProperty("--random-x", Math.random());

    snowflakesContainer.appendChild(snowflake);
  }
}


window.onload = createSnowflakes;

