import { v4 as uuid } from 'uuid';
import moment from "moment";
import update from "react-addons-update"
const initialState ={
    todoDatas:{},
    projectList:{},
    userData:{},
    agenda:[
        { id: uuid(), title: "First task", start: moment("2021-02-08 09:30:26").toDate(),
        end: moment("2021-02-08 09:30:26")
          .toDate() },
        { id: uuid(), title: "Second task",start: moment().toDate(),
        end: moment()
          .add(6, "hours")
          .toDate(), },
        { id: uuid(), title: "Third task",start: moment().toDate(),
        end: moment()
          .add(6, "hours")
          .toDate(), },
        { id: uuid(), title: "Fourth task",start: moment().toDate(),
        end: moment()
          .add(6, "hours")
          .toDate(), },
        { id: uuid(), title: "Fifth task",start: moment().toDate(),
        end: moment() 
          .add(6, "hours")
          .toDate(), }
    ],
    columns:{
        0:{ id: '1', name: 'Backlog',
            items:[
                { id: uuid(), title: "First task"},
                { id: uuid(), title: "Second task"},
                { id: uuid(), title: "Third task"},
                { id: uuid(), title: "Fourth task"},
                { id: uuid(), title: "Fifth task"}
            ]
        },
        1:{ id: '2', name: 'Todo',
            items: [
                { id: uuid(), title: "Ten task"},
                { id: uuid(), title: "Hundred task"}
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
        
        case 'UPDATE_DAY_ITEM':
            return {
                    // agenda:{
                    //     ...state.agenda,
                    //     [action.newEvent.id] : action.newEvent
                    // },
                    ...state,
                    agenda: state.agenda.map(
                        content => content.id === action.newEvent.id ? action.newEvent
                                                : content
                    )
                }
        default:     
            return state
    }
}


export default todoReducer