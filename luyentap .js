// bai1
// let a=+prompt("nhap so");
// let b=+prompt("nhap tiep");
// if(a%b==0){
//     alert("a chia het cho b");
// }else{
//     alert("a ko chia het cho b");
// }

// bai2
// let a=+prompt("nhap tuoi")
// if(a >=16){
//     alert("du tuoi vao lop 10");
// }else{
//     alert("chua du tuoi vao lop 10");
// }


// ba3
// let a=+prompt("nhap so nguyen");
// if(a>0){
//     alert(`${a}laf so lon hon 0`);
// }else{
//     alert(`${a}la so nho hon 0`);
// } 

// baitap:gia phuongrtinh bac 1 ax+b=0; a!=0
// let a=+prompt("nhap so thu nhat");
// let b=+prompt("nhap so thu hai");
// if(a == 0 && b == 0){
//     alert('Phương trình vô số nghiệm');
// }
// else if (a != 0 && b == 0){
//     alert('Phương trình có nghiệm x = 0');
// }
// else if (a == 0 && b != 0){
//     alert("Phương trình vô nghiệm");
// }
// else {
//     alert('Phương trình có nghiệm x = ' + (-b/a));
// }
  
// ** cách khác
// let a=+prompt("nhap so thu nhat");
// let b=+prompt("nhap so thu hai");
// if(a==0){
//     if(b==0){
//         alert("phuong trinh co vo so nghiem");
//     }else{
//         alert("pt vo nghim");
//     }
// }else{
//     alert('pt co nghiem x='+(-b/a));
// }


// baitap pt bac 2 : 
// let a=+prompt("nhap so");
// let b=+prompt("nhap so");
// let c=+prompt("nhap so");
// let delta=b**2-4*a*c;
// let sqrt=Mathsqrt(delta);
// if(delta==0){
//     alert("x1=x2",-b/2*a);
// }else if(delta>0){
//     alert("x1=",(-b-sqrt)/2*a);
//     alert("x2=",(-b+sqrt)/2*a);
// }else{
//     alert("pt vo nghiem");
// }

// baita9:kiem tra tam giac
// let a=+prompt("canh a");
// let b=+prompt("canh b");
// let c=+prompt("canh c");
// if(a>0 && b>0 && c>0){
//     if(a+b>c && b+c>a && a+c>b){
//         alert("a,b,c là cạnh của 1 tam giác");
//     }
// }else{
//     alert("a,b,c ko phai canh tma giac");
// }

// bai8:kie tra tuoi
// let a=+prompt("nhap tuoi");
// if(a>0 && a<120){
//     alert("phu hop");
// }else{
//     alert("ko phu hop");
// }
