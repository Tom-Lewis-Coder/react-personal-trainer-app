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
    className: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string,
}

export default Button