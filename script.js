const firstTenQues = () => {
  console.log("Name : rishi", "hobby : coding");
  console.log(45 * 2 - 10);
  const todayDate = new Date();
  console.log(todayDate.getFullYear());
  const a = "rishi";
  const b = "rawat";
  console.log(`${a} ${b}`);
  console.log(a + " " + b);
  var c = 12;
  console.log(c);
  var c = 13;
  console.log(c);
  console.error("who am i");
  const sqr = 12;
  console.log(sqr * sqr);
  const z = true;
  console.log(typeof z);
  const age = 19;
  if (age > 18) {
    console.log("age is greater than 18 which is : ", age);
  } else {
    console.log("age is not greater than 18");
  }
  console.log(100 / 0);
};

const secondTenQues = () => {
  let a = 10;
  console.log(a);
  {
    let a = 14;
    console.log(a);
  }

  const pi = 3.14;
  console.log(pi);

  const c = null;
  console.log(typeof null);

  const num = "25";
  console.log(typeof num);

  console.log(typeof Boolean);

  const k = "12",
    g = 5,
    h = true;
  console.log(typeof k);
  console.log(typeof g);
  console.log(typeof h);

  var d;
  console.log(d);

  var o = undefined;
  console.log(o);

  const mya5 = [12, 4, 67, 8, 1, 5, 9];

  console.log(myArr);
  myArr = [1, 2, 3, 4, 5];
  script.js;
  //  Uncaught TypeError: Assignment to constant variable.
  console.log(myArr);
};

const thirdQues = () => {
  // for (let i = 1; i <= 50; i++) {
  //   // const element = [i];
  //   console.log(i);
  // }

  var i = 0;
  while (i <= 50) {
    console.log(i);
    i++;
  }

  var sum = 0;

  for (let i = 1; i < 10; i++) {
    sum += i;
  }
  console.log(sum);

  let jsName = "Javascript";

  // to print the text of jsName;

  for (const character of jsName) {
    console.log(character);
  }

  for (let i = 0; i < 20; i++) {
    if (i % 2 != 0) console.log(i);
  }

  i = 5;

  do {
    console.log(i);
    i--;
  } while (i >= 0);
  var fact = 1;
  for (let i = 5; i > 0; i--) {
    fact = fact * i;
  }
  console.log(fact);

  // grid pattern
  var hold = 1;

  for (let i = 1; i <= 3; i++) {
    var str = "";
    for (let j = 1; j <= 3; j++) {
      str += `${hold}`;
      hold++;
    }
    console.log(str);
  }

  //reverse array

  var arr = [1, 2, 3, 4, 5];

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - i - 1] = temp;
  }

  console.log(arr);

  var a = 1;

  while (a <= 100) {
    if (a % 5 == 0) {
      console.log(a);
    }
    a++;
  }
  var obj = {
    name: "Rishabh",
    age: "18",
  };

  console.log(obj.key);

  for (const key in obj) {
    console.log(key);
  }
};

const fourthQues = () => {
  // create array of fav 5 movies and log it.
  const movies = ["Vikram", "Rifle-club", "Wild-robot", "Your-Name", "My Name"];

  for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
  }

  movies.forEach((r) => {
    console.log(r);
  });
  var arr = [1, 2, 3, 4, 5];

  arr.filter((ele, i) => {
    if (i == 1) {
      return ele;
    }
  });

  let arr1 = [1, 2, 3];

  arr1.unshift(4);
  arr1.unshift(5);

  let arr3 = [1, 2, 3, 4, 5];

  arr3.pop();
  arr3.pop();
  console.log(arr3);

  let arr4 = [1, 2, 4, 5, 6, 7, 8];

  for (let i = 1; i <= 3; i++) {
    let arr5 = arr4.slice(i);
  }

  console.log(arr5);
  var arr7 = [1, 2, 3, 4, 5, 7];

  console.log(arr7.includes(15));

  // concar 2 array
  var a1 = [1, 2];
  var a2 = [3, 4];

  var a3 = a1.concat(a2);
  console.log(a3);

  var a5 = [5, 4, 2, 3, 1, 0, -1];

  a5.sort();

  console.log(a5);

  var a5 = [5, 4, 2, 3, 1, 0, -1];

  for (let j = 0; j < a5.length - 1; j++) {
    for (let i = 0; i < a5.length - j - 1; i++) {
      if (a5[i] > a5[i + 1]) {
        var temp = a5[i];
        a5[i] = a5[i + 1];
        a5[i + 1] = temp;
      }
    }
  }
  console.log(a5);

  var a6 = [1, 2, 4, 67, 6, 8];

  var a9 = [...a6];
  var arr0 = [1, 2, 3, 5, 6, 7];

  var b = [];

  arr0.forEach((r) => b.push(r));
};

const fifthQues = () => {
  const eveOd = (a) => {
    if (a % 2 == 0) {
      console.log("even");
    } else console.log("odd");
  };

  eveOd(1);

  const aoc = (r) => {
    return Math.floor(Math.PI * r * r);
  };
  aoc(67);

  function max(a, b) {
    if (a > b && a!=b) {
      return a;
    } else return b;
  }
  
  max(12,5)
};

let str = "rishi"
function rev(val){
  val.reverse()
}

rev(str)

