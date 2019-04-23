import React from 'react'
import {render, cleanup} from 'react-testing-library';

import HomePage from '../HomePage';

afterEach(cleanup);

test('renders HomePage', () => {
   // render robi gleboki rendering
   // nazwa komponentu w pliku komponentu nie ma znaczenia
   // nazwa podana tutaj w return nie ma znaczenia
   // ten test sprawdza czy pod sciezka podana pod nazwa HomePage (../HomePage) w imporcie znajduje sie komponent
   
   render(<HomePage />)
})
