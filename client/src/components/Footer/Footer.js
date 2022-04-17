import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={'wrapper max'}>
                <div className={classes.content}>
                    <div className={classes.infoBlock}>
                        <h3>Contact</h3>
                        <ul>
                            <li>+38(067)00-00-000</li>
                            <li>+38(097)00-00-000</li>
                            <li>+38(063)00-00-000</li>
                        </ul>
                    </div>
                    <div className={classes.infoBlock}>
                        <h3>Our shops</h3>
                        <ul>
                            <li><a target={'_blank'} href={'https://www.google.com/maps/place/Ocean+Plaza/@50.4124132,30.5201168,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf3960fff74d:0x324a5854eb3f1a2b!8m2!3d50.4124132!4d30.5223055'}>
                                Kiev, ul.Antonovicha 176</a></li>
                            <li><a target={'_blank'} href={'https://www.google.com/maps/place/Gulliver+-+Palats+Sport+Metro/@50.4387279,30.5209839,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cefe0307e81f:0x1f234c3b0a0b492!8m2!3d50.4387279!4d30.5231726'}>
                                Kiev, Sport Square 1A</a></li>
                        </ul>
                    </div>
                    <div className={classes.infoBlock}>
                        <h3>Social Media</h3>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>YouTube</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
