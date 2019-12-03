import Header from "./Header"
import { HomeLink, PostLink, StyleLink } from "./Links"
import Link from "next/link"

const CustomHeader = ({ refs, options }) => (
    <Header refs={refs} options={options}>
        <HomeLink />
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
    </Header>
)

export default CustomHeader