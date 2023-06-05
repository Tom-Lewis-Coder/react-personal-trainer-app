import PropTypes from 'prop-types'

const Header = ( props ) => {
    return(
        <div className={props.className}>
            {props.title}
        </div>
    )
}

Header.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
}

export default Header