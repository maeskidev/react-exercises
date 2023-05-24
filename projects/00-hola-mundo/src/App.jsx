import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {

    return (
        <>
            <div className="App">
                <TwitterFollowCard   username="maeskrr">
                    Michael E. Quiros
                </TwitterFollowCard>
                
                <TwitterFollowCard  username="midudev">
                    Miguel Angel
                </TwitterFollowCard>

            </div>
        </>
    )
}

