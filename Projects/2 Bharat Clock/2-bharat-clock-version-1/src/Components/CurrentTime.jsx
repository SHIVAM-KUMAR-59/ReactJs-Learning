let CurrentTime = () =>{

    let time = new Date();

    return(
        <>
        <p className="fs-5">This is the current time: <span className="fst-italic"> {time.toLocaleDateString()} - {time.toLocaleTimeString()}</span></p>
        </>
    )
}

export default CurrentTime;