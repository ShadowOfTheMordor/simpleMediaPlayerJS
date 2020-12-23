// const videoPlayer = () => {
//     console.log("Video Init");
// };

// export default videoPlayer;

export const videoPlayerInit = () => {
    // video-player
    // video-button__play
    // video-button__stop
    // video-time__passed
    // video-progress
    // video-time__total
    const videoPlayer = document.querySelector(".video-player");
    const videoButtonPlay = document.querySelector(".video-button__play");
    const videoButtonStop = document.querySelector(".video-button__stop");
    const videoTimePassed = document.querySelector(".video-time__passed");
    const videoProgress = document.querySelector(".video-progress");
    const videoTimeTotal = document.querySelector(".video-time__total");
    const videoVolumeDown = document.querySelector(".video-volume__down");
    const videoVolumeUp = document.querySelector(".video-volume__up");
    const videoVolume = document.querySelector(".video-volume");
    const videoVolumeOff = document.querySelector(".video-volume__off");
    const videoFullscreen = document.querySelector(".video-fullscreen");


    let savedVolume = 0;
    

    const toggleButtonIcon = () => {
        if (videoPlayer.paused) {
            videoButtonPlay.classList.remove("fa-pause");
            videoButtonPlay.classList.add("fa-play");
        } else {
            videoButtonPlay.classList.remove("fa-play");
            videoButtonPlay.classList.add("fa-pause");

        }
    };

    const toggleVideoPlay = () => {
        if (document.fullscreenElement === videoPlayer)
            return;
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    };

    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    };

    const addZeroToTime = (number) => number < 10 ? '0' + String(number) : String(number);

    const changeVideoVolume = (curVolumeRange, maxVolumeRange) => {
        const volume = curVolumeRange / maxVolumeRange;
        // console.log("cur vol = " + curVolumeRange + " maxVolume = " + maxVolumeRange);
        // console.log(" video volume = " + volume);
        videoPlayer.volume = volume;
        // console.log(" video volume = " + videoPlayer.volume);
        // const volumeRange = volume*100;
        // videoVolume.value = curVolumeRange;
    };

    videoPlayer.addEventListener("click", toggleVideoPlay);
    videoButtonPlay.addEventListener("click", toggleVideoPlay);

    videoPlayer.addEventListener("play", toggleButtonIcon);
    videoPlayer.addEventListener("pause", toggleButtonIcon);

    videoButtonStop.addEventListener("click", stopPlay);

    videoPlayer.addEventListener("timeupdate", () => {
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;
        // console.log(" duration = " + duration);
        // console.log(" current time = " + currentTime);

        videoProgress.value = (currentTime / duration) * 100;

        let minutesPassed = Math.floor(currentTime/60);
        // let secondsPassed = Math.floor(currentTime - minutePassed*60);
        let secondsPassed = Math.floor(currentTime % 60);

        let minutesTotal = Math.floor(duration/60);
        let secondsTotal = Math.floor(duration % 60);
        // console.log(" minutes Passed = " + minutesPassed + " seconds Passed = " + secondsPassed);
        // console.log(" minutes Total = " + minutesTotal + " seconds Total = " + secondsTotal);

        // videoTimePassed.textContent = addZeroToTime(minutesPassed) + ":" + addZeroToTime(secondsPassed);
        // videoTimeTotal.textContent = addZeroToTime(minutesTotal) + ":" + addZeroToTime(secondsTotal);
        videoTimePassed.textContent = `${addZeroToTime(minutesPassed)}:${addZeroToTime(secondsPassed)}`;
        videoTimeTotal.textContent = `${addZeroToTime(minutesTotal)}:${addZeroToTime(secondsTotal)}`;
    });

    videoProgress.addEventListener("input", () => {
        const duration = videoPlayer.duration;
        const progressValue = videoProgress.value;
        // console.log(" progress = " + progressValue);
        videoPlayer.currentTime = (progressValue * duration) / 100;
    });

    videoVolume.addEventListener("input", () => {
        const maxVolumeRange = videoVolume.max;
        const currentVolumeRange = videoVolume.value;
        changeVideoVolume(currentVolumeRange, maxVolumeRange);
        // videoPlayer.volume = currentVolume / maxVolume;
    });

    videoVolumeDown.addEventListener("click", () => {
        const maxVolumeRange = videoVolume.max;
        if (savedVolume < 0.05) {
            savedVolume = videoPlayer.volume;
            changeVideoVolume(0, maxVolumeRange);
            videoVolume.value = 0;

        } else {
            console.log(" saved volume = " + savedVolume);
            changeVideoVolume(savedVolume*100, maxVolumeRange);
            videoVolume.value = savedVolume*100;
            savedVolume = 0;
        }
    });

    videoVolumeUp.addEventListener("click", () => {
        const maxVolumeRange = videoVolume.max;
        if (savedVolume < 0.05) {
            savedVolume = videoPlayer.volume;
            changeVideoVolume(maxVolumeRange, maxVolumeRange);
            videoVolume.value = maxVolumeRange;
        } else {
            changeVideoVolume(savedVolume*100, maxVolumeRange);
            videoVolume.value = savedVolume*100;
            savedVolume = 0;
        }
    });

    videoVolumeOff.addEventListener("click", () => {
        const maxVolumeRange = videoVolume.max;
        // if (videoPlayer.volume < 0.1) {
         if (savedVolume > 0.05) {
            changeVideoVolume(savedVolume*100, maxVolumeRange);
            savedVolume = 0;
        } else {
            savedVolume = videoPlayer.volume;
            changeVideoVolume(0, maxVolumeRange);
        }
    });

    videoFullscreen.addEventListener("click", () => {
        videoPlayer.requestFullscreen();
    });

    videoPlayer.addEventListener("volumechange", () => {
        videoVolume.value = videoPlayer.volume * 100;
    });

    
    
    //for setting starting volume
    changeVideoVolume(videoVolume.value, videoVolume.max);

};


