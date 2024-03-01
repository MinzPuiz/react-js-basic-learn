import React from "react";

class AddComponent extends React.Component {
    state = {
        titleJob: '',
        Salary: ''
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }

    handleChangeSalaryname = (event) => {
        this.setState({
            Salary: event.target.value
        })
    }

    submitButton = (event) => {
        event.preventDefault();
        console.log(">>> Check data input: ", this.state)
        alert('Vậy tên của bạn là: ' + this.state.titleJob + ' ' + this.state.Salary)
    }
    render(){
        return(
            <>
                <form action="" method="">
                    <div className="form-group">
                        <label htmlFor="fname">Job's title: </label>
                        <input type="text" onChange={this.handleChangeTitleJob} className="form-control" value={this.state.titleJob} placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lname">Salary: </label>
                        <input type="lname" onChange={this.handleChangeSalaryname} className="form-control" value={this.state.Salary} placeholder=""/>
                    </div>
                    <button onClick={this.submitButton} type="submit" className="btn btn-primary">Slap me </button>
                </form>
            </>
        )
    }
}

export default AddComponent;