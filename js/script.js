// Toggle class active untuk Hamburger Menu
const navbarNav = document.querySelector('.navbar-nav');
//Ketikaa hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
})

// Modal Box 1
const itemDetailModal1 = document.querySelector('#penjelasan1');
const itemDetailButton1 = document.querySelector('.menu-card-img1');
itemDetailButton1.onclick = (e) =>{
        itemDetailModal1.style.display = 'flex';
        e.preventDefault();
    }
// Klik tombol close modal
document.querySelector('.modal1 .close-icon').onclick = (e) =>{
    itemDetailModal1.style.display = 'none';
    e.preventDefault();
}
// Klik diluar modal
itemDetailModal1.onclick = (e) => {
    if (e.target === itemDetailModal1){
        itemDetailModal1.style.display = 'none';
    }
}
// Modal Box 2
const itemDetailModal2 = document.querySelector('#penjelasan2');
const itemDetailButton2 = document.querySelector('.menu-card-img2');
itemDetailButton2.onclick = (e) =>{
        itemDetailModal2.style.display = 'flex';
        e.preventDefault();
    }
// Klik tombol close modal
document.querySelector('.modal2 .close-icon').onclick = (e) =>{
    itemDetailModal2.style.display = 'none';
    e.preventDefault();
}
// Klik diluar modal
itemDetailModal2.onclick = (e) => {
    if (e.target === itemDetailModal2){
        itemDetailModal2.style.display = 'none';
    }
}
// Modal Box 3
const itemDetailModal3 = document.querySelector('#penjelasan3');
const itemDetailButton3 = document.querySelector('.menu-card-img3');
itemDetailButton3.onclick = (e) =>{
        itemDetailModal3.style.display = 'flex';
        e.preventDefault();
    }
// Klik tombol close modal
document.querySelector('.modal3 .close-icon').onclick = (e) =>{
    itemDetailModal3.style.display = 'none';
    e.preventDefault();
}
// Klik diluar modal
itemDetailModal3.onclick = (e) => {
    if (e.target === itemDetailModal3){
        itemDetailModal3.style.display = 'none';
    }
}
// Modal Box 4
const itemDetailModal4 = document.querySelector('#penjelasan4');
const itemDetailButton4 = document.querySelector('.menu-card-img4');
itemDetailButton4.onclick = (e) =>{
        itemDetailModal4.style.display = 'flex';
        e.preventDefault();
    }
// Klik tombol close modal
document.querySelector('.modal4 .close-icon').onclick = (e) =>{
    itemDetailModal4.style.display = 'none';
    e.preventDefault();
}
// Klik diluar modal
itemDetailModal4.onclick = (e) => {
    if (e.target === itemDetailModal4){
        itemDetailModal4.style.display = 'none';
    }
}
// Modal Box 5
const itemDetailModal5 = document.querySelector('#penjelasan5');
const itemDetailButton5 = document.querySelector('.menu-card-img5');
itemDetailButton5.onclick = (e) =>{
        itemDetailModal5.style.display = 'flex';
        e.preventDefault();
    }
// Klik tombol close modal
document.querySelector('.modal5 .close-icon').onclick = (e) =>{
    itemDetailModal5.style.display = 'none';
    e.preventDefault();
}
// Klik diluar modal
itemDetailModal5.onclick = (e) => {
    if (e.target === itemDetailModal5){
        itemDetailModal5.style.display = 'none';
    }
}
// Modal Box 6
const itemDetailModal6 = document.querySelector('#penjelasan6');
const itemDetailButton6 = document.querySelector('.menu-card-img6');
itemDetailButton6.onclick = (e) =>{
        itemDetailModal6.style.display = 'flex';
        e.preventDefault();
    }
