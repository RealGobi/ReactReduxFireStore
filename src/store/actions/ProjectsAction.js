export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
            //async call
        const fireStore = getFirestore();
        fireStore.collection('project').add({
            ...project, 
            authorFirstName: 'Jimmy',
            authorLastName: 'Svensson',
            authorId:123,
            createdAt: new Date()

        }).then(() => {
            dispatch({
                type:'CREATE_PROJECT', 
                project:project //ES6 just project
        }).catch((err)=> {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        })
            })
    }
}