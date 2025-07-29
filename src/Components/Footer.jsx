import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-950 text-gray-400 py-4 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} MAIT Marketplace. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer
