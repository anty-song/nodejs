var buf = new Buffer(26);
var _buf = new Buffer('songpeng');
for (var i = 0; i <= 26; i++) {
	buf[i] = i + 97;
}
console.log(buf.toString('ascii'));// 输出: abcdefghijklmnopqrstuvwxyz
var json = _buf.toJSON(_buf);
console.log(json);

var buf1 = new Buffer('宋朋');
var buf2 = Buffer.concat([_buf, buf1]);
console.log(buf2.toString())