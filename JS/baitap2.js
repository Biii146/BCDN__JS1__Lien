/**
 * INPUT:
 * các số thực được nhập vào bàn phím: num1, num2, num3, num4, num5
 * 
 * PROCESS:
 * B1: tạo và gán giá trị cho 5 số cần tính trung bình
 * B2: tạo biến chứa giá trị trung bình: average
 * B3: xây dựng công thức tính trung bình: 
 * average = (num1+num2+num3+num4+num5)/5
 * 
 * OUTPUT:
 * xuất ra màn hình giá trị trung bình 5 số thực vừa tìm (average)
 */


document.getElementById("btnAverage").onclick = function(){
    var average = 0;
    var num1 = parseFloat(document.getElementById("inputNumber1").value);
    var num2 = parseFloat(document.getElementById("inputNumber2").value);
    var num3 = parseFloat(document.getElementById("inputNumber3").value);
    var num4 = parseFloat(document.getElementById("inputNumber4").value);
    var num5 = parseFloat(document.getElementById("inputNumber5").value);

    average = (num1+num2+num3+num4+num5)/5;

    document.getElementById("txtAverage").innerHTML = "Số trung bình cần tính là: " +average;
}
 
 
 
 
 
 