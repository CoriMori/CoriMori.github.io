"use strict";

let sportImages = [
    "blaSport_1.png",
    "blaSport_2.png",
    "blaSport_3.png",
];

let rubbleImages = [
    "rubble_1.png",
    "rubble_2.png",
    "rubble_3.png",
    "rubble_4.png"
];
let repairImages = [
    "blaRepair_1.png",
    "blaRepair_2.png",
    "blaRepair_3.png",
    "blaRepair_4.png",
    "blaRepair_5.png",
    "blaRepair_6.png",
];
let dollImages = [
    "doll_1.png",
    "doll_2.png",
    "doll_3.png",
    "doll_4.png",
    "doll_5.png",
    "doll_6.png",
    "doll_7.png",
];
let metImages = [
    "met_1.png",
    "met_2.png",
    "met_3.png",
    "met_4.png"
];
let qtImages = [
    "qt_1.png",
    "qt_2.png",
    "qt_3.png",
];

function getRandomImage(pArray, pId){
    let index = Math.floor(Math.random() * pArray.length);
    let img = pArray[index];
    let path = "../client/public/images/";
    document.querySelector("#" + pId).src = path + img;
}

function onSwap(pId) {
    let array = [];
    switch (pId) {
        case "blazeSports":
            array = sportImages;
            break;
        case "rubbleRepair":
            array = rubbleImages;
            break;
        case "blazeRepair":
            array = repairImages;
            break;
        case "dollhouse":
            array = dollImages;
            break;
        case "met":
            array = metImages;
            break;
        case "quietThoughts":
            array = qtImages;
            break;
    }
    getRandomImage(array, pId);
}

$("#carouselMain").on("slide.bs.carousel", (caro) => {
    if (caro.relatedTarget.children[0].id != '') {
        onSwap(caro.relatedTarget.children[0].id);        
    }
});
$("#carouselMain").carousel({
    interval: 4000
});
