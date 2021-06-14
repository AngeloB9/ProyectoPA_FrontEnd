import { Form, Col, Button, Row } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object().shape({
  CLIID: yup
    .string()
    .matches(/^[0-9]{0,10}$/i, 'Es un campo numerico de hasta 10 digitos')
    .required('Campo requerido'),
  CLINOMBRES: yup.string().required('Campo requerido'),
  CLIAPELLIDOS: yup.string().required('Campo requerido'),
  CLICORREO: yup.string().email('Correo inválido').required('Campo requerido'),
  CLICELULAR: yup
    .string()
    .matches(/^09[0-9]{8}$/i, 'Formato incorrecto (ej: 0991234567)')
    .required('Campo requerido'),
  CLIDIRECCION: yup.string().optional(),
});

const EditarCliente = ({ handleSubmit, cliente }) => {
  return (
    <div className='p-4'>
      <h4 className='mb-3'>Editar Cliente</h4>
      <Formik
        validationSchema={schema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
        }}
        initialValues={cliente}>
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form onSubmit={handleSubmit} onChange={handleChange}>
            <Row>
              <Col sm='4'>
                <Form.Label>Id:</Form.Label>
                <Form.Control
                  name='CLIID'
                  type='text'
                  //edit='false'

                  onChange={handleChange}
                  value={values.CLIID}
                  isInvalid={errors.CLIID}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CLIID}
                </Form.Control.Feedback>
              </Col>

              <Col sm='4'>
                <Form.Label>Nombres:</Form.Label>
                <Form.Control
                  name='CLINOMBRES'
                  type='text'
                  onChange={handleChange}
                  value={values.CLINOMBRES.split('  ')[0]}
                  isInvalid={errors.CLINOMBRES}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CLINOMBRES}
                </Form.Control.Feedback>
              </Col>

              <Col sm='4'>
                <Form.Label>Apellidos:</Form.Label>
                <Form.Control
                  name='CLIAPELLIDOS'
                  type='text'
                  onChange={handleChange}
                  value={values.CLIAPELLIDOS.split('  ')[0]}
                  isInvalid={errors.CLIAPELLIDOS}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CLIAPELLIDOS}
                </Form.Control.Feedback>
              </Col>
            </Row>

            <Row>
              <Col sm='4'>
                <Form.Label>Dirección:</Form.Label>
                <Form.Control
                  name='CLIDIRECCION'
                  type='text'
                  onChange={handleChange}
                  value={values.CLIDIRECCION.split('  ')[0]}
                  isInvalid={errors.CLIDIRECCION}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CLIDIRECCION}
                </Form.Control.Feedback>
              </Col>
              <Col sm='4'>
                <Form.Label>Número Celular:</Form.Label>
                <Form.Control
                  name='CLICELULAR'
                  type='text'
                  onChange={handleChange}
                  value={values.CLICELULAR.split(' ')[0]}
                  isInvalid={errors.CLICELULAR}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CLICELULAR}
                </Form.Control.Feedback>
              </Col>

              <Col sm='4'>
                <Form.Label>Correo:</Form.Label>
                <Form.Control
                  name='CLICORREO'
                  type='email'
                  onChange={handleChange}
                  value={values.CLICORREO.split(' ')[0]}
                  isInvalid={errors.CLICORREO}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CLICORREO}
                </Form.Control.Feedback>
              </Col>
            </Row>

            <Button
              className='d-block mt-3'
              type='submit'
              size='lg'
              style={{ margin: '0 auto' }}>
              Editar Cliente
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditarCliente;
