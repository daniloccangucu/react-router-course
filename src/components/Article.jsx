import { useParams } from "react-router-dom";

import useArticle from "../hooks/useArticle";
import Loading from "./Loading";

function Article() {
    const { teamId, articleId } = useParams();

    const {
        response: article,
        loading
    } = useArticle({ teamId, articleId });

  return (
    loading
    ? <Loading />
    : <div className="panel">
        <article className="article">
          <h1 className="header">{article.title}</h1>
          <p>{article.body}</p>
        </article>
    </div>
  )
}

export default Article
