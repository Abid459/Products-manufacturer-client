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

                    <h4 className='font-semibold mt-5'>Educaitonal Background:</h4>
                    <p>I have completede Bsc in EEE </p>

                    <h4 className='font-semibold my-5'>Skills I have as web developer</h4>


                    <div className='relative  inline-block text-right'>

                    <div className='flex items-center'>
                    <label>Html</label>
                    <progress class="progress w-56 ml-5" value="95" max="100"></progress>
                    </div>

                    <div className='flex items-center text-right'>
                    <label text-right>Css</label>
                    <progress class="progress w-56 ml-5" value="95" max="100"></progress>
                    </div>


                    <div className='flex items-center'>
                    <label>JavaScript</label>
                    <progress class="progress w-56 ml-5" value="90" max="100"></progress>
                    </div>

                    <div className='flex items-center'>
                    <label>React Js</label>
                    <progress class="progress w-56 ml-5" value="75" max="100"></progress>
                    </div>
                    <div className='flex items-center'>
                    <label>Node Js</label>
                    <progress class="progress w-56 ml-5" value="50" max="100"></progress>
                    </div>
                    
                    </div>
                    <h4 className='font-semibold my-5 '>Additional Skills</h4>
                    <ul>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>

                    </ul>

                </div>

                <div className="portfolio">
                <h4 className='font-semibold my-5 '>Portfolio:</h4>
                <p>Website 1: <a href="https://warehouse-5d158.web.app/" target='_blank' className='underline'>Click here</a> </p>
                <p>Website 2: <a href="https://tiny-semifreddo-64a3a8.netlify.app/" target='_blank' className='underline'>Click here</a> </p>
                <p>Website 3: <a href="https://silly-kataifi-aad752.netlify.app/" target='_blank' className='underline'>Click here</a> </p>
              
                </div>

            </div>
        </div>
    );
};

export default MyPortfolio;