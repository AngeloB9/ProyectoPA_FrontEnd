import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import FormTicket from '@/componentes/Admin/Forms/CrearTicket';
import AdminLayout from '@/componentes/Layouts/AdminLayout';
import ModalEliminar from '@/componentes/Modales/ModalEliminar';
import { LinearProgress } from '@material-ui/core';

export const getServerSideProps = async ({}) => {
  const { data: empleados } = await axios.get(
    `${process.env.NEXT_PUBLIC_APIURL}/empleado`
  );
  const { data: categorias } = await axios.get(
    `${process.env.NEXT_PUBLIC_APIURL}/categoria`
  );

  const { data: clientes } = await axios.get(
    `${process.env.NEXT_PUBLIC_APIURL}/cliente`
  );

  return {
    props: {
      empleados,
      categorias,
      clientes,
    },
  };
};

const index = ({ empleados, categorias, clientes }) => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const router = useRouter();

  const handleSubmit = async (values) => {
    setloading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APIURL}/ticket`,
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
      <h4>Crear Ticket</h4>
      {loading && <LinearProgress />}
      <FormTicket
        handleSubmit={handleSubmit}
        empleados={empleados}
        categorias={categorias}
        clientes={clientes}
      />
    </AdminLayout>
  );
};

export default index;
