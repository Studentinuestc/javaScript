//basic
'Hello,world';
var x = 1;
var y = 2;
if (2 > 1) {
    x = 1;
    y = 2;
    z = 3;
    if (x < y) {
        z = 4;
    }
    if (x > y) {
        z = 5;
    }
}
alert('hello');
//data
123;
0.456;
1.2345e3; - 99;
NaN;
Infinity;
1 + 2;
(1 + 2) * 5 / 2;
2 / 0;
0 / 0;
10 % 3;
10.5 % 3;
true;
false;
2 > 1;
2 >= 3;
true && true;
true && false;
false && true && false;
false || false || true;
!true;
!(2 > 5);
var age = 15;
if (age >= 18) {
    alert('adult');
} else {
    alert('teenager');
}
2 > 5;
5 >= 2;
7 == 7;
false == 0;
false === 0;
NaN === NaN;
isNaN(NaN);
1 / 3 === (1 - 2 / 3);
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.000000001;
[1, 2, 3.14, 'Hello', null, true];
new Array(1, 2, 3);
var arr = [1, 2, 3.14, 'Hello', null, true];
arr[0];
arr[1];
arr[6];
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    zipcode: null
};
person.name;
person.zipcode;
var a;
var $b = 1;
var s_007 = '007';
var Answer = true;
var t = null;
var a = 123;
a = 'ABC';
var x = 10;
x = x + 2;
i = 10; //global var
'use strict';
'I\'m\"OK\"!';
`these are many 
lines of codes.
`;
var name = 'Ming';
var age = 20;
var message = 'Hello,' + name + ',this year' + age + 'sui!';
alert('message');
var message = `nihao,${name},nijinnian${age}sui`;
var s = 'Hello,world!';
s.length;
s[0];
s[3];
s.toUpperCase();
var s = 'hello';
var lower = s.toLowerCase();
lower;
var s = 'hello world';
s.indexOf('world');
s.indexOf('World');
s.substring(0, 5);
s.substring(7);
var arr = [1, 2, 3.14, 'Hello', null, true];
arr.length;
var arr = [1, 2, 3];
arr.length = 6;
arr;
arr.length = 2;
arr;
var arr = ['A', 'B', 'C'];
arr[1] = 99;
arr;
var arr = [1, 2, 3];
arr[5] = 'X';
arr;
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10);
arr.indexOf(20);
arr.indexOf(30);
arr.indexOf('30');
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
aCopy;
aCopy === arr;
var arr = [1, 2];
arr.push('A', 'B');
arr;
arr.pop();
arr;
arr.pop();
arr;
var arr = [1, 2];
arr.unshift('A', 'B');
arr;
arr.shift();
arr;
arr.shift();
arr;
var arr = ['B', 'C', 'A'];
arr.sort();
arr;
var arr = ['one', 'two', 'three'];
arr.reverse();
arr;
var arr = ['Ms', 'Apple', 'Yahoo', 'Aol', 'Excite', 'Oracle'];
arr.splice(2, 3, 'Google', 'Facebook');
arr;
arr.splice(2, 2);
arr;
arr.splice(2, 0, 'Google', 'Facebook');
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
added;
arr;
var arr = ['A', 'B', 'C'];
arr.concat(1, 2, [3, 4]);
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-');
var arr = [
    [1, 2, 3],
    [400, 500, 600], '-'
];
var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
xiaoming.name;
xiaoming.birth;
var xiaohong = {
    name: 'xiaohong',
    'middle-school': 'No.1 Middle School'
};
xiaohong['middle-school'];
xiaohong['name'];
xiaohong.name;
var xiaoming = {
    name: 'xiaoming'
};
xiaoming.age;
var xiaoming = {
    name: 'xiaoming'
};
xiaoming.age;
xiaoming.age = 18;
xiaoming.age;
delete xiaoming.age;
xiaoming.age;
delete xiaoming.name;
xiaoming.name;
delete xiaoming.school;
var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
'name' in xiaoming;
'grade' in xiaoming;
'toString' in xiaoming;
var xiaoming = {
    name: 'xiaoming'
};
xiaoming.hasOweProperty('name');
xiaoming.hasOweProperty('toString');
var age = 20;
if (age >= 18) {
    alert('adult');
} else {
    alert('teenager');
}
var age = 20;
if (agr >= 18)
    alert('adult');
else
    alert('teenager');
var age = 20;
if (age >= 18)
    alert('adult');
else
    console.log('age<18');
alert('teenager');
var age = 20;
if (age >= 18)
    alert('adult');
