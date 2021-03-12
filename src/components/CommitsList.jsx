import React from 'react'
import { List, Container, Header, Segment, Image, Button } from 'semantic-ui-react'
import { getCommitsList } from '../services/githubService'
import moment from 'moment'

export default class CommitsList extends React.Component {
    state = {
        commits: [],
        loading: true,
    }

    componentDidMount = async () => {
        let commitsList = await getCommitsList('diego25061', 'takehometest')
        //you can test with other public repositories by just changing the 2 parameters like below
        //let commitsList = await getCommitsList('MaciejCiemiega', 'NewtonsTimer')
        this.setState({ commits: commitsList, loading: false })
    }

    render = () => {
        let hasCommits = this.state.commits && this.state.commits.length > 0
        let message = 'No commits available'
        if (this.state.loading) message = 'Loading commits...'
        return (
            <List divided relaxed>
                {hasCommits ? (
                    this.state.commits.map(commit => {
                        let date = moment(commit.commit.author.date)
                        return (
                            <>
                                <List.Item key={commit.sha} href={commit.html_url}>
                                    <Image avatar src={commit.author?.avatar_url} />
                                    <List.Content>
                                        <List.Header as="a" href={commit.html_url}>
                                            {commit.commit.message}
                                        </List.Header>
                                        <List.Description as="a">
                                            By <b>{commit.commit.committer?.name} </b> ({commit.committer?.login}) on{' '}
                                            {date.format('LLL')}
                                        </List.Description>
                                    </List.Content>
                                    <div className="rightbox">{commit.sha?.substring(0, 12)}</div>
                                </List.Item>
                            </>
                        )
                    })
                ) : (
                    <div>{message}</div>
                )}
            </List>
        )
    }
}
