import axios from "axios";

axios.interceptors.response.use(res => {
	return res.data
})



export async function getRepoList(): Promise<any[]> {
	return axios.get('https://api.github.com/orgs/zhurong-cli/repos')

}


export async function getTagList(repo: string):Promise<any[]> {
	return axios.get(`https://api.github.com/repos/zhurong-cli/${repo}/tags`)
}
