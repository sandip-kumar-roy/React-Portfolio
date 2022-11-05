import React from 'react'
import './Home.css'
 import hero from '../pic/hero.png'
 import skill1 from '../pic/skill1.png'
 import skill2 from '../pic/skill2.png'
 import skill3 from '../pic/skill3.png'
import {Typewriter} from 'react-simple-typewriter'

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
            <div className='left top'>
                <h3 className='start'>WELCOME TO MY WEBSITE</h3>
                <h1>
                    I'm <span>Sandip Kumar Roy</span>
                </h1>
                <h2>
                    <span> 
                        <Typewriter
                            words={["TalentNext Trainee @Wipro",'450+ DSA @LeetCode', '1622 rating @Leetcode' ,"Newton's Coding Rank 325","5 star @Hackerrank"]}
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}     
                        />
                    </span>
                </h2>
                    <p className='para'>I have completed about 500+ DSA problems across all platforms.Ranked under 1000 out of 24000 participant in leetcode contest.I also am web developer and AI/ML enthusiast</p>
                    <div className='resume'>
                             <a href='https://leetcode.com/sandip_Kumar_Roy/' className='leetcode'>
                                LEETCODE
                             </a> 
                            <a href="https://drive.google.com/file/d/1Jqo29mo28ifnCy_Ddi6rBxrg3rXJlxT9/view?usp=drivesdk" className='button-85'>
                                RESUME
                            </a>
                    </div>
                    <div className='hero_btn d_flex'>                 
                        <div className='col_1'>                         
                            <h4>CONNECT WITH ME</h4>
                                <div className='button'>
                                    <a href="https://m.facebook.com/100014081045076/">
                                        <button className='btn_shadow'>
                                            <i className='fab fa-facebook-f'></i>
                                        </button>
                                    </a>
                                    <a href="https://www.instagram.com/invites/contact/?i=48cxzix9rzvy&utm_content=a4c0e73">
                                        <button className='btn_shadow'>
                                            <i className='fab fa-instagram'></i>
                                        </button>
                                    </a>
                                    <a href="https://www.linkedin.com/in/sandip-kumar-roy-1359911a7">
                                        <button className='btn_shadow'>
                                            <i className='fab fa-linkedin-in'></i>
                                        </button>
                                    </a>
                
                                </div>
                        </div>
                        <div className='col_1'>
                            <h4>BEST SKILLS ON</h4>
                            <button className='btn_shadow'>
                                <img src={skill1} alt=""/>
                            </button>
                            <button className='btn_shadow'>
                                <img src={skill2} alt=""/>
                            </button>
                            <button className='btn_shadow'>
                                <img src={skill3} alt=""/>
                            </button>
                        </div>
                    </div>
            </div>
            <div className='right'>
                <div className='right_img'>
                    <img src={hero} alt=''/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home

