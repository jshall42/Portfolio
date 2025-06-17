import "../index.css"

function ContactContent() {
    return (
        <div className="max-w-xl mx-auto p-6 space-y-8">
            {/* Small intro section */}
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <p className="text-gray-700">
                I'm excited to connect! Whether you want to discuss a project, job
                opportunity, or just say hello, feel free to reach out.
            </p>

            {/* Contact Info Section*/}
            <div className="space-y-4 text-gray-700">
                <div>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:jsamh12@outlook.com" className="text-blue-600 underline">
                        jsamh12@outlook.com
                    </a>
                </div>

                <div>
                    <strong>Phone:</strong> (423) 836-7410
                </div>

                <div>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                        href="https://www.linkedin.com/in/jsh2001/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        linkedin.com/in/jsh2001
                    </a>
                </div>

                <div>
                    <strong>GitHub:</strong>{" "}
                    <a
                        href="https://github.com/jshall42"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        github.com/jshall42
                    </a>
                </div>
            </div>

        
        </div>
    )
}

export default ContactContent
