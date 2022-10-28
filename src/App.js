import { Routes, Route } from 'react-router-dom';

import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';

import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
// import Invoices from './scenes/invoices';
// import Contacts from './scenes/contacts';
// import Bar from './scenes/bar';
// import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geography';
// import Calendar from './scenes/calendar';

import { ColorModeContext, useMode } from './theme';

// CssBaseline is going to reset our CSS to its defaults that we'll probably need
// ThemeProvider is going to provide the ability to pass in the themes into material UI
import { CssBaseline, ThemeProvider } from '@mui/material'

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />     {/* Reset CSS to its defaults */}
                <div className="app">
                    <Sidebar />
                    <main className='content'>
                        <Topbar />

                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            {/* <Route path="/invoices" element={<Invoices />} /> */}
                            {/* <Route path="/contacts" element={<Contacts />} /> */}
                            {/* <Route path="/bar" element={<Bar />} /> */}
                            {/* <Route path="/form" element={<Form />} /> */}
                            {/* <Route path="/line" element={<Line />} /> */}
                            {/* <Route path="/pie" element={<Pie />} /> */}
                            {/* <Route path="/faq" element={<FAQ />} /> */}
                            {/* <Route path="/geography" element={<Geography />} /> */}
                            {/* <Route path="/calendar" element={<Calendar />} /> */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
