window.onload = function () {
  // Select the landing element
  var landing = document.getElementById("landing");

  let images = [
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/rooms-board-register-2024.png",
      alt: "ลงรายชื่อกรรการห้องในฐานข้อมูล ประจำปีการศึกษา 2566",
      link: "//kpaos-shorturl.netlify.app/fn/urls/Y8K1fHZk"
    },
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/krabi-games-2024-comp.jpg",
      alt: "สนามแข่งขันกีฬาลีลาศ, เปตอง, บาสเกตบอล, และคาราเต้-โด 23-30 มกราคม 2567 ณ โรงเรียนองค์การบริหารส่วนจังหวัดกระบี่",
      link: "#"
    },
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/krabi-games-2024-close.jpg",
      alt: "พิธีปิด วันที่ 30 มกราคม พ.ศ.2567 เวลา 15:00 น. ณ โรงยิมอเนกประสงค์จันทร์กะพ้อ โรงเรียนองค์การบริหารส่วนจังหวัดกระบี่",
      link: "//kpaos-shorturl.netlify.app/fn/urls/1rGYQUuv"
    },
  ];

  // Dynamically generate the HTML content with links
  for (let i = 0; i < images.length; i++) {
    landing.innerHTML += `<a href="${images[i].link}" target="_blank"><img src="${images[i].src}" alt="${images[i].alt}" id="landing-img" /></a>`;
  }

  // Select the first image element
  let imgElement = document.getElementById("landing-img");

  let index = 0;

  setInterval(() => {
    imgElement.src = images[index].src;
    imgElement.alt = images[index].alt;
    index = (index + 1) % images.length;
  }, 3000);

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