import React, {useState} from 'react'

const Index = () => {
    const [title, setTitle] = useState('hello')

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={()=>setTitle('fasdfsadf')} >asdaf</button>
        </div>
    )
}

export default Index