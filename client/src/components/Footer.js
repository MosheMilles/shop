import Logo from './Logo';
import './styles/Footer.css';
function Footer(){
return(
<div className="footer">
    <div>
        <Logo />
    </div>
    <div>
        <h3>צור קשר</h3>
    </div>
<div className="credits">
<a href="https://www.flaticon.com/free-icons/gift" title="gift icons">Gift icons created by Freepik - Flaticon</a><br/>
<a href="https://www.flaticon.com/free-icons/fruits" title="fruits icons">Fruits icons created by Freepik - Flaticon</a><br/>
<a href="https://www.flaticon.com/free-icons/vegetable" title="vegetable icons">Vegetable icons created by photo3idea_studio - Flaticon</a>
</div>
</div>
)};
export default Footer;