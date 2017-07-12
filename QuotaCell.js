import React, {Component} from 'react';
import {
    TableRowColumn,
} from 'material-ui/Table';
import PropTypes from 'prop-types';
import './App.css'
import {
    pink500, pink100, pink700, red600, red500, red400, amber500, amber400,
    yellow400, yellow300, lightGreen200, lightGreen300, green400, green500
} from 'material-ui/styles/colors'
import {Table, TableBody, TableRow} from "material-ui";
import { CSSTransitionGroup } from 'react-transition-group'


const italicStyle = {
    fontStyle: 'italic'
};

const cellStyle = {
    padding: 0,
    overflow: 'visible',
    height: '23px',
    paddingLeft: 0,
    paddingRight: 0
};


class QuotaCell extends Component {

    fillPalette = {
        0: red600,
        10: red500,
        20: red400,
        30: amber500,
        40: amber400,
        50: yellow400,
        60: yellow300,
        70: lightGreen200,
        80: lightGreen300,
        90: green400,
        100: green500
    };

    constructor(props) {
        super(props);
        this.state= {
            backgroundColor: this.fillPalette[this.props.cellData.completed_percent]
        };
    }




    static propTypes = {
        cellData: PropTypes.shape({
            id: PropTypes.number.isRequired,
            target: PropTypes.number.isRequired,
            flag: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            completed: PropTypes.number.isRequired,
            pending: PropTypes.number.isRequired,
            completed_percent: PropTypes.number.isRequired,
            pending_percent: PropTypes.number.isRequired
        })
    };





    // simpleTable = (
    //   <Table style={{borderCollapse: 'separate', backgroundColor: this.state.filled}}>
    //       <TableBody displayRowCheckbox={false} >
    //           <TableRow style={cellStyle}>
    //               {/*<td className="boldHeader">Target/Type:</td>*/}
    //               <TableRowColumn style={{
    //                   fontWeight: 'bold',
    //                   color: pink500,
    //                   ...cellStyle
    //               }}>{this.props.cellData.target}</TableRowColumn>
    //               <TableRowColumn style={{...italicStyle, ...cellStyle}}>{this.props.cellData.flag}</TableRowColumn>
    //           </TableRow>
    //           <TableRow style={cellStyle}>
    //               {/*<td className="boldHeader">Completed:</td>*/}
    //               <TableRowColumn style={{fontWeight: 'bold', ...cellStyle}}>{this.props.cellData.completed}</TableRowColumn>
    //               <TableRowColumn style={{...italicStyle, ...cellStyle}}>{this.props.cellData.completed_percent}%</TableRowColumn>
    //           </TableRow>
    //           <TableRow style={cellStyle}>
    //               {/*<td className="boldHeader">Pending:</td>*/}
    //               <TableRowColumn style={cellStyle}>{this.props.cellData.pending}</TableRowColumn>
    //               <TableRowColumn style={{...italicStyle, ...cellStyle}}>{this.props.cellData.pending_percent}%</TableRowColumn>
    //           </TableRow>
    //       </TableBody>
    //   </Table>
    // );

    render() {
        return (
            <TableRowColumn className="rowTableTD">

                {/*<Table style={{borderCollapse: 'separate', backgroundColor: this.state.backgroundColor}}>*/}
                <Table style={{borderCollapse: 'separate'}}>
                    <TableBody displayRowCheckbox={false} >
                        <TableRow style={cellStyle}>
                            {/*<td className="boldHeader">Target/Type:</td>*/}
                            <TableRowColumn style={{
                                fontWeight: 'bold',
                                color: pink500,
                                ...cellStyle
                            }}>{this.props.cellData.target}</TableRowColumn>
                            <TableRowColumn style={{...italicStyle, ...cellStyle}}>{this.props.cellData.flag}</TableRowColumn>
                        </TableRow>
                        <TableRow style={cellStyle}>
                            {/*<td className="boldHeader">Completed:</td>*/}
                            <TableRowColumn style={{fontWeight: 'bold', ...cellStyle}}>{this.props.cellData.completed}</TableRowColumn>
                            <TableRowColumn style={{...italicStyle, ...cellStyle}}>{this.props.cellData.completed_percent}%</TableRowColumn>
                        </TableRow>
                        <TableRow style={cellStyle}>
                            {/*<td className="boldHeader">Pending:</td>*/}
                            <TableRowColumn style={cellStyle}>{this.props.cellData.pending}</TableRowColumn>
                            <TableRowColumn style={{...italicStyle, ...cellStyle}}>{this.props.cellData.pending_percent}%</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>

            </TableRowColumn>
        );
    }
}

export default QuotaCell;