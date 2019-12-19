import gql from 'graphql-tag'

/*
 * components/AnswerString
 */

export const ADD_ANSWER = gql`
mutation addAnswer($quizId: ID!, $userId: ID!, $content: String!){
  addAnswer(
    quizId: $quizId
    userId: $userId
    content: $content
  ) {
    id
  }
}
 `

/*
 * components/CourseTable
 */

export const GET_COURSE_LIST = gql`
query getSemester($degree: String!){
  semesters {
    semester
  }
  courses(degree: $degree) {
    code
    name
    openedSemester: semesters {
      semester
    }
  }
}
`

/*
 * components/QuizContents
 */

export const GET_QUIZ_CONTENTS = gql`
query getQuizContents($id: ID!) {
  quiz(id: $id){
    title
    description
    createdAt
    createdBy {
      user_id
    }
    content {
      type
      options
    }
    answers {
      id
      user {
        user_id
      }
			content
      createdAt
    }
  }
}
`

/*
 * components/QuizList
 */

export const GET_QUIZ_LIST = gql`
query getAllQuizzes {
  result: quizzes {
    id
    title
    description
    course {
      code
    }
    semester {
      semester
    }
    createdAt
    createdBy {
      user_id
    }
  }
}
`

export const NEW_QUIZ_SUBSCRIPTION = gql`
subscription onNewQuiz{
  newQuiz {
    id
    title
    description
    course {
      code
    }
    semester {
      semester
    }
    createdAt
    createdBy {
      user_id
    }
  }
}
`