import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import EditForm from './components/EditForm/EditForm'
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import TodoList from './components/TodoList/TodoList';
import { useSelector } from 'react-redux';

export const App = () => {
  const todos = useSelector(state => state.todos.items);
  const isEdit = useSelector(state => state.todos.currentTodo);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form /> : <EditForm />}
          <Filter/>
          {todos.length > 0 && <TodoList />}
        </Container>
      </Section>
    </>
  );
};
