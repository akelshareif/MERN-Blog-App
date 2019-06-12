import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';


class App extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <NavBar />
                </Container>
            </div>
        );
    }
}

export default App;