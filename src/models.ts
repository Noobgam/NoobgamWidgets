export interface CalendarEvent {
    id: string;
    summary: string;
    status: string;
    start: {
        dateTime: string;
        timeZone: string;
    };
    end: {
        dateTime: string;
        timeZone: string;
    };
}
