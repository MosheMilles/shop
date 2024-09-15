import './ItemHeader.css';

function ItemHeader() {
    return (
        <div className="item_header">
           <p className="header_txt"><span className="header_txt">•הועלה עי: Admin</span> <span className="header_txt">  •תאריך העלאה: 28/08/24 </span> <span className="header_txt">•תאריך עדכון אחרון: 29/08/24</span></p>
           <p className="header_txt">הערה: הועתק ממסמך הדרכה ישן. יש לוודא שהמידע עדכני</p>
        </div>
    )
};
export default ItemHeader;