import "./style.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const nav = useNavigate();
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="my_bg p-2">
      <div className="text-center">
        <p className="btn w-100 back_hover bg-info" onClick={() => nav(-1)}>
          חזור
        </p>
      </div>
      <p className="info_text">
        M.A Digital - פיתוח אפליקציות ואתרים לעסקים / לכל מטרה, שיווק עסקים,
        עיצוב ובניית אתרים
      </p>
      <p className="copyright_text">
        Copyright reserved to Madigital.co.il @ {year}
      </p>
    </div>
  );
};

export default Footer;
