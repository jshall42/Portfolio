import "../index.css"
import { Link } from 'react-router-dom'
function AboutContent() {
    return (
        <div className="max-w-3xl mx-auto p-6 space-y-8">
            <section>
                <h1 className="text-3xl font-bold mb-2">About Me</h1>
                <p className="text-gray-700">
                    I am a recent college graduate with a passion for full-stack development and a strong growth mindset. 
                    I’m always eager to learn new technologies and improve my skills, seeking a career where I can continuously grow and contribute meaningfully.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Skills</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Express</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SQL</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Git</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">HTML</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">C++</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Bootstrap</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Agile</span>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Highlights</h2>
                <ul className="text-gray-700 space-y-2">
                    <li className="relative pl-5">
                    <span className="absolute left-0 top-1 text-gray-500">•</span>
                    Developing a peer review platform using React, Node.js, and PostgreSQL (hosted on AWS RDS)
                    </li>
                    <li className="relative pl-5">
                    <span className="absolute left-0 top-1 text-gray-500">•</span>
                    Served as a Teaching Assistant for Object-Oriented Programming (Python) at Tennessee Tech
                    </li>
                    <li className="relative pl-5">
                    <span className="absolute left-0 top-1 text-gray-500">•</span>
                    Collaborated on a senior capstone project to build a TimeTracker and Analytics app for NAVSEA’s development team
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">A Bit More About Me</h2>
                <p className="text-gray-700">
                    Outside of coding, I’m recently engaged and enjoy spending time with my fiancée and family.  
                    I grew up on a farm in a small town, which taught me the value of persistence, curiosity, and staying grounded—traits I bring to my development work every day.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Contact</h2>
                <p className="text-gray-700">
                Feel free to <Link to="/contact" className="text-blue-600 underline">reach out</Link> or check out my 
                <a href="https://github.com/jshall42" className="text-blue-600 underline ml-1" target="_blank" rel="noopener noreferrer">GitHub</a>.
                </p>
            </section>
        </div>
    )
}

export default AboutContent
