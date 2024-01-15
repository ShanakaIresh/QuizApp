const form = document.querySelector('form')
const mark = document.querySelector('.mark')

const correctAnswers = ['B', 'C', 'B', 'A', 'D']


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]
    let score = 0
    correctAnswers.forEach((ans, i) => {
        if (ans === answers[i]) {
            score += 20

        }
    })
    scrollTo(0, 0)
    let i = 0
    setInterval(() => {
        if (i <= score) {
            mark.textContent = `score=${i}`
            i += 1
        }
    }, 10)

})