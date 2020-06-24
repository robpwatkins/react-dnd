import React, { useReducer } from 'react';
import './App.css';
import DragAndDrop from './DragAndDrop';

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_DROP_DEPTH':
        return { ...state, dropDepth: action.dropDepth};
      case 'SET_IN_DROP_ZONE':
        return { ...state, inDropZone: action.inDropZone};
      case 'ADD_FILE_TO_LIST':
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state; 
    }
  };
  const [data, dispatch] = useReducer(
    reducer, { dropDepth: 0, inDropZone: false, fileList: [] }
  )

  return (
    <div className="App">
      <h1>React drag-and-drop component</h1>
      <DragAndDrop data={data} dispatch={dispatch} />
      <ol className="dropped-files">
        {data.fileList.map(file => {
          return (
            <li key={file.name}>file.name</li>
          )
        })}
      </ol>
    </div>
  );
}
export default App;