let pianoKeys = document.querySelectorAll(".piano-keys .key"),
    volumeSlider = document.querySelector(".valume-slider input"),
    keysCheckbox = document.querySelector(".keys-checkbocks input");
let allKeys=[],
    audio = new Audio("tunes/a.wav")
const playTune = (key)=>{
    audio.src = `tunes/${key}.wav`;
    audio.play();
    let clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150);
}
pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key);
    key.addEventListener("click",()=>playTune(key.dataset.key));
})
const pressedKey = (e)=>{
    if(allKeys.includes(e.key)){
        playTune(e.key);
    }
}
const handleVolume = (e)=>{
    audio.volume = e.target.value;
}
const showHideKeys = ()=>{
    pianoKeys.forEach((e)=>{
        e.classList.toggle("hide")
    })
}
document.addEventListener("keydown",pressedKey);
volumeSlider.addEventListener("input" , handleVolume);
keysCheckbox.addEventListener("click",showHideKeys);