import React from "react";

export default function About(props) {
    return (
        <div className='container mt-5 w-50' >
            <div className={`text-center text-${props.mode === 'light' ? "dark" : "light"}`}>
                <h2 className='fw-bolder display-6'>About Us</h2>
                <p className='fs-4 pt-4 '>
                    TextUtils is a web-based tool to help you with your daily tasks. You will find tools for formatting, handling your text such as uppercase , lower case, remove extraspaces. Check the features of this tool and feel free to recommend a new feature by contacting us.
                </p>
            </div>


            <footer className={`conatiner mt-5 p-5 text-center text-${props.mode === "light" ? "dark" : "light"}`}>
                <span className="px-5">
                    <a className="text-decoration-none text-reset fs-5" href="https://twitter.com/CodewithSushant">Twitter</a>
                </span>
                <span className="px-5">
                    <a className="text-decoration-none text-reset fs-5" href="https://www.instagram.com/codewithsushant/">Instagram</a>
                </span>
                <span className="px-5">
                    <a className="text-decoration-none text-reset fs-5" href="https://github.com/codewithsusan/TextUtils-React" target="blank">Github</a>
                </span>
                <code className="d-block mt-5 fs-6 text-reset" >Made with <span role="img" aria-label="love-emoji" >❤️</span>  by Susan.</code>
            </footer>

        </div>
    )
}
