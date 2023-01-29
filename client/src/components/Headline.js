import './styles/Headline.css';
function Headline(subCategory) {
    return (
        <div className="headline_container">
        <div className="icon_container"><img className="icon" src="/פירות.png" alt="פירות"></img></div>
        <h1 className="category_headline">פירות</h1>
        <input type="search" className="search_in_category" />
    </div>
    )
}
export default Headline;