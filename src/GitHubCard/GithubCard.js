import React from 'react'
import Card from "react-bootstrap/Card"
import PhotoMe from './me.png'

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{width: "18rem"}}>
                <Card.Img variant="top" src={PhotoMe} />
                <Card.Body>
                    <Card.Title>About Me</Card.Title>
                    <Card.Text>I am a current UX Designer, soon to be UX Engineer</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard