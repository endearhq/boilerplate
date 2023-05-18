# dev-ops-tech-evaluation
^ this should probably be more descriptive than boilerplate.

{some description of the dev ops tech evaluation exercise in 2-3 sentences}

## Description

The boilerplate repo is an example monorepo project. It includes three packages:

- `libraries/example-messaging-lib`
- `libraries/example-utility-lib`
- `services/example-fastify-cloud-run`

The `libraries/example-messaging-lib` package is intended to be used as a dependency for the `services/example-fastify-cloud-run` package. The `services/example-fastify-cloud-run` package is intended to be deployed to cloud run.

## Assessment

For this assessment, we want to create a github action that is responsible for testing the routes and utility functions found in `services/example-fastify-cloud-run`. `vitetest` is already installed in the project, and should be used to set up testing.

## Considerations:

- [] Should be scalable for multiple developers with simultaneous PRs
- [] Seeding data matching the prisma schema found in `services/example-fastify-cloud-run/schema.prisma` {We should provide a raw open source dataset if possible}
- [] Seeding data into firebase matching the schema found in `libraries/example-messaging-lib/src/index.ts`
- [] Testing the following routes from `services/example-fastify-cloud-run/src/index.ts`:
  - [] `/api/create_message`
  - [] `/api/create_user`
  - [] `/api/messages`

## How We Will Be Evaluating You:

{Some bulletpoints about what is important to us}

-   Functionality
-   Scalability
-   Clarity
-   Ability to make small commits with good commit messages
-   Etc.

## Getting Started

{To run this locally you will need to ...}

-   Run `pnpm install`
-   Etc.

## Setting Up with Firebase:

You need to create a new Firebasae account to complete this exercise. This project expects a `service-account.json` to provide a private key to access your Firebase. It also expects an environment variable called `GCP_SERVICE_ACCOUNT` to be set. Follow these steps to get this setup.

1. From `https://console.firebase.google.com/`, you can create a new project [link to Google's setup instructions]()

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
