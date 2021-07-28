/**
 * INPUT:
 * số tiền USD từ ngừoi dùng nhập vào
 * tỉ giá quy đổi USD hiện nay là: 23500VND
 * 
 * PROCESS:
 * B1: tạo biến và gán giá trị cho số tiền USD cần quy đổi: USD
 * B2: tạo biến và gán giá trị cho tỷ giá hiện hành: CURRENCY
 * B3: tạo biến chưa giá trị sau quy đổi: VND
 * B4: xây dựng công thức tính: VND = USD * 23500
 * 
 * OUTPUT:
 * xuất ra màn hình số tiền vnd sau quy đổi
 */

 var USD = 5;
 var VND = 0;
 var CURRENCY = 23500;
 
 VND = USD * CURRENCY;
 
 console.log("Số tiền Việt Nam đồng sau quy đổi là: " + VND);