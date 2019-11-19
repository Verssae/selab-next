import Header from "./Header"
import { HomeLink, PostLink } from "./Links"

const CustomHeader = ({ refs, options }) => (
    <Header refs={refs} options={options}>
        <HomeLink />
        <PostLink id="Notices" />
        <PostLink id="Gallery" />
        <PostLink id="Members" />
        <PostLink id="Publications" />
    </Header>
)

export default CustomHeader