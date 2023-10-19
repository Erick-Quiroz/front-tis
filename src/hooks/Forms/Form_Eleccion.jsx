import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TextField,
  IconButton,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
function FormEleccion() {
  const [frente, setFrente] = useState("");
  const [candidatos, setCandidatos] = useState([]);
  const [formData, setFormData] = useState({});
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedNombre, setEditedNombre] = useState("");
  const [editedCargo, setEditedCargo] = useState("");
  const [convocatoria, setConvocatoria] = useState("");

  const handleChangeFrente = (event) => {
    setFrente(event.target.value);
  };

  const handleAgregarCandidato = () => {
    const nuevoCandidato = {
      nombre: formData.nombreCandidato,
      cargo: formData.cargoCandidato,
    };

    setCandidatos([...candidatos, nuevoCandidato]);

    setFormData({
      ...formData,
      nombreCandidato: "",
      cargoCandidato: "Decano",
    });
  };

  const handleConvocatoriaChange = (event) => {
    setConvocatoria(event.target.value);
  };

  const handleNombreCandidatoChange = (event) => {
    setFormData({ ...formData, nombreCandidato: event.target.value });
  };

  const handleCargoCandidatoChange = (event) => {
    setFormData({ ...formData, cargoCandidato: event.target.value });
  };

  const handleEditarCandidato = (index) => {
    setEditingIndex(index);
    setEditedNombre(candidatos[index].nombre);
    setEditedCargo(candidatos[index].cargo);
  };

  const handleGuardarEdicion = () => {
    if (editingIndex !== -1) {
      const candidatosActualizados = [...candidatos];
      candidatosActualizados[editingIndex].nombre = editedNombre;
      candidatosActualizados[editingIndex].cargo = editedCargo;
      setCandidatos(candidatosActualizados);
      setEditingIndex(-1);
    }
  };

  const handleCancelarEdicion = () => {
    setEditingIndex(-1);
  };

  const handleEliminarCandidato = (index) => {
    const candidatosActualizados = [...candidatos];
    candidatosActualizados.splice(index, 1);
    setCandidatos(candidatosActualizados);
  };

  const handleSubmit = () => {
    const dataToSend = {
      convocatoria,
      frente,
      candidatos,
    };
    console.log(dataToSend);
  };

  return (
    <Box sx={{ marginTop: "15px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="frente-select">Convocatoria</InputLabel>
            <Select
              value={convocatoria}
              label="Seleccionar Convocatoria"
              id="frente-select"
              onChange={handleConvocatoriaChange}
            >
              <MenuItem value="Convocatoria A">Convocatoria A</MenuItem>
              <MenuItem value="Convocatoria B">Convocatoria B</MenuItem>
              <MenuItem value="Convocatoria C">Convocatoria C</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <TextField
            id="Facultad"
            label="Facultad"
            variant="outlined"
            value={formData.Facultad}
            onChange={(e) =>
              setFormData({ ...formData, Facultad: e.target.value })
            }
            disabled
            fullWidth
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            id="Carrera"
            label="Carrera"
            variant="outlined"
            value={formData.Carrera}
            onChange={(e) =>
              setFormData({ ...formData, Carrera: e.target.value })
            }
            disabled
            fullWidth
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            id="TipoEleccion"
            label="Tipo de elección"
            variant="outlined"
            value={formData.TipoEleccion}
            onChange={(e) =>
              setFormData({ ...formData, TipoEleccion: e.target.value })
            }
            disabled
            fullWidth
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            id="DiaEleccion"
            label="Día de elección"
            variant="outlined"
            value={formData.TipoEleccion}
            onChange={(e) =>
              setFormData({ ...formData, TipoEleccion: e.target.value })
            }
            disabled
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="cargo-candidato">Frente</InputLabel>
            <Select
              value={formData.cargoCandidato}
              onChange={handleChangeFrente}
              label="Cargo"
              id="cargo-candidato"
            >
              <MenuItem value="Frente 1">Frente 1</MenuItem>
              <MenuItem value="Frente 2">Frente 2</MenuItem>
              <MenuItem value="Frente 3">Frente 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid
          container
          spacing={2}
          alignItems="center"
          xs={12}
          sx={{ margin: "10px" }}
        >
          <Grid item xs={9}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="nombre-candidato"
                label="Nombre del Candidato"
                variant="outlined"
                value={formData.nombreCandidato}
                onChange={handleNombreCandidatoChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="cargo-candidato">Cargo</InputLabel>
              <Select
                value={formData.cargoCandidato}
                onChange={handleCargoCandidatoChange}
                label="Cargo"
                id="cargo-candidato"
              >
                <MenuItem value="Decano">Decano</MenuItem>
                <MenuItem value="Rector">Rector</MenuItem>
                <MenuItem value="Consejero">Consejero</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAgregarCandidato}
            >
              <GroupAddRoundedIcon />
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <h2>Candidatos del Frente {frente}</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Cargo</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {candidatos.map((candidato, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {editingIndex === index ? (
                        <TextField
                          value={editedNombre}
                          onChange={(e) => setEditedNombre(e.target.value)}
                        />
                      ) : (
                        candidato.nombre
                      )}
                    </TableCell>
                    <TableCell>
                      {editingIndex === index ? (
                        <FormControl fullWidth variant="outlined">
                          <Select
                            value={editedCargo}
                            onChange={(e) => setEditedCargo(e.target.value)}
                          >
                            <MenuItem value="Decano">Decano</MenuItem>
                            <MenuItem value="Rector">Rector</MenuItem>
                            <MenuItem value="Consejero">Consejero</MenuItem>
                          </Select>
                        </FormControl>
                      ) : (
                        candidato.cargo
                      )}
                    </TableCell>
                    <TableCell>
                      {editingIndex === index ? (
                        <div>
                          <IconButton
                            aria-label="Guardar"
                            color="primary"
                            onClick={handleGuardarEdicion}
                          >
                            <SaveIcon />
                          </IconButton>
                          <IconButton
                            aria-label="Cancelar"
                            color="secondary"
                            onClick={handleCancelarEdicion}
                          >
                            <CancelIcon />
                          </IconButton>
                        </div>
                      ) : (
                        <div>
                          <IconButton
                            aria-label="Editar"
                            color="primary"
                            onClick={() => handleEditarCandidato(index)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            aria-label="Eliminar"
                            color="secondary"
                            onClick={() => handleEliminarCandidato(index)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Button onClick={handleSubmit}>Enviar</Button>
    </Box>
  );
}

export default FormEleccion;
