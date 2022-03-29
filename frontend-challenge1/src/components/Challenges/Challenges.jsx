import React from 'react'

import './Challenges.scss'

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

        <div className='c'>

        </div>
    </div>
  )
}
