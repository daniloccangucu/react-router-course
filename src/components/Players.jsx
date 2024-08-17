import { useSearchParams } from "react-router-dom"

export default function Players() {
    const [searchParams] = useSearchParams();
    const team = searchParams.get('teamId')

    return (
        <div className="container">
            Players for team {team}
        </div>
    )
}