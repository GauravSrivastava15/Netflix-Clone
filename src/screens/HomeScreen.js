import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Baner from '../components/Baner'
import Row from '../components/Row'
import requests from '../request'

const HomeScreen = () => {
  return (
    <div className=''>
        <Banner />
        <Navbar />
        <Row
            title='NETFLIX ORIGINALS'
            fetchUrl = {requests.fetchNetflixOriginal}
            isLargeRow = {true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries}/>
        
        
        
    </div>
  )
}

export default HomeScreen