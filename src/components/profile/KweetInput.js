import React, { Component } from 'react'
import styles from './KweetInput.module.css'

class KweetInput extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            content: '',
            user_id: 5
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        let target = event.target
        let value = target.value
        this.setState({content: value})
    }

    render(){
        return(
            <div className={styles.container}>
                <div className={styles.content} tabIndex="0">
                    <textarea
                    
                    onChange={this.handleChange}
                    placeholder="What's happening?"
                    />
                    <button
                    className={styles.hide}
                    onClick={() => this.props.postKweet(this.state)}>Kweet it</button>
                </div>
            </div>
        )
    }

}

//const KweetInput = props => {
//    return (
//        <div className={styles.container}>
//            <div className={styles.content}>
//                <textarea
//                placeholder="What's in your mind?"
//                />
//                <button >Kweet it</button>
//            </div>
//        </div>
//    )
//
//}

export default KweetInput