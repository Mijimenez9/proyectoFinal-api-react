import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImgPersonaje from '../../assets/stormtrooper.png'
import './styles.css'


const Home = () => {
    const [personajes, setPersonajes] = useState([])
    const [countPersonajes, setCountPersonajes] = useState(0)
    const [page, setPage] = useState(1)
    const [especies, setEspecies] = useState([])
    const [planetaNatal, setPlanetaNatal] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=${page}`).then(response => {
            const contagem = response.data.count
            const personajes = response.data.results

            setCountPersonajes(contagem)
            setPersonajes(personajes)

            // pagina
            response.data.next === null ?
                document.getElementById('btnNext').style.display = 'none' :
                document.getElementById('btnNext').style.display = 'block'

            response.data.previous === null ?
                document.getElementById('btnPrevious').style.display = 'none' :
                document.getElementById('btnPrevious').style.display = 'block'

        })
    }, [page])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/?page=${page}`).then(response => {
            const especies = response.data.results
            const nomeEspecies = especies.map(specie => specie.name)
            setEspecies(nomeEspecies)
        })
    }, [page])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/?page=${page}`).then(response => {
            const planetas = response.data.results
            const nomePlanetas = planetas.map(planeta => planeta.name)
            setPlanetaNatal(nomePlanetas)

        })
    }, [page])

    function handleNextPage() {
        const currentPage = page + 1
        setPage(currentPage)
    }

    function handlePreviousPage() {
        const currentPage = page - 1
        setPage(currentPage)
    }

    return (
        <div id="main">
            <Header />

            <div className="count">
                <h1>TOTAL CHARACTERS: {countPersonajes}</h1>
                <img src={ImgPersonaje} alt="Imagem Personaje" />
            </div>

            <div id="content">
                {personajes.map(personajes => (
                    <div className="card-personaje" key={personajes.name}>
                        <h2>{personajes.name}</h2>
                        <span>Height: {personajes.height / 100} m</span>
                        <span>Mass: {personajes.mass} kg</span>
                        <span>Hair Color: {personajes.hair_color}</span>
                        <span>Skin Color: {personajes.skin_color}</span>
                        <span>Eye Color: {personajes.eye_color}</span>
                        <span>Birth Year: {personajes.birth_year}</span>
                        <span>Gender: {personajes.gender}</span>
                        <span>Species: {
                            especies[String(personajes.species[0]).substr(29, 3).replace('/', '') - 1]
                        }</span>
                        <span>Homeworld: {
                            planetaNatal[String(personajes.homeworld).substr(29, 3).replace('/', '') - 1]
                        }</span>
                    </div>
                ))}

            </div>
            <div className="navigation-page">
                <button id="btnPrevious" onClick={handlePreviousPage}><FaArrowCircleLeft />PREVIOUS PAGE</button>

                <button id="btnNext" onClick={handleNextPage}>NEXT PAGE<FaArrowCircleRight /></button>
            </div>
            <Footer />
        </div>
    )
}

export default Home