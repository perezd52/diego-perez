var user = 'Mike';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest DaVinci Resolve reviews.';
var greetingEL = document.getElementById('greeting');

greetingEL.textContent = greeting;


var price = 0;
    studentDiscount = 0.00,
    studentPrice = price - (price * studentDiscount),
    priceEL = document.getElementById('price'),
    studentPriceEL = document.getElementById('student-price');

priceEL.textContent = price.toFixed(2);
studentPriceEL.textContent = studentPrice.toFixed(2);