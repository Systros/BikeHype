import './sass/styles.scss'
import IMAGE from './bike.png'

export const App = () => {
    return <>
    <h1 className="title">Bike Hype</h1>
    <div className="buttons">
        <a className="button is-primary">Primary</a>
        <a className="button is-link">Link</a>
      </div>
    <img src={IMAGE} alt="bike" width="300"/>
    </>
}