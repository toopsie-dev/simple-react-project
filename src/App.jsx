import RootLayout from './shared/components/layouts/RootLayout'
import CarsLayout from './shared/components/layouts/CarsLayout'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import CarsPage from './pages/cars'
import CarPage from './pages/car'
import AddCarPage from './pages/AddCar'
import NotFoundPage from './pages/NotFound'

const App = () => {
  return (
		<Routes>
			<Route element={<RootLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/cars" element={<CarsPage />} />

				<Route element={<CarsLayout />}>
					<Route path="/cars/:id" element={<CarPage />} />
					<Route path="/cars/add" element={<AddCarPage />} />
				</Route>
				
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
  )
}

export default App
