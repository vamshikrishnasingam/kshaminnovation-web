import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";

function RouteLayout() {
  return (
    <div>
      <div className="content-container rot">
        <div>
          <NavigationBar />
        </div>
        <div className="page">
          <Outlet />
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default RouteLayout;
