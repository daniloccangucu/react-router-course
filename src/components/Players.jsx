import { useSearchParams, Outlet } from "react-router-dom"

import usePlayerNames from "../hooks/usePlayerNames"
import Sidebar from "./Sidebar";
import Loading from "./Loading";

export default function Players() {
    const [searchParams] = useSearchParams();
    const team = searchParams.get('teamId')

    const {
        response: names,
        loading
    } = usePlayerNames(team)

    return (
        loading
        ? <Loading />
        : <div className="container two-column">
            <Sidebar
                title="Players"
                list={names}
            />
            <Outlet />
        </div>
    )
}