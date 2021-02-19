import { v4 as uuid } from 'uuid';
const initialState ={
    todoDatas:{},
    projectList:{},
    userData:{},
    columns:{
        0:{ id: '1', name: 'Backlog',
            items:[
                { id: uuid(), content: "First task" },
                { id: uuid(), content: "Second task" },
                { id: uuid(), content: "Third task" },
                { id: uuid(), content: "Fourth task" },
                { id: uuid(), content: "Fifth task" }
            ]
        },
        1:{ id: '2', name: 'Todo',
            items: [
                { id: uuid(), content: "Ten task" },
                { id: uuid(), content: "Hundred task" }
            ] 
        },
        2:{ id: '3', name: 'On Progress',items: [] },
        3:{ id: '4', name: 'Review',items: [] },
        4:{ id: '5', name: 'Done',items: [] },
        
    }
  }

const todoReducer = (state=initialState,action) =>{
    switch (action.type) {
    //untuk isert data from
    case 'UPDATE_DATA_COLUMNS':
        return{
                ...state,
                columns:{
                    ...state.columns,
                    [action.sourceId] : {
                        ...state.columns[action.sourceId],
                        items:action.sourceItems
                    },
                    [action.destId] : {
                        ...state.columns[action.destId],
                        items:action.destItems
                    },
                }
            }
        case 'UPDATE_DATA_ITEM':
            return{
            ...state,
            columns:{
                ...state.columns,
                [action.droppableId] : {
                    ...state.columns[action.droppableId],
                    items:action.copiedItems
                }
            }
            }
        default:     
            return state
    }
}


export default todoReducer