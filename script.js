
// حساب تقدير الطلاب 
let degree = 70;
if (degree >= 90) {
    console.log("ممتاز")
} else if (degree >= 80) {
    console.log("جيد جدا")

}
else if (degree >= 50) {
    console.log("ناجح")

}
else if (degree < 50) {
    console.log("راسب")

}
else {
    console.log("ther is no degree")
}

//  من ال 10-1 تنازليا
for (let i = 10; i > 0; i--) {
    console.log(i)

}
console.log("انتهى")


// 
for (let i = 1; i <= 20; i++) {
    console.log(i)
    if (i%2==0){
                        console.log("x زوجي")

    }


else {
            console.log("x فردي")

}
}