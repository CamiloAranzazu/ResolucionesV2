import React, { Component } from 'react';

/** Estilos */

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

class HeaderTitulo extends Component {
    render() {
        return (
            <div >
                <header>
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" >
                                {this.props.titulo}
                        </Typography>
                        </Toolbar>
                    </AppBar>
                </header>
            </div>
        );
    }
}
export default HeaderTitulo;