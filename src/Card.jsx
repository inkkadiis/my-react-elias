import profilePic from './assets/react.svg'

function Card (){
    return (

        <div className ="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 clssName="card-title">Elias Hong</h2>
            <p className ="card-text">I don't know what I do</p>
        </div>
    );
}

export default Card