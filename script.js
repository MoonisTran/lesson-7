// căn bậc hai
let soDuong = prompt ("Nhập một số cần tính căn bậc hai")
if (soDuong >= 0) {
    console.log("Căn bậc hai bằng: ", Math.sqrt(soDuong));
}   else {
        console.log("Phép tính không thể thực hiện với một số âm");
}

//diện tích tam giác
let chieuCao = prompt ("Nhập chiều cao tam giác: ")
let canhHuyen = prompt ("Nhập chiều dài cạnh huyền: ")
console.log("Diện tích tam giác:", parseFloat(chieuCao) * parseFloat(canhHuyen) * 0.5);

//đổi độ F sang độ C
let doF = prompt ("Nhap độ F:")
console.log("Chuyển sang độ C là:", (doF - 32 ) / 1.8, "độ C" );

//KM SANG M
let km =prompt ("Nhập quãng đường km:")
console.log("Quãng đường theo đơn vị m:", km*1000);
