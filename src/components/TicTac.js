import React, {Component} from 'react';
import Cell from "./Cell";

class TicTac extends Component {
    constructor(props) {
        super(props);
        this.state={
            arr: Array(9).fill(null),
        }
    }
    renderSquare = i => {
      return <Cell onButtonClick={() => this.props.onButtonClick(i)} value={this.props.cells[i]}/>
    };

    render() {
        return (
          <div className={'box-big'}>
            <div>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div>
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
          </div>
        );
    }
}

export default TicTac;