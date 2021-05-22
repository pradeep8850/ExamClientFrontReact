import Swal from 'sweetalert2'


export const userPosted=    Swal.fire(
        'Good job!',
        'User has added',
        'success' 
        // position: 'top-end',
        // icon: 'info',
        // title: 'This is registration page',
        // showConfirmButton: false,
        ,{timer: 1500} 
      ,[0])

