/**
 * INPUT:
 * chiều dài từ người dùng nhập vào
 * chiều rộng từ người dùng nhập vào
 * 
 * PROCESS:
 * tạo biến và lấy giá trị từ form
 * B1: tạo biến và gán giá trị cho số chiều dài: height
 * B2: tạo biến và gán giá trị cho số chiều rộng : base
 * B3: tạo biến chưa giá trị chu vi: perimeter
 * B4: tạo biến chưa giá trị diện tích: area
 * B5: xây dựng công thức tính chu vi: perimeter = (height + base) * 2;
 * B6: xây dựng công thức tính diện tích: area = height * base;
 * 
 * OUTPUT:
 * xuất ra màn hình chu vi và diện tích hình chữ nhật
 */

document.getElementById("btnResult").onclick = function(){
    perimeter = 0;
    area = 0;
    height = parseFloat(document.getElementById("inputHeight").value);
    base = parseFloat(document.getElementById("inputBase").value);

    perimeter = (height + base) * 2;
    area = height * base;

    document.getElementById("txtResult").innerHTML = "Chu vi hình chữ nhật là: "+perimeter+"<br> Diện tích hình chữ nhật là: "+area;

}
 
 
 
 