else {
    console.log('age<18');
    alert('teenager');
}
var age = 20;
if (age >= 18) {
    alert('adult');
} else if (age >= 6) {
    alert('teenager');
} else {
    alert('kid');
}
1 + 2 + 3;
var x = 0;
var i;
for (i = 1; i <= 10000; i++) {
    x = x + i;
}
x;
var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i = 0; i < arr.length; i++) {
    x = arr[i];
    alert(x);
}
var x = 0;
for (;;) {
    if (x > 100) {
        break;
    }
    x++;
}
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    alert(key);
}
for (var key in o) {
    if (o.hasOweProperty(key)) {
        alert(key);
    }
}
var a = ['A', 'B', 'C'];
for (var i in a) {
    alert(i);
    alert(a[i]);
}
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
x;
var n = 0;
do {
    n = n + 1;
} while (n < 100);
n;
var m = new Map();
var s = new Set();
var names = ['Micheal', 'Bob', 'Tracy'];
var scores = [95, 75, 85];
var m = new Map([
    ['Micheal', 95],
    ['Bob', 75],
    ['Tracy', 85]
]);
m.get('Micheal');
var m = new Map();
m.set('Adam', 67);
m.set('Bob', 59);
m.has('Adam');
m.get('Adam');
m.delete('Adam');
m.get('Adam');
var s1 = new Set();
var s2 = new Set([1, 2, 3]);
var s = new Set([1, 2, 3, 3, '3']);
s;
s.add(4);
var s = new Set([1, 2, 3]);
s;
s.delete(3);
s;
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([
    [1, 'x'],
    [2, 'y'],
    [2, 'z']
]);
for (var x of a) {
    alert(x);
}
for (var x of s) {
    alert(x);
}
for (var x of m) {
    alert(x[0] + '=' + x[1]);
}
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    alert(x);
}
var a = ['A', 'B', 'C'];
a.forEach(function(element, index, array) {
    alert(element);
});
var s = new Set(['A', 'B', 'C']);
s.forEach(funciton(element, sameElement, set) {
    alert(element);
});
var m = new Map([
    [1, 'x'],
    [2, 'y'],
    [3, 'z']
]);
m.forEach(funciton(value, key, map) {
    alert(value);
});
var a = ['A', 'B', 'C'];
a.forEach(funciton(element) {
    alert(element);
});
var r1 = 12.34;
var r2 = 9.08;
var r3 = 73.1;
var s1 = 3.14 * r1 * r1;
var s2 = 3.14 * r2 * r2;
var s3 = 3.14 * r3 * r3;
fucntion abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
var abs = function() {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};
abs(10);
abs(-9);
abs(10, 'blablabal');
abs(-9, 'haha');
abs();

function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

function foo(x) {
    alert(x);
    for (var i = 0; i < arguments.length; i++) {
        alert(arguments[i]);
    }
}
foo(10, 20, 30);

function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}
abs();
abs(10);
abs(-9);

function foo(a, b, c) {
    if (arguments.length === 2) {
        c = b;
        b = null;
    }
}

function foo(a, b) {
    var i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i < arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a=' + a);
    console.log('b=' + b);
    console.log(rest);
}

function foo(a, b, ...rest) {
    console.log('a=' + a);
    console.log('b=' + b);
    console.log(rest);
}
foo(1, 2, 3, 4, 5);
foo(1);

function foo() {
    var x = 1;
    x = x + 1;
}
x = x + 2;

function foo() {
    var x = 1;

    function bar() {
        var y = x + 1;
    }
    var z = y + 1;
}

function foo() {
    var x = 1;

    function bar() {
        var x = 'A';
        alert('x in bar()=' + x);
    }
    alert('x in foo()=' + x);
    bar();
}

function foo() {
    var x = 'Hello,' + y;
    alert(x);
    var y = 'Bob';
}
foo();

function foo() {
    var x = 1,
        y = x + 1,
        z, i;
    for (i < 0; i < 100; i++) {
        ...
    }
}
var course = 'Learn JavaScript';
alert(course);
alert(window.course);
window.foo();
var xiaoming = {
    name: 'xiaoming',
    birth: 1990
};
var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age: function() {
        var y = new Data().getFullYear();
        return y - this.birth;
    }
};
xiaoming.age;
xiaoming.aga();

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}
var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age: getAge
};
xiaoming.age();
getAge.apply(xiaoming, []);
Math.max.apply(null, [3, 5, 6]);
Math.max.call(null, 3, 5, 4);
var count = 0;
var oldParseInt = parseInt;
window.parseInt = function() {
    count += 1;
    return oldParseInt.apply(null, argumants);
};
parseInt('10');
parseInt('20');
count;

