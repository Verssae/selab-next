import { useRouter } from "next/router"
import Header from "../../components/Header"
/*
TODO:
- [ ] choose slide library or not
- [ ] make slide layout associative with header
*/

//FIXME:  this is temp component for slide
const Slide = () => {
  const router = useRouter()

  return (
    <div>
      <h1>{router.query.id}</h1>
      <p>{"hello world"}</p>
    </div>
  )
}

export default Slide
