// script.js

// 定义全局变量
var audioPlayer;  // 用于存储音频播放器对象
var currentMusicIndex = 0;  // 当前播放的音乐索引

// 等待DOM内容完全加载后执行
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM 已完全加载");

    // 初始化音乐播放器
    initMusicPlayer();
});

function initMusicPlayer() {
    console.log("初始化音乐播放器");

    // 创建audio元素并设置其控件属性
    audioPlayer = document.createElement("audio");
    audioPlayer.controls = true;

    // 创建source元素并设置其默认的src和type属性
    var defaultSource = document.createElement("source");
    defaultSource.src = "music/music1.mp3";  // 默认播放第一首歌曲
    defaultSource.type = "audio/mpeg";

    // 将source元素添加到audio元素中
    audioPlayer.appendChild(defaultSource);

    // 将audio元素添加到音乐播放器容器中
    var musicPlayerContainer = document.getElementById("musicPlayer");
    musicPlayerContainer.appendChild(audioPlayer);
}

function changeMusic() {
    var musicFiles = ["music1.mp3", "music2.mp3", "music3.mp3"];

    // 确保索引在合法范围内
    currentMusicIndex = (currentMusicIndex + 1) % musicFiles.length;

    // 更新audio元素的source src属性
    audioPlayer.src = "music/" + musicFiles[currentMusicIndex];
    audioPlayer.play();  // 切换后自动播放
}
