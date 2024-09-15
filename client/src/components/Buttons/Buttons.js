import './Buttons.css'
import SubjectIcon from '@mui/icons-material/Subject';
import TitleIcon from '@mui/icons-material/Title';
import ImageIcon from '@mui/icons-material/Image';
import LinkIcon from '@mui/icons-material/Link';
import SendIcon from '@mui/icons-material/Send';

function Buttons({small}){
console.log(small)
const className=small?"small_buttons":"buttons";
    return(
        <div className={className}>
            <div id="1"><div><SubjectIcon /> </div>{!small&&<h5>הוסף פסקה</h5>}</div>
            <div id="2"><div> <TitleIcon /></div>{!small&&<h5>הוסף כותרת</h5>}</div>
            <div id="3"><div><ImageIcon /></div>{!small&&<h5>הוסף תמונה</h5>}</div>
            <div id="4"><div><LinkIcon /></div>{!small&&<h5>הוסף קישור</h5>}</div>
            {!small&&<div id="send"><div><SendIcon /></div><h5>שלח</h5></div>}
        </div>
    )
}
export default Buttons;