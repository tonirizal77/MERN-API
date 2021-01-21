const express = require("express");
const app = express();
app.use(() => {
  console.log("Hello Server");
  console.log("hello lagi..");
  console.log("hello tiga..");
  console.log("hello empat");
  console.log("hello lima");
  console.log("hello enam");
  console.log("hello tujuh");
  console.log("hello delapan");
  console.log("hello sembilan");

});
app.listen(4000);
