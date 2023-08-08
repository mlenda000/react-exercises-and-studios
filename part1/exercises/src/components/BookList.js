import classes from './BooksList.module.css';

export default function BookList() {
   let pageTitle = "Fancy Books";
   let book1 = "https://m.media-amazon.com/images/I/51fqvtcN3xL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/91AeAn9w1-L._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51jwVgq0FHS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" ;

   return (
      <div className={classes.border}>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Mistborn Saga" width='150px' height='225px'/>
         <img src={book2} alt="Steelheart Series" width ='150px' height='225px' />
         <img src={book3} alt="Cytonic Series" width ='150px' height='225px'/>
      </div>      
   );
}