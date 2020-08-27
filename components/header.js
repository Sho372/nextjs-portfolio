import Menu from "./menu";

export default function Header() {
  return (
    <div className="header-wrapper">
      <Menu />
      <style jsx>{`
        .header-wrapper {
          margin: 1rem;
          padding: 3px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        @media (max-width: 600px) {
          .header-wrapper {
            display: block;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
