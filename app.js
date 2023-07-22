console.log("helko gamrs");
const hourHandle = document.querySelector(".hours__handle");
const minuteHandle = document.querySelector(".minutes__handle")
const secondHandle = document.querySelector(".seconds__handle")

console.log(secondHandle)

function setHandles () {
    const time = new Date();
    console.log(time);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    secondHandle.style.transform = `rotate(${seconds * 6}deg)`
    hourHandle.style.transform = `rotate(${hours * 30}deg)`
    minuteHandle.style.transform = `rotate(${minutes * 6}deg)`
    console.log(hours, minutes, seconds)

}

setInterval(setHandles, 1000)

