import { apiConfig } from "./api-config"

export async function scheduleNew(id, name, when) {
  try {
    // Faz a requisição para enviar os dados do agendamento.
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    })

    alert("Agendamento realizado com sucesso!")
  } catch (error) {
    console.log(error)
    alert("não foi possívrl agendar. tente novamente mais tarde.")
  }
}
