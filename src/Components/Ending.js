import React from 'react';
import reactLogo from '../Assets/React.png';
import bootstrapLogo from '../Assets/Bootstrap.png';
import GHPagesLogo from '../Assets/GithubPages.jpeg';

const picStyle = {
    margin:'10px'
}

const textStyle = {
    margin: '20px'
}

function Ending() {
    return (
        <div style={{width:'100%', height:'80px', backgroundColor:'#F1F6FE', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={textStyle}>Thank you for visiting. The site is regularly updated...</div>
            <div style={textStyle}>Designed and Built by Jiachen with    
                 <img alt="react_icon" width='30px' height='28px' src={reactLogo} style={picStyle}></img>
                 <img alt="react_icon" width='30px' height='28px' src={bootstrapLogo} style={picStyle}></img>    
                 <img alt="react_icon" width='40px' height='28px' src={GHPagesLogo} style={picStyle}></img>  
            </div>
        </div>
    )
}

export default Ending;
