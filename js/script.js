// Object

let arr = [1, 2, 3];
console.log(arr);
let student = {
    firstName : "Arman",
    age: 25,
    country : "Bangladesh"
}
console.log(student["firstName"]);
console.log(student.age);
console.log(student["country"])

student["Institution"] = "IIUC"
console.log(student.Institution);

student.village = "Noakhali";
console.log(student);
console.log(student.village);

delete student.village;
console.log(student)

student = {}
console.log(student)


var arr = [10, 12, [1, 2, 3], 8, 9];
console.log(arr);
console.log(arr[2][1]);

var myarr = [10, 12, { prop1: "item-1", prop2: "item-2" }];
console.log(myarr[2].prop2);






