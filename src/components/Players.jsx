import { useSearchParams, Outlet } from "react-router-dom"

import usePlayerNames from "../hooks/usePlayerNames"
import Sidebar from "./Sidebar";

export default function Players() {
    const [searchParams] = useSearchParams();
    const team = searchParams.get('teamId')

    const {
        response: names,
        loading
    } = usePlayerNames(team)

    if (loading) {
        return null
    }

    return (
        <div className="container two-column">
            <Sidebar
                title="Players"
                list={names}
            />
            <Outlet />
        </div>
    )
}