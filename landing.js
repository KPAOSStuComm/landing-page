window.onload = function () {
  document.getElementById("landing").innerHTML =
    '<img src="" alt="" id="landing-img" />';

  // Select the image element
  let imgElement = document.getElementById("landing-img");

  setInterval(() => {
    setTimeout(() => {
      imgElement.src =
        "//kpaosstucomm-proj-landing.netlify.app/images/open-house-10.jpg";

      imgElement.alt =
        "กิ่งจันวิชาการ ครั้งที่ 10 ณ โรงเรียนองค์การบริหารส่วนจังหวัดกระบี่";
    }, 2000);

    setTimeout(() => {
      imgElement.src =
        "//kpaosstucomm-proj-landing.netlify.app/images/kids-day-2024.jpg";

      imgElement.alt = "วันเด็กแห่งชาติ, 13 มกราคม 2567";
    }, 2000);

    setTimeout(() => {
      imgElement.src =
        "//kpaosstucomm-proj-landing.netlify.app/images/teachers-day-2024.png";

      imgElement.alt = "วันครู, 16 มกราคม 2567";
    }, 2000);
  }, 6000);
};
