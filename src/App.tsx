import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {AddItemForm} from './AddItemForm';
import {Container, createMuiTheme, Grid, Paper, Switch, ThemeProvider, Toolbar} from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC
} from "./state/todolists-reducer";
import {AppRootStateType} from "./state/store";
import Typography from '@material-ui/core/Typography';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function App() {
    const dispatch = useDispatch()
    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)


    function removeTask(id: string, todolistId: string) {
        dispatch(removeTaskAC(id, todolistId))
    }

    function addTask(title: string, todolistId: string) {
        dispatch(addTaskAC(title, todolistId))
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        dispatch(changeTaskStatusAC(id, isDone, todolistId))
    }

    function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
        dispatch(changeTaskTitleAC(id, newTitle, todolistId))
    }


    function changeFilter(value: FilterValuesType, todolistId: string) {
        dispatch(changeTodolistFilterAC(value, todolistId))
    }

    function removeTodolist(id: string) {
        dispatch(removeTodolistAC(id))
    }

    function changeTodolistTitle(id: string, title: string) {
        dispatch(changeTodolistTitleAC(id, title))
    }

    function addTodolist(title: string) {
        dispatch(addTodolistAC(title))
    }

    const [darkMode, setDarkMode] = useState(false);

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
        },
    })

    const th = createMuiTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
        },
    })

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Paper style={{height: '100vh'}} >
                    {/*<AppBar position="fixed" style={{display: "flex", alignItems: "flex-end", }}>*/}
                        <Toolbar style={{display: "flex", justifyContent: "flex-end" }}>
                            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                            <Typography>
                                {darkMode ? 'Dark Mode' : 'Light Mode'}
                            </Typography>
                        </Toolbar>
                    {/*</AppBar>*/}
                    <Container fixed>
                        <Grid container style={{padding: "30px"}}>
                            <AddItemForm addItem={addTodolist}/>
                        </Grid>
                        <Grid container spacing={3}>
                            {
                                todolists.map(tl => {
                                    let allTodolistTasks = tasks[tl.id];
                                    let tasksForTodolist = allTodolistTasks;

                                    if (tl.filter === "active") {
                                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                                    }
                                    if (tl.filter === "completed") {
                                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                                    }

                                    return <Grid item>
                                        <Paper style={{padding: "10px"}}>
                                            <Todolist
                                                key={tl.id}
                                                id={tl.id}
                                                title={tl.title}
                                                tasks={tasksForTodolist}
                                                removeTask={removeTask}
                                                changeFilter={changeFilter}
                                                addTask={addTask}
                                                changeTaskStatus={changeStatus}
                                                filter={tl.filter}
                                                removeTodolist={removeTodolist}
                                                changeTaskTitle={changeTaskTitle}
                                                changeTodolistTitle={changeTodolistTitle}
                                            />
                                        </Paper>
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Container>
                </Paper>
            </ThemeProvider>
        </div>
    );
}

export default App;
