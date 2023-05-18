# dev-ops-tech-evaluation

The dev ops tech evaluation will replicate a real world scenario. You will be given a boilerplate repository that contains a monorepo project. You will be responsible for creating a github action that will run tests that you create for the the api routes found in the `services/example-fastify-cloud-run` package.

## Description

The boilerplate repo is an example monorepo project. It includes three packages:

- `libraries/example-messaging-lib`
- `libraries/example-utility-lib`
- `services/example-fastify-cloud-run`

The `libraries/example-messaging-lib` package is intended to be used as a dependency for the `services/example-fastify-cloud-run` package. The `services/example-fastify-cloud-run` package is intended to be deployed to cloud run.

## Assessment

For this assessment, we want to create a github action that is responsible for testing the routes found in `services/example-fastify-cloud-run`. `vitetest` is already installed in the project and should be used to set up testing.

## Considerations

- [] Should be scalable for multiple developers with simultaneous PRs
- [] Seeding data matching the prisma schema found in `services/example-fastify-cloud-run/schema.prisma`
- [] Seeding data into firebase matching the schema found in `libraries/example-messaging-lib/src/index.ts`
- [] Testing the following routes from `services/example-fastify-cloud-run/src/index.ts`:

  - [] `/api/create_message`
  - [] `/api/create_user`
  - [] `/api/messages`

  ## How We Will Be Evaluating You

- Functionality
- Scalability
- Clarity
- Ability to make small commits with good commit messages
- Decisions / considerations made in your approach

## Getting Started

1. Fork the `boilerplate` repo
2. Run `pnpm install`
3. Run `pnpm run dev` in `services/example-fastify-cloud-run` to start the server
4. Run `pnpm run test` in `services/example-fastify-cloud-run` to run the tests

## Setting Up Your Local Environment Variables

1. Create a `.env` file in the root of the repo
2. You will need to add the following environment variables:

- `GCP_SERVICE_ACCOUNT = "../../service-account.json"`
- `LOCAL_DB_URL = {{ Your local Postgres DB URL }}`

## Setting Up Your Local Database

1. After running `pnpm install` and setting up your `.env` file with your `LOCAL_DB_URL`, run `pnpm run migrate` to create the database tables

## Setting Up With Firebase

1. From `https://console.firebase.google.com/`, you can create a new project

2. Complete all three steps

- 1. Name your project
- 2. Enable Google Analytics
- 3. Configure Google Analytics

3. From the project overview page, click the gear icon next to "Project Overview" and select "Project Settings"

4. From the project settings page, select "Service Accounts"

5. From the service accounts page, click "Generate new private key"

6. Rename the downloaded file to `service-account.json`, and place it in the root of the repo

7. You can add a `.env` file to the root of the repo where you can store
   `GCP_SERVICE_ACCOUNT="{{path to service-account.json}}"`

## Additional Documentation

- [Prisma](https://www.prisma.io/docs)
- [Firestore](https://firebase.google.com/docs/firestore)
- [Vitest](https://vitest.dev/api/)
