import React , {Fragment,useEffect,useState} from 'react';
import {Container, Form, FormGroup, Input, Button} from "reactstrap";
const Addcourse=()=>
{
    useEffect(()=>{
        document.title="Add course";
    }, []);
    const[course,setCourses]= useState({});

    const handleForm=(e)=>
    {
        console.log(course);
        e.preventDefault();
    };

    return(
    <Fragment>
        <h2 className="text-center" style={{ padding: '20px' }}>Fill the form for choosing the course</h2>
        <Form onSubmit={handleForm} className="text-center">
            <FormGroup>
                <label className="bold-text" htmlFor="Userid">Course Id </label>
                <Input type="text" placeholder="Enter here" name="Userid" id="Userid" onChange={(e)=>
                {
                    setCourses({...course,id:e.target.value});
                    }}/>
            </FormGroup>

            <FormGroup>
                <label className="bold-text" for="title">Title</label>
                <Input type="text" placeholder="Enter title here" name="title" id="title" onChange={(e)=>
                {
                    setCourses({...course,title:e.target.value});
                    }}/>
            </FormGroup>
            
            <FormGroup>
                <label className="bold-text" for="description">Description</label>
                <Input type="text" placeholder="Enter decription here" name="description" id="description" style={{height: 50}} onChange={(e)=>
                {
                    setCourses({...course,description:e.target.value});
                    }}/>
            </FormGroup>

            <Container className="text-center">
                <Button type="submit" color="success" > Add course</Button>{' '}
                <Button color="warning"> clear</Button>
            </Container>
        </Form>
    </Fragment>
    );
};
export default Addcourse; 