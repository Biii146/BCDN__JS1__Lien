/**
 * INPUT:
 * số tiền USD từ ngừoi dùng nhập vào
 * tỉ giá quy đổi USD hiện nay là: 23500VND
 * 
 * PROCESS:
 * tạo biến và lấy giá trị từ form
 * B1: tạo biến và gán giá trị cho số tiền USD cần quy đổi: USD
 * B2: tạo biến và gán giá trị cho tỷ giá hiện hành: exchangeRate
 * B3: tạo biến chưa giá trị sau quy đổi: VND
 * B4: xây dựng công thức tính: VND = USD * exchangeRate
 * 
 * OUTPUT:
 * xuất ra màn hình số tiền vnd sau quy đổi
 */

document.getElementById("btnExchange").onclick = function(){
    var VND = 0;
    var exchangeRate = 23500;
    var USD = document.getElementById("inputUSD").value;

    VND = exchangeRate * USD;

    document.getElementById("txtExchange").innerHTML = "Số tiền Việt Nam đồng sau quy đổi là: " +VND+"VND";
}
