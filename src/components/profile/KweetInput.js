import React, { Component } from 'react'
import styles from './KweetInput.module.css'

class KweetInput extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            content: '',
            isHidden: true
        }
        this.onFocus = this.onFocus.bind(this)
    }

    onFocus(){
        let { isHidden } = this.state
        this.setState({...this.state,isHidden: !isHidden})
    }

    render(){
        let hidden = this.state.isHidden
        return(
            <div className={styles.container}>
                <div className={styles.content}>
                    <textarea
                    onFocus={this.onFocus}
                    onBlur={this.onFocus}
                    placeholder="What's happening?"
                    />
                    <button className={hidden?styles.hidden:''}>Kweet it</button>
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