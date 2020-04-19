import React from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {
    reset,
    themes,
    List,
    ListItem,
    Divider,
    Window,
    WindowHeader,
    Button,
    Toolbar,
    WindowContent,
    Tabs,
    Tab,
    TabBody,
    TextArea,
    TextField,
    Progress,
    Fieldset,
    Hourglass,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableHeadCell,
    TableDataCell

} from 'react95'
import axios from 'axios'

export default class SearchSubs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subreddit: 'House',
            filter: 'month',
            links: []
        }
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
        const { links } = this.state
        return (
            <div className="container">
                <ResetStyles/>
                <ThemeProvider theme={themes.default}>
                    <Window
                    style={{
                        width: 600
                    }}>
                        <WindowHeader
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            
                        </WindowHeader>
                        <WindowContent>
                            <ul>
                                {links.map((l) => {
                                    return (
                                    <li>{l}</li>
                                    )
                                })}
                                
                            </ul>

                        <Button
                            fullWidth
                            onClick={this.handleSubmit}>
                                Poop!
                        </Button>
                        </WindowContent>

                    </Window>
                </ThemeProvider>
            </div>
        )
    }
}

const ResetStyles = createGlobalStyle `
  ${reset}
`;