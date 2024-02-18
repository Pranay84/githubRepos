import { Component, useState } from "react";
import RepositoryItem from "../RepositoryItem"
import "./index.css"

var types = ""
var newData = []

class LanguageFilterItem extends Component {
    //const [list, setList] = useState("")
    //console.log(list)
    state = {repoTypes:"", newList:[]}

    /*componentDidMount(){
        this.toGetTheDetails()
    }*/

    toGetTheDetails = async (typo) => {
        console.log(typo)
        const url = `https://apis.ccbp.in/popular-repos?language=${typo}`
        const options = {
            method: 'GET',
        }

        const response = await fetch(url, options)
        
        if(response.ok === true){
            const data = await response.json()
            const updatedList = data.popular_repos.map((each) => ({
                id: each.id,
                name: each.name,
                avatarUrl: each.avatar_url,
                forksCount: each.forks_count,
                issuesCount: each.issues_count,
                starsCount: each.stars_count
            }))
            this.setState({newList: updatedList})
        }
        else{
            console.log(response.ok)
        }
    }

    render(){
        const {typo} = this.props
        types = typo

        this.toGetTheDetails(typo)
        const {newList} = this.state
        
        return (
            <div>
                <ul className="unorderedList">
                    {newList.map((each) => <RepositoryItem details={each} key={each.id} />)}
                </ul>
            </div>
        )
    }
}

export default LanguageFilterItem