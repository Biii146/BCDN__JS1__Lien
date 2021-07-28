/**
 * INPUT:
 * số ngày làm
 * tiền lương 1 ngày: 100.000
 * 
 * PROCESS:
 * B1: tạo và gán giá trị cho số ngày công: date
 * B2: tạo biến chứa tiền lương nhân viên: salary
 * B3: xây dựng công thức tính tiền lương: salary = 100.000*date
 * 
 * OUTPUT:
 * tiền lương nhân viên: salary
 */

 var date = 30;
 var salary = 0;
 
 salary = 100000*date;
 
 console.log("Tiền lương nhân viên là: " +salary);
 