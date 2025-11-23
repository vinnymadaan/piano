document.addEventListener("keydown", function(dets){
    const letter = dets.code.slice(-1).toUpperCase()
    console.log(letter);
    
    const keyEl = document.querySelector("." + letter)
    if (!keyEl) return;

    keyEl.style.backgroundColor = "#FEF3C7"
    setTimeout((pressed) => {
        keyEl.style.backgroundColor = "#fff"
    }, 120);
    
    const aud = `./audio/${letter}.mp3`;

    const sound = new Audio(aud);
    sound.currentTime = 0
    sound.play().catch(console.warn)
})





