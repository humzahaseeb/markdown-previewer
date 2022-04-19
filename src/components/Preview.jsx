import React from 'react'

const Preview = (props) => {
  return (
    <div className='preview-div'>
        <h2>Previewer</h2>
        <div id='preview'>
            {props.preview}
        </div>
    </div>
  )
}

export default Preview