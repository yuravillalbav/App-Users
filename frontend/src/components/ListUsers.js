import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';

const ListUsers = () => {
    const [user, setUser] = useState([]);
   
   // List users 
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                'http://localhost:8000/api/users',
            );

            setUser(res.data);
        };
        fetchData({});
    }, []);

    // Delete user
    const handleDelete = async (id) => {
        const userResponse = window.confirm('¿Está seguro de eliminar el usuario?')
        if(userResponse){
            await axios.delete(
                `http://localhost:8000/api/users/${id}`
                )
            const newList = user.filter((item) => item._id !== id);
            setUser(newList);
        }

    }
    
    return (
      <Fragment>
        <div className='container'>
          <table className='table table-hover'>
            <thead>
                <tr className='table-primary'>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">APELLIDO</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
              {user.map(item => (
              <tr className="table-light" key={item._id}>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>
                  <button 
                    className="btn btn-secondary">Editar
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item._id)} 
                    className="btn btn-danger">Eliminar
                  </button>
                </td>
              </tr>
              ))} 
            </tbody>
          </table>
        </div>
      </Fragment>

    ) 
}

export default ListUsers;