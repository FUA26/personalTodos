import { Box,makeStyles } from '@material-ui/core';
import { BorderRightOutlined, MoreVert } from '@material-ui/icons';
import React,{ useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch ,useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import clsx from 'clsx';
import { chageOrder, chageStage } from '../../config/redux/actions';
import './Todo.scss'


const useStyles = makeStyles(theme => ({
  sideBorder: {
    borderLeftColor: theme.palette.secondary.main,
  }
}));

function Main() {
  const {columns} = useSelector(state =>state.todoReducer)
  const dispatch = useDispatch()

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
  
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      console.log(sourceItems,destItems)
      dispatch(chageStage(source.droppableId,sourceItems,destination.droppableId,destItems))
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      dispatch(chageOrder(source.droppableId,copiedItems))
    }
  };


  const classes = useStyles();

  // console.log("Diluar Effect : ",columns)
  return (
    <div style={{ display: "flex", height: "100%", overflowX: "scroll" }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              className="columnTodo"
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "#F5F6F7"
                            : ""
                        }}
                        className="columnTodo__box"
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      // backgroundColor: snapshot.isDragging
                                      //   ? "#263B4A"
                                      //   : "#456C86",
                                      boxShadow: snapshot.isDragging
                                        ? "-8px -8px 12px #FAFBFF, 8px 8px 12px #A6ABBD"
                                        : "",
                                      ...provided.draggableProps.style,
                                      borderRadius: 10
                                    }}
                                    // className="listTodo"
                                    
                                    className={clsx("listTodo", classes.sideBorder)}
                                  >
                                    <Box>
                                        
                                    </Box>
                                    <Box  flexGrow={1} alignItems="center">
                                        <p>{item.title}</p>

                                    </Box>
                                    <Box>
                                        <MoreVert></MoreVert>
                                    </Box>
                                    
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default Main
