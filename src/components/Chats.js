import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Chats = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const[loading,setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/');
  };

  // for images attachements
  const getFile = async(url) => {
    const response = await fetch(url);
    const data = await response.blob(); // blob are usually any files like images aor other type of files that we want to transfer over in binary forms

    return new File([data], "userPhoto.jpg" , {type:" image/jpeg"})
  }
  useEffect(() => {
    if (!user) {
      navigate('/');
      return;   
    }

    axios.get('https://api.chatengine.io/users/me',{
        headers:{
            "project-id":"74dcd2a6-2da1-42a3-af18-6aaad8035267",
             "user-name": user.email,
             "user-secret": user.uid,
        }
         
    })
    .then(()=>{
        setLoading(false);
    })
    .catch(()=>{
        let formdata = new FormData();
        formdata.append('email',user.email);
        formdata.append('username',user.email);
        formdata.append('secret',user.uid);

        getFile(user.photoURL)
          .then(( avatar) =>{
            formdata.append('avatar',avatar,avatar.name)

            axios.post('https://api.chatengine.io/users',
                formdata,
                {headers : {"private-key": "bb58d896-4835-4141-a15b-f8e10a2f99af"}}
            )
            .then(() => setLoading(false))
            .catch((error)=>console.log(error))
          })
    })
  }, [user, navigate]);

if(!user || loading) return 'Loading...';

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
          Connectify
        </div>
        <div 
          onClick={handleLogout} 
          className="logout-tab">
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh-66px)"
        projectID="74dcd2a6-2da1-42a3-af18-6aaad8035267"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}

export default Chats;