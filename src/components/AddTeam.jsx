import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const AddTeam = () => {

    const [input, changeInput] = useState(
        {
            "teamId": "",
            "teamName": "",
            "teamLeaderName": "",
            "leaderEmail": "",
            "leaderPhone": "",
            "collegeName": "",
            "numberOfMembers": "",
            "projectTitle": "",
            "problemStatementTrack": "",
            "technologyStack": "",
            "mentorName": "",
            "registrationDate": "",
            "tableStationNumber": ""
        })

    const inputHandler = (event) => {

        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/add-team", input).then(

            (response) => {
                console.log(response.data)
                alert("Team added successfully")
            }
        ).catch(

            (error) => (
                console.error("Error Adding Entry", error)
            )
        )
    }
    return (
        <div>
            <NavigationBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Team ID</label>
                                <input name="teamId" type="text" className="form-control" onChange={inputHandler} value={input.teamId} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Team Name</label>
                                <input name="teamName" type="text" className="form-control" onChange={inputHandler} value={input.teamName} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Team Leader Name</label>
                                <input name="teamLeaderName" type="text" className="form-control" onChange={inputHandler} value={input.teamLeaderName} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label"> Leader Email</label>
                                <input name="leaderEmail" type="email" className="form-control" onChange={inputHandler} value={input.leaderEmail} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label"> Leader Phone Number</label>
                                <input name="leaderPhone" type="number" className="form-control" onChange={inputHandler} value={input.leaderPhone} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label"> College Name</label>
                                <input name="collegeName" type="text" className="form-control" onChange={inputHandler} value={input.collegeName} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label"> Number of members</label>
                                <input name="numberOfMembers" type="number" className="form-control" onChange={inputHandler} value={input.numberOfMembers} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >Project Title</label>
                                <input name="projectTitle" type="text" className="form-control" onChange={inputHandler} value={input.projectTitle} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >Problem Statement Track</label>
                                <input name="problemStatementTrack" type="text" className="form-control" onChange={inputHandler} value={input.problemStatementTrack} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >Technology Stack</label>
                                <input name="technologyStack" type="text" className="form-control" onChange={inputHandler} value={input.technologyStack} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >Mentor Name</label>
                                <input name="mentorName" type="text" className="form-control" onChange={inputHandler} value={input.mentorName} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >Registration Date</label>
                                <input type="date" name='registrationDate' className="form-control" onChange={inputHandler} value={input.registrationDate} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >Table Number</label>
                                <input type="number" name="tableStationNumber" id="" min="2" max="10" required className="form-control" onChange={inputHandler} value={input.tableStationNumber} />

                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTeam