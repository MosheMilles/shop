import { Link } from "react-router-dom";

function SearchProduct(){
    return (
        <div>
        <h1>כאן תהיה רשימת מוצרים עם אפשרות חיפוש</h1>
        <Link to='..'><button>חזור לתפריט ניהול הזמנות</button></Link>
        </div>
    )
}
export default SearchProduct;