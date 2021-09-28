import { useEffect, useState } from "react";
import axios from "axios";
import CocktailCard from "../components/CocktailCard";
import Search from "../components/Search";

function CocktailsPage() {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCocktails = async () => {
      const result = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      );

      console.log(result.data.drinks);
      setCocktails(result.data.drinks);
      setIsLoading(false);
    };
    fetchCocktails();
  }, [query]);

  return isLoading ? (
    <h1>LOADING...</h1>
  ) : (
    <>
    <h1>Cocktail List</h1> <br />
      <Search getQuery ={(q)=> setQuery(q)}/>
    <section className="cards" id="search">
      {

      cocktails.map((cocktail) => (
        cocktail.strDrink.toLowerCase().includes(query) ? (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail}></CocktailCard> ):( <h1>LOADING</h1>)
      ))}
    </section>
    </>

  );
}

export default CocktailsPage;
