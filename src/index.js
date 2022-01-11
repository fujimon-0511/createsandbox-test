/**
 * constで定義したオブジェクトはプロパティの変更が可能
 */
// const val4 = {
//   name: "ふじもん",
//   age: 26
// };
// val4.name = "jak";
// val4.addres = "Yamagata";
// console.log(val4);

/**
 * constで定義した配列はプロパティの変更が可能
 */
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = 'ふじもん';
// const age = 26;
// 私の名前はふじもんです。年齢は26歳です。

//従来の方法
// const messege1 = '私の名前は'　+ name +'です。年齢は'　+ age + '歳です。'
// console.log(messege1);

// テンプレート文字列を用いた方法
// const messege2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(messege2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));
