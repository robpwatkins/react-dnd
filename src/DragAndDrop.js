import React from 'react';

const DragAndDrop = props => {
  const { data, dispatch } = props;

  const handleDragEnter = event => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth + 1 });
  };
  const handleDragLeave = event => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth - 1 });
    if (data.dropDepth > 0) return;
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
  };
  const handleDragOver = event => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true });
  };
  const handleDrop = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className={'drag-drop-zone'}
      onDrop={event => handleDrop(event)}
      onDragOver={event => handleDragOver(event)}
      onDragEnter={event => handleDragEnter(event)}
      onDragLeave={event => handleDragLeave(event)}
    >
      <p>Drag files here to upload</p>
    </div>
  );
};
export default DragAndDrop;