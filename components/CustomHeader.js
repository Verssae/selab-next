import Header from "./Header"
import { HomeLink, StyleLink } from "./Links"
import Link from "next/link"
import Burger from "./Burger"
import HoverMenu from "./HoverMenu"
const CustomHeader = ({ refs, options }) => {
  return (
    <Header refs={refs} options={options}>
      <HomeLink />
      <HoverMenu title={"Courses"}>
        <Link href="/incourse">
          <StyleLink>{"CSE326 WebAppDev"}</StyleLink>
        </Link>
        <Link href="/course">
          <StyleLink>CSE6050 Advanced Software Engineering</StyleLink>
        </Link>
      </HoverMenu>
      <Link href="/quizList">
            <StyleLink>Quiz</StyleLink>
        </Link>

      <Link href="/notices">
        <StyleLink>Notices</StyleLink>
      </Link>
      <Link href="/gallery">
        <StyleLink>Gallery</StyleLink>
      </Link>
      <Link href="/members">
        <StyleLink>Members</StyleLink>
      </Link>
      <Link href="/publications">
        <StyleLink>Publications</StyleLink>
      </Link>

      <Burger />
    </Header>
  )
}

export default CustomHeader
