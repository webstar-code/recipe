import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import './App.css';






function App() {
  const [search, setSearch] = useState('');
  const [recipes, setRecipe] = useState([]);
  const [query, setQuery] = useState('chicken');

  const API_ID = '6322c039';
  const API_KEY = '0530004668c1e92899a4b467856bdc89';
  const API_URL = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  useEffect(() => {
    GetRecipes();

  }, [query])

  const GetRecipes = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data.hits);
    setRecipe(data.hits);
  }


  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search)
  }


  return (
    <div className="App">
      <h1 className="header">Recipes</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="text" value={search} onChange={handleSearch} className="search-input"></input>
        <button type="submit" className="search-btn" >Search</button>
      </form>

      <div className="recipe">
      {recipes.map((el,index) => (
        <Recipe key={index} title={el.recipe.label} 
        image={el.recipe.image} 
        calories={el.recipe.calories}
        ingredients={el.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
