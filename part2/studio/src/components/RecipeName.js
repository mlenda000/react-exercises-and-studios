import recipedata from "./recipe.json";

function RecipeName() {
  const recipeName = recipedata.map((data)=>(
    <div key={data.name} className='name'>
      <h1 className='name'>{data.name}</h1>
    </div>
    ));

  return <div>{recipeName}</div>;
}

export default RecipeName;

//import return the name of the recipe as a level 1 header