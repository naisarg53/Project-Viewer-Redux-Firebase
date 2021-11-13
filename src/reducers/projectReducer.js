const initState = {
    projects: [
        { id: "1", title: "GeoHelper", description: "android app" },
        { id: "2", title: "GeoHelper", description: "android app" }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT_SUCCESS':
            console.log("created project", action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("created project error", action.err);
            return state;
        default:
            return state;
    }
}
export default projectReducer

