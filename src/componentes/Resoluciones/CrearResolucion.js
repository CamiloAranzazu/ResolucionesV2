import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import GuardarResolucion from './GuardarResolucion';

function CrearResolucion() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Crear Resolución
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="tipoDocumento"
            name="tipoDocumento"
            label="Tipo Documento"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="estado"
            name="estado"
            label="Estado"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="fechaInicial"
            name="fechaInicial"
            label="Fecha Inicial"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="fechaFinal"
            name="fechaFinal"
            label="Fecha Final"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="descripcion"
            name="descripcion"
            label="Descripción"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="consecutivoInicial"
            name="consecutivoInicial"
            label="Consecutivo Inicial"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="consecutivoFinal"
            name="consecutivoFinal"
            label="Consecutivo Final"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="prefijo"
            name="prefijo"
            label="Prefijo"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="claveTecnica"
            name="claveTecnica"
            label="ClaveTecnica"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <GuardarResolucion/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CrearResolucion;