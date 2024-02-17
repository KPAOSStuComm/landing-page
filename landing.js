window.onload = function () {
  document.getElementById("landing").innerHTML =
    '<a href="#" id="landing-link"><img src="" alt="" id="landing-img" /></a>';

  // Select the image element
  let imgElement = document.getElementById("landing-img");
  let linkElement = document.getElementById("landing-link");

  let images = [
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/valentine-day-2024.jpg",
      alt: "วันวาเลนไทน์ 2567 โรงเรียนองค์การบริหารส่วนจังหวัดกระบี่",
      link: "#",
    },
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/farewell-kpaos-2024.jpg",
      alt: "กิจกรรมอำลาพี่-น้อง KPAOS ชั้นมัธยมศึกษาปีที่ 3 และ 6 ประจำปีการศึกษา 2566 (ภาพโดย ___bbbeee)",
      link: "https://www.instagram.com/p/C3UmScKv5J7/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    },
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/CNY-2024.jpg",
      alt: "กิจกรรมอำลาพี่-น้อง KPAOS ชั้นมัธยมศึกษาปีที่ 3 และ 6 ประจำปีการศึกษา 2566 (ภาพโดย ___bbbeee)",
      link: "https://www.instagram.com/p/C3UmScKv5J7/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    },
  ];

  let index = 0;

  setInterval(() => {
    imgElement.src = images[index].src;
    imgElement.alt = images[index].alt;
    linkElement.href = images[index].link;
    index = (index + 1) % images.length;
  }, 3000);

  var landing = document.getElementById("landing");

  imgElement.onload = function () {
    // Set the height of the landing element
    landing.style.height = imgElement.offsetHeight + "px";
  };
};
