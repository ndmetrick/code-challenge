/* eslint-disable strict */
document.addEventListener('DOMContentLoaded', function () {
  const addressForm = document.querySelector('.form')

  addressForm.addEventListener('submit', parseAddressInput)
})

const parseAddressInput = async (e) => {
  e.preventDefault()
  const input = document.getElementById('address').value

  try {
    const response = await fetch('/api/parse?input=' + encodeURIComponent(input))
    if (!response.ok) {
      throw new Error('Network error')
    } else {
      const jsonResponse = await response.json()
      console.log('what do we have', jsonResponse, 'd', response)
      const addressComponents = jsonResponse.address_components
      const addressType = jsonResponse.address_type
    }
  } catch (error) {
    console.log('error', error)

  }
}





/* eslint-disable strict */
