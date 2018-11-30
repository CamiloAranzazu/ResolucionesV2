import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

import GuardarResolucion from './GuardarResolucion';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {

    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  
});

function MostrarResoluciones (props) {
  const { classes } = props;
    return (
      <div className={classes.root}>
      <ExpansionPanel >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Resolución</Typography>
          </div>
        </ExpansionPanelSummary>

        {/* informacion resoluciones*/}
        <ExpansionPanelDetails className={classes.details}>

          <div className={classes.column}>
            <Typography variant="caption">
              id
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography variant="caption">
              tipo
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography variant="caption">
              descripcion
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography variant="caption">
              fecha inicial
            </Typography>
          </div>
          <Divider />
          <div className={classes.column}>
            <Typography variant="caption">
              fecha final
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography variant="caption">
              consecutivo inicial
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography variant="caption">
              consecutivo final
            </Typography>
          </div>

        </ExpansionPanelDetails>
        {/* fin informacion resoluciones*/}
        <Divider />
        <ExpansionPanelActions>
          <GuardarResolucion/>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
    );
  
}

export default withStyles(styles)(MostrarResoluciones);