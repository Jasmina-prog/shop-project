import './InputPart.css'

function InputPart(){
    return(
        <div className='input-box'>
            <input type="text" placeholder='Search...'/>
            <p className="checkbox">
            <input id='check' type="checkbox"/>
            <label htmlFor="check">Available products</label>
            </p>
        </div>
    )
}

export default InputPart