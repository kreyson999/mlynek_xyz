import { GraphQLClient } from "graphql-request"

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);
export const REVALIDATE_PAGE_CONTENT = 60 * 60

export async function getQuestions() {
  const { questions } = await graphcms.request(`
    query Questions {
      questions {
        description
        question
      }
    }
  `)

  return questions
}

export async function getProjects() {
  const { projects } = await graphcms.request(`
    query Projects {
      projects(orderBy: updatedAt_DESC) {
        description
        images {
          url
        }
        name
        url
        color {
          hex
        }
      }
    }
  `)
  return projects
}