# 疑难杂症

## var a = void 0

- 定义一个变量等于undefined时使用void更安全(消除安全隐患)
- `void` 是 js 的关键字 跟一个表达式, 返回undefined
  ```js 
  var a = void 0; // a = undefined
  ```
- `undefined` 是 window 身上的一个只读属性
> 如果在一个作用域中定义变量为 undefined 会影响其他数据
> ```js
> function m () {
>   var undefined = 1
>   var a = undefined;
>   console.log(a); // 1
> }
> ```
