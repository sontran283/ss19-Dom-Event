// thực hành 1.1
// let container = document.getElementById("list");
// for (let i = 0; i < 3; i++) {
//     container.insertAdjacentHTML('beforebegin', `<li>${i}</li>`)
//     container.insertAdjacentHTML('afterbegin', `<li>${i}</li>`)
//     container.insertAdjacentHTML('beforeend', `<li>${i}</li>`)
//     container.insertAdjacentHTML('afterend', `<li>${i}</li>`)
// }



// thuc hanh 1.2
// Thay vì sử dụng setTimeOut để tạo ra một timer, ta có thể sử dụng setInterval để code có thể ngắn hơn
// let myTimeout = setTimeout(aaa, 3000);
// function aaa() {
//     document.getElementById("demo").innerHTML = "hello word";
// }
// function stop() {  // dùng để dừng hàm setTimeOut.
//     clearTimeout(myTimeout);
// }

// let myInterval = setInterval(bbb, 200);
// function bbb() {
//     let x = document.body;
//     x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "blue" : "yellow";
//     // document.getElementById("demo").innerHTML = "hello";
// }
// function stopcolor() {
//     clearInterval(myInterval);
// }



// thuc hanh 1.4
// Sử dụng getElementsByTagName lấy toàn bộ thẻ <li>
// let toanbothe = document.getElementsByTagName("li");
// console.log(toanbothe);
// // Sau đó in (log) phần tử đầu tiên (<li>Articles</li>)
// let phantudautien = document.querySelector("li");
// console.log(phantudautien);
// // Sau đó sử dụng for loop để in toàn bộ các phần tử có trong collection <li> lấy được.
// let layra = document.querySelectorAll("li")
// console.log(layra);



// thuc hanh 1.5
// Sử dụng getElementsByTagName lấy toàn bộ thẻ <div>
// let toanbothe = document.getElementsByTagName("div")
// console.log(toanbothe);
// // Sau đó in ra phần tử đầu tiên
// console.log(toanbothe[1].textContent);
// console.log(toanbothe[2].textContent);
// console.log(toanbothe[3].textContent);
// // Sau đó sử dụng for loop để in toàn bộ các phần tử có trong collection < div > lấy được.
// let divs = document.querySelectorAll("div")
// for (let i = 0; i < divs.length; i++) {
//     console.log(divs[i].innerHTML);
// }



// thuc hanh 1.6
// Học cách xoá một HTMLElement sử dụng HTMLElement.remove()
// let element = document.getElementById("div-02");
// element.remove();



// thuc hanh 1.7
//  Sử dụng addEventListener, ở trong hàm callback function thêm một parameter để lấy ra toàn bộ thông tin
//  về sự kiện mà ta vừa gắn cho HTML element đó:
// let button = document.getElementById("button");
// function aaa() {
//     console.log("Button clicked!");
// }
// button.addEventListener("click", aaa);



// thuc hanh 1.8
// Viết một function, sử dụng alert để in ra tên bạn và điều bạn muốn ước trong năm nay
// function dieuUocCuaToi() {
//     let name = "SƠN"
//     let wish = "mong muốn được hoàn thành khóa học lập trình"
//     alert("Tôi là" + " " + `${name}` + " " + `${wish}` + " " + "theo đúng dự kiến của tôi")
// }
// dieuUocCuaToi();



// thuc hanh 1.9
// Viết một function, sử dụng alert để in ra name của người dùng và wish của người dùng trong năm nay, name và wish là parameters của function
// function dieuUocCuaToi(name, wish) {
//     alert("Tôi là" + " " + name + " " + wish + " " + "theo đúng dự kiến của tôi");
// }
// dieuUocCuaToi("SƠN", "mong muốn được hoàn thành khóa học lập trình");



// thuc hanh 1.10
// Viết một function, sử dụng alert để in ra name của người dùng và wish của người dùng trong năm nay,
// name và wish là parameters của function. Validate trường hợp wish bị truyền thiếu trong function
// function dieuUocCuaToi(name, wish) {
//     if (!wish) {
//         wish = prompt("nhập điều ước của bạn");
//         alert("Tôi là" + " " + name + " " + wish + " " + "theo đúng dự kiến của tôi")
//     }   // alert o trong hay ben ngoai if deu duoc.
// }
// dieuUocCuaToi("SƠN")