import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/Description.js';
import RecipeIngredients from './components/Ingredients';
import RecipePhoto from './components/Photos';
import RecipeDirections from './components/Recipe';

function App() {
  return (
    <div className="App">
     <div className='border'>
     <RecipePhoto/>
        <div className="recipePhotoBlock">
          <RecipeDescription/>
          <RecipeIngredients/>
        </div>
      <RecipeDirections/>
      </div>
    </div>
  );
}

export default App;
