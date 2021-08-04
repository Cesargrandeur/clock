setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minHand = document.querySelector('[data-min-hand]')
const secsHand = document.querySelector('[data-secs-hand]')

function setClock(){
    const currentDate = new Date();
    const secsRatio = currentDate.getSeconds() / 60;
    const minRatio = (secsRatio + currentDate.getMinutes())/60
    const hourRatio = (minRatio + currentDate.getHours()) / 12
    setRotation(secsHand,secsRatio)
    setRotation(minHand,minRatio)
    setRotation(hourHand,hourRatio)
}


function setRotation(element, rotationRatio){
    element.style.setProperty("--rotatation", rotationRatio * 360)
}

setClock()

