import React from 'react'
import style from './recipe.module.css'
const Recipe = (props) => {
    const {title , image , calories, ingredients} = props;
    return(
        <div className={style.recipe}>
    <p className={style.title}>{title}</p>
    <p className={style.calories}>Calories:{calories}</p>
    <p className={style.ingredients}>Ingredients</p>
    <ol className={style.list}>
        {ingredients.map((i,index) => (
            <li className={style.listitem} key={index}>{i.text}</li>
        ))}
    </ol>
    <img src={image}></img>
    </div>
    )
}

export default Recipe;