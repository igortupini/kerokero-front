import React, { Component } from "react";
import axios from 'axios'
import KweetInput from './KweetInput'
import KweetList from './KweetList'

const API_URL = 'http://192.168.126.128:3030/api'

class Profile extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            kweets: []
        }
        this.postKweet = this.postKweet.bind(this)
    }

    fetchKweets(){
		return axios.get(API_URL+'/kweet')
		.then(res => {
			let kweets = res.data
			this.setState({kweets})
		})
		.catch(e => console.error(e))
    }

    postKweet(kweet){
        return axios.post(API_URL+'/kweet',kweet)
        .then(res => {
            this.fetchKweets()
        })
        .catch(e => console.error(e))
    }
    
    componentDidMount(){
		return this.fetchKweets()
	}

    render(){
        let {kweets} = this.state
        let postKweet = this.postKweet
        return(
        <div>
            <KweetInput postKweet={postKweet} />
            <KweetList kweets={kweets} />
        </div>
        )
    }

}

export default Profile