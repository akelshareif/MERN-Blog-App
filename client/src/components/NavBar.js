import React from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import StackContainer from './navComponents/StackContainer';
import PostForm from './navComponents/PostForm';


// in order for routes to render components, they must all be encased in the same file
// this is because the <Route /> tags must be registered within the router! 
// use SUIR's augmentation to create links ex: as={Link} to='/path'

class NavBar extends React.Component{

    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => {
        this.setState({activeItem: name});
    }

    activeCheck = (match, location) => {
        
    }

    render(){
        const { activeItem } = this.state;

        return(
            <Router>
                <Menu pointing secondary>
                    <Menu.Item
                        name='home'
                        as={NavLink}
                        exact
                        to='/'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='newPost'
                        as={NavLink}
                        exact
                        to='/new'
                        active={activeItem === 'newPost'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
                
                <Route path='/' exact component={StackContainer} />
                <Route path='/new' exact component={PostForm} />
            </Router>
        );  
    }

}

export default NavBar;