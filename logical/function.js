// Show dropdown menu 

function showDrowpDownMenu () {
    itemMenu.style = "display:block"
}

function unShowDownMenu() {
    itemMenu.style = "display:none"
}


// Show text onload 

function showSpanHead (){
    spanShow_h.style ='opacity:1'
}
function showHeadHead (){
    headShow_h.style ='opacity:1'
}
function showPhrHead(){
    phrShow_h.style ='opacity:1'
}
function btnSpanHead() {
    btnShow_h.style ='opacity:1'
}

function showTextHead () {
    setTimeout(showSpanHead,3300)
    setTimeout(showHeadHead,3600)
    setTimeout(showPhrHead,3900)
    setTimeout(btnSpanHead,4200)
}

// Show text onscroll 

function showTextFirst() {
    showText.style ='opacity:1'
}

function showTextFunc(){
    setTimeout(showTextFirst, 1000)
}

function showTextSecond(){
    functionalityPhr.style="opacity:1"
}

function showTextFuncSecond(){
    setTimeout(showTextSecond, 2000)
}