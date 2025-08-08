import "../index.css"

function HomeContent() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left side: Resume */}
        <div className="w-full md:w-1/2 bg-white h-[600px] md:h-screen">
            <iframe
            src={`${process.env.PUBLIC_URL}/Jacob_Hall_Resume_.pdf`}
            className="w-full h-full"
            title="Resume PDF"
            style={{ border: 'none' }}
            />
        </div>

        {/* Right side: Picture */}
        <div className="w-full md:w-1/2 bg-gray-100 h-[600px] md:h-screen flex justify-center items-center">
            <img
            src={`${process.env.PUBLIC_URL}/pictures/DSC_0664.JPG`}
            alt="Jacob Hall"
            className="max-w-full max-h-full object-cover rounded-md shadow-lg"
            />
        </div>
        </div>
    )
}

export default HomeContent