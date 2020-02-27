import React from 'react'
import style from './recipe.module.css'
const Recipe = (props) => {

    const { title, image, calories, ingredients, servings, healthLabels, nutrients } = props;
    const ENER_KACL = (nutrients.ENERC_KCAL)
    const FAT = (nutrients.FAT);
    const PROCNT = (nutrients.PROCNT);
    const CHOLE = (nutrients.CHOLE);

    return (
        <div className={style.recipe}>
            <div>
                <p className={style.title}>{title}</p>
                <ul>
                    <li>Calories: {calories}</li>
                    <li>Servings: {servings}</li>
                    <li>healthLabels:</li>
                    <ul> {healthLabels.map((el) => (
                        <li>{el}</li>
                    ))}
                    </ul>
                    <li>Nutrients</li>
                    
                    <li>{ENER_KACL.label}: {Math.floor(ENER_KACL.quantity * 100) / 100} {ENER_KACL.unit}</li>
                    <li>{FAT.label}: {Math.floor(FAT.quantity * 100) / 100} {FAT.unit}</li>
                    <li>{PROCNT.label}: {Math.floor(PROCNT.quantity * 100) / 100} {PROCNT.unit}</li>
                    <li>{CHOLE.label}: {Math.floor(CHOLE.quantity * 100) / 100} {CHOLE.unit}</li>
                    
                </ul>

                {/* <p className={style.calories}>Calories:{calories}</p> */}
            </div>
            <div>
                <p className={style.ingredients}>Ingredients</p>
                <ol className={style.list}>
                    {ingredients.map((i, index) => (
                        <li className={style.listitem} key={index}>{i.text}</li>
                    ))}
                </ol>
            </div>
            <img src={image}></img>
        </div>
    )
}

export default Recipe;