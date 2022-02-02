import Navbar from './navbar/navbar'

const layout = ({children}) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );
}

export default layout;