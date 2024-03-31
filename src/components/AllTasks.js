//src/components/AllTasks.js

// AllTasks.js
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import EditTaskModal from './EditTaskModal';

const AllTasks = ({ tasks, handleEditTask, handleDeleteTask }) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleOpenModal = (task) => {
        setSelectedTask(task);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const handleDelete = (task) => {
        if (task.status === 'Completed') {
            alert('Completed tasks cannot be deleted.');
        } else {
            handleDeleteTask(task.id);
        }
    };
    return (
        <div>
        <Grid container spacing={3}>
            {tasks.map((task) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={task.id}>
                    <Card variant="outlined" style={{ marginBottom: '1rem' }}>
                        <CardContent>
                            <Typography variant="h6">{task.title}</Typography>
                            <Typography>{task.description}</Typography>
                            <Typography>
                                <strong>Status:</strong> {task.status}
                            </Typography>
                            <Typography>
                                <strong>Assignee:</strong> {task.assignee}
                            </Typography>
                            <Typography>
                                <strong>Priority:</strong> {task.priority}
                            </Typography>
                            <Typography>
                                {task.status === 'Completed' ? (
                                    <strong>End Date:</strong>
                                ) : (
                                    <strong>Start Date:</strong>
                                )}{' '}
                                {task.status === 'Completed' ? task.endDate : task.startDate}
                            </Typography>
                            <div style={{ marginTop: '1rem' }}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => handleOpenModal(task)}
                                    disabled={task.status === 'Completed'}
                                >
                                    Edit
                                </Button>{' '}
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => handleDelete(task)}
                                    disabled={task.status === 'Completed'}
                                >
                                    Delete
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        {selectedTask && (
            <EditTaskModal
                task={selectedTask}
                open={openModal}
                handleClose={handleCloseModal}
                handleUpdateTask={handleEditTask}
            />
        )}
    </div>
);
};


export default AllTasks;
