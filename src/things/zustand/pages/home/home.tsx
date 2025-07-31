import { useCounterStore } from "../../store/store"
import './home.css'

type HomeProps = {
  count: number
}

export function Home(props: HomeProps) {

  const incrementOneAtATime = useCounterStore(store => store.incrementOneAtATime)
  const decrement = useCounterStore(store => store.decrement)

  return (
    <div className="home">
      {props.count}
      <div 
        style={{display: 'flex', gap: '10px'}}
        children={
          [
            {onClick: () => incrementOneAtATime(1000), children: '+'},
            {onClick: decrement, children: '-'}
          ].map((params, i) => <button key={i} {...params} style={
            {width: '30px', height: '30px', textAlign: 'center'}
          }/>)
        }/>
    </div>
  )
}