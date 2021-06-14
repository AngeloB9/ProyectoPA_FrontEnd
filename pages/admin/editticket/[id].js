import { useState, useMemo, useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';
import { useRouter } from 'next/router';
import axios from 'axios';
//Componentes
import EditarTicket from 'componentes/Admin/Forms/EditarTicket';
import AdminLayout from 'componentes/Layouts/AdminLayout';
import ModalSuccess from '@/componentes/Modales/ModalSuccess';
import ModalError from 'componentes/Modales/ModalError';

export const getServerSideProps = async ({ query: { id } }) => {
  const { data: empleados } = await axios.get(
    `${process.env.NEXT_PUBLIC_APIURL}/empleado`
  );
  const { data: categorias } = await axios.get(
    `${process.env.NEXT_PUBLIC_APIURL}/categoria`
  );

  const { data: clientes } = await axios.get(
    `${process.env.NEXT_PUBLIC_APIURL}/cliente`
  );

  const { data: ticket } = await axios.get(
    `${process.env.NEXT_PUBLIC_APIURL}/ticket/${id}`
  );

  return {
    props: {
      empleados,
      categorias,
      clientes,
      ticket,
    },
  };
};
const index = ({ empleados, categorias, clientes, ticket }) => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [modalSuccess, setmodalSuccess] = useState(false); //modal de éxito
  const [modalError, setmodalError] = useState(false); //modal de error

  const router = useRouter();

  const handleSubmit = async (values) => {
    setloading(true);
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_APIURL}/ticket/${values.TIKID}`,
        values
      );

      setloading(false);
      router.push('/admin/tickets');
    } catch (error_peticion) {
      seterror(error_peticion);
      setloading(false);
    }
  };

  return (
    <AdminLayout>
      {loading && <LinearProgress />}
      <EditarTicket
        handleSubmit={handleSubmit}
        clientes={clientes}
        ticket={ticket}
        empleados={empleados}
        categorias={categorias}
      />
      {/*----------Modal de petición exitosa------- */}
      <ModalSuccess
        show={modalSuccess}
        handleClose={() => setmodalSuccess(false)}
        tituloMensaje='Edición Exitosa'
        mensaje='El Empleado se ha modificado satisfactoriamente!'
        redireccion='/admin/tickets'
      />
      {/*----------Modal de error en petición------- */}
      <ModalError
        show={modalError}
        handleClose={() => setmodalError(false)}
        tituloMensaje='Error'
        mensaje='Datos Incorrectos!'
      />
    </AdminLayout>
  );
};
export default index;
