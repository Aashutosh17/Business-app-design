import { Navbar, Footer } from '../components';

const About = () => {
    return (
        <section className="hire-developer-area-wrapper">
            <div className="hire-developer-area-overlay-bg ">
                <Navbar />
                <div className="hire-developer-area-text  flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl mt-15 sm:text-6xl md:text-md text-white font-extrabold">About Us</h1>
                    <p className="my-7 text-white ">Who We Are: Committed to Excellence and Innovation</p>
                </div>
            </div>

            {/* Body */}
            <div className="container-width">
                <div className="grid grid-cols-1 justify-center lg:justify-start lg:grid-cols-2 gap-12 items-center py-16">
                    {/* col 1 */}
                    <div>
                        <img
                            src="https://img.freepik.com/free-vector/feedback-concept-illustration_114360-5044.jpg?w=740&t=st=1687803693~exp=1687804293~hmac=39ddc09575f7efd82c4828fc5e8d45dc01dfdad49af3c9e6da7eda30af604b76"
                            alt="About Us"
                            className="w-full"
                        />
                    </div>

                    {/* col 2 */}
                    <div>
                        <div className="text-center lg:text-left">
                            <p className="text-5xl font-bold">we’re your partner in your success</p>

                            <p className="my-7">
                                AP Software Solutions is a leading software company that specializes in providing top-notch digital solutions to businesses of all sizes. Our team of experts is dedicated to helping you achieve your goals and drive your business forward with innovative technology and unparalleled support.
                            </p>
                        </div>

                        <div className="flex gap-6 flex-wrap justify-center lg:justify-start">
                            <div className="border border-solid border-[#1563cb] w-40 py-4 text-center rounded-2xl ">
                                <p className="text-4xl text-[#1563cb] font-bold">10+</p>
                                <p className="font-semibold text-xs mt-2">HAPPY CLIENTS</p>
                            </div>

                            <div className="border border-solid border-[#1563cb] w-40 py-4 text-center rounded-2xl">
                                <p className="text-4xl text-[#1563cb] font-bold">5+</p>
                                <p className="font-semibold text-xs mt-2">PROJECT DELIVERED</p>
                            </div>

                            <div className="border border-solid border-[#1563cb] w-40 py-4 text-center rounded-2xl">
                                <p className="text-4xl text-[#1563cb] font-bold">1+</p>
                                <p className="font-semibold text-xs mt-2">YEARS EXPERIENCE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="container-width grid grid-cols-1 justify-center lg:justify-start lg:grid-cols-2 gap-12 items-center py-16">
                    <div className="text-center lg:text-left">
                        <p className="text-5xl font-bold">Our Goal</p>

                        <p className="mt-7">
                            Our team of experienced professionals works closely with each client to understand their
                            unique needs and develop customized solutions that drive growth and success. Whether you’re
                            looking to improve your online presence or enhance your customer
                            experience, AP Software Solution has the expertise and resources to help you achieve your goals.
                        </p>

                        <p className="my-5">
                            We’re passionate about technology and dedicated to helping our clients succeed. Let us be your
                            partner in success and help you take your business to the next level with our innovative IT solutions
                        </p>

                        <button
                            type="button"
                            className="border border-[#1563cb] border-solid text-black py-3 px-20 lg:px-8 rounded-3xl hover:bg-[#1563cb] hover:text-white"
                        >
                            Read More
                        </button>
                    </div>

                    <div>
                        <img
                            src="https://img.freepik.com/free-vector/business-people-working-setting-company-target_1262-20616.jpg?w=1380&t=st=1687803276~exp=1687803876~hmac=f531481c4060bd758eac05056614856b4236bdb2068a2abb5d3db34cfb28668a"
                            alt="About Us"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>

            {/* Developer section */}

            <div className="container-width py-16">
                <div className="text-center mb-14">
                    <p className="text-5xl font-bold">Our Founders</p>

                    <p className="my-7 w-3/4 lg:w-1/2 mx-auto">
                        Our founders are a team of experienced software developers who are dedicated to providing innovative products through AP Software Solution.
                    </p>
                </div>

                <div className="flex flex-col flex-wrap items-center md:flex-row justify-center gap-x-10 gap-y-14 text-center md:text-start">
                    <div className="w-[320px] hover:translate-y-[-20px] duration-300 cursor-pointer">
                        <div className="w-[90%] m-auto">
                            <img
                                src="https://avatars.githubusercontent.com/u/78782279?v=4"
                                alt="Developer"
                                className="w-[400px]"
                            />

                            <div className="mt-5 ps-2">
                                <p className="text-lg font-bold">Aashutosh Paneru</p>

                                <p className="text-sm font-semibold">Co-Founder</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[320px] rounded-md hover:translate-y-[-20px] duration-300 cursor-pointer">
                        <div className="w-[90%] m-auto">
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="Developer"
                                className="w-[400px] "
                            />

                            <div className="mt-5 ps-2">
                                <p className="text-lg font-bold">Shreyan Bhandari</p>

                                <p className="text-sm font-semibold">Co-Founder</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="bg-[#1662D0] py-24 text-white text-center">
                <div className="w-4/5 md:w-3/4 lg:w-3/5 m-auto">
                    <p className="text-4xl sm:text-6xl font-extrabold">
                        looking for the best digital agency & marketing solution?
                    </p>
                    <p className="my-9">
                        Discover the power of digital marketing and elevate your business to new heights with our cutting-edge solutions and expert team
                    </p>
                    <div className="common-btn-style">
                        <button className="flex items-center">Contact us</button>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default About;
