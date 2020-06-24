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
    let files = [...event.dataTransfer.files];

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map(file => file.name)
      files = files.filter(file => !existingFiles.includes(file.name))

      dispatch({ type: 'ADD_FILE_TO_LIST', files });
      event.dataTransfer.clearData();
      dispatch({ type: 'SET_DROP_DEPTH', dropDepth: 0 });
      dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
    }
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className={data.inDropZone ? 'drag-drop-zone inside-drag-area' : 'drag-drop-zone'}
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