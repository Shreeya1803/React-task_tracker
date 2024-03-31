//src/components/TaskForm.js

import React from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
// import { format } from 'date-fns'; // Import date-fns format function
const TaskForm = ({ handleAddTask }) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            status: 'Pending',
            assignee: '',
            priority: 'P0',
            startDate:  new Date().toISOString().slice(0, 10),
            endDate: '', // End Date (empty by default)
        },
        onSubmit: (values, { resetForm }) => {
            handleAddTask(values);
            resetForm();
            toast.success('Task Added Successfully');
        },
    });

    return (
        <Card variant="outlined">
            <CardContent>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="title"
                                name="title"
                                label="Title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                id="description"
                                name="description"
                                label="Description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="status"
                                name="status"
                                select
                                label="Status"
                                value={formik.values.status}
                                onChange={formik.handleChange}
                            >
                                <MenuItem value="Pending">Pending</MenuItem>
                                <MenuItem value="In Progress">In Progress</MenuItem>
                                <MenuItem value="Completed">Completed</MenuItem>
                                <MenuItem value="Deployed">Deployed</MenuItem>
                                <MenuItem value="Deferred">Deferred</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="assignee"
                                name="assignee"
                                label="Assignee"
                                value={formik.values.assignee}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="priority"
                                name="priority"
                                select
                                label="Priority"
                                value={formik.values.priority}
                                onChange={formik.handleChange}
                            >
                                <MenuItem value="P0">P0</MenuItem>
                                <MenuItem value="P1">P1</MenuItem>
                                <MenuItem value="P2">P2</MenuItem>
                            </TextField>
                        </Grid>
                         {/* Start Date  */}
                         <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="startDate"
                                name="startDate"
                                label="Start Date"
                                type="date"
                                value={formik.values.startDate}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        {/* End Date  */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="endDate"
                                name="endDate"
                                label="End Date"
                                type="date"
                                value={formik.values.endDate}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" type="submit">
                                Add Task
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
};

export default TaskForm;
