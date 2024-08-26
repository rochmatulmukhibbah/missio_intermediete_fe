const Banner = (props) => {
    return (
        <div>
            
            <div className="boxporto">
                <div className="untuk-text">
                <h1>{props.judulbanner}</h1>
                <p>{props.titlebanner}</p>
                <button>{props.tombol}</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;