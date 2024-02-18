import "./index.css"

const RepositoryItem = props => {
    const {details} = props
    const {id, name, avatarUrl, forksCount, issuesCount, starsCount} = details

    return(
        <li id={id} className="eachContainer">
            <img src={avatarUrl} alt={name} className="eachImg"/>
            <h1 className="eachHeading">{name}</h1>
            <div className="eachDataContainer">
                <img src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png" alt="stars" className="eachIcons"/>
                <p className="eachPara">{starsCount} <span>stars</span></p>
            </div>
            <div className="eachDataContainer">
                <img src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png" alt="forks" className="eachIcons"/>
                <p className="eachPara">{forksCount} <span>forks</span></p>
            </div>
            <div className="eachDataContainer">
                <img src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png" alt=" open issues" className="eachIcons"/>
                <p className="eachPara">{issuesCount} <span>open issues</span></p>
            </div>
        </li>
    )
}

export default RepositoryItem