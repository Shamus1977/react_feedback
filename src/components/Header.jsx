import PropTypes from 'prop-types'

function Header({text,bgColor,textColor}) {
    const headerStyles = {
        backgroundColor:bgColor,
        color:textColor,
    }
    return (
    <div>
        <header style={headerStyles}>
            <div className="container">
                <h2>Feedback UI: {text}</h2>
            </div>
        </header>
    </div>
    )
}

Header.defaultProps = {
    text:"Hello Planet",
    bgColor:"rgba(0,0,0,0.4)",
    textColor:"#ff6a95"
}

Header.propTypes = {
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
}

export default Header
