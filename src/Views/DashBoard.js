import './DashBoard.css'
import avatar from '../assets/images/Ellipse 2.png'
import clock from '../assets/images/Group 7.png'
import { useNavigate } from 'react-router-dom';
import { getTaskUsers, getAllUser } from '../services/userServices'
import { useEffect, useState } from 'react';
import { Checkbox, Form } from 'antd';
import { useForm, Controller } from "react-hook-form";
import dot from '../assets/images/Rectangle 29.png'
const DashBoard = (props) => {

    const navigate = useNavigate();

    const [tasksUsers, setTasksUser] = useState()


    useEffect(() => {
        async function fetchTaskUser() {
            let res = await getTaskUsers()
            if (res && res?.status === 200) {
                setTasksUser(res.data)
            }
        }
        fetchTaskUser();
    }, []);

    const handleLogout = () => {
        navigate("/login");
    }
    return (
        <div className="dashboard-container">
            <div className="profile-user">
                <div className="avatar">
                    <img src={avatar} className='img-avatar' />
                </div>
                <div className="nick-name">
                    <div className="name">Monica Gamage</div>
                    <div className="id-name">@monicagamage</div>
                </div>
                <button className='btn-logout' onClick={handleLogout}>
                    Log out
                </button>
            </div>
            <div className="time">
                <div className="clock">
                    <img src={clock} className='img-clock' />
                </div>
                <div>Good Afternoon</div>
            </div>
            <div className="task-content-title">Tasks List</div>
            <div className="task-content">
                <div className="list-task">
                    <div className="list-task-title">
                        Task list
                        <span className='add'><i className="fa-solid fa-plus plus"></i></span>
                    </div>
                    <div>
                        <span className='img-dot'><img src={dot} /></span>
                        Cook Rice and Chicken at 10 am
                    </div>

                    {tasksUsers && tasksUsers.map((item) => {
                        return (
                            <div className='checkbox' key={item.id}>
                                <Checkbox defaultChecked={item.completed} >{item.name}</Checkbox>
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>

    )
}
export default DashBoard