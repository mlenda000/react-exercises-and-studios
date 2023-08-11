const RecipeAuthor = () => {
   let authorLink = "https://www.the-girl-who-ate-everything.com/";
   let authorPhoto = "https://www.the-girl-who-ate-everything.com/wp-content/uploads/2017/06/christy-denney.jpeg";
   let authorName = "Girl Who Ate Everything";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ['1 cup creamy peanut butter', '1 cup firmly packed brown sugar', '1 large egg','1 teaspoon baking soda', '1/2 cup milk chocolate chips'];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>5-Ingredient Peanut Butter Chocolate Chip Cookies</h1>
            <p>If there were a contest for least ingredients in a chocolate chip peanut butter cookie, we\’re pretty sure ours would win first place. Super chewy and ready in about 15 minutes, this flour-free dessert is perfect for late-night and last-minute cravings.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://images-gmi-pmc.edge-generalmills.com/0edde777-ffbd-4600-abd9-c58342a906cd.jpg" alt="cookie pic" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}