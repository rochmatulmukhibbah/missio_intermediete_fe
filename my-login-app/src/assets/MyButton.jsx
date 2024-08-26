const MyButton = (props) => {
    console.log('tekan', props.click)
    return (
        <div>
            <button>{props.click}</button>
        </div>
    );
}

export default MyButton;