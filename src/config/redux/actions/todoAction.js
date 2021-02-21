
export const chageStage =(sourceId,sourceItems,destId,destItems) =>{
    return(dispatch)=>{
        dispatch({type:'UPDATE_DATA_COLUMNS',sourceId,sourceItems,destId,destItems})
    }
}

export const chageOrder =(droppableId,copiedItems) =>{
    return(dispatch)=>{
        dispatch({type:'UPDATE_DATA_ITEM',droppableId,copiedItems})
    }
}

export const chageDay =(data) =>{
    return(dispatch)=>{
        
        // console.log("Before : ",data)
        data.event.start = data.start
        data.event.end = data.end
        let newEvent = data.event
        // console.log("From Action : ",newEvent)
        dispatch({type:'UPDATE_DAY_ITEM',newEvent})
    }
}