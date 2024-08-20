import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NavBar from "./NavBar"
import Home from "./Home"
import Teams from "./Teams"
import Players from "./Players"
import TeamPage from "./TeamPage"
import Player from "./Player"
import Team from "./Team"
import Article from "./Article"
import Articles from "./Articles"

export default function App () {
  return (
    <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />}>
          <Route path=":playerId" element={<Player />}/>
        </Route>
        <Route path="/teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />}/>
        </Route>
        <Route path="/:teamId" element={<TeamPage />} />
        <Route path="/:teamId/articles" element={<Articles />}>
          <Route path=":articleId" element={<Article />}/>
        </Route>
      </Routes>
    </div>
    </Router>
  )
}