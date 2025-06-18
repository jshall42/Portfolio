import "../index.css"

function ProjectContent(){
    return(
        <div className="max-w-5xl mx-auto p-6 space-y-12">

            {/* Project 1 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">Peer Review Platform</h2>
                <p className="text-gray-700">
                    A full-stack peer review platform that enables instructors to manage courses, create and schedule peer assessments, and analyze student participation.
                    Built using React on the frontend and Node.js with Express on the backend, with PostgreSQL hosted on AWS RDS.
                    While the application is still under development, the showcased pages demonstrate its core functionality and value.
                    I'm happy to walk through additional features or implementation details if you're interested.
                </p>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <img
                        src={`${process.env.PUBLIC_URL}/pictures/Screenshot%20(76).png`}
                        alt="Home Page"
                        className="rounded shadow w-full cursor-zoom-in transition-transform duration-300 hover:scale-250 z-10"
                        />

                        <p className="text-sm text-gray-600 text-center">
                            Home page the first page you see that gives a breif description of the website.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <img
                        src={`${process.env.PUBLIC_URL}/pictures/Screenshot%20(77).png`}
                        alt="Registration Page"
                        className="rounded shadow w-full cursor-zoom-in transition-transform duration-300 hover:scale-250 z-10"
                        />

                        <p className="text-sm text-gray-600 text-center">
                            Registration Page for signing up for the application as a teacher or student.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <img
                        src={`${process.env.PUBLIC_URL}/pictures/Screenshot%20(80).png`}
                        alt="Login Page"
                        className="rounded shadow w-full cursor-zoom-in transition-transform duration-300 hover:scale-250 z-10"
                        />

                        <p className="text-sm text-gray-600 text-center">
                            Login page for the user logging into the website.
                        </p>
                    </div>


                    <div className="space-y-2">
                        <img
                        src={`${process.env.PUBLIC_URL}/pictures/Screenshot%20(78).png`}
                        alt="Teacher View Page"
                        className="rounded shadow w-full cursor-zoom-in transition-transform duration-300 hover:scale-250 z-10"
                        />

                        <p className="text-sm text-gray-600 text-center">
                            This is for if the user logs in as a teacher then can create courses, click on them to view them, and get a course code to add students.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <img
                        src={`${process.env.PUBLIC_URL}/pictures/Screenshot%20(79).png`}
                        alt="Course Page"
                        className="rounded shadow w-full cursor-zoom-in transition-transform duration-300 hover:scale-250 z-10"
                        />

                        <p className="text-sm text-gray-600 text-center">
                            This is inside one of the courses looking at there enrollment list which at the moment they only have one student.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <img
                        src={`${process.env.PUBLIC_URL}/pictures/Screenshot%20(81).png`}
                        alt="Assement Page"
                        className="rounded shadow w-full cursor-zoom-in transition-transform duration-300 hover:scale-250 z-10"
                        />

                        <p className="text-sm text-gray-600 text-center">
                            This is inside the same course as seen earlier but in the assement section where you can create, edit, and delete assements.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 mt-2">
                    <a href="https://github.com/jshall42/Peer_Review_Project" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a>
                </div>
            </div>

            {/* Project 2 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">TimeTracker for NAVSEA</h2>
                <p className="text-gray-700">
                    Senior capstone project where I collaborated with a team of 5 to build a time tracking and analytics tool for a real Navy software team.
                    This video demonstrates the full project and how it is used in practice.
                    I'm happy to walk through additional features or implementation details if you're interested.
                </p>
                <div className="space-y-4">
                    <div className="w-full max-w-6xl mx-auto aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.youtube.com/embed/myYkxbTQBGU"
                            title="TimeTracker Demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded shadow"
                        />
                    </div>
                </div>
                <div className="flex gap-4 mt-2">
                    <a href="https://github.com/jshall42/Jacob-Senior-Project" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a>
                </div>
            </div>

            {/* Project 3 */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">Child Mind (Data Science Project)</h2>
                <p className="text-gray-700">
                    A data science project where my team analyzed survey data to predict problematic internet usage patterns in children and adolescents. 
                    We applied machine learning techniques and statistical analysis to identify key behavioral and demographic indicators.
                    The report below details our methodology, findings, and the tools we used throughout the analysis.
                </p>

                <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">Project Report:</p>
                        <a 
                            href={`${process.env.PUBLIC_URL}/Project_Team_6.pdf`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            View Full Report (PDF)
                        </a>
                    </div>
                </div>
                <div className="flex gap-4 mt-2">
                    <a href="https://github.com/jshall42/Jacob-Senior-Project" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a>
                </div>
            </div>

        </div>
    )
}

export default ProjectContent
