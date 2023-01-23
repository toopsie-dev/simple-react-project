import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="cars-main">
			<p>This is main cars page.</p>
			<Outlet />
			<p>This is cars page footer.</p>
		</div>
  )
}

export default RootLayout
