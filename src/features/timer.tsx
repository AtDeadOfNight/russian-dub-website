import React from 'react'

export function Timer({ deadline }: {
  deadline: number
}) {
  const [hours, setHours] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)

  React.useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime()
      const distance = deadline - now
      if(distance < 0) {
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        clearInterval(interval)
        return
      }

      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((distance % (1000 * 60)) / 1000)

      setHours(h)
      setMinutes(m)
      setSeconds(s)
    }

    const interval = setInterval(() => {
      calculate()
    }, 1000)

    calculate()

    return () => clearInterval(interval)
  })

  return (
    <span className='tabular-nums'>{('0' + hours).slice(-2)}:{('0' + minutes).slice(-2)}:{('0' + seconds).slice(-2)}</span>
  )
}