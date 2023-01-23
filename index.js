// function refreshWeder() {
//     jerElem = document.getElementById("jerusalem")
//     lonElem = document.getElementById("london")
//     yorkElem = document.getElementById("newYork")
//     yorkImgElem = document.getElementById("yorkImg")
//     weder('jerusalem').then(
//         (res)=>{jerElem.innerHTML = "jerusalem<br>" + res}
//     )
//     weder('london').then(
//         (res)=>{lonElem.innerHTML = "london<br>" + res}
//     )
//     weder('new york').then(
//         (res)=>{yorkElem.innerHTML = "new york<br>" + res
//                 if (res < -10) {
//                     yorkImgElem.src = "1.jpg"
//                 }else if (res in Range(-10,0)) {
                    
//                 }
//             }
//     )


// }   

function q() {
    weder()
    .then()
    .catch(Error())
}
    

async function weder() {
    ids = ['jerusalem','london','new%20york']
    for (let i = 0; i < ids.length; i++) {
        let temp = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + ids[i] + "&appid=9518a1bc69da2c5efb3e145e7226e60f") 
        let resj = await temp.json()
        let tempRes = parseInt(resj.main.temp - 273.15)
        console.log(tempRes)
        console.log(ids[i])
        elem1 = document.getElementById(ids[i] + "Label")
        elem2 = document.getElementById(ids[i] + "Img")
        elem1.innerHTML = ids[i]+"<br>"+ tempRes
        console.log(tempRes <= 10)
        switch (true) {
            case tempRes <= 15:
                elem2.src = "2.jpg";
                break
            case tempRes > 15:
                elem2.src = "4.jpg";
                break
        }
    }
}

function changecolor() {
    elemColor = document.body.style.backgroundColor
    if (elemColor == 'red') {
        document.body.style.backgroundColor = 'white'
        document.cookie = "backgroundColor = white"
    }else {
        document.body.style.backgroundColor = 'red'
        document.cookie = "backgroundColor = red"
    }
}

function Error(error) {
    ids = ['jerusalem','london','new%20york']
    for (let i = 0; i < ids.length; i++) {
        console.log(ids[i])
        elem1 = document.getElementById(ids[i] + "Label")
        elem1.innerHTML = error
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

function cookieColor() {
    color = getCookie("backgroundColor")
    if (! color) {
        document.cookie = "backgroundColor = white"
        color = "white"
    }
    document.body.style.backgroundColor = color
}


