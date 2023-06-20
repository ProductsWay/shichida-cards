<h1 align="center">Welcome to shichida-cards 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
</p>

## Install

```sh
yarn install
```

Sure, I've added a Usage section based on the provided `package.json` and guidelines.

## 🛠️ Usage

The `shichida-cards` package is designed to be run in a specific sequence of scripts. These scripts are explained below.

- **api**: Starts the development server for the API, located in the `packages/api` directory.
- **native**: Starts the Expo development server for building the native mobile app, located in the `apps/expo` directory.
- **web**: Starts the development server for the Next.js web app, located in the `apps/next` directory.
- **build**: Builds the UI components package, located in the `packages/ui` directory.
- **generate**: Generates the TypeScript types and GraphQL schema in the `packages/api` directory.
- **upgrade:tamagui**: Upgrades Tamagui and related dependencies to the latest versions.
- **check-deps**: Checks the consistency of dependency versions across the entire project.
- **check-types**: Runs TypeScript's type checking on the project without emitting output.
- **fix**: Runs the Manypkg CLI's `fix` command, which automatically resolves common issues in a monorepo.
- **preinstall**: Sets the version of Yarn used in the project to 3.5.0.
- **postinstall**: Builds the project after all dependencies have been installed.

Here's how to use these scripts:

1. Clone the repository to your local machine.
2. Install all dependencies by running `yarn install`.
3. Run the desired script with the `yarn` command. For example, to start the web development server, you'd use `yarn web`.

Before running these scripts, make sure to set up your environment variables:

1. Duplicate the `.env.local.example` file, remove `.example`, and enter your variables.
2. Duplicate the `/packages/api/.dev.vars.example`, remove `.example`, and enter your Clerk JWT_VERIFICATION_KEY.
3. Configure Cloudflare Wrangler configs inside `/apps/next/wrangler.toml` and `/packages/api/wrangler.toml` to match your deployment environment.

After having filled out your `.env` file, run 'cd packages/api && yarn migrate:local' to create your database tables. Then, run 'yarn api' and 'yarn web' in separate terminal tabs to start the API and web development servers.

## 📝 About [T4 Stack](https://github.com/timothymiller/t4-app)

The T4 Stack is a software stack that enables developers to rapidly develop web, mobile, and desktop applications using a unified, opinionated, and minimalistic setup. Its key goal is to offer a hassle-free development environment setup, a smooth learning curve, and excellent developer experience.

Developed by [Tim Miller](https://twitter.com/ogtimothymiller), the T4 Stack features a host of technologies integrated together for optimal development speed, performance, and cost-effectiveness. At its core, the T4 Stack uses Cloudflare services for its edge platform, which offers AI-powered features at a lower cost compared to AWS.

The stack leverages technologies such as Expo and Next.js for universal app development, TypeScript for type safety, and a variety of other tools and libraries for various functionalities, including data fetching, UI, navigation, state management, and authentication.

T4 is not only about delivering quality apps but also about speed. It provides instant feedback, allowing developers to see the impact of their changes immediately. This accelerates the development process, which is critical in today's fast-paced development environments.

Being universal, the T4 Stack supports both React Native and React Web. This means you can use the same codebase to build applications for iOS, Android, Web, macOS, Windows, and Linux. It not only speeds up development but also simplifies maintenance and updates.

### 🔍 Further Understanding the T4 Stack

To give you a better understanding of the T4 Stack, let's delve deeper into the technologies and tools it uses:

1. **UI Kit**: [Tamagui](https://tamagui.dev) - A UI kit for creating beautiful, responsive user interfaces.

2. **Data Fetching**: [tRPC](https://trpc.io) and [Tanstack Query](https://tanstack.com/query/latest) - Libraries for fetching and managing data.

3. **Frontend**: [Next.js](https://nextjs.org) and [Expo](https://expo.io) - Frameworks for developing web and native mobile apps, respectively.

4. **Navigation**: [Solito](https://solito.dev) - A simple and efficient navigation library.

5. **Global State Management**: [Jotai](https://jotai.org) - A primitive and flexible state management solution.

6. **Backend**: [Hono](https://hono.dev), [Cloudflare Workers](https://workers.cloudflare.com), and [Cloudflare D1](https://developers.cloudflare.com/d1) with [SQLite](https://sqlite.org) and [Drizzle](https://orm.drizzle.team) - Tools and technologies for server-side logic and data management.

7. **Authentication**: [Clerk](https://clerk.dev) - A complete authentication solution.

The T4 Stack is not just a collection of tools and technologies. It's a well-thought-out system where all parts work together harmoniously, allowing developers to focus more on creating amazing applications and less on setting up and integrating technologies.

## Show your support

Give a ⭐️ if this project helped you!
