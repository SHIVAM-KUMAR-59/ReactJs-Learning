
import styles from './Buttons.module.css'
const Buttons = (props) =>{
    return(
        <button className={styles.buttons}>{props.name}</button>
    )
}

export default Buttons;