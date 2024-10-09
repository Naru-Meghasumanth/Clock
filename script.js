let hr = document.getElementById('hour')
let min = document.getElementById('minute')
let sec = document.getElementById('seconds')


function displayClock(){
    let date = new Date()

    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    let hRotation = 30*hh + mm/2
    let mRotation = 6*mm
    let sRotation = 6*ss

    hr.style.transform = `rotate(${hRotation}deg)`
    min.style.transform = `rotate(${mRotation}deg)`
    sec.style.transform = `rotate(${sRotation}deg)`
    // hr.style.boxShadow = `1px 10px 20px blue`
    // console.log(date.getTime())
    // b.style.padding =  '0 2px 6px 0';
    // b.style.boxshadow ='0 0 5px wheat';
    
    

    
}

setInterval(displayClock, 1000)