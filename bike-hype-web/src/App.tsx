import './styles.scss'
import IMAGE from './bike.png'

export const App = () => {
    return <>
    <h1 className="title">Bike Hype</h1>
    <img src={IMAGE} alt="bike" width="300"/>
    </>
}