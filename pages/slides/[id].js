import { useRouter } from "next/router"
import Header from "../../components/Header"

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
