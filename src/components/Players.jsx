import { useSearchParams, Link, useMatch } from "react-router-dom"
import usePlayerNames from "../hooks/usePlayerNames"
import { slugify } from "../utils";

function CustomLink ({ to, children }) {
    const match = useMatch(to)

    const styles = match
        ? { fontWeight: 900, color: '(var--white)'}
        : {}

    return (
        <li>
            <Link
                style={{...styles}}
                to={to}
            >
                {children}
            </Link>
        </li>
    )
}

function Sidebar ({ title, list }) {
    return (
        <div>
            <h3 className="header">
                {title}
            </h3>
            <ul className="sidebar-list">
                {list.map((item) => (
                    <CustomLink
                        key={item}
                        to={slugify(item)}
                    >
                        {item.toUpperCase()}
                    </CustomLink>
                ))}
            </ul>
        </div>
    )
}

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
        <div className="container">
            <Sidebar
                title="Players"
                list={names}
            />
            Players for team {team}
        </div>
    )
}