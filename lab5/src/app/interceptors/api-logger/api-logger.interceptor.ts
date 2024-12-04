import { HttpInterceptorFn } from '@angular/common/http';

export const apiLoggerInterceptor: HttpInterceptorFn = (request, next) => {
  console.log(`Making request to: ${request.url}`);
  return next(request); // Передаём запрос дальше в цепочке
};
