import React from 'react'
import { Card } from '../Card/Card'
import { Pagenav } from '../Pagenav/Pagenav'

import './Challenges.scss'

import challenge1 from '../../assets/challenge-cards/challenge1.png'
import challenge2 from '../../assets/challenge-cards/challenge2.png'
import challenge3 from '../../assets/challenge-cards/challenge3.png'
import challenge4 from '../../assets/challenge-cards/challenge4.png'
import challenge5 from '../../assets/challenge-cards/challenge5.png'
import challenge6 from '../../assets/challenge-cards/challenge6.png'
import challenge7 from '../../assets/challenge-cards/challenge7.png'

export const Challenges = () => {
  return (
    <div className='challenges-container'>

        <div className='challenges-header'>
            <h2>Welcome, William La</h2>
        </div>

        <div className='descriptions'>
            <div className='desc-item desc-col1'>
                <h2>Recommended Challenges</h2>
                <p>These challenges are recommended to you based on your profile</p>
                <br />
                <p>Follow some <a href="">tags</a> in your profile to get recommended challenges.</p>
            </div>
            <div className='desc-item desc-col2'>
                <h2>Recommended Labs</h2>
                <p>These labs are recommended to you based on your profile.</p>
                <br />
                <p>Follow some <a href="">tags</a> in your profile to get recommended challenges.</p>
            </div>
            <div className='desc-item desc-col3'>
                <h2>Recommended Resources</h2>
                <p>These resources are recommended to you based on your profile.</p>
                <br />
                <p>Follow some <a href="">tags</a> in your profile to get recommended challenges.</p>
            </div>
        </div>

        <Pagenav/>

        <div className='card-list'>
            <Card img={challenge1} id="Challenge" name="F.U.N. - Industry Future Challenge to Support Business - Spring 2022" desc="How might we better support businesses around us? Businesses around the world have had to adapt over the last 18 months, and will need to continue to evolve to meet the realities of a post-pandemic world. Challenges abound across all aspects of the organization, including operations, workforce,"/>
            <Card img={challenge2} id="Challenge" name="Lab Programs and Challenge Paths" desc="Introduction: The PrerpLabs Network provides many different pathways for development. Challenge Paths provide users with the chance to further challenge themselves in a particular area, earning an achievement upon completion. Lab Programs allow users to further their skills in a particular area b"/>
            <Card img={challenge3} id="Challenge" name="Exploring Labs and Challenges" desc="Introduction: Finding new Labs and Challenges to join is critical to continual skills development. On the PreprLabs platform, there are several different ways to search out relevant or interesting Labs and Challenges. This Challenge will help you to learn more about navigating and finding new Cha"/>
            <Card img={challenge4} id="Challenge" name="Complete Your Profile" desc="Introduction: Having an up-to-date profile will allow you to better connect with others on the PreprLabs Network and to more impactfully showcase your current and soon-to-be-achieved skills. This Profile will help you to highlight your work and abilities in an engaging and meaningful way. "/>
            <Card img={challenge5} id="Challenge" name="Creating a Project" desc="Introduction: Projects are how you will be able to submit your work to Challenges on the PreprLabs Network. By completing a Project you will be able to enter into and complete Challenges in order to earn achievements and gain skills!  This Challenge will help you to complete your first Pr"/>
            <Card img={challenge6} id="Challenge" name="Workplace Culture" desc="Introduction: It is crucial in a new position to understand where you work and who you work with. Learning to fit into a new company culture can be intimidating but by taking it one step at a time, you can more easily get to know the peers, management, communication methods, and expectations at y"/>
            <Card img={challenge7} id="Challenge" name="Working Agile" desc="Introduction: An Agile workflow involves clear communication, continual improvement, and requires a strong growth mindset.  Skills: Growth mindset, Agile workflow, Communication  Categories:  Prepr Volunteer, Agile Workflow Time Estimate: 1 Hour The Challenge:&nbs"/>
        </div>
    </div>
  )
}
