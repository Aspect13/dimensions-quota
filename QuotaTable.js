import React, { Component } from 'react';
import './App.css';
import {
    Table,
    TableBody,
    TableRow,
} from 'material-ui/Table';
import {Paper} from 'material-ui'
import QuotaRow from "./QuotaRow";
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group'

class QuotaTable extends Component {
    static propTypes = {
        rowData: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    target: PropTypes.number.isRequired,
                    flag: PropTypes.oneOf(['Normal', 'Over Quota', 'Counter']).isRequired,
                    completed: PropTypes.number.isRequired,
                    pending: PropTypes.number.isRequired,
                    completed_percent: PropTypes.number.isRequired,
                    pending_percent: PropTypes.number.isRequired
                }),
            )
        )
    };

// <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    render() {
        return (
            <Paper>
                {/*<CSSTransitionGroup*/}
                    {/*transitionName="qtable"*/}
                    {/*transitionAppear={true}*/}
                    {/*transitionAppearTimeout={5000}*/}
                {/*>*/}
                    <Table bodyStyle={{overflow: 'visible'}}>
                        <TableBody displayRowCheckbox={false}>
                            {this.props.tableData.map((item, index) =>
                                <QuotaRow rowData={item} key={index}/>
                            )}
                        </TableBody>
                    </Table>
                {/*</CSSTransitionGroup>*/}
            </Paper>
        );
    }
}

export default QuotaTable;
