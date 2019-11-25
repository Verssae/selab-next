import { createElement} from "react"

const Heading = (props) => {
  const { level, children } = props
  return (
    <>
      {level == 1 ? (
        ''
      ) : (
        createElement(`h${level}`, props, children)
      )}
    </>
  )
}



export default Heading
