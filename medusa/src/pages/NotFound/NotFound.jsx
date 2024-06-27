import { useNavigate } from "react-router-dom";
import classes from "./index.module.css";
import { useEffect } from "react";

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);
  return (
    <div className={classes.notFound}>
      <h1>NOT FOUND</h1>
      <p>Returning to the shop page in 3 seconds.</p>
    </div>
  );
}

export default NotFound;
