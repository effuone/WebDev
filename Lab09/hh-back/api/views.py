from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.core.serializers import serialize
import json

from .models import Company, Vacancy

@require_http_methods(["GET"])
def company_list(request):
    companies = Company.objects.all()
    data = json.loads(serialize('json', companies))
    return JsonResponse(data, safe=False)

@require_http_methods(["GET"])
def company_detail(request, id):
    company = get_object_or_404(Company, id=id)
    data = json.loads(serialize('json', [company]))[0]
    return JsonResponse(data, safe=False)

@require_http_methods(["GET"])
def company_vacancies(request, id):
    company = get_object_or_404(Company, id=id)
    vacancies = company.vacancies.all()
    data = json.loads(serialize('json', vacancies))
    return JsonResponse(data, safe=False)

@require_http_methods(["GET"])
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    data = json.loads(serialize('json', vacancies))
    return JsonResponse(data, safe=False)

@require_http_methods(["GET"])
def vacancy_detail(request, id):
    vacancy = get_object_or_404(Vacancy, id=id)
    data = json.loads(serialize('json', [vacancy]))[0]
    return JsonResponse(data, safe=False)

@require_http_methods(["GET"])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = json.loads(serialize('json', vacancies))
    return JsonResponse(data, safe=False)
