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
            <KweetInput />
            <KweetList kweets={kweets} />
        </div>
        )
    }

}

export default Profile