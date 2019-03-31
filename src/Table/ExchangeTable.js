import React from 'react';
import TableRow from './TableRow';
import { currencies } from './Currencies';

const exchangeTable = () => {
    return<div>
        <table className="exchange-table">
            <thead>
                <tr className="exchange-head">
                    <th> </th>
                    {
                        currencies.map(currency => <th key={currency}>{currency}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    currencies.map((currency, index) => (
                        <TableRow
                            currency={currency}
                            className={index % 2 === 1 ? 'row-dark' : ''}
                        />
                    ))
                }
            </tbody>
        </table>
    </div>  
};

export default exchangeTable;