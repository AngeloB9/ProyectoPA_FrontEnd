import { Form, Col, Button, Row } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object().shape({
  EMPID: yup
    .string()
    .matches(/^[0-9]{0,10}$/i, 'Es un campo numerico de hasta 10 digitos')
    .required('Campo requerido'),
  EMPNOMBRES: yup
    .string()
    .trim()
    .matches(/^[aA-zZ\s]+$/, 'Por favor ingrese solo letras')
    .required('Campo requerido'),
  EMPAPELLIDOS: yup
    .string()
    .trim()
    .matches(/^[aA-zZ\s]+$/, 'Por favor ingrese solo letras')
    .required('Campo requerido'),
  EMPCORREO: yup.string().email('Correo inválido').required('Campo requerido'),
  EMPCELULAR: yup
    .string()
    .matches(/^09[0-9]{8}$/i, 'Formato incorrecto (ej: 0991234567)')
    .required('Campo requerido'),
  EMPDIRECCION: yup.string().optional(),
});

const EditarEmpleado = ({ handleSubmit, empleado }) => {
  return (
    <div className='p-4'>
      <h4 className='mb-3'>Editar Empleado</h4>
      <Formik
        validationSchema={schema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
        }}
        initialValues={empleado}>
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col sm='4'>
                <Form.Label>Id:</Form.Label>
                <Form.Control
                  name='EMPID'
                  type='text'
                  edit='false'
                  onChange={handleChange}
                  value={values.EMPID}
                  isInvalid={errors.EMPID}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.EMPID}
                </Form.Control.Feedback>
              </Col>

              <Col sm='4'>
                <Form.Label>Nombres:</Form.Label>
                <Form.Control
                  name='EMPNOMBRES'
                  type='text'
                  onChange={handleChange}
                  value={values.EMPNOMBRES.split('  ')[0]}
                  isInvalid={errors.EMPNOMBRES}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.EMPNOMBRES}
                </Form.Control.Feedback>
              </Col>

              <Col sm='4'>
                <Form.Label>Apellidos:</Form.Label>
                <Form.Control
                  name='EMPAPELLIDOS'
                  type='text'
                  onChange={handleChange}
                  value={values.EMPAPELLIDOS.split('  ')[0]}
                  isInvalid={errors.EMPAPELLIDOS}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.EMPAPELLIDOS}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row>
              <Col sm='4'>
                <Form.Label>Fecha Nacimiento:</Form.Label>
                <Form.Control
                  name='EMPFECHANACIMIENTO'
                  type='date'
                  min='1910-01-01'
                  onChange={handleChange}
                  value={values.EMPFECHANACIMIENTO.split('T')[0]}
                  required
                />
              </Col>

              <Col sm='4'>
                <Form.Label>Número Celular:</Form.Label>
                <Form.Control
                  name='EMPCELULAR'
                  type='text'
                  onChange={handleChange}
                  value={values.EMPCELULAR}
                  isInvalid={errors.EMPCELULAR}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.EMPCELULAR}
                </Form.Control.Feedback>
              </Col>

              <Col sm='4'>
                <Form.Label>Correo:</Form.Label>
                <Form.Control
                  name='EMPCORREO'
                  type='text'
                  onChange={handleChange}
                  value={values.EMPCORREO}
                  isInvalid={errors.EMPCORREO}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.EMPCORREO}
                </Form.Control.Feedback>
              </Col>
            </Row>

            <Row>
              <Col sm='4'>
                <Form.Label>Dirección:</Form.Label>
                <Form.Control
                  name='EMPDIRECCION'
                  type='text'
                  onChange={handleChange}
                  value={values.EMPDIRECCION.split('  ')[0]}
                  isInvalid={errors.EMPDIRECCION}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.EMPDIRECCION}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Button className='d-block mt-3' type='submit' size='lg'>
              Editar Empleado
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditarEmpleado;
