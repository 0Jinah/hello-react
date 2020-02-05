import React, {Fragment} from 'react';
//import logo from './logo.svg';
import './App.css';
import MyName from "./MyName";
import MyNameFunc from "./MyNameFunc";
import Counter from "./Counter";

function App() {
    const name = 'React';
    const style = {
        backgroundColor: 'black',
        padding: '16px',
        color: 'white',
        fontSize: '12px'
    };

    return (
        <Fragment>
            <div>
                <input type="text"></input>
            </div>
            <div>
                Hello {name}
            </div>
            {1 + 1 === 2 ? (<div>True!</div>) : (<div>False!</div>)}
            {1 + 1 === 3 ? (<div>True!</div>) : (<div>False!</div>)}

            <div style={style}>
                Hi there!
            </div>

            <div className="App">
                리액트
            </div>

            <MyName name={"리액트"}/>
            <MyName/>

            <MyNameFunc name={"리액트 투"}/>
            <MyNameFunc/>

            <Counter/>
        </Fragment>
    );
}

export default App;
