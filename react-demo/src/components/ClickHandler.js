export const ClickHandler = () => {
    const clickHandler = () => {
        console.log('button clicked')
    }
    return <div>
        <button onClick={clickHandler}>Click</button>
    </div>
}