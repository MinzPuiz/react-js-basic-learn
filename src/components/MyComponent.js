import React from "react";

class MyComponent extends React.Component {
    state = {
        first_name: '',
        last_name: ''
    }

    handleChangeFname = (event) => {
        this.setState({
            first_name: event.target.value
        })
    }

    handleChangeLname = (event) => {
        this.setState({
            last_name: event.target.value
        })
    }

    submitButton = (event) => {
        event.preventDefault();
        console.log(">>> Check data input: ", this.state)
        alert('Vậy tên của bạn là: ' + this.state.first_name + ' ' + this.state.last_name)
    }

    render() {
        return (
            <>
                <div>
                    <form action="" method="">
                        <div className="form-group">
                            <label htmlFor="fname">Firstname: </label>
                            <input type="text" onChange={this.handleChangeFname} className="form-control" value={this.state.first_name} placeholder=""/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lname">Lastname: </label>
                            <input type="lname" onChange={this.handleChangeLname} className="form-control" value={this.state.last_name} placeholder=""/>
                        </div>
                        <button onClick={this.submitButton} type="submit" className="btn btn-primary">Slap me </button>
                    </form>
                </div>
            </>
        )
    }
}

export default MyComponent;