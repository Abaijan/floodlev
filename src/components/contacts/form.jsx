import React from 'react'
import './form.css'
const Form = () => {
  return (
    <div className='form'>
        <div className="container">
            <h2>Остались вопросы?</h2>
            <p>Напишите нам, и мы с радостью ответим на все ваши вопросы!</p>
            <form className='contact-form'>
                <input type="text" placeholder='Ваше имя' required />
                <input type="email" placeholder='Ваш email' required />
                <textarea placeholder='Ваше сообщение' required></textarea>
                <button type='submit'>Отправить</button>
            </form>
        </div>
    </div>
  )
}

export default Form