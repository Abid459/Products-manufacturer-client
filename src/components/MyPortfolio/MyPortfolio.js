import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='min-h-screen'>
            <div className="wrapper w-5/6 mx-auto">

                <header className=' mx-auto my-10'>
                    <h3 className='text-xl font-semibold'>Abidul Ism</h3>
                    <p>abid45986@gmail.com</p>
                </header>
                <hr />

                <div>
                    <div className='bg-base-200'>
                    <h4 className='font-semibold mt-5 bg-base-300 text-center py-4'>Educaitonal Background:</h4>
                    <p className='p-5'>I have completede Bsc in EEE </p>
                    </div>

                    <h4 className='font-semibold my-10 text-xl bg-base-300 py-5 text-center'>Skills I have as web developer</h4>


                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* heade  */}
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th className='w-10'>HTML</th>
                                    <td><progress className="progress lg:w-56 ml-5" value="95" max="100"></progress></td>
                                </tr>
                                {/* row 2  */}
                                <tr>
                                    <th>Css</th>
                                    <td><progress className="progress lg:w-56 ml-5" value="95" max="100"></progress></td>
                                </tr>
                                {/* row 3  */}
                                <tr>
                                    <th>JavaScript</th>
                                    <td><progress className="progress lg:w-56 ml-5" value="90" max="100"></progress></td>
                                </tr>
                                <tr>
                                    <th>React Js</th>
                                    <td><progress className="progress lg:w-56 ml-5" value="80" max="100"></progress></td>
                                </tr>
                                <tr>
                                    <th>Node Js</th>
                                    <td><progress className="progress lg:w-56 ml-5" value="65" max="100"></progress></td>
                                </tr>
                            </tbody>
                        </table>
                    </div >
                    <div className='bg-base-200'>

                        <h4 className='font-semibold my-5  bg-base-300 py-4 text-center' >Additional Skills</h4>
                        <ul className='text-center py-5'>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>

                        </ul>
                    </div>

                </div>

                <div className="portfolio mt-5 ">
                    <h4 className='font-semibold bg-base-300 py-4 text-center '>Portfolio:</h4>
                    <div className='p-5 bg-base-200'>

                    <p>Website 1: <a href="https://warehouse-5d158.web.app/" target='_blank' className='underline'>Click here</a> </p>
                    <p>Website 2: <a href="https://tiny-semifreddo-64a3a8.netlify.app/" target='_blank' className='underline'>Click here</a> </p>
                    <p>Website 3: <a href="https://silly-kataifi-aad752.netlify.app/" target='_blank' className='underline'>Click here</a> </p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyPortfolio;