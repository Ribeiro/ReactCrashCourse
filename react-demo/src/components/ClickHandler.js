export const ClickHandler = () => {
    const clickHandler = (event) => {
        console.log('button clicked', event)
    }
    return <div>
        <button onClick={clickHandler}>Click</button>
    </div>
}