function Card(props){
    return(       

        
            <div className="box-pagina-principal media1" onClick={props.reproduz}>
            <img src={props.link} alt=""></img>
            <h4>{props.titulo}</h4>
            </div>        
            


    )
}

export default Card