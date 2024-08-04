import usaddress
from django.views.generic import TemplateView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.exceptions import ParseError


class Home(TemplateView):

    template_name = 'parserator_web/index.html'


class AddressParse(APIView):

    renderer_classes = [JSONRenderer]

    def get(self, request):
        input_string = request.GET.get('input', '')
        try:
            parsed_address = self.parse(input_string)
        except ParseError as e:
            raise ParseError(e)
        address_components, address_type = parsed_address
        return Response({'input_string': input_string,
                         'address_components': address_components,
                         'address_type': address_type})

    def parse(self, address):
        try:
            address_components, address_type = usaddress.tag(address)

        except usaddress.RepeatedLabelError as e:
            error = (
                'Unable to parse this value due to repeated labels. '
                'Our team has been notified of the error.')
            raise ParseError(error, e)

        return address_components, address_type
