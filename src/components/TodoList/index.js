import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/action';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { filteredTodoList } from '../../redux/selectors';

export default function TodoList() {
  const [toDoName, setToDoName] = useState("")
  const [toDoPriority, setToDoPrioty] = useState("Medium")

  const todoList = useSelector(filteredTodoList)
  const dispatch = useDispatch();
  const handleAddBtn = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: toDoName,
      priority: toDoPriority,
      completed: false,
    }))
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo, i) => {
          return (
            <Todo key={i} name={todo.name} prioriry={todo.priority} completed={todo.completed}/>
          )
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={toDoName} onChange={(v) => setToDoName(v.target.value)} />
          <Select defaultValue={toDoPriority} onChange={(e) => setToDoPrioty(e)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={() => handleAddBtn()}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
