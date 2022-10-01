import { ChildComponent } from "./ChildComponent"

export const ParentComponent = () => {
    const greetParent = () => {
        alert('Hello parent')

    }

    return <ChildComponent greetHandler={greetParent} />

}