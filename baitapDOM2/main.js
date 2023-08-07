// bai tap dom2.
// Tạo ra một đồng hồ số hiển thị thời gian: Giờ - Phút - Giây
// Yêu cầu đồng hồ chạy với thời gian thực
// Sau mỗi 5 phút sẽ bật một bài hát
// Sau mỗi 10 phút sẽ đổi ảnh nền
// Tạo ra một đồng hồ số hiển thị thời gian: Giờ - Phút - Giây
// Đồng hồ đếm ngược trong 10 phút
// Sau mỗi 10 giây sẽ xuất hiện 1 con gà trên màn hình(kích thước to hoặc nhỏ)
// Nếu hover vào con gà sẽ xuất hiện viền xanh
// Nếu click vào con gà sẽ được 10 điểm

// bai 1
// bai 1
// c1: tao dong ho:
// let mylet = setInterval(myTimer, 1000);
// function myTimer() {
//     let d = new Date();
//     let t = d.toLocaleTimeString();
//     document.getElementById("dong ho 1").innerHTML = t;
// }
// function stopclock() {
//     clearInterval(mylet);
// }

// c2:
// let gio = document.getElementById("gio")
// let phut = document.getElementById("phut")
// let giay = document.getElementById("giay")

// let thoigian = new Date()

// //
// let idclock = setInterval(() => {
//     thoigian = new Date()
//     gio.innerHTML = thoigian.getHours();
//     phut.innerHTML = thoigian.getMinutes();
//     giay.innerHTML = thoigian.getSeconds();
// }, 1000)
// function stopclock() {
//     clearInterval(idclock);
// }

// //
// let idchao = setInterval(() => {
//     console.log("hello word");
// }, 2000)
// function stopchao() {
//     clearInterval(idchao);
// }

// //
// let idmau = setInterval(() => {
//     // c1:
//     // let mau = 100 + Math.floor(Math.random() * 899)
//     // console.log(mau);
//     // document.getElementById("anh_nen_1").style.background = `#333`
//     // c2:
//     let x = document.getElementById("anh_nen_1")
//     x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "blue" : "yellow";
// }, 2000)
// function stopmau() {
//     clearInterval(idmau);
// }
// function restartInterval() {
//     stopmau(clearInterval);
// }


// bai 2
// bai 2
let gio = document.getElementById("gio2")
let phut = document.getElementById("phut2")
let giay = document.getElementById("giay2")
let diem = document.getElementById("diem")

let giobandau = 0;
let phutbandau = 1;
let giaybandau = 5;
let diembandau = 0;

gio.innerHTML = giobandau;
phut.innerHTML = phutbandau;
giay.innerHTML = giaybandau;

let id = setInterval(() => {
    if (giaybandau == 0) {
        giaybandau = 59
        phutbandau--
    } else {
        giaybandau--
    }
    if (giaybandau == 0 && phutbandau == 0 && giaybandau == 0) {
        clearInterval(id)
    }

    gio.innerHTML = giobandau;
    phut.innerHTML = phutbandau;
    giay.innerHTML = giaybandau;
}, 1000)

let ga = document.getElementById("ga")

ga.addEventListener('mouseover', () => {
    ga.style.border = `1px solid blue`
})

ga.addEventListener('mouseout', () => {
    ga.style.border = `1px solid black`
})

ga.addEventListener('click', () => {
    diembandau += 10
    diem.innerHTML = diembandau
    ga.style.display = "none"
})

let kichthuoc;
setInterval(() => {
    kichthuoc = 100 + Math.floor(Math.random() * 100)
    document.getElementById("ga").style.width = `${kichthuoc}px`
    document.getElementById("ga").style.height = `${kichthuoc}px`
}, 3000)
