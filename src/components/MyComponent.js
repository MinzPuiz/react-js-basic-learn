import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        JobsTitle: [
            {id: '1', title: 'Musicians', salary: '700'},
            {id: '2', title: 'Developers', salary: '500'},
            {id: '3', title: 'Soccer player', salary: '5000'}
        ]
    }

    render() {
        return (
            <>
                <div>
                    <AddComponent/>
                </div>
                <div>
                    <ChildComponent JobsTitle={this.state.JobsTitle} />
                </div>
            </>
        )
    }
}

export default MyComponent;