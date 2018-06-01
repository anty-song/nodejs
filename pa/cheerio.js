var cheerio = require('cheerio');

var $ = cheerio.load('<h2 class="title">Hello Cheerio</h2>');

$('h2.title').text('some text');
$('h2').addClass('welcome');

console.log($.html());