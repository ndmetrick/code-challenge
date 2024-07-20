from collections import OrderedDict


def test_api_parse_succeeds(client):
    address_string = '123 main st chicago il'
    response = client.get('/api/parse?input=' + address_string, follow=True)
    address_components = response.data['address_components']
    address_type = response.data['address_type']
    assert response.status_code == 200
    assert isinstance(address_components, OrderedDict)
    assert isinstance(address_type, str)


def test_api_parse_raises_error(client):
    address_string = '123 main st chicago il 123 main st'
    response = client.get('/api/parse?input=' + address_string, follow=True)
    assert response.status_code == 400
