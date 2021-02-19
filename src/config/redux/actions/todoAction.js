
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
