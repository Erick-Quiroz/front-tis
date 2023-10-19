import { Typography } from "@mui/material";
import { useState } from "react";
import { Admin } from "../../../../components/layout/admin/Admin";

import Drawer from "../../../../hooks/Drawer/Drawer";
import Form_Mesas_Jurados from "../../../../hooks/Forms/Form_Mesas_Jurados";

function Create_Mesas_Jurados() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [name, setName] = useState("");
  const [setSelectedFacultad] = useState("");

  const handleNuevoClick = (itemName) => {
    setName(itemName);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  let drawerContent;

  switch (name) {
    case "facultad":
      drawerContent = (
        <Form_Facultad
          onClose={handleCloseDrawer}
          setSelectedFacultad={setSelectedFacultad}
        />
      );
      break;
    case "carrera":
      drawerContent = <Form_Carrera onClose={handleCloseDrawer} />;
      break;

    default:
      drawerContent = null;
  }

  return (
    <Admin>
      <Typography
        variant="h4"
        sx={{ borderBottom: "2px solid black", width: "100%" }}
      >
        Crear Eleccion
      </Typography>

      <Form_Mesas_Jurados
        onClose={handleCloseDrawer}
        edit={false}
        onNuevoClick={handleNuevoClick}
      />
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        name={name}
        form={drawerContent}
      />
    </Admin>
  );
}
export default Create_Mesas_Jurados;
