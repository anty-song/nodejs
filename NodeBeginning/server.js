const http = require( 'http' );
const url = require( 'url' );

function start( route, handle ) {
  function onRequest( request, response ) {
    var postData = '';
    var pathname = url.parse( request.url ).pathname;
    console.log( 'Reqest for ' + pathname + ' receiced' );

    // 设置接收数据的编码格式为UTF-8  对中文没什么用啊
    request.setEncoding( "utf8" );
    request.addListener( "data", function ( postDataChunk ) {
      postData += postDataChunk;
      console.log( "Received POST data chunk'" + postDataChunk + "'." );
    } );
    request.addListener( "end", function () {
      route( handle, pathname, response, postData );
    } );
  }
  http.createServer( onRequest ).listen( 8888 );
  console.log( 'server has started' );
}
exports.start = start;