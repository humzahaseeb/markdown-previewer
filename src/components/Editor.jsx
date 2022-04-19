import React, {useState} from 'react'
import Preview from './Preview'

const Editor = () => {
  const [markdown, setMarkdown] = useState("")
  const [preview, setPreview] = useState('')

  const handleChange = (e) => {
    setMarkdown(e.target.value)
    setPreview(e.target.value)
  }

  return (
    <div id='editor-div'>
        <h2>Editor</h2>
        <div className='textarea'>
            <textarea id='editor' onChange={handleChange}>
              {markdown}
            </textarea>
        </div>
        <Preview preview={preview}/>
    </div>
  )
}

export default Editor