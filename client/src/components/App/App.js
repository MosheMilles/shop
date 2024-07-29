
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Item from '../Item/Item';
import ItemConfig from '../ItemConfig/ItemConfig';
import DocService from '../../DocService';
import PasteComponent from '../input';


const items = [
  { id: 10, title: "ביטול ריבית והצמדה", itemArray: [{ type: "txt", txt: `מהות התהליך – ביטול של ריביות והצמדות קיימות ומוצדקות, אולם מסיבה מסוימת הוחלט לבטלן (הסכם פשרה וכדו'). ` }, { type: "txt", txt: `ניהול התהליך – התהליך מתבצע במסך תנועות. חשוב להפריד את התהליך מתהליך של חישוב הפרשי ריבית והצמדה, העוסק בריביות והצמדות לא מוצדקות במערכת. ` }, { type: "txt", txt: `ביצוע התהליך – נכנסים למסך תנועות על המשלם הרלוונטי. לוחצים על הלחצן הכחול של ביטול ריבית והצמדה (1), כעת ייפתח מסך חדש שבו מתנהל התהליך. בוחרים את הנכס (2) וסוג החיוב (3) הרצויים. כעת נפתחת במסך רשימה של כלל הריביות וההצמדות שאותו משלם קיבל לפי שנים (4). ניתן לשנות את סכום הריבית/הצמדה לביטול ע"י שינוי הסכום בשורה הרצויה (5). מסמנים וי בשורות הרצויות (6), מכניסים תאריך ערך (7) (בד"כ מכניסים תאריך של היום, לצורך זה, לוחצים לחיצה כפולה עם הלחצן השמאלי של העכבר על המקום הייעודי לתאריך הערך). לסיום ואישור הפעולה לוחצים על אישור. ` }, { type: "image", src: "/images/10_1.png", alt: "10_1" }] },
  { id: 1, title: "חיובים", itemArray: [{ id: 1, type: "txt", txt: "משלמים->חיובים" }, { id: 2, type: "txt", txt: "מסך זה נועד על מנת לחייב משלם בחיוב ידני חד פעמי/מזדמן. כאשר קולטים קבלה ז/ח, צד החובה נרשם כאן, וכן כשעושים תיקוני רטרו החיובים נרשמים במסך זה. " }, { id: 3, type: "txt", txt: "המסך הנ\"ל מכיל את כל החיובים שאינם אוטומטים (לא חיובים תקופתיים אוטומטים ולא ריביות, חיוב מראש וכו'.)." }, { id: 4, type: "txt", txt: "יש להגדיר את סוג החיוב, תאריך ערך(עבור ריביות) ותאריך גביה, סכום לחיוב ומספר נכס." }, { id: 5, type: "txt", txt: "הגדרת V  בהיסטורי משמעותה- החיוב לא שייך לחיובים השוטפים ולכן נקרא \"היסטורי\" והוא לא יופיע בשובר הבא. במידה ונרצה שחיוב זה יופיע בשובר יחד עם החיובים השוטפים נוריד את ה V  מהיסטורי." }, { id: 7, type: "txt", txt: "בנוסף, יש להגדיר לכל חיוב סמל פעולה לטובת חתכים בהוצאת דוחות חיובים. " }, { id: 8, type: "image", src: "/images/1_1.png" }, { id: 9, type: "image", src: "/images/1_2.png" }, { id: 10, type: "txt", txt: "כשנגלול לצד שמאל של מסך זה, נגדיר את פרטי ההנחה במידה ושורת החיוב/זיכוי הייתה בגין מתן הנחה. במידה וכן, נגדיר כאן את סכום ההנחה וקוד ההנחה. (נניח שהמשלם אמור לקבל חיוב של 2,000 ש\"\ח, בשדה סכום, נגדיר את הסכום נטו, לאחר ההנחה, במקרה שלנו 1,500ש\"\ח, ובצד שמאל של המסך בהגדרת ההנחה בשדה סכום הנחה נגדיר - 5,00ש\"ח כך בדוחות ההנחות והסכומים יופיעו בצורה הנכונה.)" }, { id: 11, type: "txt", txt: "בנוסף, במידה ומדובר בחודש פתוח, ניתן לשנות סכום חיוב של חיוב ידני, וכן למחוק חיוב במידה וטעינו." }] },
  { id: 2, title: "הנחות ארנונה", itemArray: [{ type: "txt", txt: "משלמים->הנחות ארנונה" }, { type: "txt", txt: "על מנת לתת לנכס הנחה בגין סוג חיוב ארנונה, נגדיר את סוג ההנחה (למשל, נכס ריק) טווח חודשים ומספר נכס. נתוני ההנחה, כגון, הגבלת מ\"ר ואחוז הנחה מוגדר בארנונה->טבלאות ארנונה->טבלת הנחות." }, { type: "txt", txt: "בכל סגירת חודש, יצא לנכס חיוב תקופתי לאחר מתן ההנחה. ברגע שהגבלת החודשים מסתיימת, המערכת אינה מתריעה ולנכס יצא חיוב תקופתי מלא." }, { type: "image", src: "/images/2_1.png" }] },
  { id: 3, title: "החזרת/ביטול המחאות", itemArray: [{ type: "txt", txt: "מהות התהליך – החזרת/ביטול המחאות, כאשר נתקבלה הוראה מהבנק להחזר או שהוחלט לבטל המחאה מסוימת לפני שהגיע מועד פירעונה." }, { type: "txt", txt: "ניהול התהליך – התהליך מתבצע במסך ייעודי להחזר/ביטול המחאות. הגישה למסך מתבצעת מתשלומים והחזרים (1) ביטולים שינויים והחזרים (2) החזרת/ביטול המחאות (3). " }, { type: "image", src: "/images/3_1.png" }, { type: "txt", txt: "ביצוע התהליך – לאחר הכניסה למסך, יש להגדיר את טווח תאריכי הגביה (1) של ההמחאות אותן אנחנו צריכים להחזיר, ניתן לעשות טווח רחב יותר, המשמעות של טווח התאריכים היא לגבי הנתנים שיוצגו במסך. כעת מוצגות במסך כלל ההמחאות הנמצאות בטווח שהגדרנו (2) בכדי לחפש המחאה או משלם מסוים ניתן להיעזר בשדות הסינון, לחיפוש לפי משלם (3) או לפי פרטי החשבון (4), הפעלת הסינון תקפיץ את המשלם/פרטי החשבון שבחרנו לראש רשימת ההמחאות (5). יש לסמן בוי את השורה הרצויה בחזר/בוטל (6) לפי מצב ההמחאה (לפני תאריך הפירעון – ביטול, לאחר תאריך הפירעון – החזר). יש לסמן באיזה תאריך ההמחאה חזרה בבנק (7) התאריך שנבחר בתאריך ההחזר יהיה תאריך הגביה של שורת ההחזר/ביטול. יש להגדיר את סיבת ההחזר שקיבלנו מהבנק (8) ולוודא את סכום העמלה (9) שחויבה בשל ההחזר/ביטול, ובמידת הצורך לעדכן לסכום הנכון. לסיום הפעולה יש ללחוץ אישור (10). לאחר ביצוע הפעולה יצאו שני מסמכים, הראשון הינו מכתב ממוזג בוורד לשליחה בדואר למי שחזרה לו הוראת הקבע, השני הינו דוח מרכז על הפעולה. " }, { type: "image", src: "/images/3_2.png" }] },
  { id: 4, title: "רטרו העברה בין משלמים ", itemArray: [{ type: "txt", txt: "מהות התהליך – שינוי המשלם בנכס באופן רטרואקטיבי, בכלל זה עדכון החיובים בתקופה המדוברת. " }, { type: "txt", txt: "ניהול התהליך – התהליך מתבצע במסך הרטרו. הגישה למסך הרטרו היא ע\"י בחירת הנכס המבוקש במסך משלמים (1) נכסים (2) ולחיצה כפולה על מס' הנכס (3). לאחר הלחיצה נפתח תפריט פעולות לנכס (4), בו לוחצים על אפשרות הרטרו (5). " }, { type: "image", src: "/images/4_1.png" }, { type: "txt", txt: "ביצוע התהליך – המסך מחולק בגדול לשלושה חלקים. חלק ראשון אלו הנתונים הנוכחיים של הנכס (1). החלק השני הוא הנתונים החדשים (2), כלומר הנתונים שאנו רוצים לעדכן. החלק השלישי הוא הפרמטרים של הרטרו (3). נבחר את המשלם שאליו אנו רוצים להעביר את הנכס (4), ונסמן הנחה (5) או שינוי בגודל או תעריף (6) במידה ויש. אם משנים את ההנחה של המשלם או מוסיפים הנחה חדשה יש להוריד את הסימון מללא שינוי הנחה (7). לאחר הוספת הנתונים שאליהם אנו רוצים לשנות, יש להגדיר את טווח התאריכים של הרטרו (8). בשביל לבצע רטרו והעברת משלמים יש ללחוץ על אישור ומעבר להעברת נכס (9) מה שיעביר אותנו בסיום הפעולה למסך העברת נכס, אם רוצים לעשות רק רטרו אז לוחצים על אישור (10). " }, { type: "image", src: "/images/4_2.png" }, { type: "txt", txt: "לאחר הלחיצה ייפתח מסך נוסף, במסך זה נראה את הנתונים הישנים והחדשים לפי מה שעדכנו (1). ניתן במסך זה לעדכן את הנתונים של הרטרו, ע\"י שינוי הנתון הרצוי בנתונים החדשים (2). להמשך למסך הבא יש ללחוץ על אישור (3), לחזרה למסך הקודם יש ללחוץ על ביטול הפעולה (4)." }, { type: "image", src: "/images/4_3.png" }, { type: "txt", txt: "לאחר מכן ייפתח המסך השלישי והסופי בו רואים את נתוני הכסף שהולכים להתבצע בפעולת הרטרו (1). יש לבחור סמל פעולה המתאים לפעולת רטרו (2). ניתן להוסיף הערה ידנית שתירשם על כל השורות שיבוצעו מהמסך (3). לסיום הפעולה יש ללחוץ על אישור (4), במידה ורוצים לבטל את הפעולה ולחזור למסך הראשון יש ללחוץ על יציאה (5). " }, { type: "image", src: "/images/4_4.png" }] },
  { id: 5, title: "מסך הקלדה ידנית לסוג חיוב ", itemArray: [{ type: "txt", txt: "מהות המסך – ביצוע חיובים ידניים למספר רב של משלמים בסוג חיוב ספציפי. " }, { type: "txt", txt: "גישה למסך – הגישה למסך מתבצעת דרך תפריט תשלומים וחיובים (1) מתוך התפריט בוחרים באפשרות השנייה, הקלדה ידנית לסוג חיוב (2). " }, { type: "image", src: "/images/5_1.png" }, { type: "txt", txt: "שימוש במסך – השימוש במסך מתבצע כאשר יש לנו צורך לחייב מס' משלמים/נכסים בסוג חיוב ספציפי. בנוסף המסך לא מבצע הפרשי ריבית, לכן, אין להשתמש בו כאשר רוצים לקלוט חיובים עם תאריך ערך ישן! במקרה כזה יש לקלוט אחד אחד, או כקובץ אקסל." }, { type: "image", src: "/images/5_2.png" }, { type: "txt", txt: "ביצוע הפעולה – בוחרים את סוג החיוב הרצוי (1) במסך יופיעו כל החיובים הידניים שהכנסנו מאז סגירת התקופה הקודמת. בצד ימין נגדיר את נתוני ברירת המחדל (2), תאריך גביה (לדוחות) תאריך ערך (חייב להיות של היום והלאה) סמל פעולה, שנה, הערה (במידה ורוצים), סכום, הנחה וסכום הנחה (רק אם כלולה הנחה בסיפור) וסימון של היסטורי/לא היסטורי (אם אנחנו רוצים שזה ייכנס לשובר הקרוב, לא נסמן וי בהיסטורי. במידה ואנחנו רוצים במצב החשבון הנוכחי, מסמנים וי בהיסטורי). כעת מוסיפים את המשלמים, מוסיפים שורה חדשה במסך ע\"י לחיצה על החץ עם הכוכבית הצהובה (3) או ע\"י לחיצה על שורה ריקה (4) ומגדירים את המשלם (5) והנכס(6) הנכונים. במידה ורוצים לשנות הערה או סכום למשלם מסוים, ניתן לשנות את הנתונים במסך, ע\"י שינוי בשורה הרלוונטית (7)" }, { type: "txt", txt: "דגש חשוב – אין לגעת בצד השמאלי של המסך, זה עלול להכפיל חיובים! זו פונקציה מסוימת שרלוונטית רק למקרה של העתקה מחודש קודם או משיכה של רשימה מוגדרת. במידה ויהיה רלוונטי נבצע הדרכה פרטנית לשימוש בפונקציה זו. " }] },
  { id: 6, title: "מסך עזר לחישוב ארנונה", itemArray: [{ type: "txt", txt: "ניתן לגשת למסך עזר לחישוב ארנונה דרך התפריט העליון :ארנונה=>מסך עזר לחישוב ארנונה" }, { type: "image", src: "/images/6_1.png" }, { type: "txt", txt: "יש להעתיק את מספר הנכס :" }, { type: "image", src: "/images/6_2.png" }, { type: "txt", txt: "ולחיצה על ENTER" }, { type: "txt", txt: "לאחר מכן יש לבחור את איזה תקופה בה ברצוננו לבצע חישוב (1),ואם יש צורך חלקות התקופה לפי תאריכים(2) או/ו מתן הנחה (3) .לבסוף ללחוץ חישוב סכום (4).ראו ציור." }, { type: "image", src: "/images/6_3.png" }, { type: "txt", txt: "לאחר מכן יופיע בחלק התחתון של המסך סכום התקופות לפני הנחה לכל חלקי התקופה וסכום ההנחה (אם יש ) לכל חלקי התקופה ." }, { type: "txt", txt: "אם רוצים להפוך את אחד השורות לחיוב,ניתן לסמן את השורה הרצויה, ב\"העבר כחיוב\" (1) ,להכניס סמל הפעולה המתאים באותה שורה (2) ולבסוף ללחוץ \"העבר חיובים למשלמים\"." }, { type: "image", src: "/images/6_4.png" }] },
  { id: 7, title: "העברת יתרות", itemArray: [{ type: "txt", txt: "מהות התהליך – העברת יתרה קיימת לסוג חיוב/נכס/משלם/ילד אחר." }, { type: "txt", txt: "ניהול התהליך – התהליך מתבצע במסך ייעודי שנקרא העברה בין חשבונות/סעיפים. הגישה למסך היא מתשלומים וחיובים (1) העברה בין חשבונות/סעיפים (2). " }, { type: "image", src: "/images/7_1.png" }, { type: "txt", txt: "ביצוע התהליך:" }, { type: "txt", txt: "לאחר הכניסה למסך יש לבחור את המשלם שעליו ברצוננו לעבוד (1). כעת יופיעו לנו היתרות המעודכנות של המשלם (2), בכדי להעביר את היתרה המבוקשת לסוג חיוב/נכס/משלם/ילד המבוקש, יש לשנות את השדה הרצוי בשורה המבוקשת (3). נגדיר פרמטרים נוספים של הפעולה, תאריך ערך (4) תאריך גביה (5) וסמל פעולה (6). מומלץ לעשות סמל פעולה ייחודי להעברה בין חשבונות. לסיום הפעולה יש ללחוץ על אישור (7). " }, { type: "image", src: "/images/7_2.png" }] },
  { id: 8, title: "העברת תנועות", itemArray: [{ type: "txt", txt: "מהות התהליך – העברת תנועות ממשלם אחד לאחר, או בין נכסים באותו המשלם. " }, { type: "txt", txt: "ניהול התהליך – התהליך מתבצע במסך ייעודי שנקרא העברה בין משלמים. הגישה למסך היא מתשלומים וחיובים (1) העברה בין חשבונות/סעיפים (2). לאחר הכניסה למסך העברה בין חשבונות/סעיפים, יש ללחוץ על העברה בין משלמים (3). " }, { type: "image", src: "/images/8_1.png" }, { type: "txt", txt: "ביצוע התהליך –  " }, { type: "txt", txt: "אפשרות א' – העברה בין משלמים. בכדי להעביר תנועות בין משלמים יש תחילה לסמן העברה של – משלמים (1). לאחר מכן, יש לבחור את משלם המקור ומשלם היעד (2). לאחר מכן, יש להגדיר טווח תאריכים שבו אנו רוצים לראות את התנועות (3). בכדי להציג את התנועות יש ללחוץ על הצגת תנועות (4). כעת תיפתח רשימה של כלל התנועות של משלם המקור בטווח התאריכים שבחרנו (5). יש לסמן בוי את התנועות הרצויות (6), ניתן גם לסמן את כלל התנועות בטווח ע\"י לחיצה על סמן הכל (7). בכדי לסיים את הפעולה יש ללחוץ על אישור (8)." }, { type: "txt", txt: "" }, { type: "txt", txt: "" }, { type: "txt", txt: "" }] },
  { id: 9, title: "", itemArray: [{ type: "txt", txt: "" }, { type: "txt", txt: "" }, { type: "txt", txt: "" }, { type: "txt", txt: "" }, { type: "txt", txt: "" }, { type: "txt", txt: "" }, { type: "txt", txt: "" }, { type: "txt", txt: "" }] },
]

