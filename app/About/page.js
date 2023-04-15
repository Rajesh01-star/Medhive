import styles from '../About/about.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>About Us</h1>
      <hr />
      <div className='text-black'>
      <p>Hospital Assist is a revolutionary app that simplifies the process of booking a hospital bed and scheduling an appointment with a doctor. With Hospital Assist, patients can book a bed from the comfort of their homes and avoid the hassle of waiting in long queues at the hospital. This app aims to provide a seamless experience to patients.</p> <br />

      <p>One of the key features of Hospital Assist is the real-time bed/cost information. Patients can use the app to check the availability of beds in the hospital in real-time, enabling them to plan their visits accordingly. They can also get an estimate of the cost of treatment and decide whether they want to opt for a bed or not.</p><br />

      <p>Another feature is that the application provides patients with a directory of all the departments, services, and facilities available in the hospital, along with their location and contact information.</p><br />

      <p>Appointment scheduling is another crucial feature of Hospital Assist. Patients can use the app to schedule appointments with doctors and other healthcare providers. They can select the doctor they want to see, choose a time slot accordingly, and receive reminders about upcoming appointments. This feature saves patients time and effort as they do not have to physically visit the hospital to schedule an appointment.</p><br />

      <p>Finally, the feedback system is a valuable feature of Hospital Assist. Patients can provide feedback about their experience in the hospital, which can be used by hospital staff to improve their services. This feedback can be used to identify areas for improvement and make changes that improve patient satisfaction.</p><br />

      <p>In conclusion The application is easy to use, and its features are designed  to the needs of patients. Hospital Assist is a game-changer in the healthcare industry and has the potential to transform the way patients interact with hospitals.</p>
      </div>
    </div>
  )
}
