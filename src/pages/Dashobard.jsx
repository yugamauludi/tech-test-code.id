import { useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../store/actions/actionCreator";
import TableContacts from "../components/TableContacts";
import loader from "../assets/loader.gif";


export default function Dashboard() {
    const isLoading = useSelector((state) => state.isLoading);
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
    
    useEffect(() => {
        // console.log('masuk sini');
        dispatch (fetchContacts())
    },[]);

    if (isLoading) {
        return (
          <div className="d-flex justify-content-center mt-4">
            <img className="" src={loader} style={{ width: "100px", height: "100px", marginTop: "20px"}} />
          </div>
        );
    }

    return (
        <div style={{ marginTop: 40, marginLeft: 40, marginRight: 40}}>
        <MDBTable align='middle'>
            <MDBTableHead>
            <tr>
                <th scope='col'>Image</th>
                <th scope='col'>FirstName (Full Name)</th>
                <th scope='col'>LastName</th>
                <th scope='col'>Status</th>
                <th scope='col'>Age</th>
                <th scope='col'>Actions</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody>
                {contacts.map((el, index) => {
                    return <TableContacts key = {el.id} el={el}/>
                })}
            </MDBTableBody>
        </MDBTable>
        </div>
    );
};