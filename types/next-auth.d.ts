import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string | null
      name?: string | null
      email?: string | null
      image?: string | null
      role?: string | null
    }
  }

  interface User {
    id?: string | null
    name?: string | null
    email?: string | null
    image?: string | null
    role?: string | null
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string | null
    name?: string | null
    email?: string | null
    picture?: string | null
    sub?: string
    role?: string | null
  }
}