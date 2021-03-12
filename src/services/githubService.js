import axios from 'axios'
import buildUrl from 'build-url'
import {
    GITHUB_API_URL
} from '../common/constants';


const getCommitsList = async (author, repo) => {
    if (author && repo) {
        let url = buildUrl(GITHUB_API_URL, {
            path: "repos/" + author + "/" + repo + "/commits"
        })

        let res = [];
        await axios
            .get(url)
            .then((data) => {
                console.log(data.data)
                res = data.data
            })
            .catch((reason) => {
                console.error("error when requesting commits: " + reason);
                res = []
            });
        return res;
    } else
        return []

}

export {
    getCommitsList
}