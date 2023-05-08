import './Headline.css';
import SearchInput from '../../common/SearchInput/SearchInput';
function Headline({subCategory}) {
    return (
        <div className="headline_container">
        <div className="icon_container"><img className="icon" src="/images/פירות.png" alt="פירות"></img></div>
        <h1 className="category_headline">פירות</h1>
        <SearchInput category={subCategory} />
    </div>
    )
}
export default Headline;