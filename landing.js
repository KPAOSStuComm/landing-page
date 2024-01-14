window.onload = function () {
  document.getElementById("landing").innerHTML =
    '<img src="" alt="" id="landing-img" />';

  // Select the image element
  let imgElement = document.getElementById("landing-img");

  let images = [
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/open-house-10.jpg",
      alt: "กิ่งจันวิชาการ ครั้งที่ 10 ณ โรงเรียนองค์การบริหารส่วนจังหวัดกระบี่",
    },
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/kids-day-2024.jpg",
      alt: "วันเด็กแห่งชาติ, 13 มกราคม 2567",
    },
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/teachers-day-2024.png",
      alt: "วันครู, 16 มกราคม 2567",
    },
  ];

  let index = 0;

  setInterval(() => {
    imgElement.src = images[index].src;
    imgElement.alt = images[index].alt;
    index = (index + 1) % images.length;
  }, 3000);
};
