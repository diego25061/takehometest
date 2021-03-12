import React from 'react'
import { List, Container, Header, Segment } from 'semantic-ui-react'
import { getCommitsList } from '../services/githubService'
import moment from 'moment'

export default class CommitsList extends React.Component {
    state = {
        commits: [],
    }

    componentDidMount = async () => {
        let commitsList = await getCommitsList('diego25061', 'takehometest')
        this.setState({ commits: commitsList })
    }

    render = () => {

        return (
            <List divided relaxed>
                {this.state.commits.map(commit => {
                    let date = moment(commit.commit.author.date);

                    console.log("date> ",date);
                    return (
                        <List.Item>
                            <List.Icon name="github" size="large" verticalAlign="middle" />
                            <List.Content>
                                <List.Header as="a" href={commit.html_url}>
                                    {commit.commit.message}
                                </List.Header>
                                <List.Description as="a">
                                    By{' '}
                                    <b>
                                        {commit.commit.committer.name} </b> ({commit.committer.login}) on {date.format('LLL')}
                                </List.Description>
                            </List.Content>
                        </List.Item>
                    )
                })}
            </List>
        )
    }
}
