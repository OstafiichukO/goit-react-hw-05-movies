// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="profile" element={<Profile />}>
//           <Route path=":id" element={<MyProfile />} />
//           <Route path="me" element={<OthersProfile />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function Profile() {
//   return (
//     <div>
//       <nav>
//         <Link to="me">My Profile</Link>
//       </nav>
//       {/*
//                Будет напрямую отображать <MyProfile /> или <OthersProfile /> на основе различных параметров маршрутизации, определенных выше
//         */}
//       <Outlet />
//     </div>
//   );
// }
