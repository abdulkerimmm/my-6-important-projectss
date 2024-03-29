import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import Mealitem from "./MealItem/Mealitem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <Mealitem
      id={meal.id} // this is new!
      key={meal.id}
      description={meal.description}
      name={meal.name}
      price={meal.price}
    />
  ));
  // console.log("price=>", DUMMY_MEALS[3].price);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
