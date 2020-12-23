export const radioPlayerInit = () => {
    // console.log("Radio Init");

    // radio
    // radio-cover__img
    // radio-header
    // radio-navigation
    // radio-item
    // radio-stop
    const radio=document.querySelector(".radio");
    const radioCoverImg=document.querySelector(".radio-cover__img");
    const radioHeaderBig=document.querySelector(".radio-header__big");
    const radioNavigation=document.querySelector(".radio-navigation");
    const radioItem=document.querySelectorAll(".radio-item");
    const radioStop=document.querySelector(".radio-stop");

    const audio = new Audio();
    audio.type = "audio/aac";

    radioStop.disabled = true;

    const changePlayIcon = () => {
        if (audio.paused) {
            radio.classList.remove("play");
            radioStop.classList.remove("fa-stop");
            radioStop.classList.add("fa-play");
        } else {
            radio.classList.add("play");
            radioStop.classList.remove("fa-play");
            radioStop.classList.add("fa-stop");
        }
    };

    const selectItem = (parent) => {
        radioItem.forEach((item) => item.classList.remove("select"));
        parent.classList.add("select");
    };


    radioNavigation.addEventListener("change", (event) => {
        const target = event.target;
        const parent = target.closest(".radio-item");
        // console.log(target.dataset);

        selectItem(parent);

        const title = parent.querySelector(".radio-name").textContent;
        radioHeaderBig.textContent = title;
        console.log(title);
        const radioImgSrc = parent.querySelector(".radio-img").src;
        radioCoverImg.src = radioImgSrc;

        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;

        audio.play();
        changePlayIcon();
    });

    radioStop.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        changePlayIcon();
    });
};