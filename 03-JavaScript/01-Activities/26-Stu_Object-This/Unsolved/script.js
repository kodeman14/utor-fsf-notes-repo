// TODO: What does 'this' refer to?
console.log("this", this);
// global object
// browser -> window
// terminal -> {}
console.log("window", window);

// TODO: What does 'this' refer to?
// not inside object -> window
function helloThis() {
  console.log("Inside helloThis function, this is " + this);

  //   var text = "whatever";
  //   console.log("text", text);

  function helloThat() {
    console.log("Inside helloThat function, this is " + this);
  }

  helloThat(); // even in this case, this keyword is the global/window object
}

// TODO: What will this log?
// 20
var child = {
  age: 10,
  ageTenYears: function () {
    var newAge = this.age + 10;
    if (newAge < 20) console.log("minor");
    if (newAge >= 20) console.log("adult");
  },
};

// TODO: What will this log?
var investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
  // this here takes scope of child object -> investment
};

// TODO: After commenting, check your results!
// helloThis();

// TODO: After commenting, check your results!
// child.ageTenYears(); // adult
investor.investment.investmentGrowth(); // 5750
