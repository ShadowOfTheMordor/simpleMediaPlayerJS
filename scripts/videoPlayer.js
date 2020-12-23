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
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    };

    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }

    const addZeroToTime = (number) => number < 10 ? '0' + String(number) : String(number);

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

    videoProgress.addEventListener("change", () => {
        const duration = videoPlayer.duration;
        const progressValue = videoProgress.value;
        // console.log(" progress = " + progressValue);
        videoPlayer.currentTime = (progressValue * duration) / 100;
    });
};


