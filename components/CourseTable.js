/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core"
import { useQuery } from '@apollo/react-hooks'
import { Fragment } from "react"
import styled from "@emotion/styled"

import { GET_COURSE_LIST } from '../lib/query'

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
          color: black;
          padding: 5px;
        }
        th {
          background-color: #1C1E25;
          color: white;
          padding: 10px;
          border: 1px solid gray;
          white-space: nowrap;
        }
        td,th{
          @media screen and (max-width: 1000px){
            font-size: 8pt;
          }
        }
      `}
    />
    {children}
  </table>
)

function CourseTable({degree}) {
  const { loading, error, data } = useQuery(
    GET_COURSE_LIST, {
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
      <Table width="40vw">
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
        width:42vw;
        overflow-y: scroll;
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
