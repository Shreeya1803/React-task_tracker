// utils/tasks.js

export const getFilteredTasks = (tasks, filterCriteria) => {
    return tasks.filter((task) => {
        let matches = true;
        if (filterCriteria.assignee && task.assignee !== filterCriteria.assignee) {
            matches = false;
        }
        if (filterCriteria.priority && task.priority !== filterCriteria.priority) {
            matches = false;
        }
        if (
            filterCriteria.startDateFrom &&
            new Date(task.startDate) < new Date(filterCriteria.startDateFrom)
        ) {
            matches = false;
        }
        if (
            filterCriteria.startDateTo &&
            new Date(task.startDate) > new Date(filterCriteria.startDateTo)
        ) {
            matches = false;
        }
        // Add more filter conditions as needed (e.g., date range)

        return matches;
    });
};
