// 实现 a == 1 && a == 2 && a == 3
let a = {
  _a: 1,
  valueOf() {
    return this._a++;
  }
};
console.log(a == 1 && a == 2 && a == 3);

// 递归求和
// f(i) === list[i] + f(i+1);
// i >= list.length 返回 0
function sum (list){
  function f(i) {
    return i >= list.length ? 0 : (list[i] + f(i + 1));
  }
  return f(0)
}

console.log(sum([]),sum([1,2,3,4,5]));