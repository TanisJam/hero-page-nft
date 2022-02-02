const button = ({ children, outlined }) => {
  return (
    <>
      <button className={outlined && 'outlined'}>{children}</button>
      <style jsx>
        {`
          button {
            border: none;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            font-weight: 600;
            padding: 0.5rem 1rem;
            background: linear-gradient(
              180deg,
              rgba(156, 93, 217, 1) 30%,
              rgba(124, 51, 216, 1) 100%
            );
            background-repeat: repeat;
            background-size: 200% 200%;
            background-position: 150% 100%;
            transition: all 0.2s ease-in-out;
          }
          button:hover {
            background-position: 0% 0%;

          }
          .outlined {
            background: transparent;
            outline: 1px solid hsla(0, 0%, 100%, 0.5);
          }
          .outlined:hover {
            outline: 1px solid hsla(0, 0%, 100%, 0.8);
            background: hsla(0, 0%, 100%, 0.1);
          }
        `}
      </style>
    </>
  );
};

export default button;
