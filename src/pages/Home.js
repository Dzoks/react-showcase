import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return <div >
        This is home page<br/>
        <Link to="/first" >Go to first</Link> <br/>
        <Link to="/second" >Go to second</Link>
    </div>
}

export default Home;