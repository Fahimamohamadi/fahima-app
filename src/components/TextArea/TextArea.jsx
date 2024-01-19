import styled from './TextArea.module.css'
function Textarea(props) {
    return (
        <div className={ styled.textareaWrapper} >
            <label>Content</label>
            <textarea  name={props.name} onChange={props.handleChange} type={props.type}></textarea>
        </div>
    )
}

export default Textarea