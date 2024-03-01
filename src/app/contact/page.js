import React from 'react';
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
      <>
        <div className={styles.container}>
          <h1>Contact Us</h1>

          <section className={styles.contact_section}>
            <h2>
              We'd love to hear <span> from you </span>
            </h2>

            <ContactForm />
          </section>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.4656807039028!2d-0.3105982235244511!3d51.59635547183365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876138adec22127%3A0x3c3419a8dc6c6aad!2s72%20Ennerdale%20Ave%2C%20Stanmore%20HA7%202LD!5e0!3m2!1sen!2suk!4v1709299561877!5m2!1sen!2suk"
          width={100}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className={styles.mapping}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </>
    );
};

export default Contact;