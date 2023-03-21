import React from 'react'
import './contacto.css'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import Button from '@mui/joy/Button';


const Contacto = () => {
    const sendMail = (event) => {
        event.preventDefault()

        emailjs.sendForm('service_i0h9s46', 'template_dalnjhf', event.target, 'MuDdQPwu7dTJxkzOi')
            .then(datos => console.log(datos))
            .catch(err => console.log(err))
            Swal.fire({title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,})
    }
    return (
        <div className="cd1" data-aos="fade-up-right">
            <form className='' onSubmit={sendMail}>
                <label className="form-p">Nombre</label>
                <input type="text" className="form-control" placeholder="David" name='name' /><br />
                <label  className="form-p">Email address</label><br />
                <input type="email" className="form-control"placeholder="name@example.com" name='email' /><br />
                <label className="form-p">Numero</label><br />
                <input type="text" className="form-control" placeholder="+5512544587" name='numero' /><br />
                <label  className="form-p">Mensaje</label><br />
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='message'></textarea><br />
                <br />
                <Button
            color="warning"
            disabled={false}
            onClick={function () { }}
            size="sm"
            variant="soft"> succes</Button>

            </form>

            <div>
                
            </div>
        </div>
    )
}

export default Contacto