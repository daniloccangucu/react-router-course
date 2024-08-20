import { useParams, Outlet } from "react-router-dom";

import useTeamsArticles from "../hooks/useTeamsArticles";
import Sidebar from "./Sidebar";

function Articles() {
    const { teamId } = useParams();
    
    const {
        response: articles,
        loading
    } = useTeamsArticles(teamId)

    if (loading) {
        return <p>LOADING</p>;
    }

  return (
    <div className="container two-column">
        <Sidebar
            title="Articles"
            list={articles.map((article) => article.title)}
        />

        <Outlet />
    </div>
  )
}
export default Articles
