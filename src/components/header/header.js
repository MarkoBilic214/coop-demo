import React, {useState} from "react";
import PropTypes from 'prop-types'
import styles from "./header.module.scss";

const Header = (props) => {
    const {text} = props

    const [display, setDisplay] = useState(['homepage','about us', 'legal']);
    const buttonPress = () => {
        setDisplay([text]);
    }
    return (
        <div className={styles['header-container']}>
           <ul>
               {display.map((value) => {
                   return (<li>{value}</li>)
               })}
           </ul>
           <button onClick={e => buttonPress()}>Press mee</button>
        </div>
    )
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Header