import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImgNaves from '../../assets/nave.png'
import './styles.css'


const EspacioNaves = () => {
    const [page, setPage] = useState(1)
    const [countEspacioNaves, setCountEspacioNaves] = useState(0)
    const [espacioNaves, setEspacioNaves] = useState([])
    const [pilotos, setPilotos] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/?page=${page}`).then(response => {
            const contagem = response.data.count
            const naves = response.data.results

            setCountEspacioNaves(contagem)
            setEspacioNaves(naves)

            //pagina
            response.data.next === null ?
                document.getElementById('btnNext').style.display = 'none' :
                document.getElementById('btnNext').style.display = 'block'

            response.data.previous === null ?
                document.getElementById('btnPrevious').style.display = 'none' :
                document.getElementById('btnPrevious').style.display = 'block'
        })
    }, [page])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=${page}`).then(response => {
            const pilotos = response.data.results
            const nomePilotos = pilotos.map(piloto => piloto.name)
            setPilotos(nomePilotos)
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
                <h1>TOTAL STARSHIPS: {countEspacioNaves}</h1>
                <img src={ImgNaves} alt="Imagem Espaço-Nave" />
            </div>

            <div id="content">
                {espacioNaves.map(espacioNaves => (
                    <div className="card-naves" key={espacioNaves.name}>
                        <h2>{espacioNaves.name}</h2>
                        <span>Model: {espacioNaves.model}</span>
                        <span>Manufacturer: {espacioNaves.manufacturer}</span>
                        <span>Cost in Credits: {espacioNaves.cost_in_credits}</span>
                        <span>Length: {espacioNaves.length}</span>
                        <span>max_atmosphering_speed: {espacioNaves.max_atmosphering_speed}</span>
                        <span>Crew: {espacioNaves.crew}</span>
                        <span>Passengers: {espacioNaves.passengers}</span>
                        <span>Cargo Capacity: {espacioNaves.cargo_capacity}</span>
                        <span>Consumables: {espacioNaves.consumables}</span>
                        <span>Hyperdrive Rating: {espacioNaves.hyperdrive_rating}</span>
                        <span>MGLT: {espacioNaves.MGLT}</span>
                        <span>Starship Class: {espacioNaves.starship_class}</span>
                        <span>Pilots: {
                            pilotos[String(espacioNaves.pilots[0]).substr(28, 3).replace('/', '') - 1]
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

export default EspacioNaves