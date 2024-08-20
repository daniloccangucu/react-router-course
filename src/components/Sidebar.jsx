import { Link, useLocation } from "react-router-dom"

import { slugify } from "../utils"

function CustomLink ({ to, children }) {
    const { pathname } = useLocation();
    const id = pathname.split("/")

    const match = id[id.length - 1] === to

    const styles = match
        ? { fontWeight: 900, color: 'var(--white)'}
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

export default Sidebar
