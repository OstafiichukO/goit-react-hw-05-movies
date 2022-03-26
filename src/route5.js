// // This is a React Router v5 app
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
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/users">
//           <Users />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }

// function Users() {
//   // In v5, nested routes are rendered by the child component, so
//   // you have <Switch> elements all over your app for nested UI.
//   // You build nested routes and links using match.url and match.path.
//   let match = useRouteMatch();

//   return (
//     <div>
//       <nav>
//         <Link to={`${match.url}/me`}>My Profile</Link>
//       </nav>

//       <Switch>
//         <Route path={`${match.path}/me`}>
//           <OwnUserProfile />
//         </Route>
//         <Route path={`${match.path}/:id`}>
//           <UserProfile />
//         </Route>
//       </Switch>
//     </div>
//   );
// }
