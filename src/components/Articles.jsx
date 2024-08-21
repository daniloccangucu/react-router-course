import { useParams, Outlet } from "react-router-dom";

import useTeamsArticles from "../hooks/useTeamsArticles";
import Sidebar from "./Sidebar";
import Loading from "./Loading";

function Articles() {
    const { teamId } = useParams();
    
    const {
        response: articles,
        loading
    } = useTeamsArticles(teamId)

  return (
    loading
    ? <Loading />
    : <div className="container two-column">
        <Sidebar
            title="Articles"
            list={articles.map((article) => article.title)}
        />
        <Outlet />
    </div>
  )
}
export default Articles
