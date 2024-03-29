const router = require("express").Router();
// Here is where we provide hardcoded data to render dynamically
const dishes = [
  {
    id: 1,
    dish_name: "French Bread with Brie Cheese",
    description: "French baguette with warm brie",
  },
  {
    id: 2,
    dish_name: "Cheese Plate with Spanish Chorizo",
    description:
      "Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo",
  },
  {
    id: 3,
    dish_name: "Fish Tacos",
    description:
      "Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion",
    dish_type: "entree",
  },
  {
    id: 4,
    dish_name: "Tropical Fruit Salad",
    description: "Guava, papaya, pineapple, mango, and star fruit",
  },
  {
    id: 5,
    dish_name: "Pork Gyoza",
    description:
      "Homemade japanese dumplings stuffed with a pork and green onion filling",
  },
  {
    id: 6,
    dish_name: "Yebeg Tibs with Injera Bread",
    description:
      "Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere",
  },
  {
    id: 7,
    dish_name: "Cape Malay Curry",
    description: "Chicken and vegitable curry dish with basmati rice",
  },
];

//get all dishes
router.get("/", async (req, res) => {
  res.render("all");
});

//get one dish
router.get("/dish/:num", async (req, res) => {
  // This method renders the 'dish' template, and uses params to select the correct dish to render in the template, based on the id of the dish.
  return res.render("dish", dishes[req.params.num - 1]);
});

module.exports = router;
