export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="copyright">
        © {new Date().getFullYear()} Shohei Mizuno
      </div>
      <style jsx>{`
      .footer-wrapper {
        width: 100%;
        text-align: center;
        margin-top: auto;
        padding: 20px 30px;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      .copyright {
        margin-bottom: 20px;
      }
    `}</style>
    </div>
  );
}
