const port = 3000,
  express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get("/", function (req, res) {
    res.render('index');
});

app.post("/", function (req, res) {

  var age = Number(req.body.age);
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var heightMeter = height / 100;
  var bmi = weight / (heightMeter * heightMeter);
  var bmiResult = bmi.toFixed(2);

  res.render('index', {age: age, weight: weight, height: height, bmi: "Your BMI Result is: "+ bmiResult});
});

app.listen(port, function () {
  console.log(
    `The Express.js server has started on port number: ${port}`
  );
});
