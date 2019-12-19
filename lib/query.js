import gql from 'graphql-tag'


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
  query getAllQuizzes($id: ID!) {
    quiz(id: $id){
      title
      course {
        code
      }
      semester {
        semester
      }
      createdAt
      createdBy
      content
      comments {
        name
        content
      }
    }
  }
`

/*
 * components/QuizList
 */

export const GET_QUIZ_LIST = gql`
query getAllQuizzes {
  result: quizzes{
    id
    title
    course {
      code
    }
    semester {
      semester
    }
    createdAt
    createdBy
    comments {
      name
      content
    }
  }
}
`

export const NEW_QUIZ_SUBSCRIPTION = gql`
  subscription onNewQuiz{
    newQuiz {
      id
      title
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