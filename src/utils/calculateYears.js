// Función para calcular los años desde el 1 de enero de 2017
export const calculateYearsSince2017 = () => {
    const startDate = new Date('2017-01-01');
    const currentDate = new Date();
    
    // Calcular la diferencia en años
    let years = currentDate.getFullYear() - startDate.getFullYear();
    
    // Ajustar si aún no hemos llegado al mes/día del año actual
    const monthDay = currentDate.getMonth() * 100 + currentDate.getDate();
    const startMonthDay = startDate.getMonth() * 100 + startDate.getDate();
    
    if (monthDay < startMonthDay) {
        years--;
    }
    
    return years;
};