import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="#">
                    <img src="/Images/fb.png"/>
                </a>
                <a href="#">
                    <img src="/Images/tw.png"/>
                </a>
                <a href="#">
                    <img src="/Images/ig.png"/>
                </a>
            </div>
            <div className="footer-logo">
                <img src="/Images/logo.png"/>
            </div>
            <div className="footer-attribution">
                <span>Desenvolvido por Nícolas Peronica</span>
            </div>
        </footer>
    )
}

export default Footer