const Hero = ({text, backdrop}) => {
    return(
        <div>
            <header className = "bg-primary text-white p-5 hero-container">
                <h1 className='hero-text'>{text}</h1>
                <div className= 'hero-backdrop' style={{backgroundImage:`url(${backdrop})`}}></div>
            </header>
        </div>
    )
}

export default Hero;