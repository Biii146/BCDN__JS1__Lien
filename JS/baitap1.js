/**
 * INPUT:
 * số ngày làm
 * tiền lương 1 ngày: 100.000
 * 
 * PROCESS:
 * tạo biến và lấy giá trị từ form
 * B1: tạo và gán giá trị cho số ngày công: date
 * B2: tạo biến chứa tiền lương nhân viên: salary
 * B3: tạo biến chứa tiền lương 1 ngày: rate
 * B3: xây dựng công thức tính tiền lương: salary = rate *dates
 * 
 * OUTPUT:
 * tiền lương nhân viên: salary
 */

document.getElementById("btnSalary").onclick = function(){
    var salary = 0;
    var rate = 300000;
    var dates = document.getElementById("inputDates").value;

    salary = rate * dates;

    document.getElementById("txtSalary").innerHTML = "Tiền lương của bạn là: " +salary+"VND";
}
 
 
 
 
 