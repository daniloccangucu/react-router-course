import { Link, useParams, Navigate } from "react-router-dom"

import useTeam from "../hooks/useTeam";
import TeamLogo from "./TeamLogo";
import Loading from "./Loading";

function Team() {
    const { teamId } = useParams();

    const {
        response: team,
        loading
    } = useTeam(teamId);

    let body;

    if (loading) {
        body = <Loading />
    } else if (!team) {
        body = <Navigate to="/teams" />
    } else {
        body = (
            <div style={{width: '100%'}}>
                <TeamLogo id={teamId} className="center" />
                <h1 className="medium-header">{team.name}</h1>
                <ul className="info-list row">
                    <li>Est.<div>{team.established}</div></li>
                    <li>Manager<div>{team.manager}</div></li>
                    <li>Coach<div>{team.coach}</div></li>
                </ul>
                <Link
                    className="center btn-main"
                    to={`/${teamId}`}
                >
                    {team.name} Team Page
                </Link>
            </div>
        )
    }

  return (
    <div className="panel">
        {body}
    </div>
  )
}

export default Team
