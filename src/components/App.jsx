import { Suspense, lazy } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import NavBar from "./NavBar";
import Loading from "./Loading";

const Home = lazy(() => import("./Home"))
const Teams = lazy(() => import("./Teams"))
const Players = lazy(() => import("./Players"))
const TeamPage = lazy(() => import("./TeamPage"))
const Player = lazy(() => import("./Player"))
const Team = lazy(() => import("./Team"))
const Article = lazy(() => import("./Article"))
const Articles = lazy(() => import("./Articles"))

const Routes = () => useRoutes([
  { path: "/", element: <Home /> },
  {
    path: "players",
    element: <Players />,
    children: [
      { path: ":playerId", element: <Player /> },
      { path: "", element: <div className="sidebar-instruction">Select a Player</div> }
    ]
  },
  {
    path: "/teams",
    element: <Teams />,
    children: [
      { path: ":teamId", element: <Team />},
      { path: "", element: <div className="sidebar-instruction">Select a Team</div> }
    ]
  },
  { path: ":teamId", element: <TeamPage /> },
  {
    path: "/:teamId/articles",
    element: <Articles />,
    children: [
      { path: ":articleId", element: <Article /> },
      { path: "", element: <div className="sidebar-instruction">Select an Article</div> }
    ]
  }
])

export default function App () {
  return (
    <Router>
    <div>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </div>
    </Router>
  )
}