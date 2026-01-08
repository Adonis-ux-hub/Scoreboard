let HScore= document.getElementById('hscore')
let GScore = document.getElementById('gscore')
let hcount = 0
function hpoint1(){
    hcount += 1
    HScore.innerText = hcount
    console.log(hcount)
}

function hpoint2(){
    hcount += 2
    HScore.innerText = hcount
    console.log(hcount)
}

function hpoint3(){
    hcount += 3
    HScore.innerText = hcount
    console.log(hcount)
}
let gcount = 0
function gpoint1(){
    gcount += 1
    GScore.innerText = gcount
    console.log(gcount)
}

function gpoint2(){
    gcount += 2
    GScore.innerText = gcount
    console.log(gcount)
}

function gpoint3(){
    gcount += 3
    GScore.innerText = gcount
    console.log(gcount)
}