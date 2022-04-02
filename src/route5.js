// // v5
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
// } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/profile" component={Profile} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// function Profile() {
//   let { path, url } = useRouteMatch();

//   return (
//     <div>
//       <nav>
//         <Link to={`${url}/me`}>My Profile</Link>
//       </nav>

//       <Switch>
//         <Route path={`${path}/me`}>
//           <MyProfile />
//         </Route>
//         <Route path={`${path}/:id`}>
//           <OthersProfile />
//         </Route>
//       </Switch>
//     </div>
//   );
// }
