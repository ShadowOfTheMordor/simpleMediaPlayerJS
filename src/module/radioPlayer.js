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
    const radioVolumeDown = document.querySelector(".radio-volume__down");
    const radioVolumeUp = document.querySelector(".radio-volume__up");
    const radioVolume = document.querySelector(".radio-volume");
    const radioVolumeOff = document.querySelector(".radio-volume__off");


    const audio = new Audio();
    audio.type = "audio/aac";

    let savedVolume = 0;

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

    //radioVolume
    const changeRadioVolume = (curVolumeRange, maxVolumeRange) => {
        const volume = curVolumeRange / maxVolumeRange;
        audio.volume = volume;
    }


    radioNavigation.addEventListener("change", (event) => {
        const target = event.target;
        const parent = target.closest(".radio-item");
        // console.log(target.dataset);
        if (parent === null)
            return;
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

    radioVolume.addEventListener("input", () => {
        const maxVolumeRange = radioVolume.max;
        const currentVolumeRange = radioVolume.value;
        changeRadioVolume(currentVolumeRange, maxVolumeRange);
    });

    radioVolumeDown.addEventListener("click", () => {
        const maxVolumeRange = radioVolume.max;
        if (savedVolume < 0.05) {
            savedVolume = audio.volume;
            changeRadioVolume(0, maxVolumeRange);
            radioVolume.value = 0;

        } else {
            // console.log(" saved volume = " + savedVolume);
            changeRadioVolume(savedVolume*100, maxVolumeRange);
            radioVolume.value = savedVolume*100;
            savedVolume = 0;
        }
    });

    radioVolumeUp.addEventListener("click", () => {
        const maxVolumeRange = radioVolume.max;
        if (savedVolume < 0.05) {
            savedVolume = audio.volume;
            changeRadioVolume(maxVolumeRange, maxVolumeRange);
            radioVolume.value = maxVolumeRange;
        } else {
            changeRadioVolume(savedVolume*100, maxVolumeRange);
            radioVolume.value = savedVolume*100;
            savedVolume = 0;
        }
    });

    radioVolumeOff.addEventListener("click", () => {
        const maxVolumeRange = radioVolume.max;
        // if (audio.volume < 0.1) {
         if (savedVolume > 0.05) {
            changeRadioVolume(savedVolume*100, maxVolumeRange);
            savedVolume = 0;
        } else {
            savedVolume = audio.volume;
            changeRadioVolume(0, maxVolumeRange);
        }
    });


    //for setting starting volume
    changeRadioVolume(radioVolume.value, radioVolume.max);


    radioPlayerInit.stop = () => {
        audio.pause();
        changePlayIcon();
    };
};