import Header from "./Header"
import { HomeLink, StyleLink } from "./Links"
import Link from "next/link"
import HoverMenu from "./HoverMenu"
import Burger from "./Burger"
const CustomHeader = ({ refs, options, isSlide=false }) => {
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
      <Link href="/quiz">
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

      <Burger {...isSlide}/>
    </Header>
  )
}

export default CustomHeader
