
import { videoPlayerInit } from "./videoPlayer.js";
// import videoPlayerInit from "./videoPlayer.js";
import { radioPlayerInit } from "./radioPlayer.js";
import { musicPlayerInit } from "./musicPlayer.js";

const playerBtn = document.querySelectorAll(".player-btn");
const playerBlock = document.querySelectorAll(".player-block");
const temp = document.querySelector(".temp");



const deactivationPlayer = () => {
    temp.style.display = "none";
    playerBtn.forEach((btn, index) => {
        btn.classList.remove("active");
        playerBlock[index].classList.remove("active");
    });
    // playerBtn.forEach((item) => item.classList.remove("active"));
    // playerBlock.forEach((item) => item.classList.remove("active"));

    radioPlayerInit.stop();
    videoPlayerInit.stop();
    musicPlayerInit.stop();
}

playerBtn.forEach((btn, index) => {
    // console.log(index);
    btn.addEventListener("click", () => {
        deactivationPlayer();
        btn.classList.add("active");
        playerBlock[index].classList.add("active");
    });
});

videoPlayerInit();
radioPlayerInit();
musicPlayerInit();

