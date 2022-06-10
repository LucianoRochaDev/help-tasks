export const AppRoutes = {
  Home: "/",
  Login: "/login",
  TodoList: (userId = ":userId") => `/user/${userId}`,
  TaskDetalhes: (userId = ":userId", taskId = ":taskId") =>
    `/user/${userId}/tasks/${taskId}`,
} as const;
