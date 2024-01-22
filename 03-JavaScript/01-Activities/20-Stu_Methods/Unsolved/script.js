var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris"; // og var, in lower case

// WRITE YOUR CODE BELOW
// * - It's done when the string `"Canis Major"` is added as the first element of the `constellations` array and no elements are removed.
constellations.unshift("Canis Major");
console.log("constellations", constellations);

// * - It's done when `"Venus"` is removed from the `planets` array.
// planets.delete();
// delete planets[5];
planets.pop();
console.log("planets", planets);

// * - It's done when the arrays `constellations` and `planets` are joined to form a new array named `galaxy`. The arrays `constellations` and `planets` should not be altered.

// var galaxy = [constellations, planets];
// var galaxy = [1].concat(1, [2, "hello"]);
var galaxy = [].concat(constellations, planets);
// var galaxy = constellations.concat(planets)
console.log("galaxyz", galaxy);

// * - It's done when the string `"polaris"` is converted into all capital letters and the new string is stored in a variable.
// var star = "polaris"; // og var, in lower case
var polaris = star.toUpperCase(); // -> POLARIS
console.log("star", polaris);

/**
 * unshift/shift -> first -> add/remove
 * push/pop -> last -> add/remove
 */