// Klik tombol close modal
document.querySelector('.modal6 .close-icon').onclick = (e) =>{
    itemDetailModal6.style.display = 'none';
    e.preventDefault();
}
// Klik diluar modal
itemDetailModal6.onclick = (e) => {
    if (e.target === itemDetailModal6){
        itemDetailModal6.style.display = 'none';
    }
}
// Modal Box 7
const itemDetailModal7 = document.querySelector('#penjelasan7');
const itemDetailButton7 = document.querySelector('.menu-card-img7');
itemDetailButton7.onclick = (e) =>{
        itemDetailModal7.style.display = 'flex';
        e.preventDefault();
    }
// Klik tombol close modal
document.querySelector('.modal7 .close-icon').onclick = (e) =>{
    itemDetailModal7.style.display = 'none';
    e.preventDefault();
}
// Klik diluar modal
itemDetailModal7.onclick = (e) => {
    if (e.target === itemDetailModal7){
        itemDetailModal7.style.display = 'none';
    }
}
// Modal Box 8
const itemDetailModal8 = document.querySelector('#penjelasan8');
const itemDetailButton8 = document.querySelector('.menu-card-img8');
itemDetailButton8.onclick = (e) =>{
        itemDetailModal8.style.display = 'flex';
        e.preventDefault();
    }
// Klik tombol close modal
document.querySelector('.modal8 .close-icon').onclick = (e) =>{
    itemDetailModal8.style.display = 'none';
    e.preventDefault();
}
// Klik diluar modal
itemDetailModal8.onclick = (e) => {
    if (e.target === itemDetailModal8){
        itemDetailModal8.style.display = 'none';
    }
}
// Modal Box 9
const itemDetailModal9 = document.querySelector('#penjelasan9');
const itemDetailButton9 = document.querySelector('.menu-card-img9');
itemDetailButton9.onclick = (e) =>{
        itemDetailModal9.style.display = 'flex';
        e.preventDefault();
    }
// Klik tombol close modal
document.querySelector('.modal9 .close-icon').onclick = (e) =>{
    itemDetailModal9.style.display = 'none';
    e.preventDefault();
}
// Klik diluar modal
itemDetailModal9.onclick = (e) => {
    if (e.target === itemDetailModal9){
        itemDetailModal9.style.display = 'none';
    }
}
// Modal Box 10
const itemDetailModal10 = document.querySelector('#penjelasan10');
const itemDetailButton10 = document.querySelector('.menu-card-img10');
itemDetailButton10.onclick = (e) =>{
        itemDetailModal10.style.display = 'flex';
        e.preventDefault();
    }
// Klik tombol close modal
document.querySelector('.modal10 .close-icon').onclick = (e) =>{
    itemDetailModal10.style.display = 'none';
    e.preventDefault();
}
// Klik diluar modal
itemDetailModal10.onclick = (e) => {
    if (e.target === itemDetailModal10){
        itemDetailModal10.style.display = 'none';
    }
}
// Modal Box 11
const itemDetailModal11 = document.querySelector('#penjelasan11');
const itemDetailButton11 = document.querySelector('.menu-card-img11');
itemDetailButton11.onclick = (e) =>{
        itemDetailModal11.style.display = 'flex';
        e.preventDefault();
    }
// Klik tombol close modal
document.querySelector('.modal11 .close-icon11').onclick = (e) =>{
    itemDetailModal11.style.display = 'none';
    e.preventDefault();
}
// Klik diluar modal
itemDetailModal11.onclick = (e) => {
    if (e.target === itemDetailModal11){
        itemDetailModal11.style.display = 'none';
    }
}
// Modal Box 12
const itemDetailModal12 = document.querySelector('#penjelasan12');
const itemDetailButton12 = document.querySelector('.menu-card-img12');
itemDetailButton12.onclick = (e) =>{
        itemDetailModal12.style.display = 'flex';
        e.preventDefault();
    }
// Klik tombol close modal
document.querySelector('.modal12 .close-icon12').onclick = (e) =>{
    itemDetailModal12.style.display = 'none';
    e.preventDefault();
}
// Klik diluar modal
itemDetailModal12.onclick = (e) => {
    if (e.target === itemDetailModal12){
        itemDetailModal12.style.display = 'none';
    }
}