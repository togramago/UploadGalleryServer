const express = require('express')
const app = express()

app.get('/images', function (req, res) {
  console.log('User ID: ' + req.query.user_id)

  res.json({
    'images': [
      {
        'url': 'https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781',
        'created_at': '2017-09-17T19:33:14Z'
      },
      {
        'url': 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
        'created_at': '2017-09-16T07:32:17Z'
      }        
    ]
  })
})

app.post('/images', function (req, res) {
  res.json({
    'url': 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
    'created_at': '2017-09-16T07:32:17Z'
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

// var server = http.createServer(function(request, response){
// 	var url_parts = url.parse(request.url).path.substring(1).split("/");

// 	var width = parseInt(url_parts[0]);
// 	var height = parseInt(url_parts[1]);
//     var max = Math.max(width, height);

// 	if(!isNaN(width) && !isNaN(height))
// 	{
//         response.writeHead(200, {'content-type': 'image/png'});
//         gm('nodejs.png').
//             resize(max, max).
//             crop(width, height, 0, 0).
//             stream(function(err, stdout, stderr){
//                 if(err) {
//                     console.log(err)
//                 }
//                 else {
//                     stdout.pipe(response);
//                 }
//             });
// 	}
//     else {
//         response.writeHead(400, {'content-type' : 'text/plain'});
//         response.end();
//     }
// })
// .listen(1337, '127.0.0.1');