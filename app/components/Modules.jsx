import React from 'react'
import ModuleGrid from './MoudleGrid'

function Modules(props) {
    return (
        <div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='h-screen relative md:text-left md:flex-row max-w-7xl px-10 py-20 my-5 mx-auto justify-evenly items-center scroll-smooth xl:flex-row scroll-smooth'>

            <h3 className='absolute uppercase top-24 tracking-[1px] text-black text-2xl'>MedHive Modules</h3>


            <div className='grid grid-cols-1'>
                
                <ModuleGrid
                    img = "https://ehospital.gov.in/ehospitalsso/images/md_registration_icon.png"
                    name="Patient Registration (Casualty, Appointments)"
                    topic="This module of the MedHive application is used for patient registration in the Hospital and Casualty departments as well as to book, confirm and cancel appointments." />

                <ModuleGrid 
                    img = "https://ehospital.gov.in/ehospitalsso/images/md_ipd_icon.png"
                    name="Admission, Discharge & Transfer"
                    topic="This module commences when the patient is being registered and allotted bed in the ward. It deals with the complete treatment and services provided to the patient during his stay in the hospital." />

                <ModuleGrid 
                    img ="https://ehospital.gov.in/ehospitalsso/images/md_billing_icon.png"
                    name="Billing"
                    topic="The Billing module in our platform  handles all types of billing workflows. This module facilitates cashier and billing operators for managing billing functions related to billing receipts and refunds." />

                <ModuleGrid 
                    img="https://ehospital.gov.in/ehospitalsso/images/md_clinic_opd_ipd_icon.png"
                    name="Clinic (OPD & IPD)"
                    topic="The Clinic module allows the clinicians and doctors to record the clinical data of the patients like visits, diagnosis, history, treatment etc., and to order procedures and medicines, to keep track of the treatment." />


            </div>

        </div>

    )
}

export default Modules
