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

export async function getPosts() {
  const { posts } = await graphcms.request(`
    query getPosts {
      posts {
        slug
        title
        createdAt
        images {
          url
        }
        color {
          hex
        }
      }
    }
  `)
  return posts
}
export async function getPost(slug) {
  const { post } = await graphcms.request(`
    query getPost($slug: String!) {
      post(where: {slug: $slug}) {
        createdAt
        content {
          html
        }
        color {
          hex
        }
        images {
          url
        }
        title
        author {
          fullName
          profilePicture {
            url
          }
          shortDescription
        }
      }
    }
  `, { slug })
  return post
}