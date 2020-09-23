import React, {Component} from 'react';
import './App.scss';
import Number from "./Number/Number";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageTitle: 'My React App',
            maxCount: 50,
            inputValue: '',

            allMess: [],
            count: 0
        }
    }

    maxCharNum = () => {
        return this.state.maxCount - this.state.inputValue.length
    }

    changeInputHandle = (e) => {
        let value = e.target.value;
        this.setState({
            inputValue: value
        })
    }

    renderInputValue = () => {
        console.log(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
        this.setState(({count}) => ({
            count: count + 1,
        }));
        this.state.allMess.push(this.state.inputValue)
    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.pageTitle}</h1>
                <div>{this.maxCharNum()}</div>
                <input type="text"
                       value={this.state.inputValue}
                       className={(this.state.inputValue.length >= this.state.maxCount) ? 'input red' : 'input green'}
                       maxLength={this.state.maxCount}
                       onChange={this.changeInputHandle}
                />
                <button onClick={this.renderInputValue}>Check Num</button>

                {
                    [...Array(this.state.count)].map((item, index) => {
                        return (
                            <Number
                                key={index}
                                name={this.state.allMess[index]}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default App;
