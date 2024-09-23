console.log("hello world");
//key : value
let a = {
  name: "eric",
  address: "ha noi",
};

let b = "Eric";
a.name = "hcm";
a[b] = "harry";
console.log("typeof a : ", typeof a, "typeof b : ", typeof b);
console.log("what is your name ? ", `my name's : `, a.name);
console.log("where are you from ? ", `i'm from  : `, a.address);
