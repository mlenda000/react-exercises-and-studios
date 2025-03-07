import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  const recipeAuthor = recipedata.map((data)=>(
  <div key={data.name}>{data.author}</div>     
    )); 
    
  const recipeAuthorImage = recipedata.map((data)=>(
    <div key={data.name}>
    <img src={data.authorImage} alt={data.name} className='authorImage'/>
    </div>
    ));
  const recipeWebsite = recipedata.map((data) =>(

  <div key ={data.name}>
    <a href={data.website}>{data.author}'s Website</a>
    </div>
    ));
  return (
    <div className='authorInfo'>
      <div className='info'>
      {recipeAuthor}
      {recipeWebsite}
    </div>
    {recipeAuthorImage};
    </div>
    
    )
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 