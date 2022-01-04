import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/button'
import './style.css'

function Alphabet(){
    let navigate = useNavigate();
    const clickHandle = ((e) => {
        navigate(`/list/${e.target.textContent.toLowerCase()}`)
    })
    return(
        <div className="container key-container d-grid">
            <Button title='A' onClick={(e) => {clickHandle(e)}} className='key' key="A">a</Button>
            <Button title='B' onClick={(e) => {clickHandle(e)}} className='key' key="B">B</Button>
            <Button title='C' onClick={(e) => {clickHandle(e)}} className='key' key="C">C</Button>
            <Button title='D' onClick={(e) => {clickHandle(e)}} className='key' key="D">D</Button>
            <Button title='E' onClick={(e) => {clickHandle(e)}} className='key' key="E">E</Button>
            <Button title='F' onClick={(e) => {clickHandle(e)}} className='key' key="F">F</Button>
            <Button title='G' onClick={(e) => {clickHandle(e)}} className='key' key="G">G</Button>
            <Button title='H' onClick={(e) => {clickHandle(e)}} className='key' key="H">H</Button>
            <Button title='I' onClick={(e) => {clickHandle(e)}} className='key' key="I">I</Button>
            <Button title='J' onClick={(e) => {clickHandle(e)}} className='key' key="J">J</Button>
            <Button title='K' onClick={(e) => {clickHandle(e)}} className='key' key="K">K</Button>
            <Button title='L' onClick={(e) => {clickHandle(e)}} className='key' key="L">L</Button>
            <Button title='M' onClick={(e) => {clickHandle(e)}} className='key' key="M">M</Button>
            <Button title='N' onClick={(e) => {clickHandle(e)}} className='key' key="N">N</Button>
            <Button title='O' onClick={(e) => {clickHandle(e)}} className='key' key="O">O</Button>
            <Button title='P' onClick={(e) => {clickHandle(e)}} className='key' key="P">P</Button>
            <Button title='Q' onClick={(e) => {clickHandle(e)}} className='key' key="Q">Q</Button>
            <Button title='R' onClick={(e) => {clickHandle(e)}} className='key' key="R">R</Button>
            <Button title='S' onClick={(e) => {clickHandle(e)}} className='key' key="S">S</Button>
            <Button title='T' onClick={(e) => {clickHandle(e)}} className='key' key="T">T</Button>
            <Button title='U' onClick={(e) => {clickHandle(e)}} className='key' key="U">U</Button>
            <Button title='V' onClick={(e) => {clickHandle(e)}} className='key' key="V">V</Button>
            <Button title='W' onClick={(e) => {clickHandle(e)}} className='key' key="W">W</Button>
            <Button title='X' onClick={(e) => {clickHandle(e)}} className='key' key="X">X</Button>
            <Button title='Y' onClick={(e) => {clickHandle(e)}} className='key' key="Y">Y</Button>
            <Button title='Z' onClick={(e) => {clickHandle(e)}} className='key' key="Z">Z</Button>
        </div>
    )
}

export default Alphabet
