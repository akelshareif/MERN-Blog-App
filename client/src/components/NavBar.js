import React from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import StackContainer from './navComponents/StackContainer';


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


    render(){
        const { activeItem } = this.state;

        return(
            <Router>
                <Menu pointing secondary>
                    <Menu.Item
                        name='home'
                        as={NavLink}
                        to='/'
                        exact
                        activeClassName='active item'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='newPost'
                        as={NavLink}
                        to='/new'
                        exact
                        active={activeItem === 'newPost'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
                
                <Route path='/' exact component={StackContainer} />
                <Route path='/new' exact component={''} />
            </Router>
        );  
    }

}

export default NavBar;