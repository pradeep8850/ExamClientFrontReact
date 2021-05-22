import axios from 'axios';
import baseUrl from './helper';
import Swal from 'sweetalert2'
export const postUser = (data) => {
    axios.post(`${baseUrl}/user/`, data).then(
        (response) => {
            console.log(response);
            Swal.fire(
                'Good job!',
                'User has added',
                'success',
            )
        }, (error) => {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Make User your Username should be uniqe',
                timer: 1500
            })

        }
    )
}