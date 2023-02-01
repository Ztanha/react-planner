import ListItem from "./lists/list-item/List-item.js";
import {useNavigate} from "react-router-dom";

export const TaskListItems = ({ task })=>{
    const navigate=useNavigate();
    const handleClick = (id) =>{
        navigate('/task/'+id)
    }
    return (
        task ? (<ListItem key = { task['id'] }
                  headline = { task['subject'] }
                  effects = { true }
                  divider = { true }
                  click = { ()=> handleClick( task['id'] ) }
        />)
            : ''
    )
}