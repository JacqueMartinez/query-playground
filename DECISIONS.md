# Decisiones del proyecto (Q&A)

## Por que usar una API mock en Next.js?

Para simular el backend con latencia y errores controlados, sin depender de servicios externos.

## Por que separar en network/data/domain/presentation?

Para mantener responsabilidades claras: transporte (network), acceso a datos (data), tipos (domain) y UI/estado (presentation).

## Por que usar un contexto para el playground?

Para centralizar estado compartido (query, dataset, historial, guardadas) y evitar prop drilling.

## Por que persistir en localStorage?

Para que la ultima consulta, dataset, historial y guardadas se mantengan entre sesiones.

## Por que un parser SQL basico en el mock?

Permite validar consultas simples (SELECT/FROM/WHERE) y devolver resultados coherentes sin un motor real.

## Por que preparar tokens de tema en CSS?

Facilita agregar modo claro/oscuro y mantener estilos consistentes desde variables.
