import React, {useState} from 'react';
import Button from "../Button";
import Header from "./Header";

const Preferences = ({name}) => {

    const [action, setAction] = useState(false);
    const [comedy, setComedy] = useState(false);
    const [adventure, setAdventure] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [horror, setHorror] = useState(false);
    const [crime, setCrime] = useState(false);
    const [doc, setDoc] = useState(false);
    const [family, setFamily] = useState(false);
    const [fantasy, setFantasy] = useState(false);
    const [history, setHistory] = useState(false);
    const [music, setMusic] = useState(false);
    const [romance, setRomance] = useState(false);
    const [mystery, setMystery] = useState(false);
    const [sciFi, setSciFi] = useState(false);
    const [tvMovie, setTvMovie] = useState(false);
    const [thriller, setThriller] = useState(false);
    const [war, setWar] = useState(false);
    const [western, setWestern] = useState(false);

    const styleTrue = {
        backgroundColor: "#16BFFD",
        color: "#fff",
        transition: "0.5s"
    }

    return (
        <div className="page">
            <Header/>
            <div className="container">
                <div className="preferences_box">
                    <h1>Hello, {name}</h1>
                    <h3>Tell Us more About You</h3>
                    <h2>Which movie's categories do you prefer?</h2>
                    <div className="category_box">
                        <div className="category" onClick={e => setAction(prevState => !prevState)}
                             style={action ? styleTrue : undefined}>Action
                        </div>
                        <div className="category" onClick={e => setComedy(prevState => !prevState)}
                             style={comedy ? styleTrue : undefined}>Comedy
                        </div>
                        <div className="category" onClick={e => setAdventure(prevState => !prevState)}
                             style={adventure ? styleTrue : undefined}>Adventure
                        </div>
                    </div>
                    <div className="category_box">
                        <div className="category" onClick={e => setAnimation(prevState => !prevState)}
                             style={animation ? styleTrue : undefined}>Animation
                        </div>
                        <div className="category" onClick={e => setHorror(prevState => !prevState)}
                             style={horror ? styleTrue : undefined}>Horror
                        </div>
                        <div className="category" onClick={e => setCrime(prevState => !prevState)}
                             style={crime ? styleTrue : undefined}>Crime
                        </div>
                    </div>
                    <div className="category_box">
                        <div className="category" onClick={e => setDoc(prevState => !prevState)}
                             style={doc ? styleTrue : undefined}>Documentary
                        </div>
                        <div className="category" onClick={e => setFamily(prevState => !prevState)}
                             style={family ? styleTrue : undefined}>Family
                        </div>
                        <div className="category" onClick={e => setFantasy(prevState => !prevState)}
                             style={fantasy ? styleTrue : undefined}>Fantasy
                        </div>
                    </div>
                    <div className="category_box">
                        <div className="category" onClick={e => setHistory(prevState => !prevState)}
                             style={history ? styleTrue : undefined}>History
                        </div>
                        <div className="category" onClick={e => setMusic(prevState => !prevState)}
                             style={music ? styleTrue : undefined}>Music
                        </div>
                        <div className="category" onClick={e => setRomance(prevState => !prevState)}
                             style={romance ? styleTrue : undefined}>Romance
                        </div>
                    </div>
                    <div className="category_box">
                        <div className="category" onClick={e => setMystery(prevState => !prevState)}
                             style={mystery ? styleTrue : undefined}>Mystery
                        </div>
                        <div className="category" onClick={e => setSciFi(prevState => !prevState)}
                             style={sciFi ? styleTrue : undefined}>Sci-Fi
                        </div>
                        <div className="category" onClick={e => setTvMovie(prevState => !prevState)}
                             style={tvMovie ? styleTrue : undefined}>TV Movie
                        </div>
                    </div>
                    <div className="category_box">
                        <div className="category" onClick={e => setThriller(prevState => !prevState)}
                             style={thriller ? styleTrue : undefined}>Thriller
                        </div>
                        <div className="category" onClick={e => setWar(prevState => !prevState)}
                             style={war ? styleTrue : undefined}>War
                        </div>
                        <div className="category" onClick={e => setWestern(prevState => !prevState)}
                             style={western ? styleTrue : undefined}>Western
                        </div>
                    </div>
                    <form>
                        <Button btnType="btn btn-primary-small" text="Done"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Preferences;