import Item from "./Item";
import styles from './TodoItems.module.css'
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map(items => <Item todoName = {items.name} todoDate = {items.dueDate}/>)}
      </div>
    </>
  );
};

export default TodoItems;
