import { useSelector } from 'react-redux';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem'
import Todo from '../Todo/Todo'


const TodoList = () => {
  const todos = useSelector(state => state.todos.items);
  const searchValue = useSelector(state => state.filter.name);
  const visibleTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Grid>
      {visibleTodos.map((todo, index) => (
        <GridItem key={todo.id}>
          <Todo todo={todo} counter={index + 1} />
        </GridItem>))}
    </Grid>
  );
};

export default TodoList;
