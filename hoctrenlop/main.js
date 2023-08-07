//kiem tra san pham da co trong do hang hay chua
// let idmax = carts[0].id;
// for (let i = 1; i < carts.length; i++) {
//     if (idmax < carts[i].id) {
//         carts[i].id = idmax;
//     }
// }
// return idmax + 1;



// DOM - document object model
// DOM - document object model
// DOM - document object model
//      truy cap 1 phan tu cua dom bang js
//      truy cap 1 phan tu cua dom bang js
//      truy cap 1 phan tu cua dom bang js

// truy cap qua id
// let table = document.getElementById("table")
// console.log(table);
// // truy cap thong qua class
// let tds = document.getElementsByClassName("td")
// console.log(tds);

// // truy cap thong qua ten the
// let trs = document.getElementsByTagName("tr")
// console.log(trs);

// // truy cap thong qua bo chon cua CSS
// let td = document.querySelectorAll("td.td")
// console.log(td);  // lay ra tat ca cac the co id la td
// // let td = document.querySelector("td.td")
// // console.log(td);   // chi lay ra 1 the co id la td


//           cach di chuyen vi tri cua phan tu
//           cach di chuyen vi tri cua phan tu
//           cach di chuyen vi tri cua phan tu
//    di chuyen ve node cha
//    di chuyen ve node cha
// let pp = document.querySelector(".box > p");
// console.log(pp);

// let p = document.querySelector(".box > p");
// console.log(p.previousElementSibling);  // lấy ra thẻ trước nó

// let p = document.querySelector(".box p");
// console.log(p.nextElementSibling);  // la ra the tiep theo

// let box = document.querySelector(".box h2").parentNode;
// console.log(box);

// console.log(document.querySelector("tr").firstElementChild);
// console.log(document.querySelector("tr").lastElementChild);

// //
// console.log(document.querySelector("tr").parentNode.nextElementSibling.firstElementChild.lastElementChild);

//                  lay ra 1 the co id la box
// let box = document.querySelector(".box");
// console.log(box);


//                  Sự kiện với chuột
//                  Sự kiện với chuột
//          bắt sự kiện cho 1 cái ô
//          bắt sự kiện cho 1 cái ô
//          bắt sự kiện cho 1 cái ô
// let box = document.querySelector(".btn");
// console.log(box);
// box.addEventListener("dblclick", function () {
//     alert("ban vua dblclick vao the div.btn")
// })
// mousedown/mouseup Nút chuột được nhấp/nhả trên một phần tử
// mouseover/mouseout Con trỏ chuột đi qua/ra khỏi một phần tử
// mousemove Mỗi con chuột di chuyển qua một phần tử sẽ kích hoạt sự kiện đó
// click      dblclick      contextmenu



//                  Sự kiện với bàn phím
//                  Sự kiện với bàn phím
// keydown__Kích hoạt khi bạn nhấn một phím trên bàn phím và kích hoạt liên tục trong khi bạn đang giữ
// phím.
// keyup__Kích hoạt khi bạn thả một phím trên bàn phím
// keypress__Kích hoạt khi bạn nhấn một bàn phím ký tự như a, b hoặc c, không phải phím mũi tên trái,
//     bàn phím home hoặc end, … Phím nhấn cũng kích hoạt liên tục trong khi bạn giữ phím trên
// bàn phím.

// window.addEventListener("keydown", function (e) {
//     console.log("ban vua an phim" + e.keycode); //  e.keycode   or   e.key
// })

// window.addEventListener("keyup", function (e) {
//     console.log("ban vua an phim" + e.keycode);
// })

// window.addEventListener("keypress", function (e) {
//     console.log("ban vua an phim" + e.keycode);
// })

//                   Làm việc với con lăn
//                   Làm việc với con lăn
// window.addEventListener("scroll", function (e) {
// console.log("ban vua cuon trang");
// })



//  setTimeOut__thực thi một hàm sau một khoảng thời gian nhất định
//  setInterval__để lập lịch cho việc thực thi một hàm lặp đi lặp lại sau một khoảng thời gian nhất định
// let myTimeout = setTimeout(aaa, 3000);
// function aaa() {
//     document.getElementById("demo").innerHTML = "Happy Birthday!"
// }





///////////////////////////
///////////////////////////
let inputelement = document.querySelector('input[type="text"]')

inputelement.onkeydown = function (e) {
    console.log(e);
}


