import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/todos/filter/actions";

const numberOfTodos = (todosNumber)=> {
  switch (todosNumber) {
    case 0:
      
      return 'No Task'
      case 1:
      
      return '1 Task '
    default:
      return `${todosNumber} Task`
  }
}

const Footer = () => {
  const todos = useSelector((state)=> state.todos )
  const filters = useSelector((state)=> state.filters)
  const dispatch = useDispatch();
  const remainingTodos = todos?.filter(todo=> !todo?.completed)?.length;
  const {status,colors} = filters;
  const handleStatusChanged = status=> {
    dispatch(statusChanged(status))
  }
const handleColorChange = color => {
  if(colors.includes(color)){
    dispatch(colorChanged(color, 'removed'))
  }
  else {
    dispatch(colorChanged(color,'added'))
  }
}
  
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{numberOfTodos(remainingTodos)}  Left</p>
        <ul className="flex space-x-1 items-center text-xs">
          <li onClick={()=> handleStatusChanged('All')} className={`cursor-pointer ${status === 'All' && 'font-bold'}`}>All</li>
          <li>|</li>
          <li  onClick={()=> handleStatusChanged('Incomplete')} className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`}>Incomplete</li>
          <li>|</li>
          <li  onClick={()=> handleStatusChanged('Complete')} className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`}>Complete</li>
          <li />
          <li />
          <li onClick={()=> handleColorChange('green')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'} `} />
          <li  onClick={()=> handleColorChange('red')} className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}` } />
          <li  onClick={()=> handleColorChange('yellow')} className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`} />
        </ul>
      </div>
    );
};

export default Footer;