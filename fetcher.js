const fs = require("fs");
const args = process.argv.slice(2);

const request = require("request");
request(args[0], (error, response, body) => {
  if (error) {
    console.log(error);
    process.exit();
  }
  fs.writeFile(args[1], body, function (err) {
    if (err) return console.log(err);
    console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
  });
});
