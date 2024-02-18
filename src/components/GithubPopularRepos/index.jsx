import LanguageFilterItem from "../LanguageFilterItem"
import { Component } from "react";
import "./index.css"

const languageFiltersData = [
    {id: 'ALL', language: 'All'},
    {id: 'JAVASCRIPT', language: 'Javascript'},
    {id: 'RUBY', language: 'Ruby'},
    {id: 'JAVA', language: 'Java'},
    {id: 'CSS', language: 'CSS'},
  ]
  
  // Write your code here

  class GithubPopularRepos extends Component{
    constructor(props){
        super(props)
        this.state = {type: 'All'}
    }

    componentDidMount(){
        this.toGetDetails
    }

    toChange = lang => {
        const {target} = lang
        this.setState({type: target.id})
    }

    render(){
        const {type} = this.state

        return(
            <div className="mainBackground">
                <div className="topHeading">
                    <h1 className="mainHeading">Popular</h1>
                    <ul className="unorderedList">
                        {languageFiltersData.map((each) => <li id={each.id} onClick={this.toChange} >{each.language}</li>)}
                    </ul>
                </div>
                <div>
                    <LanguageFilterItem  typo={type} />
                </div>
            </div>
        )
    }
  }

  export default GithubPopularRepos