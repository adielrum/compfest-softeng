# SEA Catering

This project is a web application for SEA Catering, built with Next.js, TypeScript, Tailwind CSS, Prisma, and NextAuth.js.

## Features
- User authentication (Sign In/Sign Up)
- Admin dashboard
- Menu display
- Subscription management
- Contact form

This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Environment Variables

This project uses environment variables to handle sensitive configuration data, such as database connection strings. This is a security best practice that keeps your credentials separate from the source code.

To configure the application for your local environment, you will need to create a `.env` file in the root directory of the project.

## Setup Instructions

### Find the Example File
This repository includes a file named `.env.example` which serves as a template.

### Create Your .env File
Make a copy of the template. You can do this easily from your terminal:

```bash
cp .env.example .env
```

### Set Your Database URL
Open the newly created `.env` file with a text editor. You will see the following:

```bash
# .env.example
DATABASE_URL="your_database_connection_string_goes_here"
```

You must replace the placeholder text with your actual database connection string.

## Variable Details

**DATABASE_URL**: This variable holds the full connection string for your database. The format of this string depends on the type of database you are using.

### Examples:

- **PostgreSQL**: `postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME`
- **MySQL**: `mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME`
- **SQLite**: `file:./dev.db`

Make sure to replace `USER`, `PASSWORD`, `HOST`, `PORT`, and `DATABASE_NAME` with your specific database credentials.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

