import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"
import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// data atual para input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
// carrega a data atual
selectedDate.value = inputToday
//define a data mínima como atual
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    const name = clientName.value.trim()

    if (!name) {
      return alert("Informe o nome do cliente")
    }

    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Selecione um Horário")
    }

    const [hour] = hourSelected.innerText.split(":")

    const when = dayjs(selectedDate.value).add(hour, "hour")

    const id = new Date().getTime()

    await scheduleNew({
      id,
      name,
      when,
    })

    // Recarregar os agendamentos.

    await schedulesDay()

    clientName.value = ""

  } catch (error) {
    alert("Não foi possível realizar o agendamento")
    console.log(error)
  }

}
