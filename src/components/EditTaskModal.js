//src/components/EditTaskModal.js

// EditTaskModal.js
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';

const EditTaskModal = ({ task, open, handleClose, handleUpdateTask }) => {
    const [updatedTask, setUpdatedTask] = useState(task ? { ...task } : null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleUpdate = () => {
        handleUpdateTask(task.id, updatedTask);
        toast.info('Task Updated Successfully');
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            {task ? (
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6">Edit Task</Typography>
                        <Typography>{task.title}</Typography>
                        <Typography>{task.description}</Typography>
                        <Typography>
                            <strong>Status:</strong> {task.status}
                        </Typography>
                        <Typography>
                            <strong>Assignee:</strong> {task.assignee}
                        </Typography>
                        <Typography>
                            <strong>Priority:</strong>
                            <select name="priority" value={updatedTask.priority} onChange={handleChange}>
                                <option value="P0">P0</option>
                                <option value="P1">P1</option>
                                <option value="P2">P2</option>
                            </select>
                        </Typography>
                        <Typography>
                            <strong>Status:</strong>
                            <select name="status" value={updatedTask.status} onChange={handleChange}>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Deployed">Deployed</option>
                                <option value="Deferred">Deferred</option>
                            </select>
                        </Typography>
                        <div style={{ marginTop: '1rem' }}>
                            <Button variant="contained" color="primary" onClick={handleUpdate}>
                                Update
                            </Button>{' '}
                            <Button variant="contained" onClick={handleClose}>
                                Cancel
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ) : null}
        </Modal>
    );
};

export default EditTaskModal;
