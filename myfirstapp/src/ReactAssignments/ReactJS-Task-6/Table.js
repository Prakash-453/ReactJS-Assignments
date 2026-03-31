import Table from 'react-bootstrap/Table';
import "./index.css"

function TableDisplay(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
      {props.products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>
              <center>
                <img src={product.image} alt="" style={{ height: "140px", padding: "10px"}}/>
              </center>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableDisplay;
