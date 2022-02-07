let currentTime = ()=>{
    const footers = document.getElementById("footer");
    let past = Date.now();
    let time = new Date(past);
    footers.innerHTML = time.toString();
    setTimeout(function(){ currentTime() }, 100);
}
currentTime();