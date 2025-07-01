import { getSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import Layout from '../../components/Layout'

interface AdminDashboardProps {
  user: {
    name: string
    email: string
    role: string
  }
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user }) => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-lg">Welcome, {user.name}!</p>
        <p className="text-lg">Your role: {user.role}</p>
        <p className="text-lg">This page is only accessible to administrators.</p>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }

  if (session.user?.role !== 'admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: session.user,
    },
  }
}

export default AdminDashboard