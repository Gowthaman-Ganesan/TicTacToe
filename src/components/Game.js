import React, {Component} from 'react';
import TicTac from "./TicTac";
import {calculateWinner} from "./Helper";
import {IoIosRefresh} from 'react-icons/io'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state={
            xIsNext: true,
            cells: Array(9).fill(null),
        }
    }
    onButtonClick = (i) => {
        const {xIsNext} = this.state,
            cells = this.state.cells;
        let winner = calculateWinner(cells);
        if(winner || cells[i]) {
            return;
        }
        cells[i] = xIsNext ? 'X' : 'O';
        this.setState({cells, xIsNext: !xIsNext});
    };
    onClear = () => {
      this.setState({cells: Array(9).fill(null), xIsNext: true});
    };
    render() {
        const {cells}= this.state,
            winner= calculateWinner(cells);
        return (
            <div className={'site'}>
                <TicTac onButtonClick={this.onButtonClick} cells={cells}/>
                <button onClick={this.onClear} className={'refresh'}><IoIosRefresh/></button>
                {winner ? <h2>Winner is {winner}</h2> : ''}
            </div>
        );
    }
}

export default Game;