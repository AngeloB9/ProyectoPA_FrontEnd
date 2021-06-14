import { Form, Col, Button, Row } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object().shape({
  CATID: yup
    .string()
    .matches(
      /^[A-Z0-9]{0,8}$/i,
      'Es un campo alfanumerico de hasta 8 caracteres'
    )
    .required('Campo requerido'),
  CATNOMBRE: yup.string().required('Campo requerido'),
  CATDESCRIPCION: yup.string().required('Campo requerido'),
});

const CrearCategoria = ({ handleSubmit }) => {
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
                  name='CATID'
                  type='text'
                  placeholder='cat00010'
                  isInvalid={errors.CATID}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CATID}
                </Form.Control.Feedback>
              </Col>

              <Col sm='4'>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                  name='CATNOMBRE'
                  type='text'
                  placeholder='Nombre Categoría'
                  isInvalid={errors.CATNOMBRE}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CATNOMBRE}
                </Form.Control.Feedback>
              </Col>

              <Col sm='4'>
                <Form.Label>Descripción:</Form.Label>
                <Form.Control
                  name='CATDESCRIPCION'
                  type='text'
                  placeholder='Descripción de la categoría'
                  isInvalid={errors.CATDESCRIPCION}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CATDESCRIPCION}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Button
              className='d-block mt-3'
              type='submit'
              size='lg'
              style={{ margin: '0 auto' }}>
              Crear Categoria
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CrearCategoria;
