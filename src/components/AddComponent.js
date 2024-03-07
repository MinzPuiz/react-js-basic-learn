import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        Salary: ''
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalaryname = (event) => {
        this.setState({
            Salary: event.target.value
        })
    }

    submitButton = (event) => {
        event.preventDefault();
        if(this.state.title === '' || this.state.Salary === ''){
            alert('vui lòng nhập đầy đủ thông tin !');
            return;
        }
        console.log(">>> Check data input: ", this.state)
        alert('đã thêm thành công: ' + this.state.title + ' ' + this.state.salary)
        this.props.addNewJob({
            id: Math.random(),
            title: this.state.title,
            salary: this.state.Salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }
    render(){
        return(
            <>
                <form action="" method="">
                    <div className="form-group">
                        <label htmlFor="fname">Job's title: </label>
                        <input type="text" onChange={this.handleChangeTitleJob} className="form-control" value={this.state.title} placeholder=""/>
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