import { useLocalStorage } from './hooks/useLocalStorage'
import './App.css'

function App() {
    const [token, { setItem, removeItem }] = useLocalStorage('token')
    return (
        <div className='App'>
            <header className='App-header'>
                <div>
                    <p>Твой токен: {token}</p>
                    <div>
                        <button onClick={() => setItem('new-token')}>Задать токен</button>
                        <button onClick={() => removeItem()}>Удалить токен</button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default App
