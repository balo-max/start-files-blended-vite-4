import style from './Filter.module.css';
import { changeFilter } from '../../redux/filterSlice'; 
import { useDispatch } from 'react-redux';


const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = (query) => {
    dispatch(changeFilter(query));
  };

  return <input className={style.input} placeholder="Find it" name="filter" onChange={(e) => handleFilter(e.target.value)}/>;
};

export default Filter;
