// Bài 1
/**
 * - Input: 
 *  + Lương 1 ngày: 100k
 *  + Số ngày làm: 5
 * 
 * - Process: Lương = Lương 1 ngày * Số ngày làm
 *
 * - Ouput: Lương
 */

 var luong1Ngay = 100000;
 document.getElementById("btn-send-ngayluong").onclick = function () {
   var soNgayLam = parseFloat(document.getElementById("soNgayLam").value);
   var luong = luong1Ngay * soNgayLam;

  var currentFormat = new Intl.NumberFormat("vn-VN");

   document.getElementById("ket-qua-luong").innerHTML = "Lương là: " + currentFormat.format(luong);
 }
 
 
 // Bài 2
 /**
  * -Input: 5 số thực
  * 
  * -Process: 
  *  + Tổng 5 số thực
  *  + Lấy tổng chia 5
  * 
  * -Ouput: Giá trị trung bình
  */
 
  document.getElementById("btn-send-trungbinh").onclick = function () {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var number3 = parseFloat(document.getElementById("number3").value);
    var number4 = parseFloat(document.getElementById("number4").value);
    var number5 = parseFloat(document.getElementById("number5").value);

    var tong = number1 + number2 + number3 + number4 + number5;
    var trungBinhCong = tong/5;
    
    document.getElementById("ket-qua-trungbinh").innerHTML = "Giá trị trung bình là: " + trungBinhCong;
  }

 
 // Bài 3
 /**
  * -Input:
  *  + Tỉ giá USD -> VND: 23.500
  *  + Số tiền USD
  * 
  * -Process:
  *  Tiền VND = Số tiền USD * Tỉ giá USD
  * 
  * -Output: 
  *  Tiền VND
  */
 
 var tiGia = 23500;
 document.getElementById("btn-send-sotien").onclick = function () {
  var soTienUSD = parseFloat(document.getElementById("soTienUSD").value);
  var soTienVND = soTienUSD * tiGia;

  var currentFormat = new Intl.NumberFormat("vn-VN");

  document.getElementById("ket-qua-sotien").innerHTML = "Số tiền sau khi quy đổi là: " + currentFormat.format(soTienVND);
}

 
 // Bài 4
 /**
  * -Input:
  *  +Chiều dài HCN
  *  +Chiều rộng HCN
  * 
  * -Process:
  *  +Chu Vi = (Dài + Rộng) * 2
  *  +Diện Tích = Dài * Rộng
  * 
  * -Output:
  *  +Diện Tích
  *  +Chu Vi
  */
 

  document.getElementById("btn-send-cvdt").onclick = function () {
    var chieuDai = parseFloat(document.getElementById("chieuDai").value);
    var chieuRong = parseFloat(document.getElementById("chieuRong").value);

    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;

    document.getElementById("ket-qua-cvdt").innerHTML = "Chu Vi là: " + chuVi + "<br> Diện Tích là: " + dienTich;
  }


 // Bài 5
 /**
  * -Input:
  *  + Số có 2 chữ 
  * 
  * -Process:
  *  + Lấy số hàng chục
  *  + Lấy số hàng đơn vị
  *  + Tổng 2 ký số = Số hàng chục + Số hàng đơn vị
  * 
  * -Output:
  *  + Tổng 2 ký số
  */
 
  document.getElementById("btn-send-tong2kyso").onclick = function () {
    var soThuc = parseFloat(document.getElementById("soThuc").value);

    var soHangChuc = Math.floor(soThuc / 10);
    var soHangDonVi = soThuc % 10;

    var tong2KySo = soHangChuc + soHangDonVi;

    document.getElementById("ket-qua-tong2kyso").innerHTML = "Tổng 2 ký số là: " + tong2KySo;
  }
