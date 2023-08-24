import { Row, Tag, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { todoListReducer } from '../TodoList/ToDoListSlide';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ id, name, prioriry, completed }) {
  const dispatch = useDispatch()
  const toggleCheckbox = () => {
    // dispatch(checkTodo(id))
    dispatch(todoListReducer.actions.checkToDo(id))
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(completed ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={completed} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
