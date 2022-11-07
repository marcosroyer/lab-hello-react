
function Card(props){

    return (
        <div className='mini'>
            <img src={props.src} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.explanation}</p>
            
        </div>
    )

}

export default Card