import React from "react";
import Box from "@mui/joy/Box";
import PropTypes from "prop-types";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import jsPDF from "jspdf";

export default function Table_Conv({ convocatoria }) {
  const generarPDF = (rowData) => {
    const doc = new jsPDF({
      unit: "cm",
      format: [21, 29.7],
      orientation: "portrait",
      margins: { top: 1.5, right: 1.5, bottom: 1.5, left: 1.5 },
    });
  
    // Formatear dateB y dateE
    const formattedDateB = rowData.dateB.substring(0, 10);
    const formattedDateE = rowData.dateE.substring(0, 10);
  
    // Texto predeterminado con valores formateados
    const textoPDF = `
  CONVOCATORIA
  ELECCIONES DE ${rowData.tipo} Y
  ESTUDIANTES DE BASE AL HONORABLE CONSEJO
  DE LA CARRERA DE ${rowData.carrera} de la ${rowData.facultad}
  Los plazos de tiempos para inscripción de partidos y representantes serán de
  ${formattedDateB} a ${formattedDateE}
  sin nada más que decir mis saludos cordiales.
    `;
  
    // Dividir el texto en líneas de acuerdo con el ancho de la página
    const lines = doc.splitTextToSize(textoPDF, 18); // Ancho de línea de 18 cm
  
    // Establecer el tamaño de fuente
    doc.setFontSize(12);
  
    // Agregar las líneas al PDF
    doc.text(lines, 1.5, 1.5);
  
    // Descargar el PDF
    doc.save("Convocatoria.pdf");
  };
  
  

  return (
    <Box sx={{ width: "100%" }}>
      <Sheet
        variant="outlined"
        sx={{
          // ... (tu estilo de fondo aquí)
        }}
      >
        <Table
          borderAxis="bothBetween"
          stripe="odd"
          hoverRow
          sx={{
            "& tr > *:first-of-type": {
              position: "sticky",
              left: 0,
              boxShadow: "1px 0 var(--TableCell-borderColor)",
              bgcolor: "background.surface",
            },
            "& tr > *:last-child": {
              position: "sticky",
              right: 0,
              bgcolor: "var(--TableCell-headBackground)",
            },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 30 }}>#</th>
              <th style={{ width: 200 }}>Nombre</th>
              <th style={{ width: 150 }}>Fecha Inicio</th>
              <th style={{ width: 150 }}>Fecha Fin</th>
              <th style={{ width: 150 }}>Facultad</th>
              <th style={{ width: 150 }}>Carrera</th>
              <th style={{ width: 150 }}>Tipo Eleccion</th>
              <th
                aria-label="last"
                style={{ width: 100, textAlign: "center" }}
              ></th>
            </tr>
          </thead>
          <tbody>
            {Object.values(convocatoria).map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.dateB}</td>
                <td>{row.dateE}</td>
                <td>{row.facultad}</td>
                <td>{row.carrera}</td>
                <td>{row.tipo}</td>
                <td style={{ alignContent: "center", alignItems: "center" }}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button size="sm" variant="plain" color="neutral">
                      <EditIcon fontSize="inherit" />
                    </Button>
                    <Button
                      size="sm"
                      variant="soft"
                      color="danger"
                      onClick={() => generarPDF(row)}
                    >
                      <PictureAsPdfIcon fontSize="inherit" />
                    </Button>
                    <Button size="sm" variant="soft" color="danger">
                      <DeleteIcon fontSize="inherit" />
                    </Button>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
      <Typography level="body-sm" textAlign="center" sx={{ pb: 2 }}>
        ← - →
      </Typography>
    </Box>
  );
}

Table_Conv.propTypes = {
  convocatoria: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
