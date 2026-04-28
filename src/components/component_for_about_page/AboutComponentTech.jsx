import { FaServer ,FaDatabase } from "react-icons/fa";
import './about-component-tech.css'

function AboutComponentTech({items}) {

  const iconMap = {
    DATABASE : <FaDatabase size={25} color="#78BD76" />,
    RUNTIME : <FaServer size={25} color="#6BC664" />
  }
  return (
    <>
        <div className="db-used">
          {iconMap[items.nameOfRole]}
          <div className="technoloy-used-details">
            <p className="name-of-role">{items.nameOfRole}</p>
            <p className="language-of-role">{items.roleFlavor}</p>
          </div>
        </div>
    </>
  );
}

export default AboutComponentTech;
