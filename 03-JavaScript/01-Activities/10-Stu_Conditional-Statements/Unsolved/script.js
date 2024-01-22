// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = x > 25; //true
var expression2 = x == 50; //true

// Write Your JavaScript Code Here
if (expression1 && expression2) {
  console.log("true true");
} else if (expression1) {
  console.log("true false");
} else if (expression2) {
  console.log("false true");
} else {
  //if (!expression1 && !expression2) {
  console.log("false false");
}

// if (condition) then result

/** 
 //  * * It's done
  -> when the message "True ✅ True ✅" is logged (result)
  -> when both `expression1` and `expression2` are true. (condition)

  condition -> exp1 = true and exp2 = true
  result -> logs the message "true true"

  if (exp1 && exp2) console.log("true true")
*/

/** 
 // * It's done
  -> when the message "True ✅ False ❌" is logged (result)
  -> when `expression1` is true. (condition)
  -> when `expression2` is false. (optional)

  condition -> exp1 = true [and exp2 = false]
  result -> logs message "true false"

  if (exp1) console.log("true false")

*/

// * It's done when the message "False ❌ True ✅" is logged when `expression2` is true.

// * It's done when the message "False ❌ False ❌" is logged when both `expression1` and `expression2` are false.
