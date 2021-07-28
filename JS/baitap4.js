/**
 * INPUT:
 * chiều dài từ người dùng nhập vào
 * chiều rộng từ người dùng nhập vào
 * 
 * PROCESS:
 * B1: tạo biến và gán giá trị cho số chiều dài: dai
 * B2: tạo biến và gán giá trị cho số chiều rộng : rong
 * B3: tạo biến chưa giá trị chu vi: chuvi
 * B4: tạo biến chưa giá trị diện tích: dientich
 * B5: xây dựng công thức tính chu vi: chuvi = (dai+rong)*2
 * B6: xây dựng công thức tính diện tích: dientich = dai*rong
 * 
 * OUTPUT:
 * xuất ra màn hình chu vi và diện tích hình chữ nhật
 */

 var dai = 30;
 var rong = 20;
 var chuvi = 0;
 var dientich = 0;
 
 chuvi = (dai+rong)*2;
 dientich = dai*rong;
 
 console.log("Chu vi hình chữ nhật là:" +chuvi);
 console.log("Diện tích hình chữ nhật là:" +dientich);
 