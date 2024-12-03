// script.js
document.getElementById('btn1').addEventListener('click', function() {
    displayImpact(
      "Postagens pessoais podem ser extremamente positivas e inspiradoras. Quando compartilhamos nossas conquistas, reflexões ou momentos felizes, podemos motivar outras pessoas. No entanto, é importante ser cauteloso ao compartilhar informações pessoais. Às vezes, uma foto ou frase, mesmo com boas intenções, pode ser mal interpretada ou causar desconforto em alguém. Lembre-se de que suas palavras e imagens têm impacto direto na percepção das pessoas sobre você e sobre o que você representa na comunidade.",
      "1.png"
    );
  });
  
  document.getElementById('btn2').addEventListener('click', function() {
    displayImpact(
      "Postagens profissionais têm um grande peso, pois estão diretamente relacionadas à sua imagem no mercado de trabalho. Ao compartilhar algo de sua profissão ou empresa, você está construindo uma reputação que pode ajudar ou prejudicar sua carreira. Por isso, é fundamental manter o tom ético e respeitoso, sempre buscando transmitir confiança e competência. As redes sociais se tornaram uma extensão do ambiente profissional, e suas ações online podem impactar diretamente no seu futuro profissional.",
      "redes-sociais.png"
    );
  });
  
  document.getElementById('btn3').addEventListener('click', function() {
    displayImpact(
      "O cyberbullying é um dos maiores problemas das redes sociais hoje em dia. Postagens de bullying, seja contra amigos, colegas de trabalho ou qualquer outra pessoa, causam dor, sofrimento e podem ter consequências devastadoras. Muitas vezes, as vítimas não sabem como se defender ou até mesmo como pedir ajuda. O impacto pode ser psicológico, emocional, e em casos extremos, afetar a saúde mental e até a vida das pessoas. O respeito online é essencial para garantir um ambiente seguro e acolhedor para todos.",
      "images.jpg"
    );
  });
  
  function displayImpact(message, image) {
    const resultDiv = document.getElementById('result');
    const impactMessage = document.getElementById('impactMessage');
    const impactImage = document.getElementById('impactImage');
    
    impactMessage.textContent = message;
    impactImage.src = image;
    resultDiv.style.display = 'block';
    
    // Resetando as reações
    document.getElementById('like').disabled = false;
    document.getElementById('dislike').disabled = false;
    document.getElementById('delete').disabled = false;
  }
  
  // Botões de Like, Deslike e Deletar
  document.getElementById('like').addEventListener('click', function() {
    alert('Você deu um like! Obrigado por sua opinião!');
  });
  
  document.getElementById('dislike').addEventListener('click', function() {
    alert('Você deu um deslike. Lembre-se de ser sempre respeitoso nas redes sociais!');
  });
  
  document.getElementById('delete').addEventListener('click', function() {
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'none';
    alert('A postagem foi deletada!');
  });
  