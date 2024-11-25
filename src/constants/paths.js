const PATHS = {
    ROOT: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    DEFAULT: '/app',
    DASHBOARD: '/app/dashboard',
    PROJECTS: '/app/projects',
    PROFILE: '/profile',
    SETTINGS: '/settings',
    MODELS: '/app/models',
    PREDICT: (projectID, experimentName) => `/app/project/${projectID}/build?step=1&experiment_name=${experimentName}`,
    PROJECT_BUILD: (projectID) => `/app/project/${projectID}/build`,
    PROJECT_MODEL: (projectID) => `/app/project/${projectID}/model`,
    PROJECT_DEPLOY: (projectID) => `/app/project/${projectID}/deploy`,
    PROJECT_TASKS: (projectID) => `/app/project/${projectID}/tasks`,
    PROJECT_SETTINGS: (projectID) => `/app/project/${projectID}/settings`,
    TESTING: '/testing',
};

export { PATHS };
