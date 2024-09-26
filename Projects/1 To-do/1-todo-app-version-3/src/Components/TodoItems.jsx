import Item from "./Item";
import styles from './TodoItems.module.css'
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map(items => <Item todoName = {items.name} todoDate = {items.dueDate} onDeleteClick = {onDeleteClick}/>)}
      </div>
    </>
  );
};

export default TodoItems;
