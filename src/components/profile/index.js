import React, { Component } from "react";
import axios from 'axios'
import KweetList from './KweetList'

const API_URL = 'http://192.168.126.128:3030/api'

class Profile extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            kweets: []
        }
    }

    fetchKweets(){
		return axios.get(API_URL+'/kweet')
		.then(res => {
			let kweets = res.data
			this.setState({kweets})
		})
		.catch(e => console.error(e))
    }
    
    componentDidMount(){
		return this.fetchKweets()
	}

    render(){
        let {kweets} = this.state
        return(
        <div>
            <KweetList kweets={kweets} />
        </div>
        )
    }

}

//const KweetList = props => {
//return (
//    <div className={styles.container}>
//        <div className={styles.list}>
//            {props.kweets.map(kweet => {
//                return (
//                    <div className={styles.kweetItem} key={kweet.id}>
//                        <div><b>First Name</b> - 4 min</div>
//                        <p>{kweet.content}</p>
//                        <div className={styles.kweetInfo}>
//                            <span><i className="material-icons">thumb_up</i></span>
//                            <span><i className="material-icons">refresh</i></span>
//                            <span><i className="material-icons">add_alert</i></span>
//                        </div>
//                    </div>
//                )
//            })
//            }
//        </div>
//    </div>
//)}

export default Profile