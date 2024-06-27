import classes from './index.module.css';
import images from '../../assets/images/index';
function Footer() {
  return (
    <footer className={classes.footer}>
      <img src={images.logo} alt="" />
    </footer>
  );
}
export default Footer;