import React, { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user, loadaing} = useContext(AuthContext)

    if(loadaing){
        return <div className="radial-progress" style={{"--value":70}}>70%</div>
    }
    if(user?.email){
        return children
    }
    return <Navigate to='/login' replace></Navigate>
};

export default Privateroute;