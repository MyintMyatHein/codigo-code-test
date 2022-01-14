import workStyles from '../styles/work.module.scss'


function Footer (props) {
    return (
        <footer className={workStyles.workFooter}>
            <div className={workStyles.socialIconContainer}>
                <img src="https://www.codigo.co/img/icons/social-facebook.svg" alt="facebook" />
                <img src="https://www.codigo.co/img/icons/social-twitter.svg" alt="twitter" />
                <img src="https://www.codigo.co/img/icons/social-instagram.svg" alt="instagram" />
                <img src="https://www.codigo.co/img/icons/social-linkedIn.svg" alt="linkedin" />
            </div>
            <div className={workStyles.footerAddress}>Copyright © Codigo - Mobile App Developer Singapore</div>
            <div className={workStyles.footerAddress}>+65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970</div>
        </footer>
    )
}

export default Footer