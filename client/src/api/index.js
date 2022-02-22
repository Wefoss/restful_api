import axios from "axios";
import qs from "query-string";
import { REQUEST_DATA } from "../constants";
const {PORT, HOST, MAIN_URL} = REQUEST_DATA
const httpClient = axios.create({
  baseURL: `${HOST}:${PORT}/${MAIN_URL}`,
});

export const createUser = (data) => httpClient.post("/users", data);
export const getUsers = ({ limit, offset }) =>httpClient.get(`/users?${qs.stringify({ limit, offset })}`);
export const deleteUser = (data) => httpClient.delete(`/users/${data.userId}`);

export const deleteTask = (data) => httpClient.delete(`/tasks/${data.taskId}`);
export const updateTask = (data) =>httpClient.patch(`/tasks/${data.taskId}`, data.values);
export const createTask = (data) => httpClient.post(`/tasks/${data.currentId}`, data.values);
export const getAllTasks = () => httpClient.get("/tasks");
