import {Link} from 'react-router-dom'

export const Nav = () => {
    return(
        <nav className="flex items-center flex-wrap bg-teal-500 p-6 justify-center bg-indigo-900 text-white font-bold mb-10">
            <div className="flex-grow lg:flex lg:items-center lg:w-2/4 m-auto justify-center items-center">
                <Link to="/home" className="lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-200 px-1.5 mx-3 py-1 hover:bg-indigo-500 rounded">
                    Home
                </Link>
                <Link to="/about" className="lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-200 px-1.5 mx-3 py-1 hover:bg-indigo-500 rounded">
                    About
                </Link>
                <Link to="/users" className="lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-200 px-1.5 mx-3 py-1 hover:bg-indigo-500 rounded">
                    Users
                </Link>
                <Link to="/app" className="lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-200 px-1.5 mx-3 py-1 hover:bg-indigo-500 rounded">
                    App
                </Link>
            </div>
        </nav>
    )

}

export default Nav;