import React from "react";
import "./ShowItems.css";

const ShowItems = (props) => {
    // get the props from App.js (variables = "app state" and functions = "delete func")
    const itemsList = props.items;
    const delItem = props.delItem;

    // using .map to loop on the array and access its content (objects)
    const itemsBodyTable = itemsList.map((item) => {
        return (
            // there should be a key for every child (that makes react which is changed and edit it fast)
            <tr key={item.id}>
                <td className="todoCol">{item.todo}</td>
                <td className="durCol">{item.duration}</td>
                {/* delItem function is taking the id of the row as an argument*/}
                {/* the onClick should has the delItem in an annoynmas func so not to run unless i press*/}
                <td className="delBot actCol" onClick={() => delItem(item.id)}>
                    &#x2715;
                </td>
            </tr>
        );
    });

    const showItemsTable = (
        <table>
            <thead>
                <tr>
                    <td className="todoCol">Task</td>
                    <td className="durCol">Duration</td>
                    <td className="actCol">Action</td>
                </tr>
            </thead>
            <tbody>{itemsBodyTable}</tbody>
            <tfoot
                style={{ display: itemsList.length ? "none" : "table-footer-group" }}
            >
                <tr>
                    {/* footer will be shown only if the list is empty*/}
                    <td colSpan={3}>You don't have items to show</td>
                </tr>
            </tfoot>
        </table>
    );

    return <>{showItemsTable}</>;
};

export default ShowItems;
