import {useDispatch} from "react-redux"
import { MDBBadge } from "mdb-react-ui-kit";
import { deleteContact } from "../store/actions/actionCreator";
import {Link} from "react-router-dom"


export default function TableCaontacts ({el}){
    const dispatch = useDispatch()
    const handleDelete = async (id) => {
        try {
          await dispatch(deleteContact(id));
        } catch (err) {
          console.log(err);
        }
    }
    

    return (
        <tr>
            <td>
            <img
                src={el.photo}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
                />
            </td>
            <td>
            <div className='d-flex align-items-center'>
                <div>
                <p className='fw-bold mb-1'>{el.firstName}</p>
                <p className='text-muted mb-0'>{el.firstName} {el.lastName}</p>
                </div>
            </div>
            </td>
            <td>
            <p className='fw-normal mb-1'>{el.lastName}</p>
            </td>
            <td>
            <MDBBadge color='success' pill>
                Active
            </MDBBadge>
            </td>
            <td>{el.age}</td>
            <td>
                <div className='d-inline-flex flex-column'>
                <Link to={`/${el.id}`}>
                    <button type="button" className="btn btn-outline-warning btn-sm">
                        Edit
                    </button>
                </Link>
                    <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(el.id)}>
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}