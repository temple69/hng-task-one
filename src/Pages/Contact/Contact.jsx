import { useState,useRef } from 'react'
import './contact.css'


const Contact = () => {
    const [messageState,setMessage]= useState(false)
    const [emailState,setEmailState]= useState(false)
    const emailref = useRef('')
    const messageref = useRef('')
    const name=`{name}`
    const formHandler=(e)=>{
        e.preventDefault()
        console.log(emailref.current.value)
        console.log(messageref.current.value)

        if(!emailref.current.value){
            setEmailState(true)
        } 
        if(!messageref.current.value){
            setMessage(true)
        }
        else{
            setMessage(false)
        }
        
    }
  return (
    <section className='formContainer'>
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form onSubmit={formHandler}>
            <fieldset>
                <label>First Name
                    <input type="text" placeholder='Enter Your First Name' id='first_name' />
                </label>
                <label >Last Name
                <input type="text" placeholder='Enter Your Last Name' id='last_name' />
                </label>
            </fieldset>
            <label>Email
            <input type="email"  placeholder='yourname@email.com' id='email' ref={emailref}/>
            </label>
            <p>{emailState?"This is a hint text to help user":''}</p>
            <label>Message
                <textarea  id='message' ref={messageref} placeholder="Send me a message and I'll reply you as soon as possible..." className={messageState?'red_border':'blue_border'}>
                
                </textarea>
            </label>
            <p className={messageState?"red":"black"}>{ messageState?"Please Enter a message":""}</p>
            <label id='chkbox'>
                <input type="checkbox"/> You agree to providing your data to {name}  who may contact you.
            </label>
            <button type='submit' id='btn__submit'> Send Message</button>
            
        </form>
    </section>
    
  )
}

export default Contact