function add(x, y, f) {
    return f(x) + f(y);
}
x = -5;
y = 6;
f = Math.abs;
f(x) + f(y) == > Math.abs(-5) + Math.abs(6) == > 11;
return 11;
add(-5, 6, Math.abs);

function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow);
var f = function(x) {
    return x * x;
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = [];
for (var i = 0; i < arr.length; i++) {
    result.push(f(arr[i]));
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(String);
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4);
var arr = [1, 3, 5, 7, 9];
arr.reduce(function(x, y) {
    return x + y;
});
var arr = [1, 3, 5, 7, 9];
arr.reduce(function(x, y) {
    return x * 10 + y;
});
var arr = [1, 2, 3, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function(x) {
    return x % 2 != 0;
});
var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function(s) {
    return s && s.trim();
});
r;
var arr = ['A', 'B', 'C'];
var r = arr.filter(function(element, index, self) {
    console.log(element);
    console.log(index);
    console.log(self);
    return true;
});

var r, arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strambeery'];
r = arr.fliter(function(element, index, self) {
    return self.indexOf(element) === index;
});
['Google', 'Apple', 'Microsoft'].sort();
[10, 20, 1, 2].sort();
var arr = [10, 20, 1, 2];
arr.sort(function(x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
var arr = [10, 20, 1, 2];
arr.sort(function(x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
});
var arr = ['Google', 'apple', 'Microsoft'];
arr.sort(function(s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
});
var a1 = ['A', 'C', 'B'];
var a2 = a1.sort();
a1;
a2;
a1 === a2;

function sum(arr) {
    return arr.reduce(function(x, y) {
        return x + y;
    });
}
sum([1, 2, 3, 4, 5]);

function lazy_sum(arr) {
    var sum = function() {
        return arr.reduce(function(x, y) {
            return x + y;
        });
    }
    return sum;
}
var f = lazy_sum([1, 2, 3, 4, 5]);
f();
var f1 = lazy_sum([1, 2, 3, 4, 5]);
var f2 = lazy_sum([1, 2, 3, 4, 5]);
f1 === f2;

function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push(function() {
            return i * i;
        });
    }
    return arr;
}
var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
f1();
f2();
f3();

function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push((function(n) {
            return function() {
                return n * n;
            }
        })(i));
    }
    return arr;
}
var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
f1();
f2();
f3();
(function(x) {
    return x * x;
})(3);

function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function() {
            x += 1;
            return x;
        }
    }
}
var c1 = create_counter();
c1.inc();
c1.inc();
c1.inc();
var c2 = create_counter(10);
c2.inc();
c2.inc();
c2.inc();

function make_pow(n) {
    return function(x) {
        return Math.pow(x, n);
    }
}
var pow2 = make_pow(2);
var pow3 = make_pow(3);
pow2(5);
pow3(7);
x => x * x;

function(x) {
    return x * x;
}
x => {
        if (x > 0) {
            return x * x;
        } else {
            return -x * x;
        }
    }
    (x, y) => x * x + y * y;
() => 3.14;
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
x => ({ foo: x });
var obj = {
    birth: 1990,
    getAge: function() {
        var b = this.birth;
        var fn = () => new Data().getFullYear() - this.birth;
    }
};
//not use the apply() var that=this call()
//generator under this line
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}

function fib(max) {
    var t, a = 0,
        b = 1,
        arr = [0, 1];
    while (arr.length < max) {
        t = a + b;
        a = b;
        b = t;
        arr.push(t);
    }
    return arr;
}
fib(5);
fib(10);

