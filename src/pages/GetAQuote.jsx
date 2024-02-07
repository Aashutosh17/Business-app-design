import React from 'react'
import { Footer, Navbar } from '../components'

const services = [
    "Search Engine Optimization",
    "Conversion Marketing",
    "Facebook Promotion",
    "Reputation Management",
    "Google Local Listing Optimization",
    "Brand Marketing",
    "Social Profile Follower Increase",
    "Link Building"
];


const styles = {
    input: 'border border-gray-400 px-2 rounded-sm h-[45px]',
    label: "text-lg"
}

const GetAQuote = () => {
    return (
        <section className="hire-developer-area-wrapper">
            <div className="hire-developer-area-overlay-bg ">
                <Navbar />
                <div className="hire-developer-area-text  flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl mt-15 sm:text-6xl md:text-md text-white font-extrabold">Get a quote</h1>
                    <p className="my-7 text-white ">Fill up the form and our team will get back to you within 24 hours.</p>
                </div>
            </div>


            <div className='bg-gray-100 py-16'>
                <form className='py-10 md:py-16 px-6 md:px-12 w-[95%] xl:w-[70%] mx-auto get-a-quote-form-box-shadow rounded bg-white'>

                    <h1 className='text-center text-2xl mb-12'>Ask For A Quote For Your Next Project</h1>

                    <div className='flex justify-between flex-col gap-y-5 md:flex-row'>
                        <div className='flex flex-col gap-y-2  w-[100%] md:w-[30%]'>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <input type="text" name="name" id='name' className={styles.input} placeholder='John Doe' required />
                        </div>

                        <div className='flex flex-col gap-y-2 w-[100%] md:w-[30%]'>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input type="email" name="email" id='email' className={styles.input} placeholder='yourcompanymail@gmail.com' required />
                        </div>

                        <div className='flex flex-col gap-y-2 w-[100%] md:w-[30%]'>
                            <label className={styles.label} htmlFor="phoneNum">Phone Number</label>
                            <input type="tel" name="Phone Number" id='phoneNum' className={styles.input} placeholder='+977 98********' required />
                        </div>

                    </div>

                    <div className='flex flex-col gap-y-2 mt-8'>
                        <label className={styles.label} htmlFor="message">Message</label>
                        <textarea name="message" className='w-full h-[130px] border border-gray-400 rounded-sm p-2' placeholder='Write about your project...'></textarea>
                    </div>

                    <div className='mt-8'>
                        <label className={styles.label} htmlFor="message">What kind of project?</label>

                        <div className='flex flex-wrap gap-4 mt-3'>
                            {services.map(service => (
                                <div className='flex items-center gap-x-4' key={service}>
                                    <label htmlFor={service}>{service}</label>
                                    <input type="checkbox" name="projectType" className='w-5 h-5' id={service} />
                                </div>
                            ))}
                        </div>


                    </div>


                    <div className='mob-nav-contact-btn common-btn-style'>
                        <button>
                            Submit
                        </button>
                    </div>

                </form>

            </div>

            <Footer />
        </section>
    )
}

export default GetAQuote