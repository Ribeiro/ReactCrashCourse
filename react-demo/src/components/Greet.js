export const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a. {props.heroName} {2 * 2}
            </h1>
            {props.children}
        </div>
    )
}