import React from 'react';

const DragAndDrop = props => {
  const handleDragEnter = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  const handleDragLeave = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  const handleDragOver = event => {
    event.preventDefault();
    event.stopPropagation();
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