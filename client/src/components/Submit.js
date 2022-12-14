function Submit({ cartProducts }) {
    console.log(cartProducts)
    return (
        <div>
            <h2>{cartProducts}</h2>
            <h1>ההזמנה נקלטה בהצלחה</h1>
        </div>
    )
}
export default Submit;