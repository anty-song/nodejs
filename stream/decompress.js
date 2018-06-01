var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt.gz')
	.pipe(zlib.Gunzip())
	.pipe(fs.createWriteStream('input.txt'));

console.log('文件解压缩完成')