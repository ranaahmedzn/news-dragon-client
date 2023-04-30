import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()

    if(loader){
        return  <div className='text-center pt-5 mt-5'><Spinner className='mt-5' animation="border" variant="primary" /></div>
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;