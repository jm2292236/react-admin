import { multiplyDuration } from '@fullcalendar/core';
import { ColorModeContext, useMode } from './theme';

// CssBaseline is going to reset our CSS to its defaults that we'll probably need
// ThemeProvider is going to provide the ability to pass in the themes into material UI
import { CssBaseline, ThemeProvider } from '@mui/material'

import Topbar from './scenes/global/Topbar';

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />     {/* Reset CSS to its defaults */}
                <div className="app">
                    <main className='content'>
                        <Topbar />
                        This is the React Admin Dashboard
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
