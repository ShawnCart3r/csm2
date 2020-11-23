const slideList = [
    {
      title: "Let the Galaxy Burn and the Heavens Bleed!",
      text: `March Beneath the gaze of the Warmaster and catch the gaze of the dark gods. Pillage and burn The False Emperor Domain and let chaos reign!`,
      photoSrc: "./image/battle.jpg",
    },
    {
        title: "Lead Daemon Engines across the battlefield",
        text: `Utilize daemon fused machines to bring ruin across the war torn battlefields of the 41st millennium.`,
        photoSrc: "./image/daemonengine.jpg",
    },
    {
        title:"Devote your life to The Dark God!",
        text: `The Dark Gods hunger for devotion! Unlike the False Emperor, they aren't silent and will award you for dark deeds!`,
        photoSrc: "./image/noise-marine.webp",
    }
  ];

  let slideActive = 0;

  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector(".next-btn");

  const title = document.querySelector("h1");
  const text = document.querySelector(".row-top__right__text");
  const photo = document.querySelector(".row-top__left_img");


  const changeSlide = (e) => {
      if(e.currentTarget.className === "next-btn") slideActive++;
      else if (e.currentTarget.className === "prev-btn") slideActive--;
      if(slideActive === slideList.length)  slideActive = 0;
      else if (slideActive < 0 ) slideActive = slideList.length - 1;

      text.textContent = slideList[slideActive].text;
      photo.setAttribute("src", slideList[slideActive].photoSrc);
      title.textContent = slideList[slideActive].title;
  };

  nextBtn.addEventListener("click", changeSlide);
  prevBtn.addEventListener('click', changeSlide);

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navigation");

  const handleClick = () => {
      hamburger.classList.toggle("hamburger--active");
      nav.classList.toggle("navigation--active");
  };

  hamburger.addEventListener("click", handleClick);
  