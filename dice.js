
console.log('this is dice proframm')
let xx = document.getElementById('diceout');
let aa = document.getElementById('dicein');
aa.addEventListener('click', function (fun1) {
    ff = window.getComputedStyle(aa).backgroundColor;//give the color of dicein
    bb = document.getElementById('dicenum')
    cc = bb.innerText;



    // r1=254*Math.random();
    // r2=Math.round(r1);
    // g1=254*Math.random();
    // g2=Math.round(g1);
    // b1=254*Math.random();
    // b2=Math.round(b1);
    // console.log(r2);
    // console.log(g2);
    // console.log(b2);
    // aa.style.backgroundColor=(`rgb(${r2},${g2},${b2})`);
    // bb.style.color=(`rgb(${g2},${b2},${r2}`);





    if (ff == "rgb(255, 0, 0)") {
        aa.style.background = ('rgb(0, 170, 0)')
    }
    else {
        aa.style.background = ('rgb(255, 0, 0)')

    }

    dd = 5 * Math.random();
    ee = Math.round(dd);

    if (ee == 0) {
        bb.innerText = ee + 1;
    }
    else if (ee == 1) {
        bb.innerText = ee + 1;
    }
    else if (ee == 2) {
        bb.innerText = ee + 1;
    }
    else if (ee == 3) {
        bb.innerText = ee + 1;
    }
    else if (ee == 4) {
        bb.innerText = ee + 1;
    }
    else if (ee == 5) {
        bb.innerText = ee + 1;
    }

});

// location.reload();


var x = document.getElementById("myAudio");
function playAudio() {
    x.play();
}
