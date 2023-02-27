import {useDispatch} from 'react-redux';
import {Navigate} from 'react-router-dom';

const AuthProtected = (props) => {
    return (<Navigate to={{pathname: '/login', state: {from: props.location}}}/>);
};
export {AuthProtected};
