
function Header(props) {
    const style = {
        background: "#6ADAFD",
        borderRadius: "30px",
        width: "150px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: '20px',
        fontWeight: 'bold'
    }

    return (
        <div style={{width:"100%", height:"auto", display:"flex", justifyContent:"center"}}>
                <div className="hvr-grow-rotate" id={props.id} style={style}>{props.sectionName}</div>
            </div>
    );
}

export default Header;