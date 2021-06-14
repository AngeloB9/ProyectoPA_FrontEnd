import { Form, Col, Button, Row } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object().shape({
  EMPID: yup
    .string()
    .trim()
    .matches(/^[0-9]{0,10}$/i, 'Es un campo numerico de hasta 10 digitos')
    .required('Campo requerido'),
  EMPNOMBRES: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Por favor ingrese solo letras')
    .required('Campo requerido'),
  EMPAPELLIDOS: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Por favor ingrese solo letras')
    .required('Campo requerido'),
  EMPCORREO: yup.string().email('Correo inválido').required('Campo requerido'),
  EMPCELULAR: yup
    .string()
    .matches(/^09[0-9]{8}$/i, 'Formato incorrecto (ej: 0991234567)')
    .required('Campo requerido'),
  EMPDIRECCION: yup.string().optional(),
});

const CrearEmpleado = ({ handleSubmit }) => {
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
                <Form.Group>
                  <Form.Label>Id:</Form.Label>
                  <Form.Control
                    name='EMPID'
                    type='number'
                    placeholder='id'
                    isInvalid={errors.EMPID}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.EMPID}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col sm='4'>
                <Form.Group>
                  <Form.Label>Nombres:</Form.Label>
                  <Form.Control
                    name='EMPNOMBRES'
                    type='text'
                    placeholder='Nombres'
                    isInvalid={errors.EMPNOMBRES}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.EMPNOMBRES}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col sm='4'>
                <Form.Group>
                  <Form.Label>Apellidos:</Form.Label>
                  <Form.Control
                    name='EMPAPELLIDOS'
                    type='text'
                    placeholder='Apellidos'
                    isInvalid={errors.EMPAPELLIDOS}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.EMPAPELLIDOS}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm='4'>
                <Form.Group>
                  <Form.Label>Fecha Nacimiento:</Form.Label>
                  <Form.Control
                    name='EMPFECHANACIMIENTO'
                    type='date'
                    min='1910-01-01'
                    max={new Date().toISOString().split('T')[0]}
                    required
                  />
                </Form.Group>
              </Col>

              <Col sm='4'>
                <Form.Group>
                  <Form.Label>Número Celular:</Form.Label>
                  <Form.Control
                    name='EMPCELULAR'
                    type='text'
                    placeholder='número'
                    isInvalid={errors.EMPCELULAR}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.EMPCELULAR}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col sm='4'>
                <Form.Group>
                  <Form.Label>Correo:</Form.Label>
                  <Form.Control
                    name='EMPCORREO'
                    type='text'
                    placeholder='Correo'
                    isInvalid={errors.EMPCORREO}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.EMPCORREO}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col sm='4'>
                <Form.Group>
                  <Form.Label>Dirección:</Form.Label>
                  <Form.Control
                    name='EMPDIRECCION'
                    type='text'
                    placeholder='Dirección'
                    isInvalid={errors.EMPDIRECCION}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.EMPDIRECCION}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button
              className='d-block mt-3'
              type='submit'
              size='lg'
              style={{ margin: '0 auto' }}>
              Crear Empleado
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CrearEmpleado;
