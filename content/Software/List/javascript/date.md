---
id: Kmo3HDED44rvwKZv9x4KM
title: date
desc: ''
updated: 1641202823378
created: 1641197659795
---

## Subtract days from date

``` javascript
var d = new Date("2021-01-15"); // Empty is just TODAY
console.log('Today is: ' + d.toLocaleString());
d.setDate(d.getDate() - 3);
console.log('3 days ago was: ' + d.toLocaleString());
console.log(d.toISOString())
```

* [How to Subtract Days from Date in JavaScript](https://www.w3docs.com/snippets/javascript/how-to-subtract-days-from-date-in-javascript.html)

## Numbered days of the week


``` javascript
var dt = new Date("December 25, 1995 23:15:00");
document.write("getDay() : " + dt.getDay() );  // Sunday is 0
```

* [JavaScript - Date getDay() Method](https://www.tutorialspoint.com/javascript/date_getday.htm)

## Number of days in a month

``` javascript
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
    
function GFG_Fun() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    down.innerHTML = "Number of days in " + month
                + "th month of the year " + year 
                +" is "+ daysInMonth(month, year);
}
console.log(daysInMonth(02,2021))
```

* [How to get the number of days in a specified month using JavaScript ? - GeeksforGeeks](https://www.geeksforgeeks.org/how-to-get-the-number-of-days-in-a-specified-month-using-javascript/)

## Loop through dates

``` javascript
for (var i = 0; i < 10; i++){
    var d = new Date("2021-01-15"); 
    d.setDate(d.getDate() + i);
    console.log(d.toISOString())
}
```