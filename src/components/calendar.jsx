import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { parse, format } from 'date-fns';

const CalendarComponent = ({ eventos }) => {
  // Obtener solo las fechas de los eventos y parsearlas a objetos Date
  const fechasMarcadas = eventos.map(evento => parse(evento.fechaHora, 'yyyy-MM-dd HH:mm', new Date()));

  // Función para formatear las fechas para mostrar en el tooltip
  const formatTooltipDate = (date) => {
    return format(date, 'dd/MM/yyyy HH:mm');
  };

  return (
    <div>
      <Calendar
        tileContent={({ date }) => {
          // Comprobar si la fecha actual está en las fechas marcadas
          const fechaMarcada = fechasMarcadas.find(fecha => format(fecha, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));
          if (fechaMarcada) {
            // Obtener el evento correspondiente a esta fecha
            const evento = eventos.find(evento => format(parse(evento.fechaHora, 'yyyy-MM-dd HH:mm', new Date()), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));
            return (
              <div>
                <span title={formatTooltipDate(fechaMarcada)} style={{ fontWeight: 'bold', color: 'green', display: 'block', textAlign: 'center' }}>
                  • {evento.nombreLugar}
                </span>
              </div>
            );
          }
          return null;
        }}
      />
    </div>
  );
};

export default CalendarComponent;
