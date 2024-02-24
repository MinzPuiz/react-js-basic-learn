import React from "react";

class ChildComponent extends React.Component {
    render() {
        console.log(">>> checking properties", this.props)
        let { name, age, address, JobsTitle } = this.props;
        return (
            <>
                <div className="job-lists">
                    {
                        JobsTitle.map((item, index) => {
                            return(
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ChildComponent;