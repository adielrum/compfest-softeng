import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'

const Navbar: React.FC = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const { data: session, status } = useSession()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/subscription', label: 'Subscription' },
    { href: '/contact', label: 'Contact' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-teal-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          SEA Catering
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={`hover:underline ${router.pathname === link.href ? 'font-semibold underline' : ''}`}>
                  {link.label}
                </Link>
              </li>
            ))}
            {status === 'authenticated' ? (
              <>
                {session.user?.role === 'admin' && (
                  <li>
                    <Link href="/dashboard/admin" className={`hover:underline ${router.pathname === '/dashboard/admin' ? 'font-semibold underline' : ''}`}>
                      Admin Dashboard
                    </Link>
                  </li>
                )}
                <li>
                  <button onClick={() => signOut()} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition-colors duration-200">
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/auth/signin" className={`hover:underline ${router.pathname === '/auth/signin' ? 'font-semibold underline' : ''}`}>
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link href="/auth/signup" className={`hover:underline ${router.pathname === '/auth/signup' ? 'font-semibold underline' : ''}`}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar