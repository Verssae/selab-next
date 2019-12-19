import styled from "@emotion/styled"
import theme from "./theme"
import Link from "next/link"

export const Option = ({ id, label, onClick, selected }) => {
  return (
    <StyledOption onClick={() => onClick(id)} selected={selected}>
      <p>{`${id} : ${label}`}</p>
    </StyledOption>
  )
}

const StyledOption = styled(`div`)`
  color: ${(props) => (props.selected ? "white" : "#abb")};
  & p {
    margin: 0px 15px;
  }

  &:hover {
    color: ${theme.COLORS.vanila};
    transition: 0.25s;
  }
`

export const OptionLink = ({ id, label, selected }) => {
  return (
    <Link href={`/slides/${id}`}>
      <StyledOption selected={selected}>
        <p>{`${id} : ${label}`}</p>
      </StyledOption>
    </Link>
  )
}

