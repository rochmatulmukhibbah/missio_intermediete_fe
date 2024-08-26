const Input = (props) => {
    console.log('parameter kiriman:', props.name)
    return (
        <div>
            <p>{props.name}</p>
            <input type="text"></input>
        </div>
    )
}

export default Input;