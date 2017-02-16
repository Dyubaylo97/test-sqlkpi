/**
 * Created by Анастасия on 09.02.2017.
 */
import React from 'js/react/react.js';
import ReactDOM from 'js/react/react-dom.js';

function query_sql() {
var XHRDataRow = React.createClass({
    render: function() {
        <tr>
            <td>{this.props.result.children.ID}</td>
            <td>{this.props.result.children.Age}</td>
            <td>{this.props.result.children.DOB}</td>
            <td>{this.props.result.children.FavoriteColors}</td>
            <td>{this.props.result.children.Name}</td>
            <td>{this.props.result.children.SSN}</td>
            <td>{this.props.result.children.Spouse}</td>
            <td>{this.props.result.children.Home_City}</td>
            <td>{this.props.result.children.Home_State}</td>
            <td>{this.props.result.children.Home_Street}</td>
            <td>{this.props.result.children.Home_Zip}</td>
            <td>{this.props.result.children.Office_City}</td>
            <td>{this.props.result.children.Office_State}</td>
            <td>{this.props.result.children.Office_Street}</td>
            <td>{this.props.result.children.Office_Zip}</td>

        </tr>
    }
});

var XHRDataTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.result.forEach(function(result) {
            rows.push(<XHRDataRow result={result} key={result.children.ID} />);
        }.bind(this));
        return (
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Age</th>
                    <th>DOB</th>
                    <th>FavoriteColors</th>
                    <th>Name</th>
                    <th>SSN</th>
                    <th>Spouse</th>
                    <th>Home_City</th>
                    <th>Home_State</th>
                    <th>Home_Street</th>
                    <th>Home_Zip</th>
                    <th>Office_City</th>
                    <th>Office_State</th>
                    <th>Office_Street</th>
                    <th>Office_Zip</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});



var FinalResultTable = React.createClass({
    render: function() {
        return (
            <div>
                <XHRDataTable
                    result={this.props.result}
                />
            </div>
        );
    }
});

// function query_sql() {
    var data = {"SQL": document.getElementById("query").value};

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:57772/sqlkpi/sql", true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(data));
    xhr.responseType = 'json';
    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseData);

    }
}
// };

ReactDOM.render(
    <FinalResultTable result={xhr.responseData} />,
    document.getElementById('result')
);
};
