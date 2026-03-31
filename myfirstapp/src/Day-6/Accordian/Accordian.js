import Accordion from 'react-bootstrap/Accordion';

function Accordian(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>
          <img src={props.image} style={{height:"100px"}} alt=''/><br></br>
          <b>Description</b> : {props.description}<br></br>
          <b>Price</b> : {props.price}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordian;