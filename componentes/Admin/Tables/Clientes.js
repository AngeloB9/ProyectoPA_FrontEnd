import * as React from 'react';
import { Button } from 'react-bootstrap';
import { DataGrid } from '@material-ui/data-grid';
import Link from 'next/link';

export default function DataTable({ data, handleModalDelete }) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Nombres', width: 200 },
    { field: 'lastName', headerName: 'Apellidos', width: 200 },
    {
      field: 'correo',
      headerName: 'Correo',
      width: 200,
    },
    {
      field: 'celular',
      headerName: 'Celular',
      width: 150,
    },
    {
      field: 'direccion',
      headerName: 'Dirección',
      width: 200,
    },
    {
      field: 'editar',
      headerName: 'Editar',
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (objeto) => {
        return (
          <Link href={`/admin/editcliente/${objeto.row.id}`}>
            <Button>Editar</Button>
          </Link>
        );
      },
    },
    {
      field: 'eliminar',
      headerName: 'Eliminar',
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (objeto) => {
        return (
          <Button
            variant='danger'
            onClick={() => {
              handleModalDelete(objeto.row);
            }}>
            Eliminar
            <i className='fas fa-trash-alt' />
          </Button>
        );
      },
    },
  ];
  const info = [];
  data.forEach((element) => {
    info.push({
      id: element.CLIID,
      firstName: element.CLINOMBRES,
      lastName: element.CLIAPELLIDOS,
      direccion: element.CLIDIRECCION,
      celular: element.CLICELULAR,
      correo: element.CLICORREO,
    });
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={info} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
