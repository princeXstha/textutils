import React, { useState } from 'react';


export default function Aboutus(props) {
    let mystyle = {
        color: props.mode === 'dark' ? 'white':'#212529',
        backgroundColor: props.mode === 'dark'? '#212529':'white'
    }

    return (
        <div classNameName="container" style={mystyle}>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            We change everything to Upper Case
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Upper Case :</strong> 

                                The Text Chameleon app simplifies text transformation by converting lowercase text into uppercase instantly. Ideal for enhancing visibility and emphasis in messages, emails, and social media posts, Text Chameleon offers a user-friendly interface for seamless conversion at your fingertips. Perfect for both professional and personal use, it ensures your text stands out with clarity and impact with minimal effort.  
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        We change everything to Lower Case
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Lower Case: </strong> 
                            The Text Chameleon app swiftly converts text into lowercase with ease. Whether you're composing messages, drafting emails, or updating social media posts, Text Chameleon provides a user-friendly interface for seamless transformation. It's the perfect tool for ensuring clear and consistent text formatting across various platforms, enhancing readability effortlessly. Ideal for both personal and professional use, Text Chameleon simplifies the process of adjusting text style with just a few clicks.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            We pronounce for you
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Pronounciation: </strong> 
                            The Text Chameleon app simplifies text pronunciation by converting written text into spoken words effortlessly. Whether you're creating voiceovers, practicing speeches, or enhancing accessibility, Text Chameleon offers a straightforward interface for seamless conversion. It's perfect for improving clarity and articulation in various contexts, making it an essential tool for both personal and professional use. With Text Chameleon, transforming text into spoken language is intuitive and efficient, ensuring effective communication with minimal effort.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
