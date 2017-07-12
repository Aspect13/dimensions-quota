import React, { Component } from 'react';
import QuotaTable from "./QuotaTable";
import {AppBar, MuiThemeProvider, Paper, Table, TableBody, TableRow, TableRowColumn} from "material-ui";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {pink50, pink100, pink500, pinkA200} from "material-ui/styles/colors";
import data from './backend/data.json';
import Legend from "./Legend";


class App extends Component {
    muiTheme = getMuiTheme(
        {
        palette: {
            primary1Color: pinkA200,
            primary2Color: pink500,
            primary3Color: pink100,
        },
        appBar: {
            height: 60,
        },
    });

// <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    render() {
        return (

            <MuiThemeProvider muiTheme={this.muiTheme}>
                <div>
                    <AppBar title="Quota Table" />

                        <Paper className="container">

                            <QuotaTable tableData={data}/>
                            <Legend/>
                        </Paper>

                </div>
            </MuiThemeProvider>

        );
    }
}

export default App;
