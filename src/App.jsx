import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "./components/Container";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Post from "./components/Post";
import { closeAll } from "./store/stateSlice";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const addPost = useSelector(state => state.stateManage.status);

  if(addPost === true){
    document.body.style.overflow = "hidden"
  }else if(addPost === false){
     document.body.style.overflow = ""
  }

  const handleOut = () => {
    dispatch(closeAll())
  }

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // const [user, setUser] = useState(null)
  // console.log(user)

  // useEffect(() => {
  //   const users = authService.getCurrentUser().then((data) => setUser(data.status))
  //   console.log(users)
  //   console.log(user)
  // }, []);

  return !loading ? (
    <>
      {/* {addPost ? <p>hello</p> : <Post />} */}
      {addPost && <Post />}

      <div className="">
        <Header />
      </div>
      <div onClick={handleOut}>
      <Container>
        <Outlet />
      </Container>
      </div>
    </>
  ) : null;
};

// <BrowserRouter>
//   <Provider store={store}>
//     <Container>
//       <Routes>
//         <Route element={<PrivateRoute />}>
//           <Route path="/" element={<Main />} />
//           {/* <Route path="/" element={<Home />} /> */}
//           <Route path="/articles" element={<Articles />} />
//           <Route path="/people" element={<People />} />
//           <Route path="/learning" element={<Learning />} />
//           <Route path="/jobs" element={<Jobs />} />
//           <Route path="/games" element={<Games />} />
//           <Route path="/app" element={<GetApp />} />
//         </Route>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Container>
//   </Provider>
// </BrowserRouter>

export default App;
