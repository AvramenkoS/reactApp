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

    renderInputValue = (index) => {
        this.setState({
            inputValue: ''
        })
        this.setState(({count}) => ({
            count: count + 1,
        }));
        let allArr = [this.state.inputValue, index]
        this.state.allMess.push(allArr)
        console.log(this.state.allMess)
    }

    deleteItemHandler = (index) => {
        let allMess = [...this.state.allMess];
        allMess.filter(item => {
            console.log(item)
            // return item.id !== index
        })
        // this.setState({allMess: mess})
    }

    checkInputStatus = (name1, name2) => {
        if (this.state.inputValue.length >= this.state.maxCount) {
            return `input ${name1}`
        } else {
            return `input ${name2}`
        }
    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.pageTitle}</h1>
                <div className="App__counter">{this.maxCharNum()}</div>
                <input type="text"
                       value={this.state.inputValue}
                       className={this.checkInputStatus('red', 'green')}
                       maxLength={this.state.maxCount}
                       onChange={this.changeInputHandle}
                />
                <button onClick={this.renderInputValue.bind(this, this.state.count)}
                        disabled={(this.state.inputValue === '')}
                        className="App__btn"
                >Add new item
                </button>

                {
                    [...Array(this.state.count)].map((item, index) => {
                        return (
                            <Number
                                key={index}
                                name={this.state.allMess[index]}
                                // deleteItemHandler={this.deleteItemHandler.bind(this, index)}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default App;
