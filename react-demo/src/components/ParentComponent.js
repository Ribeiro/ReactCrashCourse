import { ChildComponent } from "./ChildComponent"

export const ParentComponent = () => {
    const greetParent = (childName) => {
        alert(`Hello parent ${childName}`)

    }

    return <ChildComponent greetHandler={greetParent} />

}