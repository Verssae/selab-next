/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import Layout from "../components/Layout"
import { Title } from "../components/pages/courses"
import CustomHeader from "../components/CustomHeader"

import { ApolloProvider } from '@apollo/react-hooks'
import createApolloClient from '../lib/apollo'
import CourseTable from "../components/CourseTable"

const client = createApolloClient()

const Courses = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <CustomHeader />
        <Title>COURSES</Title>
        <CourseTable degree="Undergraduate" />
        <CourseTable degree="Postgraduate" />
      </Layout>
    </ApolloProvider>
  )
}

export default Courses