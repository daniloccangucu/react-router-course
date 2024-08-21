import { Outlet } from "react-router-dom"

import useTeamNames from "../hooks/useTeamNames"
import Sidebar from "./Sidebar"
import Loading from "./Loading";

export default function Teams() {
    const {
        response: teamNames,
        loading
    } = useTeamNames();

    return (
        loading
        ? <Loading />
        : <div className="container two-column">
            <Sidebar 
                title="Teams"
                list={teamNames}
            />
            <Outlet />
        </div>
    )
}