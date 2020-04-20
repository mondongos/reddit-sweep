import React from 'react'
import axios from 'axios'
import YouTube from 'react-youtube';

import { Button, Form, FormGroup, Label, Input, FormText, Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

export default class SearchSubs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subreddit: 'r/house',
            filter: 'month',
            links: [],
            selectMulti: [],
            subredditList: ["r/TrueHouse", "r/listentous", "r/hiphopheads", "r/house", "r/blues", "r/jazz"]
        }
    }

    _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const {subreddit, filter, links} = this.state
        const request = {
            subreddit: subreddit,
            filter: filter
        }
        axios.post('http://localhost:5000/search/', request)
        .then((res) => {
            
            this.setState({
                links: res.data.filter(l => l !== "/")
            })
            console.log(this.state)
        })
    }

    render() {
        const { links, subredditList } = this.state
        const opts = {
            height: "100%",
            width: '100%',
        }
        return (
            <div>
                <Container style={{padding: 50}}>
                    <Form>
                        <FormGroup>
                            <Input type="select" name="selectMulti" value={this.handleChange} multiple>
                                {subredditList.map((sub) => {
                                    return (
                                        <option>{sub}</option>
                                    )
                                })}
                            </Input>
                        </FormGroup>
                        <Button onClick={this.handleSubmit} color="primary" size="lg">Submit</Button>
                    </Form>
                </Container>
                <br></br>
                {links.map((video) => {
                    return (
                        <Container style={{padding: 10}}>
                            <Row style={{backgroundColor: "white"}}>
                                <Col style={{padding: 30}} className="video" xs="5">
                                    <YouTube
                                        videoId={video.substr(video.length - 11)}
                                        opts={opts} 
                                        onReady={this._onReady}
                                    />
                                </Col>
                                <Col style={{padding: 30}} className="description"xs="7">
                                    <Row>
                                        <h1>Name of the video</h1>    
                                    </Row>
                                    <Row>
                                        <h4>r/subreddit</h4>    
                                    </Row>
                                    <Row>
                                        <a href={video}>{video}</a>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    )
                })}
                
            </div>
               
        )
    }
}


