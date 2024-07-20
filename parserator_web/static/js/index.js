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

  const componentsToDisplay = document.getElementById('address-components')
  componentsToDisplay.innerHTML = ''

  let addressComponentsHTML = ''

  for (const componentType in addressComponents) {
    addressComponentsHTML += '<tr>'
    addressComponentsHTML += '<td>' + addressComponents[componentType] + '</td>'
    addressComponentsHTML += '<td>' + componentType + '</td>'
    addressComponentsHTML += '</tr>'
  }
  componentsToDisplay.innerHTML = addressComponentsHTML

  document.getElementById('address-results').style.display = 'block'
  document.getElementById('parse-error').style.display = 'none'
}

const displayError = (error) => {
  const errorToDisplay = document.getElementById('error-text')
  errorToDisplay.innerHTML = error

  document.getElementById('address-results').style.display = 'none'
  document.getElementById('parse-error').style.display = 'block'
}
