/**
 * INPUT:
 * số có 2 chữ số từ người dùng
 * 
 * PROCESS:
 * Tạo biến và lấy giá trị từ form
 * B1: tạo biến và gán giá trị cho số cần tìm tổng: num
 * B1: tạo biến chứa giá trị cho số hàng chục: ten
 * B2: tạo biến chứa giá trị cho số hàng đơn vị: unit
 * B3: tạo biến chứa giá trị tổng 2 số: sum
 * B5: xây dựng công thức để lấy số hàng chục: num/10
 * B6: xây dựng công thức để lấy số hàng đơn vị: num%10
 * B7: tính tổng 2 số: sum = ten + unit
 * 
 * OUTPUT:
 * xuất ra màn hình tổng 2 số
 */

function caclSUM(){
    var num = parseFloat(document.getElementById("inputNum").value);
    var ten = Math.floor(num/10);
    console.log(ten);
    var unit = num%10;
    console.log(unit);

    var sum = ten + unit;
    console.log(sum);
    
    document.getElementById("txtSum").innerHTML = "Tổng của hai số là: " +sum;

}

document.getElementById("btnSum").onclick = caclSUM;
 
 
 
