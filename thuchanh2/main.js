// thuc hanh DOM 2:
// thuc hanh DOM 2:

// Cho danh sách những đồ đạc ở phía dưới:
// Backpack,MiBand watch,Ring
// 1.1 Trong JS, tạo một biến có tên là items để lưu trữ toàn bộ data ở phía trên, log ra trong màn hình console biến đó
// 1.2.Trong file HTML, tạo một thẻ < ul > với một vài items test có sẵn.
// 1.3.Lấy thẻ list đó ra
// 1.4.Lấy toàn bộ data có trong items, mỗi item là một thẻ < li >.Xóa các items test ở trong HTML
// 1.5.Cập nhật lại HTML theo UI sau:
// 1.6.Lấy ra thẻ ‘New item’ input và thẻ ‘Add’ button
// 1.7.Bắt sự kiện click của ‘Add‘ button
// 1.8.Khi sự kiện click của ‘Add’ button được thực hiện, lấy ra value có trong ‘New item’ input
// 1.9.Khi sự kiện ‘Add’ button được thực thi, thêm value mới của ‘New item’ input vào mảng items
// 1.10.Cập nhật UI(HTML) để đồng nhất với mảng items
// 1.11.Reset lại input sau khi thêm phần tử mới
// 1.12.Thêm nút remove button cho mỗi item(nút xoá)
// 1.13.Gắn sự kiện xoá cho mỗi ‘remove’ ‘buttons’
// 1.14.Mỗi lần click vào ‘remove’ button, xác định chỉ số(index) của item được click
// 1.15.Xoá items dựa vào chỉ số index
// 1.16.Cập nhật UI(HTML) để đồng nhất với mảng items

// let items = ["Backpack", "MiBand watch", "Ring"]
// console.log(items);
// let list = document.getElementById("list")
// console.log(list);

// function veListItems(items) {
//     for (let i = 0; i < items.length; i++) {
//         // ý nghĩa: insertAdjacentHTML là hàm cho phép ghi thêm HTMl
//         // beforeend: là ghi vào trong thẻ cha
//         // `<li>${items[i]}</li>`: là thẻ con muốn ghi vào
//         list.insertAdjacentHTML("beforeend", `<li>${items[i]} <button onclick="xoa(${i})">Remove</button></li>`)
//     }
// }
// veListItems(items)

// // xóa item test
// // list.children[0].remove()
// // list.children[1].remove()

// // lấy ra ô input và nút add
// let inputText = document.getElementById("input_text")
// console.log(inputText);
// let btnAdd = document.getElementById("btn_add")
// console.log(btnAdd);

// // bắt sự kiện cho nút add
// btnAdd.addEventListener("click", () => {
//     items.push(inputText.value)
//     list.innerHTML = "" // xoa tat ca trong ul
//     veListItems(items)
//     inputText.value = ""
// })

// function xoa(vitri) {
//     items.splice(vitri, 1) // xoa trong mang items
//     list.innerHTML = "" // xoa tat ca trong ul
//     veListItems(items)
//     console.log(items);
// }



//   //   //   hiện đã thêm vào giỏ hàng
//   //   //   hiện đã thêm vào giỏ hàng
//   //   //   hiện đã thêm vào giỏ hàng
function addToCart(productName, price) {
    // Thêm sản phẩm vào giỏ hàng
    // Ở đây chỉ hiển thị thông báo đơn giản
    alert(`Đã thêm ${productName} vào giỏ hàng. Giá: $${price}`);
}
