import React, { Component } from 'react';
import { MDBDataTable} from 'mdbreact';

class MaterialTable extends Component {

    constructor(props) {
        super(props);
        this.getKeys = this.getKeys.bind(this);
        this.getData = this.getData.bind(this);

    }

    getKeys = function () {
        return Object.keys(this.props.data[0]);
    }

    getColumns = function () {
        var keys = this.getKeys();
        var columns = [];
        keys.map((key, index) => {
            columns.push({ label: key.toUpperCase(), field: key, sort: 'asc' })
        })
        // console.log(JSON.stringify(columns));
        return columns;
    }

    getRows = function () {
        var items = this.props.data;
        var rows = items;
        return rows
    }

    getData = function () {
        var data = { columns: this.getColumns(), rows: this.getRows() }
        // console.log(JSON.stringify(data));
        return data;
    }



    render() {
        return (
            <MDBDataTable 
            maxHeight="400px"
            bordered 
            responsiveXl
            data={this.getData()} />
        );
    }

}

export default MaterialTable;
