import React, { useState } from 'react'

const App = () => {
    const accordionData = {
        title: 'Section 1',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore'
    }

    const { title, content } = accordionData

    const [isActive, setIsActive] = useState(false)

    return (
        <React.Fragment>
            <h1>React Accordion Demo</h1>
            <div className="accordion">
                <div  className="accordion-item">
                    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                        <div>{title}</div>
                        <div>{isActive ? '-' : '+'}</div>
                    </div>
                    {isActive && <div className="accordion-content">{content}</div>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default App