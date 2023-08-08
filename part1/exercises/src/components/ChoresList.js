import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div >
         <h2 className={classes.choresHeading}>Today's Chores</h2>
         <ul className={classes.choresText}>
            <li>Work on assignment 5</li>
            <li>Do react exercise</li>
            <li>Do react studio</li>
         </ul>
      </div>
   )

}