//src/components/tasksortfilter
import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  MenuItem,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getFilteredTasks } from "../utils/tasks";

const TaskSortFilter = ({ tasks }) => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    assignee: "",
    priority: "",
    startDateFrom: "",
    startDateTo: "",
  });

  useEffect(() => {
    // Fetch filtered tasks based on filterCriteria
    const filteredResults = getFilteredTasks(tasks, filterCriteria);
    setFilteredTasks(filteredResults);
  }, [tasks, filterCriteria]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setFilterCriteria({
      assignee: "",
      priority: "",
      startDateFrom: "",
      startDateTo: "",
    });
  };

  return (
    <div>
      <Typography variant="h4">Sort and Filter Tasks</Typography>
      <Divider style={{ margin: "1rem 0" }} />
      {/* Filter section */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Assignee"
            name="assignee"
            value={filterCriteria.assignee}
            onChange={handleFilterChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            select
            label="Priority"
            name="priority"
            value={filterCriteria.priority}
            onChange={handleFilterChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="P0">P0</MenuItem>
            <MenuItem value="P1">P1</MenuItem>
            <MenuItem value="P2">P2</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Start Date From"
            type="date"
            name="startDateFrom"
            value={filterCriteria.startDateFrom}
            onChange={handleFilterChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            label="Start Date To"
            type="date"
            name="startDateTo"
            value={filterCriteria.startDateTo}
            onChange={handleFilterChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
      <Divider style={{ margin: "1rem 0" }} />
      {/* Task columns */}
      <Grid container spacing={2}>
        {/* Pending Tasks Column */}
        <Grid item xs={12} sm={6} md={2}>
          <Paper
            elevation={3}
            style={{ backgroundColor: "red", color: "white", padding: "1rem" }}
          >
            <Typography variant="h6">Pending Tasks</Typography>
          </Paper>
          {filteredTasks
            .filter((task) => task.status === "Pending")
            .map((task) => (
              <Paper
                key={task.id}
                elevation={3}
                style={{ marginBottom: "1rem", padding: "1rem",marginTop: "1rem" }}
              >
                <Typography>{task.title}</Typography>
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
                {/* Render other task details */}
              </Paper>
            ))}
        </Grid>
        {/* In Progress Tasks Column */}
        <Grid item xs={12} sm={6} md={2}>
          <Paper
            elevation={3}
            style={{
              backgroundColor: "orange",
              color: "white",
              padding: "1rem",
            }}
          >
            <Typography variant="h6">In Progress Tasks</Typography>
          </Paper>
          {filteredTasks
            .filter((task) => task.status === "In Progress")
            .map((task) => (
              <Paper
                key={task.id}
                elevation={3}
                style={{ marginBottom: "1rem", padding: "1rem",marginTop: "1rem" }}
              >
                <Typography>{task.title}</Typography>
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
                {/* Render other task details */}
              </Paper>
            ))}
        </Grid>
        {/* Completed Tasks Column */}
        <Grid item xs={12} sm={6} md={2}>
          <Paper
            elevation={3}
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "1rem",
            }}
          >
            <Typography variant="h6">Completed Tasks</Typography>
          </Paper>
          {filteredTasks
            .filter((task) => task.status === "Completed")
            .map((task) => (
              <Paper
                key={task.id}
                elevation={3}
                style={{ marginBottom: "1rem", padding: "1rem",marginTop: "1rem" }}
              >
                <Typography>{task.title}</Typography>
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
                {/* Render other task details */}
              </Paper>
            ))}
        </Grid>
        {/* Deployed Tasks Colomn */}
        <Grid item xs={12} sm={6} md={2}>
          <Paper
            elevation={3}
            style={{
              backgroundColor: "#2c387e",
              color: "white",
              padding: "1rem",
            }}
          >
            <Typography variant="h6">Deployed Tasks</Typography>
          </Paper>
          {filteredTasks
            .filter((task) => task.status === "Deployed")
            .map((task) => (
              <Paper
                key={task.id}
                elevation={3}
                style={{ marginBottom: "1rem", padding: "1rem",marginTop: "1rem" }}
              >
                <Typography>{task.title}</Typography>
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
                {/* Render other task details */}
              </Paper>
            ))}
        </Grid>
        {/* Deferred Tasks Colomn */}
        <Grid item xs={12} sm={6} md={2}>
          <Paper
            elevation={3}
            style={{
              backgroundColor: "#f73378",
              color: "white",
              padding: "1rem",
            }}
          >
            <Typography variant="h6">Deferred Tasks</Typography>
          </Paper>
          {filteredTasks
            .filter((task) => task.status === "Deferred")
            .map((task) => (
              <Paper
                key={task.id}
                elevation={3}
                style={{ marginBottom: "1rem", padding: "1rem",marginTop: "1rem" }}
              >
                <Typography>{task.title}</Typography>
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
                {/* Render other task details */}
              </Paper>
            ))}
        </Grid>
      </Grid>
      <Divider style={{ margin: "1rem 0" }} />
      <Button variant="outlined" onClick={clearFilters}>
        Clear Filters
      </Button>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/all-tasks"
        style={{marginLeft: "1rem"}}
      >
        Back to All Tasks
      </Button>
    </div>
  );
};

export default TaskSortFilter;
