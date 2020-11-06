// ==================================ES6 学习==============================================
/** 
 * 2 块级作用域
 * 
 * 为什么需要块级作用域
 * es5只有全局作用域和函数作用域，没有块级作用域，带来诸多不合理的场景:
 *      第一种场景----
 */
var tmp = new Date()

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world'
    }
}
f();

/* 
    上面代码的原意就是。if代码块的外部使用外层的tmp的变量， 内部使用内层的tmp变量。但是，函数f执行后，输出结果为undefined，变量提升

    第二场景--用来计数的循环变量泄露为全局变量
*/

var s = 'hello';
for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
console.log(i);
/* 上面代码中，变量i用来控制循环，循环结束后并没有消失，泄露成为全局变量 */


// ES6的块级作用域
/* let实际上为JavaScript 新增的块级作用域 */
function f1() {
    let n = 9;
    if (true) {
        let n = 12;
    }
    console.log(n);
}

// ES6 允许块级作用域的任意嵌套
{
    {
        {
            {
                { let insane = 'hello world' }
                console.log(insane); //报错
            }
        }
    }
}
// 第四层 作用域 无法读取第五层的内部变量 
// 但是内层作用域能定义外层作用域的同名变量
{
    {
        {
            {
                let inside = 123; {
                    let inside = 890;
                }
                console.log(inside);
            }
        }
    }
}
/* 块级作用域的出现，实现使得获得广泛的匿名立即执行函数表达式（IIFE）不在必要了 */
// IIFE
(function() {
    var tmp = 123;

}());