import "../../styles/ProfileCSS.css";

function Profile({ nome, idade, profissao, foto }) {
  return (
    <div className="profile-card">
      <img src={foto} alt={nome} className="profile-image" />

      <div className="padding">
        <h2>{nome}</h2>
        <p>
          <strong>Idade:</strong> {idade} anos
        </p>
        <p>
          <strong>Profissão:</strong> {profissao}
        </p>
      </div>
    </div>
  );
}

export default Profile;