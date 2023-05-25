import PropTypes from 'prop-types';

const Button = ( props ) => {
    return(
        <button 
            className={props.className}
            onClick={props.onClick}>
            {props.title}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

export default Button