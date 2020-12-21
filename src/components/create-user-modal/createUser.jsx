import React from 'react';
import "./create-user.css"


const CreateUser = (props) => {
    let [formData, setFormData] = React.useState()
   



    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    console.log(formData)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addUser(formData)
        props.modalCreateUser()
    }
    
    return (
        <div className="create-user">
            <div className="income__wrapper">
                <div className="income__header">
                    <h2 className="income__title">Добавить пользователя</h2>
                    <span onClick={()=>props.modalCreateUser()}>	&#10006;</span>
                </div>
                <div className="income__body">
                    <form onSubmit={handleSubmit}>
                        <input  type="text" name="first_name" placeholder="Имя" required onChange={handleInput} />
                        <input  type="text" name="last_name" placeholder="Фамилия" required onChange={handleInput} />
                        <input  type="text" name="username" placeholder="Логин" required onChange={handleInput} />
                        <input  type="email" name="email" placeholder="Email" required onChange={handleInput} />
                        <input  type="password" name="password" placeholder="Пароль" required onChange={handleInput} />
                        
                        


                        

                        <input type="submit" value="Добавить" className="btn income__submit" />
                    </form>
                </div>
            </div>


        </div>
    )
}
export default CreateUser


