import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,Button,Container,
} from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';


const Study = ({Study}) => {
    const btnHandle=()=>
    {
        toast.success("Updated sucessfully");
    }
    const btnHandle1=()=>
    {
        toast.success("Deleted sucessfully");
    }
  return (
    <Card className='text-center'>
      <CardBody className='ml-5'>
        <CardSubtitle className="bold-text">{Study.title}</CardSubtitle>
        <CardText>{Study.description}</CardText>
        <Container>
          <Button color="primary" onClick={btnHandle}>Update</Button>{' '}
          <Button color="danger" onClick={btnHandle1}>Delete</Button>{' '}
        </Container>
      </CardBody>
    </Card>
  );
};
export default Study;
