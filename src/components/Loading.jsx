import { useEffect, useState } from "react";

function Delayed ({ children, wait = 500 }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setShow(true)
    }, wait)

    return () => window.clearTimeout(timeout)
  })

  return show ? children : null
}

function Loading() {
  return (
    <Delayed>
      <div className="loading center"/>
    </Delayed>
  )
}

export default Loading
