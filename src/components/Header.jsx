import noteImage from '../assets/images/notes.png'
import tickImg from '../assets/images/double-tick.png'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { added, allCompleted, clearCompleted } from '../redux/todos/actions';
export default function Header() {
  const dispatch = useDispatch();
  const [input ,setInput] = useState('');
  const handleInput = e => {
    setInput(e.target.value)
  }
  const handleSubmit = e=> {
    e.preventDefault();
    dispatch(added(input))
    setInput('')

  }
  // complete all task handler here
  const completeAllHandler = ()=> {
    dispatch(allCompleted())
  }

  // clear completed task handler here
  const clearCompletedHandler = ()=> {
    dispatch(clearCompleted())
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
        onChange={handleInput}
        value={input}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-[url('./assets/images/plus.png')] bg-no-repeat bg-contain"
        />
      </form>
      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li  onClick={completeAllHandler} className="flex space-x-1 cursor-pointer">
          <img
            className="w-4 h-4"
            src={tickImg}
            alt="Complete"
          />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={clearCompletedHandler} className="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
}
