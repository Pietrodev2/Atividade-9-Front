const Contact = () => {
  return (
    <div
      style={{
        padding: "10px",
        textAlign: "left", // Alinha o texto à esquerda
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Alinha o conteúdo ao topo
        height: "100vh", // Altura total da tela
        marginRight: "600px", // Sem margem à esquerda, escostando na borda
        marginTop: "50px", // Adiciona um espaço em cima
      }}
    >
      <h1>Quer contratar o GOAT?</h1>
      <p>Manda mensagem no uatizapi</p>
      <p>NAO MANDAR AUDIO</p>
      <p>FAVOR NAO LIGAR PARA O PAI</p>
      <p>SE LIGAR FAVOR SER PARA ME CONVIDAR PARA O HAPPY HOUR</p>
      <p>BEBER CAIR E LEVANTAR</p>
    </div>
  );
};
export default Contact;
