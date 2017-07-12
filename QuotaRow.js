/**
 * Created by Artem.Dubrovskiy on 10.07.2017.
 */

import React, { Component } from 'react';
import { TableRow } from 'material-ui/Table';
import QuotaCell from './QuotaCell';
import PropTypes from 'prop-types';


class QuotaRow extends Component {

    static propTypes = {
        rowData: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                target: PropTypes.number,
                flag: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
                completed: PropTypes.number,
                pending: PropTypes.number,
                completed_percent: PropTypes.number,
                pending_percent: PropTypes.number
            }),
        )
    };

    render() {
        return (
            <TableRow className="rowTable animated fadeInDown">
                {this.props.rowData.map((item, index) =>
                    <QuotaCell cellData={item} key={item.id}/>
                )}
            </TableRow>
        );
    };
}

export default QuotaRow;