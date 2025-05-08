import GlobalStyle from './styles/GlobalStyle';
import Router from './routes/Router';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	);
}
