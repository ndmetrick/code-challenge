/* eslint-disable strict */
document.addEventListener('DOMContentLoaded', function () {
  const addressForm = document.querySelector('.form')

  addressForm.addEventListener('submit', async (e) => {
    try {
      const results = await parseAddressInput(e)
      displayResults(results)
    } catch (error) {
      displayError(error.message)
    }
  })
})

const parseAddressInput = async (e) => {
  e.preventDefault()
  const input = document.getElementById('address').value
  try {
    const response = await fetch('/api/parse?input=' + encodeURIComponent(input))
    if (!response.ok) {
      const errorResponse = await response.json()
      throw new Error(errorResponse.detail)
    } else {
      const jsonResponse = await response.json()
      return jsonResponse
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

const displayResults = (response) => {
  const addressComponents = response.address_components
  const addressType = response.address_type

  document.getElementById('parse-type').innerHTML = addressType

  const addressComponentsTable = document.getElementById('address-components')
  addressComponentsTable.innerHTML = ''

  for (const componentType in addressComponents) {
    const row = addressComponentsTable.insertRow()
    const addressPart = row.insertCell(0)
    const tag = row.insertCell(1)
    addressPart.innerHTML = addressComponents[componentType]
    tag.innerHTML = componentType
  }

  document.getElementById('address-results').style.display = 'block'
  document.getElementById('parse-error').style.display = 'none'
}

const displayError = (error) => {
  const errorToDisplay = document.getElementById('error-text')
  errorToDisplay.innerHTML = error

  document.getElementById('address-results').style.display = 'none'
  document.getElementById('parse-error').style.display = 'block'
}
