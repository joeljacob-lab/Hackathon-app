import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const ViewTeams = () => {   

    const [fdata, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view-teams").then(

            (response) => {
                changeData(response.data)

            }

        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>
            <NavigationBar />
            <div className="container-fluid mt-5 px-4">
                <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
                    <div className="table-responsive">
                        {/* Added 'text-nowrap' and a 'minWidth' style to force expansion */}
                        <table
                            className="table table-hover align-middle text-center mb-0"
                            style={{ fontSize: "0.8rem" }}
>
                            <thead className="table-dark text-secondary text-uppercase fw-semibold border-bottom">
                                <tr>
                                    <th>Team ID</th>
                                    <th>Team Name</th>
                                    <th>Team Leader Name</th>
                                    <th>Leader Email</th>
                                    <th>Leader Phone</th>
                                    <th>College Name</th>
                                    <th>Number of Members</th>
                                    <th>Project Title</th>
                                    <th>Problem Statement Track</th>
                                    <th>Technology Stack</th>
                                    <th>Mentor Name</th>
                                    <th>Registration Date</th>
                                    <th>Table Number</th>

                                </tr>
                            </thead>

                            <tbody>
                                {fdata.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.teamId}</td>
                                        <td>{value.teamName}</td>
                                        <td>{value.teamLeaderName}</td>
                                        <td>{value.leaderEmail}</td>
                                        <td>{value.leaderPhone}</td>
                                        <td>{value.collegeName}</td>
                                        <td>{value.numberOfMembers}</td>
                                        <td>{value.projectTitle}</td>
                                        <td>{value.problemStatementTrack}</td>
                                        <td>{value.technologyStack}</td>
                                        <td>{value.mentorName}</td>
                                        <td>{value.registrationDate}</td>
                                        <td>{value.tableStationNumber}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewTeams