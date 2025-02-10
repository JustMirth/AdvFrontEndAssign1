import React, {useState} from "react";

function Form() {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === '') {
            setMessage('Please enter a Message');
        } else {
            setMessage('Form Submitted!');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type = 'text'
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                    placeholder = 'Enter Your Message'
                />
                <br></br>
                <button type = 'submit'>Submit</button> 
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default Form;