import React from "react";
import styles from './index.module.css'

const Menu = props => {
return (
<div className={styles.nav}>
<div className={styles.navItems}>
    <ul>
        <li>Home</li>
        <li>Logout</li>
    </ul>
</div>
</div>
)}

export default Menu