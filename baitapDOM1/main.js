// bai tap 3.1
// Khi click vào nút “Hide text”, dòng chữ sẽ được ẩn đi
// Khi click vào nút “Show text”, dòng chữ sẽ được hiện ra
// let a = document.querySelector(".Hidetext")
// let b = document.querySelector(".Showtext")
// let h3 = document.querySelector("h3")

// a.onclick = function () {
//     h3.style.display = "none"

// }
// b.onclick = function () {
//     h3.style.display = "flex"
// }



// bai tap 3.2
// Khi click vào nút Open Modal, một hộp chứa dòng text “Some text in the Modal”
// Khi click vào nút “x” hoặc màn hình tối xung quanh và Modal ở trên phải ẩn đi
// sẽ được hiển thị ra và màn hình xung quanh phải tối đi
// let button = document.querySelector(".open");
// let close = document.querySelector(".close");
// let box2 = document.querySelector(".box2");

// close.onclick = function () {
//     box2.style.display = "none"
// }

// button.onclick = function () {
//     box2.style.display = "flex"
// }



// bai tap 3.3
// Khi hơ chuột đi qua ô vuông nào, background phải đổi màu sắc theo ô vuông đó
let change = document.querySelector(".change")
let boxA = document.querySelector(".boxA")
let boxB = document.querySelector(".boxB")
let boxC = document.querySelector(".boxC")
// 
boxA.addEventListener('mouseover', function () {
    change.style.background = "red"
})
boxA.addEventListener('mouseout', function () {
    change.style.background = "none"
})
// 
boxB.addEventListener('mouseover', function () {
    change.style.background = "blue"
})
boxB.addEventListener('mouseout', function () {
    change.style.background = "none"
})
// 
boxC.addEventListener('mouseover', function () {
    change.style.background = "yellow"
})
boxC.addEventListener('mouseout', function () {
    change.style.background = "none"
})
let mycolor = setInterval(aaa, 200)
function aaa() {
    let x = document.body
    x.style.backgroundcolor = x.style.backgroundcolor == "red" ? "blue" : "red";
}