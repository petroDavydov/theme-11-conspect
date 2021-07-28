const datenew = new Date("April 16, 2023");
console.log(datenew);

const date1 = new Date(2000, 5, 8, 12, 0, 0, 0);

// Индексы месяцев начинаются с 0, поэтому 5-й месяц это июнь.
console.log(date1); // Thu Jun 08 2000 12:00:00 GMT+0300 (FLE Daylight Time)

const date = new Date();

// проверим количество мс с с начала эпохи Unix
console.log(`Время в мс с начала эпохи Unix: ${date.getTime()}`);
// "Время в мс с начала эпохи Unix: ....  значения будут меняться :-)
// "Время в мс с начала эпохи Unix: 1504721892483"

let result = "Date: ";
result += date.getFullYear() + "/"; // год
result += date.getMonth() + "/"; // месяц, начиная с 0
result += date.getDate() + ". Day of week: "; // день недели, начиная с 1
result += date.getDay() + "."; // день , начиная с 0

result += " Time: " + date.getHours() + ":"; // часы
result += date.getMinutes() + ":"; // минуты
result += date.getSeconds() + ":"; // секунды
result += date.getMilliseconds() + ""; // милисекунды

// строка должна показать текущее время и дату
console.log(result); // "Date: 2017/8/6. Day of week: 3. Time: 21:18:12:483"
// ...  значения будут меняться :-)

var my_date = new Date();
console.log(my_date.getDate());

// 'my_date' - это экземпляр объекта Date?
console.log(my_date instanceof Date);

function getTime() {
  var now = new Date();
  var result = now.getHours() + ":" + now.getMinutes();

  return result;
}
console.log("Сейчас " + getTime());
// ===================
//собственная функция установки дати

function showTime() {
  var monthsArr = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  var daysArr = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  var dateObj = new Date();

  var year = dateObj.getFullYear();
  var month = dateObj.getMonth();
  var numDay = dateObj.getDate();
  var day = dateObj.getDay();
  var hour = dateObj.getHours();
  var minute = dateObj.getMinutes();
  var second = dateObj.getSeconds();

  if (minute < 10) minute = "0" + minute;

  if (second < 10) second = "0" + second;

  var out =
    daysArr[day] +
    ", " +
    numDay +
    " " +
    monthsArr[month] +
    " " +
    year +
    ", " +
    hour +
    ":" +
    minute +
    ":" +
    second;

  return out;
}

console.log(showTime());

//   xxxxxxxxxxxxxxxxxxxxxxx

// let countDown = 11;

// let timer = setInterval(function () {
//   countDown--;
//   if (!countDown) {
//     clearInterval(timer);
//   }

//   console.log(`Count Down: ${countDown}`);

//   if (countDown === 0) {
//     console.log("STOP");
//   }
// }, 1000);

//* методи конверсации и форматирования дати

const date2 = new Date("July 22, 2018 07:22:13");

console.log(date2.toString()); // "Sun Jul 22 2018 07:22:13 GMT+0200 (Central European Summer Time)"
console.log(date2.toUTCString()); //"Sun, 22 Jul 2018 05:22:13 GMT"
console.log(date2.toTimeString()); //"07:22:13 GMT+0200 (Central European Summer Time)"
console.log(date2.toDateString()); //"Sun Jul 22 2018"
console.log(date2.toISOString()); //"2018-07-22T05:22:13.000Z" (ISO 8601 format)
console.log(date2.toLocaleString()); //"22/07/2018, 07:22:13"
console.log(date2.toLocaleTimeString()); //"07:22:13"
console.log(date2.getTime()); //1532236933000
console.log(date2.getTime()); //1532236933000

console.log(date2);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let newOne = new Date().toDateString();
console.log(newOne);


let a = false;
if(a=="0"){
	console.log("==");
}
if (a==="0"){
	console.log("===");
}

// 1) ==
// 2) ===
// 3) == and ===
// 4) nothing

// let promise = new Promise((res,rej)=>{
// 	setTimeout(()=>{
// 		console.log(`success!`);
// 	},3000);
// })

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 	  reject('There was an error :(');
// 	}, 2000);
//   });
  
//   /*
//    * then не выполнится так как в функции fn, внутри new Promise(fn),
//    * был вызван reject(). А catch как раз выполнится через 2 секунды
//    */
//   promise
// 	.then(data => {
// 	  console.log(data);
// 	})
// 	.catch(error => {
// 	  console.log(error);
// 	});
  

// 	// xxxxxxxxxxxxxxxxxx

// 	const promise1 = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 		  resolve('success!');
// 		}, 5000);
// 	  });
	  
// 	  promise1
// 		.then(data => console.log(data)) // "success"
// 		.catch(error => console.log(error))
// 		.finally(() => console.log('finished!')); // "finished"
	//   xxxxxxxxxxxxxxxxxx

	const makePromise = (text, delay) => {
		return new Promise(resolve => {
		  setTimeout(() => resolve(text), delay);
		});
	  };
	  
	  const promiseA = makePromise('promiseA', 1000);
	  const promiseB = makePromise('promiseB', 3000);
	  
	  
	  /*
	   * Выполнится спустя 3 секунды, когда выполнится второй промис с задержкой в 3c.
	   * Первый выполнится через секунду и просто будет готов
	   */
	  Promise.all([promiseA, promiseB])
		.then(result => console.log(result)) //["promiseA", "promiseB"]
		.catch(err => console.log(err));
	  

		// --------
		/*
 * Выполнится спустя 1 секунду, когда выполнится самый быстрый promiseA
 * с задержкой в 1c. Второй промис promiseB будет проигнорирован
 */
// Promise.race([promiseA, promiseB])
// .then(result => console.log(result)) // "promiseA"
// .catch(err => console.log(err));

// -------


console.log('script start'); //1

setTimeout(function () {
  console.log('setTimeout'); //5
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1'); //3
  })
  .then(function () {
    console.log('promise2');//4
  });

console.log('script end');//2






