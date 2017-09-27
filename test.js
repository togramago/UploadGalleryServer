const { spawn } = require('child_process');
const request = require('request');
const test = require('tape');
const fs = require("fs");

// Start the app
const env = Object.assign({}, process.env, {PORT: 5000});
const child = spawn('node', ['index.js'], {env});

test('uploading files', (t) => {
  t.plan(5);

  child.stdout.on('data', _ => {
    const user_id = Math.random() * 100000;
    const base_url = 'http://127.0.0.1:5000';

    request.post(
      {
        url: base_url + '/images/' + user_id,
        formData: {
          image: fs.createReadStream(__dirname + '/dog.jpg')
        }
      },
      (error, response, body) => {
        t.false(error);
        t.equal(response.statusCode, 200);

        request(base_url + '/images?user_id=' + user_id, (error, response, body) => {
          child.kill();

          t.false(error);
          t.equal(response.statusCode, 200);
          t.equal(JSON.parse(body)['images'].length, 1);
        });
      }
    );
  });
});
