// any 타입
const obj: any = {};
obj.name = "hong";
obj["phone"] = "01012345678";
delete obj.name;

console.log(obj);

// 배열
const arr: any[] = [];
arr.push({ name: "hong", phone: "01012345678" });
console.log(arr);

// pir
let var1: any;
var1 = "hong";
var1 = 123;
console.log(var1);