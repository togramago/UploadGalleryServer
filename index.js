const express = require('express')
const cloudinary = require('cloudinary');
const multer = require('multer')
const app = express()

app.set('port', (process.env.PORT || 3000));

cloudinary.config({ 
  cloud_name: 'hlktbf96w', 
  api_key: '263625593474264', 
  api_secret: 'J-J3ZF4RWuW1vCi0dylY5ynH84A' 
});

var upload = multer({ dest: 'uploads/' })

app.get('/images', function (req, res) {
  cloudinary.v2.api.resources_by_tag('user_' + req.query.user_id, function(error, result) {
    var images = result["resources"] == undefined ? [] : result["resources"].map(function(resource) {
      return {
        'url': resource['url'],
        'created_at': resource['created_at']
      }
    });

    res.json({'images': images})
  });
})

app.post('/images/:user_id', upload.single('image'), function (req, res) {
  cloudinary.v2.uploader.upload(
    req.file.path,
    {
      tags: ['user_' + req.params.user_id]
    },
    function(error, result) {
      res.json({
        'url': result.url,
        'created_at': result.created_at
      })
    }
  );
})



app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'))
})