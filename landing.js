window.onload = function () {
  document.getElementById("landing").innerHTML =
    '<a href="#" id="landing-link"><img src="" alt="" id="landing-img" /></a>';

  // Select the image element
  let imgElement = document.getElementById("landing-img");
  let linkElement = document.getElementById("landing-link");

  let images = [
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/krabi-games-2024-comp.jpg",
      alt: "สนามแข่งขันกีฬาลีลาศ, เปตอง, บาสเกตบอล, และคาราเต้-โด 23-30 มกราคม 2567 ณ โรงเรียนองค์การบริหารส่วนจังหวัดกระบี่",
    },
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/krabi-games-2024-close.jpg",
      alt: "พิธีปิด วันที่ 30 มกราคม พ.ศ.2567 เวลา 15:00 น. ณ โรงยิมอเนกประสงค์จันทร์กะพ้อ โรงเรียนองค์การบริหารส่วนจังหวัดกระบี่",
    },
  ];

  let index = 0;

  setInterval(() => {
    imgElement.src = images[index].src;
    imgElement.alt = images[index].alt;
    index = (index + 1) % images.length;
  }, 3000);

  var landing = document.getElementById("landing");

  imgElement.onload = function () {
    // Set the height of the landing element
    landing.style.height = imgElement.offsetHeight + "px";
  };
};
