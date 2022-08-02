import { Testimonial } from "../models/Testimonial.js";

const guardarTestimonial = async (req,res) =>{

const {nombre, email,mensaje} = req.body;

if(nombre.trim()==='' || email.trim() === ''||mensaje.trim() === ''){
    //console.log('Todos los campos son obligatorios');
    const testimoniales = await Testimonial.findAll();
    res.render('testimoniales',{
    pagina: 'Testimoniales',
    mensaje:'Todos los campos son obligatorios',
    testimoniales
    })
}else{
    try {
        await Testimonial.create({
            nombre,
            email,
            mensaje
        });
        res.redirect('/testimoniales');
    } catch (error) {
        console.log(error)
    }
}
};

export {
    guardarTestimonial
};