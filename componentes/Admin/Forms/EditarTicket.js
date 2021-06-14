import { Form, Col, Button, Row, ListGroup } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import styled from 'styled-components';
import PageviewIcon from '@material-ui/icons/Pageview';

const StyledListItem = styled(ListGroup.Item)`
  cursor: pointer;
  &:hover {
    background: #fbf6f3;
  }
`;
const schema = yup.object().shape({
  TIKID: yup.number().required('Campo requerido'),
  TIKTITULO: yup.string().required('Campo requerido'),
  TIKDESCRIPCION: yup.string().required('Campo requerido'),
  TIKESTADO: yup.string(),
});
const EditarTicket = ({
  ticket,
  handleSubmit,
  empleados,
  categorias,
  clientes,
}) => {
  return (
    <div className='p-4'>
      <h4 className='mb-3'>Editar Ticket</h4>
      <Formik
        validationSchema={schema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
        }}
        initialValues={ticket}>
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col sm='4'>
                <Form.Label>Id:</Form.Label>
                <Form.Control
                  name='TIKID'
                  type='text'
                  placeholder='id'
                  value={values.TIKID}
                  onChange={handleChange}
                  isInvalid={errors.TIKID}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.TIKID}
                </Form.Control.Feedback>
              </Col>

              <Col sm='4'>
                <Form.Group sm='6' controlId='medico-select'>
                  <Form.Label>Clientes:</Form.Label>
                  <Form.Control
                    as='select'
                    name='CLIID'
                    value={values.CLIID}
                    onChange={handleChange}>
                    {clientes.map((cliente) => (
                      <option
                        key={cliente.CLIID}
                        value={
                          cliente.CLIID
                        }>{`${cliente.CLINOMBRES.toString().trim()} ${cliente.CLIAPELLIDOS.toString().trim()}`}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm='4'>
                <Form.Group sm='6' controlId='medico-select'>
                  <Form.Label>Empleados:</Form.Label>
                  <Form.Control
                    as='select'
                    name='EMPID'
                    value={values.EMPID}
                    onChange={handleChange}>
                    {empleados.map((empleado) => (
                      <option
                        key={empleado.EMPID}
                        value={
                          empleado.EMPID
                        }>{`${empleado.EMPNOMBRES.toString().trim()} ${empleado.EMPAPELLIDOS.toString().trim()}`}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col sm='4'>
                <Form.Group sm='6' controlId='categoria-select'>
                  <Form.Label>Categorías:</Form.Label>
                  <Form.Control
                    as='select'
                    name='CATID'
                    value={values.CATID}
                    onChange={handleChange}>
                    {categorias.map((categoria) => (
                      <option
                        key={categoria.CATID}
                        value={
                          categoria.CATID
                        }>{`${categoria.CATID.toString().trim()} ${categoria.CATDESCRIPCION.toString().trim()}`}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col sm='4'>
                <Form.Label>Titulo:</Form.Label>
                <Form.Control
                  name='TIKTITULO'
                  type='text'
                  value={values.TIKTITULO.split('  ')[0]}
                  onChange={handleChange}
                  placeholder='Titulo del Ticket'
                  isInvalid={errors.TIKTITULO}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.TIKTITULO}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row>
              <Col sm='4'>
                <Form.Label>Descripcion:</Form.Label>
                <Form.Control
                  name='TIKDESCRIPCION'
                  type='text'
                  value={values.TIKDESCRIPCION}
                  onChange={handleChange}
                  isInvalid={errors.TIKDESCRIPCION}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.TIKDESCRIPCION}
                </Form.Control.Feedback>
              </Col>
              <Col sm='4'>
                <Form.Label>Fecha:</Form.Label>
                <Form.Control
                  name='TIKFECHA'
                  type='date'
                  value={values.TIKFECHA.split('T')[0]}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col sm='4'>
                <Form.Label>Estado:</Form.Label>
                <Form.Control
                  name='TIKESTADO'
                  type='text'
                  placeholder='Estado del Ticket'
                  value={values.TIKESTADO}
                  onChange={handleChange}
                  isInvalid={errors.TIKESTADO}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.TIKESTADO}
                </Form.Control.Feedback>
              </Col>
            </Row>

            <Button
              className='d-block mt-3'
              type='submit'
              size='lg'
              style={{ margin: '0 auto' }}>
              Editar Ticket
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditarTicket;
