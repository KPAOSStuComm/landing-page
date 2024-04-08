window.onload = function () {
  document.getElementById("landing").innerHTML =
    '<a href="#" id="landing-link"><img src="" alt="" id="landing-img" /></a>';

  // Select the image element
  let imgElement = document.getElementById("landing-img");
  let linkElement = document.getElementById("landing-link");

  let images = [
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/songkran-2024.jpg",
      alt: "สุขสันต์วันสงกรานต์ ร่วมสืบสานประเพณีไทย 13-15 เมษายน 2567",
      link: "https://w.wiki/9hTq",
    },
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/bd-Sirindhorn-2024.jpg",
      alt: "2 เมษายน วันคล้ายวันพระราชสมภพ สมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี",
      link: "https://w.wiki/9hV8",
    },
    {
      src: "//kpaosstucomm-proj-landing.netlify.app/images/honor-kpaos-2024.jpg",
      alt: "วันเกีรยติยศ ประจำปีการศึกษา 2566 วันที่ 31 มีนาคม 2567 ณ โรงเรียนองค์การบริหารส่วนจังหวัดกระบี่",
      link: "https://fb.watch/rjqeoj8ae3/",
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
