import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri"; 
import style from './Todo.module.css'
import Text from '../Text/Text'
import { useDispatch } from "react-redux";
import { currentTodo, deleteTodo } from "../../redux/todoSlice";

const Todo = ({ todo, counter }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTodo(todo.id));
  const handeleEdit = (value) => dispatch(currentTodo(value));

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {counter}
      </Text>

      <Text>{todo.text}</Text>
      <button className={style.deleteButton} type="button" onClick={handleDelete}>
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button" onClick={() => handeleEdit(todo)}>
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default Todo;
