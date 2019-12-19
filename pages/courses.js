/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import Layout from "../components/Layout"
import { Title } from "../components/pages/courses"
import CustomHeader from "../components/CustomHeader"

import withApollo from "../lib/apollo"
import CourseTable from "../components/CourseTable"

const Courses = () => {
  return (
    <Layout>
      <CustomHeader />
      <Title>COURSES</Title>
      <CourseTable degree="Undergraduate" />
      <CourseTable degree="Postgraduate" />
    </Layout>
  )
}

export default withApollo(Courses)