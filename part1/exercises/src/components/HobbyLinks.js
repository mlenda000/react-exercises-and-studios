import classes from './HobbyLinks.module.css';

export default function HobbyLinks(){
    let hobbyLinks = ['https://www.nintendo.com/','https://www.pdga.com/','https://boardgamegeek.com/']
    
    return(
    <ul className={classes.bg}>
        <li><a href = {hobbyLinks[0]}>Nintendo</a></li>
        <li><a href = {hobbyLinks[1]}>Disc Golf</a></li>
        <li><a href = {hobbyLinks[2]}>Boardgames</a></li>
    </ul>
    );
}