function* fib(max) {
    var t, a = 0,
        b = 1,
        n = 1;
    while (n < max) {
        yield a;
        t = a + b;
        a = b;
        b = t;
        n++;
    }
    return a;
}
var f = fib(5);
f.next();
f.next();
f.next();
f.next();
f.next();
for (var x of fib(5)) {
    console.log(x);
}
try {
    r1 = yield ajax('http://url-1', data1);
    r2 = yield ajax('http://url-2', data2);
    r3 = yield ajax('http://url-3', data3);
    success(r3);
} catch (err) {
    handle(err);
}
typeof 123;
typeof NaN;
typeof 'str';
typeof true;
typeof Math.abs;
typeof null;
var n = new Number(123);
var b = new Boolean(true);
var s = new String('str');
typeof new Number(123);
new Number(123) === 123;
typeof new Boolean(true);
new Boolean(true) === true; //false;
var n = Number('123');
typeof n; //number;
(123).toString();
var now = new Data();
now;
now.getFullYear();
now.getMonth();
now.getData();
now.getDay();
now.getHours();
now.getTime();
var d = new Data(2015, 5, 19, 20, 15, 30, 123);
d;
var d = Data.parse('2015-06-24T19:49:22.875+08:00');
d;
var d = new Data(1435146562875);
d;
var d = new Data(1435146562875);
d.toLocaleString();
d.toUTCString();
if (Data.now) {
    alert(Data.now());
} else {
    alert(new Data().getTime());
}
var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');
re1;
re2;
'a b   c'.split(' ');
'a b   c'.split(/\s+/);
'a,b, c d'.split(/[\s\,]+/);
'a,b;;cc d'.split(/[\s\,\;]+/);
var re = /^(\d{3})-(\d{3,8})$/;
re.exec('010-12345');
re.exec('010-12345');
var re = /^(\d+)(0*)$/;
re.exec('102300');
var re = /^(\d+?)(0*)$/;
re.exec('102300');
var r1 = /test/g;
var r2 = new RegExp('test', 'g');
var s = 'JavaScript,VBScript,JScript and ECMAScript';
var re = /[a-zA-z]/ + Script / g;
re.exec(s);
re.lastIndex;
re.exec(s);
re.lastIndex;
re.exec(s);
re.lastIndex;
//JSON is same as XML
var xiaoming = {
    name: 'xiaoming',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" middle school',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
JSON.stringify(xiaoming, null, ' ');
JSON.stringify(xiaoming, ['name', 'skills'], '  ');

function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
JSON.stringify(xiaoming, convert, '  ');
var xiaoming = {
    name: 'xiaoming',
    age: 14,
    gender: true,
    grade: null,
    'middle-school': '"\W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function() {
        return {
            'Name': this.name,
            'Agd': this.age
        };
    }
};
JSON.parse('[1,2,3,true]');
JSON.parse('{"name":"xiaoming","age":14}');
JSON.parse('{"name":"xiaoming","age":14}'),
    function(key, value) {
        if (key === 'name') {
            return value + 'tongxue';
        }
        return value;
    };
var robot = {
    name: 'Robot',
    height: 1.6,
    run: function() {
        console.log(this.name + ' is running...');
    }
};
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function() {
        console.log(this.name + ' is running...');
    }
};
var xiaoming = {
    name: 'xiaoming'
};
xiaoming.__proto__ = Student;
xiaoming.name;
xiaoming.run();
var Bird = {
    fly: function() {
        console.log(this.name + ' is flying...');
    }
};
xiaoming.__proto__ = Bird;
xiaoming.fly();
var arr = [1, 2, 3];
//arr---->Array.prototype---->Object.prototype---->null
function foo() {
    return 0;
}
//foo---->Function.prototype---->Object.prototype---->null
function Student(name) {
    this.name = name;
    this.hello = function() {
        alert('Hello' + this.name + '!');
    }
}
var xiaoming = new Student('xioaming');
xiaoming.name;
xiaoming.hello();
//xiaoming---->Student.prototype---->Object.prototype---->null
xiaoming.constructor === Student.prototype.constructor;
Student.prototype.constructor = Student;
Object.getPrototypeOf(xiaoming) === Student.prototype;
xiaoming instanceof Student;

function Student(name) {
    this.name = name;
}
Student.prototype.hello = function() {
    alert('Hello', +this.name + '!');
};

function Student(props) {
    this.name = props.name || 'niming';
    this, grade = props.grade || 1;
}
Student.prototype.hello = function() {
    alert('Hello,' + this.name + '!');
};

function createStudent(props) {
    return new Student(props || {})
}
var xiaoming = createStudent({
    name: 'xiaoming'
});
xiaoming.grade;

function Student(props) {
    this.name = props.name || 'Unnamed';
}
Student.prototype.hello = function() {
    alert('Hello,' + this.name + '!');
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

function f() {

}
F.prototype = Student.prototype;
PrimaryStudent.prototype = new F();
PrimaryStudent.prototype.constructor = PrimaryStudent;
PrimaryStudent.prototype.getGrade = function() {
    return this.grade;
};

function inherits(Child, Parent) {
    var F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype.constructor = new F();
    Child.prototype.constructor = Child;
}

function Student(props) {
    this.name = props.name || 'Unnamed';
}
Student.prototype.hello = function() {
    alert('Hello,' + this.name + '!');
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}
inherits(PrimaryStudent, Student);
PrimaryStudent.prototype.getGrade = function() {
    return this.grade;
};

function Student(name) {
    this.name = name;
}
Student.prototype.hello = function() {
    alert('Hello,' + this.name + '!');
}
class Student {
    constructor(name) {
        this.name = name;
    }
    hello() {
        alert('Hello,' + this.name + '!');
    }
}
var xiaoming = new Student('xiaoming');
xiaoming.hello();
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
    myGrade() {
        alert('I am at grade' + this.grade);
    }
}
