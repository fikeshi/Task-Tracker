import PropTypes from "prop-types"

function Button({ color, text, onClick}) {
    return <button style={{ backgroundColor: color }} onClick={onClick} className="btn">{text}</button>
}

Button.defaultProps = {
    color: "red",
    text:"div"
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
}

export default Button