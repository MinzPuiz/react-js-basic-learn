import React from "react";

class ChildComponent extends React.Component {

    state = {
        ShowJobs: false
    }

    handleShowHide = () => {
        this.setState({
            ShowJobs: !this.state.ShowJobs
        })
    }

    handleGetJob = (job) => {
        //console.log('>>> handle on delete job', job)
        this.props.deleteJob(job)
        alert(`Đã xóa công việc: ${job.title}`)
    }

    render() {
        //console.log(">>> checking properties", this.props)

        let { JobsTitle } = this.props;
        let { ShowJobs } = this.state;
        let check = ShowJobs === true ? 'Showjobs = true' : 'Showjobs = false';
        console.log('>>> Checking true or false', check);
        return (
            <>
                {ShowJobs === false ? 
                    <div>
                        <button onClick={this.handleShowHide}>Show</button>
                    </div>
                : 
                    <> 
                        <div className="job-lists">
                            {
                                JobsTitle.map((item, index) => {
                                    return(
                                        <div key={item.id}>
                                            <span>{item.title} - {item.salary} <button onClick={() => this.handleGetJob(item)} type="button">X</button></span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={this.handleShowHide}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     //console.log('>>> Check Child props', props)

//     let { JobsTitle } = props;

//     return(
//         <>
//             <div className="job-lists">
//                 {JobsTitle
//                     .filter(item => item.salary >= 700)
//                     .map((item, index) => (
//                         <div key={item.id}>
//                             {item.title} - {item.salary} $
//                         </div>
//                     ))
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;