/**
 * Created by Artem.Dubrovskiy on 12.07.2017.
 */

import React, { Component } from 'react';
// import CSSTransition from 'react-transition-group/CSSTransition';
import {MuiThemeProvider, Paper, Table, TableBody, TableRow, TableRowColumn, Toggle} from "material-ui";
import {grey100, grey500, pink100, pink300, pink400, pink500, pinkA200} from "material-ui/styles/colors";

// import './Animations.css'

import FlatButton from 'material-ui/FlatButton';

class Legend extends Component {
    constructor(...args) {
        super(...args);
        this.state= { show: false };
    }

    tmp = () => {
        console.log(this.state.show);
        this.setState({ show: !this.state.show })
    };

// <CSSTransition
// appear={true}
// timeout={3000}
// className="legend"
// classNames="legend-animate"
// in={true}
//     // in={this.state.show}
// >
    render() {
        return (


        <Paper className="legend">

            <Table className="legend-table">
                <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn style={{
                            overflow: 'visible',
                            fontWeight: 'bold',
                            color: pink500
                        }}>Target</TableRowColumn>
                        <TableRowColumn style={{overflow: 'visible', fontStyle: 'italic'}}>Type</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn style={{overflow: 'visible', fontWeight: 'bold'}}>Completed</TableRowColumn>
                        <TableRowColumn style={{overflow: 'visible', fontStyle: 'italic'}}>Completed
                            %</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn style={{overflow: 'visible'}}>Pending</TableRowColumn>
                        <TableRowColumn style={{overflow: 'visible', fontStyle: 'italic'}}>Pending
                            %</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>


            <Toggle
                toggled={this.state.show}
                onToggle={this.tmp}
                labelPosition="right"
                label="This toggle controls movement of legend"
            />

        </Paper>
            // </CSSTransition>
        )
    }
}

export default Legend;