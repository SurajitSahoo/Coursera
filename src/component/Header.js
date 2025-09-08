import React from "react";
import {Card, CardBody} from "reactstrap";
const Header=()=>
{
    return(
        <div >
            <Card className=" bg-warning" style={{padding: 20}}>
                <CardBody  >
                    <h1 className="text-center my-2"><i>Welcome To This Course</i></h1>
                </CardBody>
            </Card>
        
        </div>
    );
};
export default Header;