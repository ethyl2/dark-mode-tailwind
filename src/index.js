const toggleBall = document.getElementById('toggle-ball')
window.addEventListener('load', () => {
    localStorage.theme = 'dark'
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      toggleBall.style.left = '65px'
    } else {
      document.documentElement.classList.remove('dark')
      toggleBall.style.left = '5px'
    }
  })

const toggleButton = document.getElementById('mode-toggle')
toggleButton.addEventListener('click', () => {
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
    toggleBall.style.left = '5px'
  } else {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
    toggleBall.style.left = '65px'
  }
})

const toggleElement = document.getElementById('toggle-element')

toggleElement.addEventListener('click', () => {
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
    toggleBall.style.left = '5px'
  } else {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
    toggleBall.style.left = '65px'
  }
})