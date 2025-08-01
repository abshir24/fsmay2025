function ChildComponent(props){
    return <div>
        <p>FirstName: { props.firstName } </p>
        <p>LastName: { props.lastName } </p>
        <p>Age: { props.age } </p>
    </div>
}

export default ChildComponent