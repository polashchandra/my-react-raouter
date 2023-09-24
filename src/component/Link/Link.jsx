
import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
            <li className='mr-2 hover:bg-green-300'><a href={route.path}> {route.name}</a></li>
        </div>
    );
};

Link.propTypes = {
    route:PropTypes.func,
    path:PropTypes.object,
    name:PropTypes.object
};

export default Link;