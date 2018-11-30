import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import MostrarResoluciones from './MostrarResoluciones';
import CrearResolucion from './CrearResolucion';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class InicioResoluciones extends React.Component {
  state = {
    value: 'Mostrar',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="#B3E5FC">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab value="Mostrar" label="Mostrar Resoluciones" />
            <Tab value="Crear" label="Crear Resoluciones" />
          </Tabs>
        </AppBar>
        {value === 'Mostrar' && <TabContainer> <MostrarResoluciones/> </TabContainer>}
        {value === 'Crear' && <TabContainer><CrearResolucion/></TabContainer>}
      </div>
    );
  }
}

InicioResoluciones.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InicioResoluciones);