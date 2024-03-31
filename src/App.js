import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TaskForm from './components/TaskForm';
import AllTasks from './components/AllTasks';
import TaskSortFilter from './components/TaskSortFilter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
        toast.success('Task Added Successfully');
    };

    const handleEditTask = (taskId, updatedTask) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, ...updatedTask } : task
        );
        setTasks(updatedTasks);
        toast.info('Task Updated Successfully');
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        toast.success('Task Deleted Successfully');
    };

    return (
        <Router>
            <div className="container-fluid">
                <Navbar />
                <div className="row">
                    <div className="col-md-2 sidebar-container">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 main-content">
                        <Routes>
                        <Route path="/add-task" element={<TaskForm handleAddTask={handleAddTask} />} />
                        <Route
                                path="/all-tasks"
                                element={<AllTasks tasks={tasks} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} />}
                            />
                           

                            <Route path="/sort-filter" element={<TaskSortFilter tasks={tasks} />} />
                        </Routes>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Router>
    );
};

export default App;