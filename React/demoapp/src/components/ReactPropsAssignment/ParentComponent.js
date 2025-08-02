import ChildComponent from "./ChildComponent"

function ParentComponent(){
    return <div>
            <h1>Parent</h1>
            <ChildComponent firstName = {"FirstName"} lastName = {"Last Name"} age={ 56 } />
        </div>
}

export default ParentComponent