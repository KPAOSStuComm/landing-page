window.onload = function () {
  document.getElementById("landing-link").innerHTML =
    '<img src="" alt="" id="landing-img" />';

  // Select the image and link element
  let imgElement = document.getElementById("landing-img");
  let linkElement = document.getElementById("landing-link");

  let images = [
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/rooms-board-register-2024.png",
      alt: "ลงรายชื่อกรรการห้องในฐานข้อมูล ประจำปีการศึกษา 2566",
      link: "//kpaos-shorturl.netlify.app/fn/urls/Y8K1fHZk"
    },
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/krabi-games-2024-close.jpg",
      alt: "พิธีปิด วันที่ 30 มกราคม พ.ศ.2567 เวลา 15:00 น. ณ โรงยิมอเนกประสงค์จันทร์กะพ้อ โรงเรียนองค์การบริหารส่วนจังหวัดกระบี่",
      link: "//kpaos-shorturl.netlify.app/fn/urls/1rGYQUuv",
    },
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/krabi-games-2024-comp.jpg",
      alt: "สนามแข่งขันกีฬาลีลาศ, เปตอง, บาสเกตบอล, และคาราเต้-โด 23-30 มกราคม 2567 ณ โรงเรียนองค์การบริหารส่วนจังหวัดกระบี่",
      link: "#"
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

  setInterval(() => {
    var contentHeight = 0;

    // Calculate the total height of all children
    for (var i = 0; i < landing.children.length; i++) {
      contentHeight += landing.children[i].offsetHeight;
    }

    // Set the height of the landing element
    landing.style.height = contentHeight + "px";
  }, 500);
};