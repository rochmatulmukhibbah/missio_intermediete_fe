const KartuProduk = (props) => {
    return (
          <div className="wrapper">
            <div className="photo">
          <img src={props.image}/></div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className="profilfoto">
            <img src={props.avatar}/>
            <div className="aboutcard">
              <h5>{props.name}</h5>
              <p>{props.departemen}</p>
            </div>
          </div>
          <div className="rating">
          <img src="images2.png"/>
          <p>{props.range}</p>
          <h4>{props.harga}</h4>
          </div>
          
          </div>
    );
}
export default KartuProduk;