import { Outlet } from "react-router-dom";

function Home({categories,filterByCategory}) {
    return (
      <div>
      <div>
        Home
      </div>
      <Outlet />
      </div>
    )
  }
  export default Home;