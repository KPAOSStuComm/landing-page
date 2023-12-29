window.onload = function () {
  document.getElementById("landing").innerHTML =
    '<img src="" alt="สวัสดีปีใหม่ 2567 โรงเรียนองค์การบริหารส่วนจังหวัดกระบี่" id="landing-img" />';
};

setInterval(() => {
  // Select the image element
  let imgElement = document.getElementById("landing-img");

  // Check if the viewport is less than 900px
  if (window.matchMedia("(max-width: 900px)").matches) {
    // If true, change the source of the image
    imgElement.src =
      "//kpaosstucomm-proj-landing.netlify.app/images/HNY-2024-KPAOS-wide.jpg";
  } else {
    imgElement.src =
      "//kpaosstucomm-proj-landing.netlify.app/images/HNY-2024-KPAOS-compact.jpg";
  }
}, 1000);
