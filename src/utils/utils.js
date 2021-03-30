export const formatTime = (date, format) => {
    const dtFormat = new Intl.DateTimeFormat('pt-BR', {
        // timeZone: 'UTC',
        ...format
    });

    return dtFormat.format(new Date(date * 1e3));
}

export const formatMonthDay = { month: 'short', day: '2-digit' }

export const formatComplete = { hour: 'short', weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', }

export const extractTemperature = (daily) => daily?.map(({ temp: { day } }) => day)

export default formatTime