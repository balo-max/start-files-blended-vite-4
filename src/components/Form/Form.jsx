import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid'
import { addTodo } from '../../redux/todoSlice';
import style from './Form.module.css';

const Form = () => {

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addTodo({
      id: nanoid(),
      text: event.target.elements.search.value,
    }))

     event.target.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
