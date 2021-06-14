import { Form, Col, Button, Row } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object().shape({
  CLIID: yup
    .string()
    .matches(/^[0-9]{0,10}$/i, 'Es un campo numerico de hasta 10 digitos')
    .required('Campo requerido'),
  CLINOMBRES: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Por favor ingrese solo letras')
    .required('Campo requerido'),
  CLIAPELLIDOS: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Por favor ingrese solo letras')
    .required('Campo requerido'),
  CLICORREO: yup.string().email('Correo inválido').required('Campo requerido'),
  CLICELULAR: yup
    .string()
    .matches(/^09[0-9]{8}$/i, 'Formato incorrecto (ej: 0991234567)')
    .required('Campo requerido'),
  CLIDIRECCION: yup.string().optional(),
});

const CrearCliente = ({ handleSubmit }) => {
  return (
    <div className='p-4'>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        initialValues={{}}>
        {({ handleSubmit, handleChange, errors }) => (
          <Form onSubmit={handleSubmit} onChange={handleChange}>
            <Row>
              <Col sm='4'>
                <Form.Label>Id:</Form.Label>
                <Form.Control
                  name='CLIID'
                  type='text'
                  placeholder='id'
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
                  placeholder='Nombres'
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
                  placeholder='Apellidos'
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
                  placeholder='Dirección'
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
                  placeholder='número'
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
                  type='text'
                  placeholder='Correo'
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
              Crear Cliente
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CrearCliente;
