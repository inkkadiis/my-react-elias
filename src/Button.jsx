
function Button (){

    const stlyes ={
        
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
        
    }

    return (
        <button style={stlyes}>Click me</button>
    );
}

export default Button