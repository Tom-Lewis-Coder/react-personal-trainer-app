import PropTypes from 'prop-types'

const Header = ( props ) => {
    return(
        <div className={props.className}>
            {props.title}
        </div>
    )
}

Header.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Header