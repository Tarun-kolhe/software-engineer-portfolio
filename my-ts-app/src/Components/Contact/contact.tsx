import { useFormik } from "formik";
import * as Yup from 'yup';
import './contact.css';
import emailjs from "emailjs-com";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../../constants/emailjsconstants'
import axios from "axios";
import type {Icontract} from '../../Contracts/contactcontract'
import { useEffect, useState } from "react";


export function ContactSection() {
    const [contactdata,setcontactdata]=useState<Icontract>();

    
    function loadcontactdata(){
        axios.get("dataconfigcontact.json")
        .then((response)=>{
            setcontactdata(response.data)
        })
        .catch((err)=>{
           console.log(`Error while fetching contact data  ${err}`)
        })
    }

    useEffect(()=>{
        loadcontactdata()
    },[])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid Email").required("required email"),
            message: Yup.string().required("required field")
        }),
        onSubmit: (values, { resetForm }) => {


            emailjs
                .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, values, EMAILJS_PUBLIC_KEY)
                .then(() => {
                    alert("Message sent successfully!");
                    resetForm();
                })
                .catch((error) => {
                    console.error("EmailJS Error:", error);
                    alert("Something went wrong. Please try again later.");
                });
        },


    });


    return (
        <section id="contact" className="contact sec-pad dynamicBg">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-med">
                    <span className="heading-sec__main heading-sec__main--lt contacts-main-text">{contactdata?.lablecontact}</span>
                    <span className="heading-sec__sub heading-sec__sub--lt contact-sub-text">
                        {contactdata?.subheadcontact}
                    </span>
                </h2>
                <div className="contact__form-container">
                    <form onSubmit={formik.handleSubmit} className="contact__form" id="contact-form">
                        <div className="contact__form-field">
                            <label className="contact__form-label" htmlFor="name">{contactdata?.labelname}</label>
                            <input
                                placeholder="Enter Your Name"
                                type="text"
                                className="contact__form-input"
                                name="name"
                                id="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </div>
                        <div className="contact__form-field">
                            <label className="contact__form-label" htmlFor="email">{contactdata?.labelemail}</label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder="Enter Your Email"
                                type="text"
                                className="contact__form-input"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="contact__form-field">
                            <label className="contact__form-label" htmlFor="message">{contactdata?.Message}</label>
                            <textarea
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                cols={30}
                                rows={10}
                                className="contact__form-input"
                                placeholder="Enter Your Message"
                                name="message"
                                id="message"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn--theme contact__btn">
                            {contactdata?.ctatext}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
