import React from "react";
import styles from './KweetList.module.css'

const KweetList = props => {
return (
    <div className={styles.container}>
        <div className={styles.list}>
        <small>{props.kweets.length&&props.kweets[0].content}</small>
            {props.kweets.map(kweet => {
                return (
                    <div className={styles.kweetItem}>
                        <div><b>First Name</b> - 4 min</div>
                        <p>{kweet.content}</p>
                        <div className={styles.kweetInfo}>
                            <span><i className="material-icons">thumb_up</i></span>
                            <span><i className="material-icons">refresh</i></span>
                            <span><i className="material-icons">add_alert</i></span>
                        </div>
                    </div>
                )
            })
            }
        </div>
    </div>
)}

export default KweetList