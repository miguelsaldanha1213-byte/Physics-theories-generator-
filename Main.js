async function generatePhysicsTheory(topic) {
  const prompt = `Aja como um físico teórico e explique a seguinte teoria ou conceito de forma detalhada: ${topic}`;
  
  try {
    const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}`);
    if (!response.ok) throw new Error("Erro na rede");
    
    const theoryText = await response.text();
    return theoryText;
  } catch (error) {
    console.error("Erro ao acessar Pollinations:", error);
    return "Não foi possível gerar a teoria no momento.";
  }
}
