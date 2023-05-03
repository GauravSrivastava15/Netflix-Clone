import { Route, Routes } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from "./screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector} from "react-redux"
import { login, logout, selectUser } from "./features/userSlice";
import { BrowserRouter } from 'react-router-dom';
import ProfileScreen from "./screens/ProfileScreen";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{

    const unsubscribe = onAuthStateChanged(auth, (userAuth)=>{
      if(userAuth){
        
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
          
        }))

        
      }else{
        dispatch(logout())
      }
    });

    return unsubscribe;
  }, [dispatch])
  
  return (
    
      
        <BrowserRouter>
          {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
        </BrowserRouter>

    
      
    
  );
}

export default App;
