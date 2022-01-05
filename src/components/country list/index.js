import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/button'
import './style.css'

function Country(){
    let navigate = useNavigate();
    const clickHandle = ((e) => {
        navigate(`/list/${e.target.id}`)
    })
    return(
        <div id='browse' className="country-list container">
            <Button title={
                <div>
                    <img id='American' src="https://flagcdn.com/us.svg"
                    width="80"
                    alt="American" />
                    <p id='American'>American</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='American' >
            </Button>

            <Button title={
                <div>
                    <img id='British' src="https://flagcdn.com/gb.svg"
                    width="80"
                    alt="British" />
                    <p id='British'>British</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='British' >
            </Button>

            <Button title={
                <div>
                    <img id='Canadian' src="https://flagcdn.com/ca.svg"
                    width="80"
                    alt="Canadian" />
                    <p id='Canadian'>Canadian</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Canadian' >
            </Button>

            <Button title={
                <div>
                    <img id='Chinese' src="https://flagcdn.com/cn.svg"
                    width="80"
                    alt="Chinese" />
                    <p id='Chinese'>Chinese</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Chinese' >
            </Button>

            <Button title={
                <div>
                    <img id='Croatian' src="https://flagcdn.com/hr.svg"
                    width="80"
                    alt="Croatian" />
                    <p id='Croatian'>Croatian</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Croatian' >
            </Button>
            
            <Button title={
                <div>
                    <img id='Dutch' src="https://flagcdn.com/nl.svg"
                    width="80"
                    alt="Dutch" />
                    <p id='Dutch'>Dutch</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Dutch' >
            </Button>

            <Button title={
                <div>
                    <img id='Egyptian' src="https://flagcdn.com/eg.svg"
                    width="80"
                    alt="Egyptian" />
                    <p id='Egyptian'>Egyptian</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Egyptian' >
            </Button>

            <Button title={
                <div>
                    <img id='French' src="https://flagcdn.com/fr.svg"
                    width="80"
                    alt="French" />
                    <p id='French'>French</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='French' >
            </Button>

            <Button title={
                <div>
                    <img id='Greek' src="https://flagcdn.com/gr.svg"
                    width="80"
                    alt="Greek" />
                    <p id='Greek'>Greek</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Greek' >
            </Button>

            <Button title={
                <div>
                    <img id='Indian' src="https://flagcdn.com/in.svg"
                    width="80"
                    alt="Indian" />
                    <p id='Indian'>Indian</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Indian' >
            </Button>

            <Button title={
                <div>
                    <img id='Irish' src="https://flagcdn.com/ie.svg"
                    width="80"
                    alt="Irish" />
                    <p id='Irish'>Irish</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Irish' >
            </Button>

            <Button title={
                <div>
                    <img id='Italian' src="https://flagcdn.com/it.svg"
                    width="80"
                    alt="Italian" />
                    <p id='Italian'>Italian</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Italian' >
            </Button>

            <Button title={
                <div>
                    <img id='Jamaican' src="https://flagcdn.com/jm.svg"
                    width="80"
                    alt="Jamaican" />
                    <p id='Jamaican'>Jamaican</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Jamaican' >
            </Button>

            <Button title={
                <div>
                    <img id='Japanese' src="https://flagcdn.com/jp.svg"
                    width="80"
                    alt="Japanese" />
                    <p id='Japanese'>Japanese</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Japanese' >
            </Button>

            <Button title={
                <div>
                    <img id='Kenyan' src="https://flagcdn.com/ke.svg"
                    width="80"
                    alt="Kenyan" />
                    <p id='Kenyan'>Kenyan</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Kenyan' >
            </Button>

            <Button title={
                <div>
                    <img id='Malaysian' src="https://flagcdn.com/my.svg"
                    width="80"
                    alt="Malaysian" />
                    <p id='Malaysian'>Malaysian</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Malaysian' >
            </Button>

            <Button title={
                <div>
                    <img id='Mexican' src="https://flagcdn.com/mx.svg"
                    width="80"
                    alt="Mexican" />
                    <p id='Mexican'>Mexican</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Mexican' >
            </Button>

            <Button title={
                <div>
                    <img id='Moroccan' src="https://flagcdn.com/ma.svg"
                    width="80"
                    alt="Moroccan" />
                    <p id='Moroccan'>Moroccan</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Moroccan' >
            </Button>

            <Button title={
                <div>
                    <img id='Polish' src="https://flagcdn.com/pl.svg"
                    width="80"
                    alt="Polish" />
                    <p id='Polish'>Polish</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Polish' >
            </Button>

            <Button title={
                <div>
                    <img id='Portuguese' src="https://flagcdn.com/pt.svg"
                    width="80"
                    alt="Portuguese" />
                    <p id='Portuguese'>Portuguese</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Portuguese' >
            </Button>

            <Button title={
                <div>
                    <img id='Russian' src="https://flagcdn.com/ru.svg"
                    width="80"
                    alt="Russian" />
                    <p id='Russian'>Russian</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Russian' >
            </Button>

            <Button title={
                <div>
                    <img id='Spanish' src="https://flagcdn.com/es.svg"
                    width="80"
                    alt="Spanish" />
                    <p id='Spanish'>Spanish</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Spanish' >
            </Button>

            <Button title={
                <div>
                    <img id='Thai' src="https://flagcdn.com/th.svg"
                    width="80"
                    alt="Thai" />
                    <p id='Thai'>Thai</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Thai' >
            </Button>

            <Button title={
                <div>
                    <img id='Tunisian' src="https://flagcdn.com/tn.svg"
                    width="80"
                    alt="Tunisian" />
                    <p id='Tunisian'>Tunisian</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Tunisian' >
            </Button>

            <Button title={
                <div>
                    <img id='Turkish' src="https://flagcdn.com/tr.svg"
                    width="80"
                    alt="Turkish" />
                    <p id='Turkish'>Turkish</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Turkish' >
            </Button>

            <Button title={
                <div>
                    <img id='Vietnamese' src="https://flagcdn.com/vn.svg"
                    width="80"
                    alt="Vietnamese" />
                    <p id='Vietnamese'>Vietnamese</p>
                </div>
            } onClick={(e) => {clickHandle(e)}} id='Vietnamese' >
            </Button>

        </div>
    )
}

export default Country