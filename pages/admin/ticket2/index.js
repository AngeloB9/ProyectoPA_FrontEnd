import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import FormTicket from '@/componentes/Admin/Forms/CrearTicket2';
import AdminLayout from '@/componentes/Layouts/AdminLayout';

export const getServerSideProps = async ({}) => {
  const { data: empleados } = await axios.get(
    `${process.env.NEXT_PUBLIC_APIURL}/empleado`
  );
  const { data: categorias } = await axios.get(
    `${process.env.NEXT_PUBLIC_APIURL}/categoria`
  );
  //console.log(params);

  return {
    props: {
      empleados,
      categorias,
    },
  };
};

const index = ({ empleados, categorias }) => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [clientesQuery, setclientesQuerys] = useState('');
  const [clientesResults, setclientesResults] = useState([]);
  const router = useRouter();
  //const { data: cliente } = await axios.get(`cliente`);
  useMemo(() => {
    if (clientesQuery.trim().length == 0) setclientesResults([]);
  }, [clientesQuery]);

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

  const handleSearchCliente = async () => {
    if (clientesQuery.trim()) {
      setloading(true);
      try {
        const { data: clientes } = await axios.get(
          `${process.env.NEXT_PUBLIC_APIURL}/cliente/${clientesQuery}`
        );
        setclientesResults([clientes]);

        setloading(false);
      } catch (error) {
        seterror(error);
        setloading(false);
      }
    } else {
      setclientesResults([]);
    }
  };

  //Busca el cliente por Enter
  const handleSearchClienteKey = async (event) => {
    if (event.key === 'Enter') {
      if (clientesQuery.trim()) {
        setloading(true);
        try {
          const { data: clientes } = await axios.get(
            `${process.env.NEXT_PUBLIC_APIURL}/cliente/${clientesQuery}`
          );
          setclientesResults([clientes]);

          setloading(false);
        } catch (error) {
          seterror(error);
          setloading(false);
        }
      } else {
        setclientesResults([]);
      }
    }
  };

  return (
    <AdminLayout>
      <h4>Crear Ticket</h4>
      <FormTicket
        handleSubmit={handleSubmit}
        handleSearchCliente={handleSearchCliente}
        handleSearchClienteKey={handleSearchClienteKey}
        handleChangeClientesQuery={(event) => {
          setclientesQuerys(String(event.target.value));
        }}
        clientesResults={clientesResults}
        empleados={empleados}
        categorias={categorias}
      />
    </AdminLayout>
  );
};

export default index;
