import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { currentTodo, changeTodo } from '../../redux/todoSlice';
import style from './EditForm.module.css';

const EditForm = () => {
  const dispatch = useDispatch();
  const currentTask = useSelector(state => state.todos.currentTodo);

  const handleCancel = () => {
    dispatch(currentTodo(null));
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    dispatch(changeTodo({ id: currentTask.id, newText: event.target.text.value }))
  }

  return (
    <form className={style.form} onSubmit={handleUpdate}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTask.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
