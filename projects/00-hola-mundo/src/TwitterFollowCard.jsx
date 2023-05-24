import { useState } from "react"

export function TwitterFollowCard( {children, username}) {
    const [isFolloging, setIsFolloging] = useState(false)


    const avatarImage = `https://unavatar.io/${username}`
    const text = isFolloging? "Siguiendo" : "Seguir"
    const btnClassName = isFolloging ? "tw-followCard-btn is-following" : "tw-followCard-btn"


    const handleClick = () =>{
        setIsFolloging(!isFolloging)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img  className='tw-followCard-avatar' alt="Avatar"src={avatarImage}/>
                <div className='tw-followCard-info'>
                    <strong >{children}</strong>
                    <span className='tw-followCard-infoUsername'>{`@${username}`}</span>
                </div>
            </header>
            
            <aside>
                <button className={btnClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}