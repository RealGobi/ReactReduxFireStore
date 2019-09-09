const initState = {
    projects: [
        {id:'1', title: 'Help!', content: 'lorem ipson onogner'},
        {id:'2', title: 'Save!', content: 'oadd orem domting nonellser'},
        {id:'3', title: 'Go out and dance!', content: 'lita orem ipson erframr'}
    ]
}
const ProjectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        default:
            return state;
        }
}
export default ProjectReducer;