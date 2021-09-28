import React from "react";
import Button from "@restart/ui/esm/Button";

const CocktailCard = ({ cocktail }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={cocktail.strDrinkThumb} alt="" />
        </div>
        <div className="card-back">
          <h1>{cocktail.strDrink}</h1>
          <ul>
            <li>
              <strong>Category:</strong> {cocktail.strCategory}
            </li>
            {cocktail.strTags && (
              <li>
                <strong>Tags:</strong> {cocktail.strTags}
              </li>
            )}
            <li>
              <strong>Alcoholic:</strong> {cocktail.strAlcoholic}
            </li>
            <Button variant="secondary">Add Fav</Button>
            <Button variant="primary">See Details</Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
