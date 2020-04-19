import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';

export default class SearchSubs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subreddit: 'House',
            filter: 'month',
            links: [],
            selectMulti: [],
            subredditList: ["r/TrueHouse", "r/listentous", "r/hiphopheads", "r/house", "r/blues", "r/jazz"]
        }
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
        return (
            <div style={{paddingTop: 50, paddingLeft: 200, paddingRight: 200}}>
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
                    <Button color="primary" size="lg">Submit</Button>
                </Form>
            </div>
        )
    }
}

