import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <h1>Usuários do Sistema</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <Profile
          nome="Mariana"
          idade={25}
          profissao="Desenvolvedora Front-end"
          foto="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <Profile
          nome="Carlos"
          idade={32}
          profissao="UX Designer"
          foto="https://randomuser.me/api/portraits/men/32.jpg"
        />

        <Profile
          nome="Juliana"
          idade={29}
          profissao="Product Manager"
          foto="https://randomuser.me/api/portraits/women/68.jpg"
        />
      </div>
    </div>
  );
}

export default App;