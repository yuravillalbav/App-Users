import React, {Fragment, useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

const FormUser = () => {

    const {register, handleSubmit, reset, errors} = useForm();

    const [user, setUser] = useState();

    const handleInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name] : event.target.value
        })
    }

    // Add user
    const handleOnSubmit = async () => {
        
        const {firstname, lastname, email} = user;
        await axios.post('http://localhost:8000/api/users', {
            firstname,
            lastname,
            email
            
        });

        reset();
    }
   

    return (
        <Fragment>
            <div className= 'container-fluid'>
                <div  className="card text-white bg-secondary mb-3">
                    <div className="card-header">
                        <h4 className="card-title">Ingresar Usuario</h4>
                    </div>
                    
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleOnSubmit)}>
                            <div className="form-group mx-sm-3 mb-2">
                                <input 
                                    type="text" 
                                    placeholder="Nombre" 
                                    className="form-control" 
                                    name="firstname" 
                                    onChange={handleInputChange} 
                                    ref={
                                            register({
                                                required: {value: true, message: 'Valor requerido.'}
                                            })
                                        }
                                    autoFocus
                                />
                                <div className="text-danger text-small d-block mb-2" role="alert">
                                    {errors?.firstname?.message}
                                </div>
                            </div>
                            
                            <div className="form-group mx-sm-3 mb-2">
                                <input 
                                    type="text" 
                                    placeholder="Apellido" 
                                    className="form-control" 
                                    name="lastname" 
                                    onChange={handleInputChange} 
                                    ref={
                                        register({
                                            required: {value: true, message: 'Valor requerido.'}
                                        })
                                    }
                                />
                                <span className="text-danger text-small d-block mb-2">
                                    {errors?.lastname?.message}
                                </span>
                                
                            </div>
                            
                            <div className="form-group mx-sm-3 mb-2">
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="form-control" 
                                    name="email" 
                                    onChange={handleInputChange} 
                                    ref={
                                        register({
                                            required: {value: true, message: 'Valor requerido.'}
                                        })
                                    }
                                />
                                <span className="text-danger text-small d-block mb-2">
                                    {errors?.email?.message}
                                </span>
                            </div>
                            
                            <button onClick={alert}  type="submit" className="btn btn-primary btn-lg btn-block">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default FormUser