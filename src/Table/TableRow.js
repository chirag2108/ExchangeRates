import React, { Component } from 'react';
import { currencies } from './Currencies';
import './Table.css';

class TableRow extends Component {
    state = {
        rates: {}
    };

    componentDidMount(){
        const { currency } = this.props;
        fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)
            .then(response => response.json())
            .then(data => this.setState(
                {rates: data.rates}
            ));
    }

    formatCurrency = (currency, isInverse) => {
        if(currency === this.props.currency) return '1.0000';
        const rate = isInverse ?
            (1 / this.state.rates[currency]) :
            this.state.rates[currency];
        return (rate ? (Math.round(rate * 10000) / 10000) : rate);
    }

  render() {
    return (
      <React.Fragment>
        <tr className={this.props.className}>
            <td>1 {this.props.currency}=</td>
            {currencies.map(currency => <td>{this.formatCurrency(currency)}</td>)}
        </tr>
        <tr className={this.props.className}>
            <td>Inverse: </td>
            {currencies.map(currency => <td>{this.formatCurrency(currency, true)}</td>)}
        </tr>
      </React.Fragment>
    );
  }
}

export default TableRow;
