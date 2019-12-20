import gql from 'graphql-tag'

/*
 * components/CreateQuiz
 */

export const ADD_QUIZ = gql`
mutation addQuiz($userId: String!, $title: String!, $description: String!, $type: QuizType!, $options: [String!]!){
  addQuiz(
    userId: $userId
    title: $title
    description: $description
    type: $type
    options: $options
  ) {
    id
  }
}
`

/*
 * components/AnswerString
 */

export const ADD_ANSWER = gql`
mutation addAnswer($quizId: ID!, $userId: String!, $content: String!){
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
    createdBy
    content {
      type
      options
    }
    answers {
      id
      user
			content
      createdAt
    }
  }
}
`

export const NEW_ANSWER_SUBSCRIPTION = gql`
subscription newAnswerSubscription($quizId: ID!) {
  newAnswer(quizId: $quizId) {
    id
    user
    content
    createdAt
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
    createdBy
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
    createdBy
  }
}
`