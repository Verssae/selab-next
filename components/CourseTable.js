/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useQuery } from '@apollo/react-hooks'
import { Fragment } from "react"
import styled from "@emotion/styled"
import gql from 'graphql-tag'

const query = gql`
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

const tableStyle = css`
  text-align: center;
  margin-bottom: 15px;
  font-size: 13pt;
  border-collapse: collapse;
  float: left;
`

const Table = ({children, width}) => (
  <table
    css={css`
      ${tableStyle};
      width: ${width};
      max-width: ${width};
    `}>
    <Global
      styles={css`
        td {
          border: 1px solid gray;
          background-color: white;
          padding: 5px;
        }
        th {
          background-color: #1C1E25;
          color: white;
          padding: 10px;
          border: 1px solid gray;
          white-space: nowrap;
        }
      `}
    />
    {children}
  </table>
)

function CourseTable({degree}) {
  const { loading, error, data } = useQuery(
    query, {
      variables: {
        degree: degree
      }
    }
  )
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const { semesters, courses } = data
  return (
    <>
      <Table width="45vw">
        <thead>
          <tr>
            <th colSpan="2">{degree} Courses</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(({ code, name }) => (
            <tr key={code}>
              <td>{code}</td>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div css={css`
        width:55vw;
        overflow: scroll;
      `}>
        <Table width="65vw">
          <thead>
            <tr>
              {semesters.map(({ semester }) => (
                <th key={semester}>{semester}</th>
              ))}
            </tr>
          </thead>
          <tbody>
              {courses.map(({ code, openedSemester }) => (
                <tr key={code}>
                  {semesters.map(( {semester} ) => {
                    const found = openedSemester.some(e => e.semester === semester)
                    if (found) return (<td key={semester}>O</td>)
                    else return (<td key={semester}></td>)
                  })}
                </tr>
                ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default CourseTable