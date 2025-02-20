const helpers = {
    // @ts-expect-error: error handling friendly date
    friendlyDate: function (a) {
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const day = days[a.getDay()];
        const date = a.getDate();
        const hour = a.getHours();
        const min = a.getMinutes();
        const sec = a.getSeconds();
        const time_friendly = this.getTime(a);
        const time = {
            day: day,
            date: date,
            month: month,
            year: year,
            hour: hour,
            min: min,
            sec: sec,
            time_friendly: time_friendly,
        };
        return time;
    },
    // @ts-expect-error : error handeling time
    getTime: function (date) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        const adjustedHours = hours % 12;
        const displayHours = adjustedHours ? adjustedHours : 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const strTime = displayHours + ':' + formattedMinutes + ampm;
        return strTime;
    },
    // @ts-expect-error : error handleing converting string to date
    stringToFriendlyDate: function (date_string) {
        const date = helpers.friendlyDate(new Date(date_string));
        const friendly_date = `${date.month} ${date.date}, ${date.year}`;
        return friendly_date;
    },
};

export default helpers;