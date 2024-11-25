import { useEffect, useState } from 'react'
import './App.css'
import Form from './com/form';
import List from './com/list';

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState(()=>{
    return JSON.parse(localStorage.getItem('Items')) || [];
  });
  const [edit, setEdit] = useState({bool: false, key: ''});

  useEffect(()=>{
    localStorage.setItem('Items', JSON.stringify(list));
  }, [list])

  return (
    <>
      <div className='w-1/4 flex justify-normal items-start flex-col left-1/2 -translate-x-1/2 absolute gap-5'>
        <h1 className='text-3xl font-extrabold self-center'>My to-do-list</h1>
        <Form setList={setList} item={item} setItem={setItem} edit={edit} setEdit={setEdit}/>
        <List list={list} setEdit={setEdit} setItem={setItem} setList={setList}/>
      </div>
    </>
  )
}

export default App
