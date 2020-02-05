import React, {Component} from "react";


const Problematic = () => {
    throw (new Error('버그'));
    return (
        <div></div>
    );
};

class Counter extends Component {
    state = {
        number: 0,
        error: false
    };

    // 컴포넌트가 생성될 때
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // 컴포넌트가 화면에 출력 될 때
    componentDidMount() {
        console.log('componentDidMount');
    }

    // 컴포넌트 업데이트 유무
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate');
        return nextState.number % 5 !== 0;
    }

    // 자식 컴포넌트의 에러 케치
    componentDidCatch(error, errorInfo) {
        console.log(errorInfo);

        this.setState({
            error: true
        });
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    };

    handleDecrease = () => {
        const {number} = this.state;

        this.setState({
            number: number - 1
        });
    };

    render() {
        if (this.state.error) return (<h1>에러 발생</h1>);
        return (
            <div>
                <h1> 카운터</h1>
                <div>값 : {this.state.number}</div>
                {this.state.number === 4 && <Problematic/>}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;