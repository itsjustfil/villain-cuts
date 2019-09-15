import React from 'react';

// Components
import Header from './components/Logo.component';
import Main from './components/Main.component';
import InfoCards from './components/InfoCards.component';
import Footer from './components/Footer.component';

function App() {
    return (
        <div className='container'>
            <Header />
            <Main />
            <InfoCards />
            <Footer />
        </div>
    );
}

export default App;
