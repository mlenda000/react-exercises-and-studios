import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{name:'Pinterest',value:'where pinterest meets food'},{name:'Reddit', value:'food gets post here sometimes'},{name:'Favorite Desserts', value:'I like cookies'}];
   const [boardName, setName] = useState('No boards yet');
 
   function MyBoards(){
      const options = boards.map((props) =>(
         <option key={props.name} value={props.name}>{props.name}</option>
      ));
      return options;
   }

   const handleChange = (event) => {
      // console.log(boards)   
      setName(event.target.value);
     }
   
   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {/* {boards.map(board => {
            {console.log(board)}
            <option value={board.name}>{board.name}</option>
         })} */}
         <MyBoards/>
         
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}