function App() {

  const [docs, setDocs] = useState([]);

  useEffect(() => {
    DocService.getDocs().then(response => {
      setDocs(response.data);
    });
  }, []);

  const createDoc = () => {
    const doc =  { id: 10, title: "ביטול ריבית והצמדה", itemArray: [{ type: "txt", txt: `מהות התהליך – ביטול של ריביות והצמדות קיימות ומוצדקות, אולם מסיבה מסוימת הוחלט לבטלן (הסכם פשרה וכדו'). ` }, { type: "txt", txt: `ניהול התהליך – התהליך מתבצע במסך תנועות. חשוב להפריד את התהליך מתהליך של חישוב הפרשי ריבית והצמדה, העוסק בריביות והצמדות לא מוצדקות במערכת. ` }, { type: "txt", txt: `ביצוע התהליך – נכנסים למסך תנועות על המשלם הרלוונטי. לוחצים על הלחצן הכחול של ביטול ריבית והצמדה (1), כעת ייפתח מסך חדש שבו מתנהל התהליך. בוחרים את הנכס (2) וסוג החיוב (3) הרצויים. כעת נפתחת במסך רשימה של כלל הריביות וההצמדות שאותו משלם קיבל לפי שנים (4). ניתן לשנות את סכום הריבית/הצמדה לביטול ע"י שינוי הסכום בשורה הרצויה (5). מסמנים וי בשורות הרצויות (6), מכניסים תאריך ערך (7) (בד"כ מכניסים תאריך של היום, לצורך זה, לוחצים לחיצה כפולה עם הלחצן השמאלי של העכבר על המקום הייעודי לתאריך הערך). לסיום ואישור הפעולה לוחצים על אישור. ` }, { type: "image", src: "/images/10_1.png", alt: "10_1" }] }
    // { id: 1, title: "חיובים", itemArray: [{ id: 1, type: "txt", txt: "משלמים->חיובים" }, { id: 2, type: "txt", txt: "מסך זה נועד על מנת לחייב משלם בחיוב ידני חד פעמי/מזדמן. כאשר קולטים קבלה ז/ח, צד החובה נרשם כאן, וכן כשעושים תיקוני רטרו החיובים נרשמים במסך זה. " }, { id: 3, type: "txt", txt: "המסך הנ\"ל מכיל את כל החיובים שאינם אוטומטים (לא חיובים תקופתיים אוטומטים ולא ריביות, חיוב מראש וכו'.)." }, { id: 4, type: "txt", txt: "יש להגדיר את סוג החיוב, תאריך ערך(עבור ריביות) ותאריך גביה, סכום לחיוב ומספר נכס." }, { id: 5, type: "txt", txt: "הגדרת V  בהיסטורי משמעותה- החיוב לא שייך לחיובים השוטפים ולכן נקרא \"היסטורי\" והוא לא יופיע בשובר הבא. במידה ונרצה שחיוב זה יופיע בשובר יחד עם החיובים השוטפים נוריד את ה V  מהיסטורי." }, { id: 7, type: "txt", txt: "בנוסף, יש להגדיר לכל חיוב סמל פעולה לטובת חתכים בהוצאת דוחות חיובים. " }, { id: 8, type: "image", src: "/images/1_1.png" }, { id: 9, type: "image", src: "/images/1_2.png" }, { id: 10, type: "txt", txt: "כשנגלול לצד שמאל של מסך זה, נגדיר את פרטי ההנחה במידה ושורת החיוב/זיכוי הייתה בגין מתן הנחה. במידה וכן, נגדיר כאן את סכום ההנחה וקוד ההנחה. (נניח שהמשלם אמור לקבל חיוב של 2,000 ש\"\ח, בשדה סכום, נגדיר את הסכום נטו, לאחר ההנחה, במקרה שלנו 1,500ש\"\ח, ובצד שמאל של המסך בהגדרת ההנחה בשדה סכום הנחה נגדיר - 5,00ש\"ח כך בדוחות ההנחות והסכומים יופיעו בצורה הנכונה.)" }, { id: 11, type: "txt", txt: "בנוסף, במידה ומדובר בחודש פתוח, ניתן לשנות סכום חיוב של חיוב ידני, וכן למחוק חיוב במידה וטעינו." }] }
    // { id: 9, title: "ניסיון", itemArray: [{ type: "txt", txt: "אהלן אהלן" },{type:"txt",txt:"מה קורה?"}] };
    DocService.createDoc(doc).then(response => {
      setDocs([...docs, response.data]);
    });
  };

  const addDocs = () => {
    const docs=[
      { id: 10, title: "ביטול ריבית והצמדה", itemArray: [{ type: "txt", txt: `מהות התהליך – ביטול של ריביות והצמדות קיימות ומוצדקות, אולם מסיבה מסוימת הוחלט לבטלן (הסכם פשרה וכדו'). ` }, { type: "txt", txt: `ניהול התהליך – התהליך מתבצע במסך תנועות. חשוב להפריד את התהליך מתהליך של חישוב הפרשי ריבית והצמדה, העוסק בריביות והצמדות לא מוצדקות במערכת. ` }, { type: "txt", txt: `ביצוע התהליך – נכנסים למסך תנועות על המשלם הרלוונטי. לוחצים על הלחצן הכחול של ביטול ריבית והצמדה (1), כעת ייפתח מסך חדש שבו מתנהל התהליך. בוחרים את הנכס (2) וסוג החיוב (3) הרצויים. כעת נפתחת במסך רשימה של כלל הריביות וההצמדות שאותו משלם קיבל לפי שנים (4). ניתן לשנות את סכום הריבית/הצמדה לביטול ע"י שינוי הסכום בשורה הרצויה (5). מסמנים וי בשורות הרצויות (6), מכניסים תאריך ערך (7) (בד"כ מכניסים תאריך של היום, לצורך זה, לוחצים לחיצה כפולה עם הלחצן השמאלי של העכבר על המקום הייעודי לתאריך הערך). לסיום ואישור הפעולה לוחצים על אישור. ` }, { type: "image", src: "/images/10_1.png", alt: "10_1" }] },
      { id: 1, title: "חיובים", itemArray: [{ type: "txt", txt: "משלמים->חיובים" }, { id: 2, type: "txt", txt: "מסך זה נועד על מנת לחייב משלם בחיוב ידני חד פעמי/מזדמן. כאשר קולטים קבלה ז/ח, צד החובה נרשם כאן, וכן כשעושים תיקוני רטרו החיובים נרשמים במסך זה. " }, { id: 3, type: "txt", txt: "המסך הנ\"ל מכיל את כל החיובים שאינם אוטומטים (לא חיובים תקופתיים אוטומטים ולא ריביות, חיוב מראש וכו'.)." }, { id: 4, type: "txt", txt: "יש להגדיר את סוג החיוב, תאריך ערך(עבור ריביות) ותאריך גביה, סכום לחיוב ומספר נכס." }, { id: 5, type: "txt", txt: "הגדרת V  בהיסטורי משמעותה- החיוב לא שייך לחיובים השוטפים ולכן נקרא \"היסטורי\" והוא לא יופיע בשובר הבא. במידה ונרצה שחיוב זה יופיע בשובר יחד עם החיובים השוטפים נוריד את ה V  מהיסטורי." }, { id: 7, type: "txt", txt: "בנוסף, יש להגדיר לכל חיוב סמל פעולה לטובת חתכים בהוצאת דוחות חיובים. " }, { id: 8, type: "image", src: "/images/1_1.png" }, { id: 9, type: "image", src: "/images/1_2.png" }, { id: 10, type: "txt", txt: "כשנגלול לצד שמאל של מסך זה, נגדיר את פרטי ההנחה במידה ושורת החיוב/זיכוי הייתה בגין מתן הנחה. במידה וכן, נגדיר כאן את סכום ההנחה וקוד ההנחה. (נניח שהמשלם אמור לקבל חיוב של 2,000 ש\"\ח, בשדה סכום, נגדיר את הסכום נטו, לאחר ההנחה, במקרה שלנו 1,500ש\"\ח, ובצד שמאל של המסך בהגדרת ההנחה בשדה סכום הנחה נגדיר - 5,00ש\"ח כך בדוחות ההנחות והסכומים יופיעו בצורה הנכונה.)" }, { id: 11, type: "txt", txt: "בנוסף, במידה ומדובר בחודש פתוח, ניתן לשנות סכום חיוב של חיוב ידני, וכן למחוק חיוב במידה וטעינו." }] },
      { id: 2, title: "הנחות ארנונה", itemArray: [{ type: "txt", txt: "משלמים->הנחות ארנונה" }, { type: "txt", txt: "על מנת לתת לנכס הנחה בגין סוג חיוב ארנונה, נגדיר את סוג ההנחה (למשל, נכס ריק) טווח חודשים ומספר נכס. נתוני ההנחה, כגון, הגבלת מ\"ר ואחוז הנחה מוגדר בארנונה->טבלאות ארנונה->טבלת הנחות." }, { type: "txt", txt: "בכל סגירת חודש, יצא לנכס חיוב תקופתי לאחר מתן ההנחה. ברגע שהגבלת החודשים מסתיימת, המערכת אינה מתריעה ולנכס יצא חיוב תקופתי מלא." }, { type: "image", src: "/images/2_1.png" }] },
      { id: 3, title: "החזרת/ביטול המחאות", itemArray: [{ type: "txt", txt: "מהות התהליך – החזרת/ביטול המחאות, כאשר נתקבלה הוראה מהבנק להחזר או שהוחלט לבטל המחאה מסוימת לפני שהגיע מועד פירעונה." }, { type: "txt", txt: "ניהול התהליך – התהליך מתבצע במסך ייעודי להחזר/ביטול המחאות. הגישה למסך מתבצעת מתשלומים והחזרים (1) ביטולים שינויים והחזרים (2) החזרת/ביטול המחאות (3). " }, { type: "image", src: "/images/3_1.png" }, { type: "txt", txt: "ביצוע התהליך – לאחר הכניסה למסך, יש להגדיר את טווח תאריכי הגביה (1) של ההמחאות אותן אנחנו צריכים להחזיר, ניתן לעשות טווח רחב יותר, המשמעות של טווח התאריכים היא לגבי הנתנים שיוצגו במסך. כעת מוצגות במסך כלל ההמחאות הנמצאות בטווח שהגדרנו (2) בכדי לחפש המחאה או משלם מסוים ניתן להיעזר בשדות הסינון, לחיפוש לפי משלם (3) או לפי פרטי החשבון (4), הפעלת הסינון תקפיץ את המשלם/פרטי החשבון שבחרנו לראש רשימת ההמחאות (5). יש לסמן בוי את השורה הרצויה בחזר/בוטל (6) לפי מצב ההמחאה (לפני תאריך הפירעון – ביטול, לאחר תאריך הפירעון – החזר). יש לסמן באיזה תאריך ההמחאה חזרה בבנק (7) התאריך שנבחר בתאריך ההחזר יהיה תאריך הגביה של שורת ההחזר/ביטול. יש להגדיר את סיבת ההחזר שקיבלנו מהבנק (8) ולוודא את סכום העמלה (9) שחויבה בשל ההחזר/ביטול, ובמידת הצורך לעדכן לסכום הנכון. לסיום הפעולה יש ללחוץ אישור (10). לאחר ביצוע הפעולה יצאו שני מסמכים, הראשון הינו מכתב ממוזג בוורד לשליחה בדואר למי שחזרה לו הוראת הקבע, השני הינו דוח מרכז על הפעולה. " }, { type: "image", src: "/images/3_2.png" }] },
      { id: 4, title: "רטרו העברה בין משלמים ", itemArray: [{ type: "txt", txt: "מהות התהליך – שינוי המשלם בנכס באופן רטרואקטיבי, בכלל זה עדכון החיובים בתקופה המדוברת. " }, { type: "txt", txt: "ניהול התהליך – התהליך מתבצע במסך הרטרו. הגישה למסך הרטרו היא ע\"י בחירת הנכס המבוקש במסך משלמים (1) נכסים (2) ולחיצה כפולה על מס' הנכס (3). לאחר הלחיצה נפתח תפריט פעולות לנכס (4), בו לוחצים על אפשרות הרטרו (5). " }, { type: "image", src: "/images/4_1.png" }, { type: "txt", txt: "ביצוע התהליך – המסך מחולק בגדול לשלושה חלקים. חלק ראשון אלו הנתונים הנוכחיים של הנכס (1). החלק השני הוא הנתונים החדשים (2), כלומר הנתונים שאנו רוצים לעדכן. החלק השלישי הוא הפרמטרים של הרטרו (3). נבחר את המשלם שאליו אנו רוצים להעביר את הנכס (4), ונסמן הנחה (5) או שינוי בגודל או תעריף (6) במידה ויש. אם משנים את ההנחה של המשלם או מוסיפים הנחה חדשה יש להוריד את הסימון מללא שינוי הנחה (7). לאחר הוספת הנתונים שאליהם אנו רוצים לשנות, יש להגדיר את טווח התאריכים של הרטרו (8). בשביל לבצע רטרו והעברת משלמים יש ללחוץ על אישור ומעבר להעברת נכס (9) מה שיעביר אותנו בסיום הפעולה למסך העברת נכס, אם רוצים לעשות רק רטרו אז לוחצים על אישור (10). " }, { type: "image", src: "/images/4_2.png" }, { type: "txt", txt: "לאחר הלחיצה ייפתח מסך נוסף, במסך זה נראה את הנתונים הישנים והחדשים לפי מה שעדכנו (1). ניתן במסך זה לעדכן את הנתונים של הרטרו, ע\"י שינוי הנתון הרצוי בנתונים החדשים (2). להמשך למסך הבא יש ללחוץ על אישור (3), לחזרה למסך הקודם יש ללחוץ על ביטול הפעולה (4)." }, { type: "image", src: "/images/4_3.png" }, { type: "txt", txt: "לאחר מכן ייפתח המסך השלישי והסופי בו רואים את נתוני הכסף שהולכים להתבצע בפעולת הרטרו (1). יש לבחור סמל פעולה המתאים לפעולת רטרו (2). ניתן להוסיף הערה ידנית שתירשם על כל השורות שיבוצעו מהמסך (3). לסיום הפעולה יש ללחוץ על אישור (4), במידה ורוצים לבטל את הפעולה ולחזור למסך הראשון יש ללחוץ על יציאה (5). " }, { type: "image", src: "/images/4_4.png" }] },
      { id: 5, title: "מסך הקלדה ידנית לסוג חיוב ", itemArray: [{ type: "txt", txt: "מהות המסך – ביצוע חיובים ידניים למספר רב של משלמים בסוג חיוב ספציפי. " }, { type: "txt", txt: "גישה למסך – הגישה למסך מתבצעת דרך תפריט תשלומים וחיובים (1) מתוך התפריט בוחרים באפשרות השנייה, הקלדה ידנית לסוג חיוב (2). " }, { type: "image", src: "/images/5_1.png" }, { type: "txt", txt: "שימוש במסך – השימוש במסך מתבצע כאשר יש לנו צורך לחייב מס' משלמים/נכסים בסוג חיוב ספציפי. בנוסף המסך לא מבצע הפרשי ריבית, לכן, אין להשתמש בו כאשר רוצים לקלוט חיובים עם תאריך ערך ישן! במקרה כזה יש לקלוט אחד אחד, או כקובץ אקסל." }, { type: "image", src: "/images/5_2.png" }, { type: "txt", txt: "ביצוע הפעולה – בוחרים את סוג החיוב הרצוי (1) במסך יופיעו כל החיובים הידניים שהכנסנו מאז סגירת התקופה הקודמת. בצד ימין נגדיר את נתוני ברירת המחדל (2), תאריך גביה (לדוחות) תאריך ערך (חייב להיות של היום והלאה) סמל פעולה, שנה, הערה (במידה ורוצים), סכום, הנחה וסכום הנחה (רק אם כלולה הנחה בסיפור) וסימון של היסטורי/לא היסטורי (אם אנחנו רוצים שזה ייכנס לשובר הקרוב, לא נסמן וי בהיסטורי. במידה ואנחנו רוצים במצב החשבון הנוכחי, מסמנים וי בהיסטורי). כעת מוסיפים את המשלמים, מוסיפים שורה חדשה במסך ע\"י לחיצה על החץ עם הכוכבית הצהובה (3) או ע\"י לחיצה על שורה ריקה (4) ומגדירים את המשלם (5) והנכס(6) הנכונים. במידה ורוצים לשנות הערה או סכום למשלם מסוים, ניתן לשנות את הנתונים במסך, ע\"י שינוי בשורה הרלוונטית (7)" }, { type: "txt", txt: "דגש חשוב – אין לגעת בצד השמאלי של המסך, זה עלול להכפיל חיובים! זו פונקציה מסוימת שרלוונטית רק למקרה של העתקה מחודש קודם או משיכה של רשימה מוגדרת. במידה ויהיה רלוונטי נבצע הדרכה פרטנית לשימוש בפונקציה זו. " }] },
      { id: 6, title: "מסך עזר לחישוב ארנונה", itemArray: [{ type: "txt", txt: "ניתן לגשת למסך עזר לחישוב ארנונה דרך התפריט העליון :ארנונה=>מסך עזר לחישוב ארנונה" }, { type: "image", src: "/images/6_1.png" }, { type: "txt", txt: "יש להעתיק את מספר הנכס :" }, { type: "image", src: "/images/6_2.png" }, { type: "txt", txt: "ולחיצה על ENTER" }, { type: "txt", txt: "לאחר מכן יש לבחור את איזה תקופה בה ברצוננו לבצע חישוב (1),ואם יש צורך חלקות התקופה לפי תאריכים(2) או/ו מתן הנחה (3) .לבסוף ללחוץ חישוב סכום (4).ראו ציור." }, { type: "image", src: "/images/6_3.png" }, { type: "txt", txt: "לאחר מכן יופיע בחלק התחתון של המסך סכום התקופות לפני הנחה לכל חלקי התקופה וסכום ההנחה (אם יש ) לכל חלקי התקופה ." }, { type: "txt", txt: "אם רוצים להפוך את אחד השורות לחיוב,ניתן לסמן את השורה הרצויה, ב\"העבר כחיוב\" (1) ,להכניס סמל הפעולה המתאים באותה שורה (2) ולבסוף ללחוץ \"העבר חיובים למשלמים\"." }, { type: "image", src: "/images/6_4.png" }] },
      { id: 7, title: "העברת יתרות", itemArray: [{ type: "txt", txt: "מהות התהליך – העברת יתרה קיימת לסוג חיוב/נכס/משלם/ילד אחר." }, { type: "txt", txt: "ניהול התהליך – התהליך מתבצע במסך ייעודי שנקרא העברה בין חשבונות/סעיפים. הגישה למסך היא מתשלומים וחיובים (1) העברה בין חשבונות/סעיפים (2). " }, { type: "image", src: "/images/7_1.png" }, { type: "txt", txt: "ביצוע התהליך:" }, { type: "txt", txt: "לאחר הכניסה למסך יש לבחור את המשלם שעליו ברצוננו לעבוד (1). כעת יופיעו לנו היתרות המעודכנות של המשלם (2), בכדי להעביר את היתרה המבוקשת לסוג חיוב/נכס/משלם/ילד המבוקש, יש לשנות את השדה הרצוי בשורה המבוקשת (3). נגדיר פרמטרים נוספים של הפעולה, תאריך ערך (4) תאריך גביה (5) וסמל פעולה (6). מומלץ לעשות סמל פעולה ייחודי להעברה בין חשבונות. לסיום הפעולה יש ללחוץ על אישור (7). " }, { type: "image", src: "/images/7_2.png" }] },
      { id: 8, title: "העברת תנועות", itemArray: [{ type: "txt", txt: "מהות התהליך – העברת תנועות ממשלם אחד לאחר, או בין נכסים באותו המשלם. " }, { type: "txt", txt: "ניהול התהליך – התהליך מתבצע במסך ייעודי שנקרא העברה בין משלמים. הגישה למסך היא מתשלומים וחיובים (1) העברה בין חשבונות/סעיפים (2). לאחר הכניסה למסך העברה בין חשבונות/סעיפים, יש ללחוץ על העברה בין משלמים (3). " }, { type: "image", src: "/images/8_1.png" }, { type: "txt", txt: "ביצוע התהליך –  " }, { type: "txt", txt: "אפשרות א' – העברה בין משלמים. בכדי להעביר תנועות בין משלמים יש תחילה לסמן העברה של – משלמים (1). לאחר מכן, יש לבחור את משלם המקור ומשלם היעד (2). לאחר מכן, יש להגדיר טווח תאריכים שבו אנו רוצים לראות את התנועות (3). בכדי להציג את התנועות יש ללחוץ על הצגת תנועות (4). כעת תיפתח רשימה של כלל התנועות של משלם המקור בטווח התאריכים שבחרנו (5). יש לסמן בוי את התנועות הרצויות (6), ניתן גם לסמן את כלל התנועות בטווח ע\"י לחיצה על סמן הכל (7). בכדי לסיים את הפעולה יש ללחוץ על אישור (8)." }, { type: "txt", txt: "" }, { type: "txt", txt: "" }, { type: "txt", txt: "" }] },
    ]
    DocService.bulkAddDocs(docs)
      .then(response => {
        console.log('Users added:', response.data);
      })
      .catch(error => {
        console.error('There was an error adding the users!', error);
      });
  };
  // const axios = require('axios').default;


  /*
    function fetchOrders() {
      fetch(`http://${process.env.REACT_APP_ADDRESS}/api/orders`)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data.filter(order => order.status === "new_order"));
        });
    };
  
    function closeOrder(order) {
      axios.put(`http://${process.env.REACT_APP_ADDRESS}/api/orders/${order._id}`, {
        ...order,
        status: "archieve"
      })
    }
  
    function addToCart(product) {
      if (!cartProducts.includes(product)) {
        product.quantity = product.isWeighable ? 0.5 : 1;
        cartProducts.push(product);
      } else product.quantity = product.isWeighable ? product.quantity + 0.5 : product.quantity + 1;
      let updatedPrice = cart.totalPrice + product.price;
      cartProducts.map((product, index) => {
        if (product.sale) implementSale(product, index, updatedPrice);
        return product;
      });
      setCartProducts([...cartProducts]);
    };
  
    function removeFromCart(product) {
      if (product.quantity > 0) {
        product.quantity = product.isWeighable ? product.quantity - 0.5 : product.quantity - 1;
        let updatedPrice = cart.totalPrice - product.price;
        cartProducts.map((product, index) => {
          if (product.sale) implementSale(product, index, updatedPrice);
          return product;
        });
        setCartProducts(cartProducts.filter(item => item.quantity > 0));
      };
    };
  
    function implementSale(product, index, updatedPrice) {
      const sale = temporarySales.find(sale => sale.id === product.sale);
      const saleProducts = cartProducts.filter(item => item.sale === product.sale);
      const saleProductsQuantity = saleProducts.reduce((prev, curr) => { return prev + curr.quantity }, 0);
      const exceptionProducts = cartProducts.filter(item => sale.exception.includes(item.barcode));
      const exception = exceptionProducts.reduce((previous, current) => { return previous + current.quantity * current.price - current.discount.sum }, 0).toFixed(2);
      const saleProductsPrice = sale.specialPrice * Math.floor(saleProductsQuantity / sale.count)
        + (saleProductsQuantity % sale.count) * saleProducts[0].price;
      const discount = (saleProducts.reduce((prev, curr) => { return prev + curr.price * curr.quantity }, 0) - saleProductsPrice).toFixed(2);
      const saleIndex = cartProducts.findLastIndex(item => item.sale === product.sale);
      if (updatedPrice - exception >= sale.condition && index === saleIndex) {
        product.discount.sum = discount;
        product.discount.sale = sale.title
      }
      else product.discount.sum = 0;
    };
  
    function addComment({ product, productComment }) {
      product.comment = productComment;
      setCartProducts([...cartProducts]);
    }
  
    function submitOrder({ name, address, phoneNumber, date, hours, comments }) {
      console.log("submit")
      axios.post(`http://${process.env.REACT_APP_ADDRESS}/api/orders`, {
        name: name,
        address: address,
        phoneNumber: phoneNumber,
        date: date,
        hours: hours,
        clientComments: comments,
        products: cartProducts,
        productsQuantity: cart.productsCount,
        totalPrice: cart.totalPrice,
        status: "new_order"
      })
        .then(function () {
          cart.zero();
          navigate("submit_approval");
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  
    function createProduct(product) {
      axios.post(`http://${process.env.REACT_APP_ADDRESS}/api/products`, product)
    }
  
    function updateProduct(product) {
      axios.put(`http://${process.env.ADDRESS}/api/products/${product.barcode}`, product)
    }
  */
  return (
    <Routes>
      <Route path="/" element={<Home docs={docs} />}>
        <Route path="items/:itemId" element={
          <Item items={items} />} />
      </Route>
      <Route path="insert" element={<ItemConfig createDoc={createDoc} addDocs={addDocs} />} />
      <Route path="123" element={PasteComponent} />
    </Routes>
  );
};

export default App;