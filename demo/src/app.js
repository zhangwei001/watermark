import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import WaterMark from "../../src/index.js"
 
 
const App = () => {
    useEffect(() =>{
        new WaterMark({
            target: document.getElementById('content'),
        })
    },[]);

    return (<div style={{ width: ' 300px', height: '400px' ,background: "blue"}} id ="content">
        qwqw
    </div>)
};

ReactDOM.render(<App />, document.getElementById('root'))