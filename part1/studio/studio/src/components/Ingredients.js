import styles from './Ingredients.module.css';

export default function RecipeIngredients (){
    let ingredients = ['3 eggs','¼ cup granulated sugar, divided','About ¼ cup heavy cream, divided','2 small red apples, cores removed and chopped into large pieces','Unsalted butter','1 tablespoon apple cognac','3 thick slices white sandwich bread','Olive oil','Thimbleberry jam','1 ½ tablespoons crème fraîche']

    return(
        <div>
        <h3 className={styles.heading}>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li>
           <li>{ingredients[3]}</li>
           <li>{ingredients[4]}</li>
           <li>{ingredients[5]}</li>
           <li>{ingredients[6]}</li>
           <li>{ingredients[7]}</li>
           <li>{ingredients[8]}</li>
           <li>{ingredients[9]}</li>
        </ul>
     </div>
    )
}