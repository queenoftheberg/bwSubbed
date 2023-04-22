/* b w     b u i l d - home page */
function chooseConst() {
    document.getElementById("sv-const").className = "ovalsee";
    document.getElementById("sv-paint").className = "ovalniks";
    document.getElementById("sv-secure").className = "ovalniks";
    document.getElementById("sv-const-text").className = "serv-text";
    document.getElementById("sv-paint-text").className = "serv-hide";
    document.getElementById("sv-secure-text").className = "serv-hide";
}
function choosePaint() {
    document.getElementById("sv-const").className = "ovalniks";
    document.getElementById("sv-paint").className = "ovalsee";
    document.getElementById("sv-secure").className = "ovalniks";
    document.getElementById("sv-const-text").className = "serv-hide";
    document.getElementById("sv-paint-text").className = "serv-text";
    document.getElementById("sv-secure-text").className = "serv-hide";
}
function chooseSecure() {
    document.getElementById("sv-const").className = "ovalniks";
    document.getElementById("sv-paint").className = "ovalniks";
    document.getElementById("sv-secure").className = "ovalsee";
    document.getElementById("sv-const-text").className = "serv-hide";
    document.getElementById("sv-paint-text").className = "serv-hide";
    document.getElementById("sv-secure-text").className = "serv-text";
}
/* gallery - mailto */
function cheek4hoo () {
    document.getElementById('hoo4').innerHTML = "mailto:admin@bwbuilding.co.za?subject='Online building enquiry'";
    /* <a href="mailto:testdummy@bwbuilding.co.za?subject=BW Building test enquiry" target="_blank" title="Contact us via email">Request a Callback</a> */
}
/* gallery2 - for buttons - not used for now */
function bigPicture(bigPic02) {
    const bacgalry = document.getElementById("back-gallery-modal");
    //const bigPic01 = '<img class="back-gallery-modal" src="';
    const bigPic00 ="<";
    const bigPic01 = 'img src="';
    const bigPic03 = '" alt="Pls notify webmaster of missing image ';
    const bigPic04 = '(copy / paste this msg)">';
    const bigTxt00b = '<h6>';
    const bigTxt04b = '</h6>'
    const bigTxtbr = "<br />";
    const bigPic = bigPic00 + bigPic01 + bigPic02 + bigPic03 + bigPic02 + bigPic04;
    bacgalry.innerHTML = bigPic;
    /*bacgalry.display = "block";*/
    document.getElementById("dummydiv").innerHTML = bigTxt00b + bigPic01 + bigPic02 + bigPic03 + bigPic02 + bigTxt04b;
}
function closePicture() {
    //document.getElementById("back-div").className = "back-gallery";
    document.getElementById("back-gallery-modal").innerHTML = "";
}