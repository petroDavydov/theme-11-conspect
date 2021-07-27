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
	var monthsArr = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
	"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  
	var daysArr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  
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
  
	var out = daysArr[day] + ", " + numDay + " " + monthsArr[month]
			+ " " + year + ", " + hour + ":" + minute + ":" + second;
  
	return out;
  }
  
  console.log(showTime());