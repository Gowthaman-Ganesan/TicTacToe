import React, {Component} from 'react';
import TicTac from "./TicTac";
import {calculateWinner} from "./Helper";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state={
            xIsNext: true,
            cells: Array(9).fill(null),
        }
    }
    onButtonClick = (i) => {
        console.log(i);
        const {xIsNext} = this.state,
            cells = this.state.cells,
            winner= calculateWinner(cells);
        if(winner || cells[i]) {
            return;
        }
        cells[i] = xIsNext ? 'X' : 'O';
        this.setState({cells, xIsNext: !this.state.xIsNext});
    };
    render() {
        const {cells}= this.state;
        return (
            <div>
                <TicTac onButtonClick={this.onButtonClick} cells={cells}/>
            </div>
        );
    }
}

export default Game;